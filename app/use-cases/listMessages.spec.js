"use strict";

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('list messages', () => {
  let messageDB;
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must list all messages', async () => {
    const messages = await messageDB.listMessages();
    expect(messages).toBeDefined();
  });
});