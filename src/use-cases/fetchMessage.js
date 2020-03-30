
export default function createFetchMessage ({ messageDB }) {
  return async function fetchMessage ({ id }) {
    if (!id) {
      throw new Error('Please enter the id of the message')
    }
    const message = await messageDB.findById({ id })
    if (message) {
      return message
    }
    throw new Error('No message with this id')
  }
}
