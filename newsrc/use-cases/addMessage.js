"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildAddMessage;

var _entity = _interopRequireDefault(require("../entity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildAddMessage({
  messageDB
}) {
  return async function addMessage({ ...messageInfo
  }) {
    const message = (0, _entity.default)(messageInfo);
    const exists = await messageDB.findById({
      id: message.getId()
    });

    if (exists) {
      return exists;
    }

    const gotten = messageDB.insertMessage({
      name: message.getName(),
      category: message.getCategory(),
      speaker: message.getSpeaker(),
      id: message.getId(),
      messageUri: message.getMessageUri()
    });
    return gotten;
  };
}