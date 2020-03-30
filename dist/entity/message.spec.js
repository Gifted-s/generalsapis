"use strict";

var _fakeMessage = _interopRequireDefault(require("../../_test_/fixtures/fakeMessage"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('message', () => {
  it('must have a name', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      name: null
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('Please enter the name of the message');
  });
  it('message name must be longer that 2 characters ', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      name: 'A'
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('The name of the message is too short');
  });
  it('must have a source ', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      messageUri: null
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('Message must have a source or uri, e.g http://mesage1.mp3');
  });
  it('must have a category', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      category: null
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('Message must have a category, please enter the category, e.g Spiritual');
  });
  it('message name must be shorter that 2 characters ', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      category: 'A'
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('The category name is too short');
  });
  it('must have a speaker', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      speaker: null
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('Message must have a speaker, please enter the speaker, e.g Myles Monroe');
  });
  it('speaker name must be shorter that 2 characters ', () => {
    const fakeMessage = (0, _fakeMessage.default)({
      speaker: 'A'
    });
    expect(() => (0, _.default)(fakeMessage)).toThrow('The speaker name is too short');
  }); // it('message must have a unique id ', () => {
  //   const fakeMessage = makeFakeMessage({ id: null })
  //   expect(() => makeMessage(fakeMessage)).toThrow('message must have a unique id')
  // })
});