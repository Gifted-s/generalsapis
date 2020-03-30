"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listMessages = exports.deleteMessage = exports.editMessage = exports.fetchMessage = exports.addMessage = exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _addMessage = _interopRequireDefault(require("./addMessage"));

var _fetchMessage = _interopRequireDefault(require("./fetchMessage"));

var _editMessage = _interopRequireDefault(require("./editMessage"));

var _deleteMessage = _interopRequireDefault(require("./deleteMessage"));

var _listMessages = _interopRequireDefault(require("./listMessages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addMessage = (0, _addMessage.default)({
  messageDB: _db.default
});
exports.addMessage = addMessage;
const listMessages = (0, _listMessages.default)({
  messageDB: _db.default
});
exports.listMessages = listMessages;
const fetchMessage = (0, _fetchMessage.default)({
  messageDB: _db.default
});
exports.fetchMessage = fetchMessage;
const editMessage = (0, _editMessage.default)({
  messageDB: _db.default
});
exports.editMessage = editMessage;
const deleteMessage = (0, _deleteMessage.default)({
  messageDB: _db.default
});
exports.deleteMessage = deleteMessage;
const Services = Object.freeze({
  addMessage,
  fetchMessage,
  deleteMessage,
  editMessage,
  listMessages
});
var _default = Services;
exports.default = _default;