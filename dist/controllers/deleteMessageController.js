"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildDeleteMessageController;

function buildDeleteMessageController({
  deleteMessage
}) {
  return async function deleteMessageController(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const id = httpRequest.params.id;
      const result = await deleteMessage({
        id
      });
      return {
        headers,
        status: 200,
        body: {
          deleted: result
        }
      };
    } catch (err) {
      console.log(err.message);
      return {
        headers,
        status: 400,
        body: {
          deleteFailed: err.message
        }
      };
    }
  };
}