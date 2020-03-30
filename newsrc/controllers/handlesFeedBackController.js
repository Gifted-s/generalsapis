"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHandlesFeedBackMessageController;

function makeHandlesFeedBackMessageController({
  handlesFeedback
}) {
  return async function handlesFeedBackController(httpRequest) {
    const feedbackBody = httpRequest.body;
    console.log(feedbackBody);
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const feedBackresult = await handlesFeedback(feedbackBody);
      return {
        headers,
        status: 200,
        body: {
          feedBackresult
        }
      };
    } catch (err) {
      console.log(err.message);
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