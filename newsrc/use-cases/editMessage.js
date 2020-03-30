"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEditMessage;

var _entity = _interopRequireDefault(require("../entity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createEditMessage({
  messageDB
}) {
  return async function editMessage({
    id,
    ...changes
  }) {
    if (!id) {
      throw new Error('No id was passed');
    }

    const exist = await messageDB.findById({
      id
    });
    const messageToChange = (0, _entity.default)({ ...exist,
      ...changes
    });

    if (!exist) {
      return new RangeError('No message with this id');
    }

    const updated = await messageDB.editMessage({
      id,
      name: messageToChange.getName(),
      category: messageToChange.getCategory(),
      speaker: messageToChange.getSpeaker()
    });
    return { ...exist,
      ...updated
    };
  };
}