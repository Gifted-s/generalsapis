"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildListMessagesController;

function buildListMessagesController({
  listMessages
}) {
  return async function listMessagesController(httpRequest) {
    const headers = {
      'Content-type': 'application/json'
    };

    try {
      const messages = await listMessages();
      return {
        headers,
        status: 200,
        body: {
          messages
        }
      };
    } catch (err) {
      console.log(err);
      return {
        headers,
        status: 400,
        body: {
          error: err.message
        }
      };
    }
  };
}