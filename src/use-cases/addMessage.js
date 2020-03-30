import makeMessage from '../entity'

export default function buildAddMessage ({ messageDB }) {
  return async function addMessage ({ ...messageInfo }) {
    const message = makeMessage(messageInfo)
    const exists = await messageDB.findById({ id: message.getId() })
    if (exists) {
      return exists
    }
    const gotten = messageDB.insertMessage({
      name: message.getName(),
      category: message.getCategory(),
      speaker: message.getSpeaker(),
      id: message.getId(),
      messageUri: message.getMessageUri()

    })
    return gotten
  }
}
