"use strict";

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

var _fakeMessage = _interopRequireDefault(require("../../_test_/fixtures/fakeMessage"));

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _fetchMessage = _interopRequireDefault(require("./fetchMessage"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Find message by is', () => {
  let messageDB;
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must have an id', () => {
    const messageToFetch = (0, _fakeMessage.default)({
      id: undefined
    });
    const fetchMessage = (0, _fetchMessage.default)({
      messageDB: {
        findById: () => {
          throw new Error('This Function should not be called without an Id passed ');
        }
      }
    });
    expect(fetchMessage(messageToFetch)).rejects.toThrow('Please enter the id of the message');
  });
  it('handles unknown id passed to DB', () => {
    const messageToFetch = (0, _fakeMessage.default)();
    const fetchMessage = (0, _fetchMessage.default)({
      messageDB
    });
    expect(fetchMessage({
      id: messageToFetch.id
    })).rejects.toThrow('No message with this id');
  });
  it('handles message found', async () => {
    const messageToInsert = (0, _fakeMessage.default)();
    const insertedMessage = await messageDB.insertMessage(messageToInsert);
    const fetchMessage = (0, _fetchMessage.default)({
      messageDB
    });
    const findMessage = await fetchMessage(messageToInsert);
    expect(findMessage).toMatchObject(insertedMessage);
    return messageDB.deleteMessage(messageToInsert);
  });
});