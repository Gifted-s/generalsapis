"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildListMessages;

function buildListMessages({
  messageDB
}) {
  return async function listMessages() {
    const messages = await messageDB.listMessages();
    return messages;
  };
}