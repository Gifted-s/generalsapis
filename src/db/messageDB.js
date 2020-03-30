
export default function makeMessageDB ({ makeDB, date_Module }) {
  return Object.freeze({
    findById,
    deleteMessage,
    editMessage,
    insertMessage,
    listMessages

  })
  async function listMessages () {
    const db = await makeDB()
    const query = await db.collection('messages').find({})
    return query.toArray()
  }
  async function findById ({ id }) {
    const db = await makeDB()
    const query = await db.collection('messages').find({ id })
    const foundMessage = await query.toArray()
    if (foundMessage.length === 0) {
      return null
    }
    return foundMessage[0]
  }
  async function editMessage ({ id, ...messageChanges }) {
    const db = await makeDB()
    const query = await db.collection('messages').updateOne({ id }, { $set: { ...messageChanges } })
    return query.modifiedCount > 0 ? { id, ...messageChanges } : null
  }

  async function insertMessage ({ ...messageInfo }) {
    const db = await makeDB()
    const currentDate = date_Module.getFullDate()
    const query = await db.collection('messages').insertOne({ ...messageInfo, dateAdded: currentDate })
    const insertedMessage = await query.ops[0]
    return insertedMessage
  }

  async function deleteMessage ({ id }) {
    const db = await makeDB()
    const query = await db.collection('messages').deleteOne({ id })
    return query.deletedCount
  }
}
