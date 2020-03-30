"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMakeMessage;

function buildMakeMessage() {
  return function makeMessage({
    id = String(Math.random()),
    name,
    category,
    speaker,
    messageUri
  } = {}) {
    if (!name) {
      throw new Error('Please enter the name or title of the message');
    }

    if (!messageUri) {
      throw new Error('Message must have a source or uri (firebase), e.g http://firebase.gs.joshuaselman.com');
    }

    if (!id) {
      throw new Error('Please enter the unique identifier of the message');
    }

    if (name.length < 2) {
      throw new Error('The title of the message is too short');
    }

    if (!category) {
      throw new Error('Message must have a category, please enter the category, e.g Spiritual');
    }

    if (category.length < 2) {
      throw new Error('The category name is too short');
    }

    if (!speaker) {
      throw new Error('Message must have a speaker, please enter the speaker, e.g Myles Monroe');
    }

    if (speaker.length < 2) {
      throw new Error('The speaker name is too short');
    }

    return Object.freeze({
      getName: () => name,
      getSpeaker: () => speaker,
      getCategory: () => category,
      getId: () => id,
      getMessageUri: () => messageUri
    });
  };
}