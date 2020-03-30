import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

let connection; let db; let uri = 'mongodb://127.0.0.1:27017'

export default async function makeTestDB () {
  connection = connection || (
    await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  )
  db = db || await connection.db('MessageTest')
  return db
}

export async function closeConnection () {
  await connection.close()
  await db.close()
}

export async function clearDB () {
  await db.collection('messages').deleteMany({})
}
