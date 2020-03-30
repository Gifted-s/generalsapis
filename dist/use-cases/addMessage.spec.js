"use strict";

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _fakeMessage = _interopRequireDefault(require("../../_test_/fixtures/fakeMessage"));

var _addMessage = _interopRequireDefault(require("./addMessage"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let messageDB;
describe('Insert a message', () => {
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must insert a message to the database ', async () => {
    const fakeMessage = (0, _fakeMessage.default)();
    const addMessage = (0, _addMessage.default)({
      messageDB
    });
    const insertedMessage = await addMessage({ ...fakeMessage
    });
    expect(insertedMessage).toMatchObject({ ...fakeMessage,
      _id: insertedMessage._id
    });
  });
  it('it is idempotent', async () => {
    const fakeMessage = (0, _fakeMessage.default)({
      id: undefined
    });
    const messageMaker = (0, _addMessage.default)({
      messageDB
    });
    const insertedMessage = await messageMaker({ ...fakeMessage
    });
    expect(insertedMessage.id).toBeDefined();
  });
});