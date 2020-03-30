"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDeleteMessage;

function createDeleteMessage({
  messageDB
}) {
  return async function deleteMessage({
    id
  }) {
    if (!id) {
      throw new Error('Please enter the id of the message');
    }

    const message = await messageDB.findById({
      id
    });

    if (!message) {
      return {
        deleted: 0,
        status: 'failure',
        message: 'no message with this id'
      };
    }

    const numberDeleted = await messageDB.deleteMessage({
      id
    });

    if (numberDeleted > 0) {
      return {
        deleted: 1,
        status: 'success',
        message: 'message deleted'
      };
    }

    throw new Error('An error occured while deleting this message');
  };
}