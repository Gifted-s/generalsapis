export default function buildListMessages ({ messageDB }) {
  return async function listMessages () {
    const messages = await messageDB.listMessages()
    return messages
  }
}
