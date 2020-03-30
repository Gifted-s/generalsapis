"use strict";

var _db = _interopRequireDefault(require("../../_test_/fixtures/db"));

var _GiftedDate = _interopRequireDefault(require("../../Gifted-Date/Gifted-Date"));

var _handlesFeedBack = _interopRequireDefault(require("./handlesFeedBack"));

var _fakeMessage = require("../../_test_/fixtures/fakeMessage");

var _messageDB = _interopRequireDefault(require("../db/messageDB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let messageDB;
describe('feedback from client', () => {
  beforeAll(() => {
    messageDB = (0, _messageDB.default)({
      makeDB: _db.default,
      date_Module: _GiftedDate.default
    });
  });
  it('must contain a text', () => {
    const feedbackMessage = (0, _fakeMessage.makeFakeFeedbackMessage)({
      feedback: null
    });
    const handlesFeedBack = (0, _handlesFeedBack.default)({
      messageDB
    });
    expect(handlesFeedBack(feedbackMessage)).rejects.toThrow('Please enter a message');
  });
  it('must contain text greater than 4 characters', () => {
    const feedbackMessage = (0, _fakeMessage.makeFakeFeedbackMessage)({
      feedback: 'nic'
    });
    const handlesFeedBack = (0, _handlesFeedBack.default)({
      messageDB
    });
    expect(handlesFeedBack(feedbackMessage)).rejects.toThrow('Please enter a message that has more characters');
  });
  it('should submit text to database', async () => {
    // const feedbackMessage = makeFakeFeedbackMessage({ feedback: ` Joshua message Ado The app is nice but i want to add new feetures` })
    const handlesFeedBack = (0, _handlesFeedBack.default)({
      messageDB
    });
    const dataReport = await handlesFeedBack({
      feedback: 'I love this wonderfull app'
    });
    expect(dataReport).toMatchObject({
      feedback: 'I love this wonderfull app'
    });
  });
});