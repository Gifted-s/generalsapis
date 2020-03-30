"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHandlesMakeFeedBack;

function makeHandlesMakeFeedBack({
  messageDB
}) {
  return async function handlesFeedback({
    feedback
  }) {
    if (!feedback) {
      throw new Error('Please enter a message');
    }

    if (feedback.length < 5) {
      throw new Error('Please enter a message that has more characters');
    }

    const result = await messageDB.handlesFeedback({
      feedback
    });
    return result;
  };
}