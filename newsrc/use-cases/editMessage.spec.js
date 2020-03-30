"use strict";

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

var _fakeMessage = _interopRequireDefault(require("../../_test_/fixtures/fakeMessage"));

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _editMessage = _interopRequireDefault(require("./editMessage"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('edit message', () => {
  let messageDB;
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must have an id', async () => {
    const messageToEdit = (0, _fakeMessage.default)({
      id: undefined
    });
    const editMessage = (0, _editMessage.default)({
      messageDB: {
        update: () => {
          throw new Error(' update function should not have been called');
        }
      }
    });
    expect(editMessage({
      messageToEdit
    })).rejects.toThrow('No id was passed');
  });
  it('modifies a comment', async () => {
    const message = (0, _fakeMessage.default)();
    const editMessage = (0, _editMessage.default)({
      messageDB
    });
    const messageToEdit = await messageDB.insertMessage(message);
    const editedMessage = await editMessage({ ...messageToEdit,
      name: 'apostle joseph joshua'
    });
    expect(editedMessage.name).toBe('apostle joseph joshua');
    return messageDB.deleteMessage({
      id: editedMessage.id
    });
  });
});