import makeMessage from '../entity'

export default function createEditMessage ({ messageDB }) {
  return async function editMessage ({ id, ...changes }) {
    if (!id) {
      throw new Error('No id was passed')
    }
    const exist = await messageDB.findById({ id })
    const messageToChange = makeMessage({ ...exist, ...changes })

    if (!exist) {
      return new RangeError('No message with this id')
    }

    const updated = await messageDB.editMessage({
      id,
      name: messageToChange.getName(),
      category: messageToChange.getCategory(),
      speaker: messageToChange.getSpeaker()

    })

    return { ...exist, ...updated }
  }
}
