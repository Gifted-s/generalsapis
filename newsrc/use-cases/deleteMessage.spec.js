"use strict";

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _fakeMessage = _interopRequireDefault(require("../../_test_/fixtures/fakeMessage"));

var _deleteMessage = _interopRequireDefault(require("./deleteMessage"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('delete message', () => {
  let messageDB;
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must have an id', async () => {
    const messageToDelete = (0, _fakeMessage.default)({
      id: undefined
    });
    const deleteMessage = (0, _deleteMessage.default)({
      messageDB: {
        deleteMessage: () => new Error('You should not have called the function deleteMessage')
      }
    });
    expect(deleteMessage(messageToDelete)).rejects.toThrow('Please enter the id of the message');
  });
  it('handles message that was not found', async () => {
    const messageToDelete = (0, _fakeMessage.default)();
    const deleteMessage = (0, _deleteMessage.default)({
      messageDB
    });
    const result = await deleteMessage({
      id: messageToDelete.id
    });
    const expected = {
      deleted: 0,
      status: 'failure',
      message: 'no message with this id'
    };
    expect(result).toEqual(expected);
  });
  it('handles delete message that was found', async () => {
    const messageToDelete = (0, _fakeMessage.default)();
    const deleteMessage = (0, _deleteMessage.default)({
      messageDB
    });
    const insertedMessage = await messageDB.insertMessage(messageToDelete);
    const result = await deleteMessage({
      id: insertedMessage.id
    });
    const expected = {
      deleted: 1,
      status: 'success',
      message: 'message deleted'
    };
    expect(result).toEqual(expected);
  });
});