"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadMesageController = exports.editMessageController = exports.handlesFeedBackController = exports.putMessageController = exports.listMessagesController = exports.getMessageController = exports.deleteMessageController = exports.default = void 0;

var _deleteMessageController = _interopRequireDefault(require("./deleteMessageController"));

var _getMessageController = _interopRequireDefault(require("./getMessageController"));

var _editMessageController = _interopRequireDefault(require("./editMessageController"));

var _addMessageController = _interopRequireDefault(require("./addMessageController"));

var _useCases = _interopRequireDefault(require("../use-cases"));

var _listMessagesController = _interopRequireDefault(require("./listMessagesController"));

var _downloadMessageController = _interopRequireDefault(require("./downloadMessageController"));

var _handlesFeedBackController = _interopRequireDefault(require("./handlesFeedBackController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  addMessage,
  deleteMessage,
  editMessage,
  fetchMessage,
  handlesFeedbackMessage,
  listMessages
} = _useCases.default;
const listMessagesController = (0, _listMessagesController.default)({
  listMessages
});
exports.listMessagesController = listMessagesController;
const deleteMessageController = (0, _deleteMessageController.default)({
  deleteMessage
});
exports.deleteMessageController = deleteMessageController;
const getMessageController = (0, _getMessageController.default)({
  fetchMessage
});
exports.getMessageController = getMessageController;
const handlesFeedBackController = (0, _handlesFeedBackController.default)({
  handlesFeedback: handlesFeedbackMessage
});
exports.handlesFeedBackController = handlesFeedBackController;
const downloadMesageController = (0, _downloadMessageController.default)({
  fetchMessage
});
exports.downloadMesageController = downloadMesageController;
const editMessageController = (0, _editMessageController.default)({
  editMessage
});
exports.editMessageController = editMessageController;
const putMessageController = (0, _addMessageController.default)({
  addMessage
});
exports.putMessageController = putMessageController;
const Controller = Object.freeze({
  deleteMessageController,
  getMessageController,
  putMessageController,
  editMessageController,
  listMessagesController,
  downloadMesageController,
  handlesFeedBackController
});
var _default = Controller;
exports.default = _default;