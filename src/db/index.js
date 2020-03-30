import mongodb from 'mongodb'
import makeMessageDB from './messageDB'
import todaysDate from '../../Gifted-Date/Gifted-Date'
const url = process.env.DBURL
const name = process.env.DBNAME
const MongoClient = mongodb.MongoClient
const client = new MongoClient(url, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true })
export async function makeDB () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(name)
}

const messageDB = makeMessageDB({ makeDB, date_Module: todaysDate })
export default messageDB
