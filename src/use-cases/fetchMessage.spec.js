import makeMessageDB from '../db/messageDB'
import makeFakeMessage from '../../_test_/fixtures/fakeMessage'
import makeTestDB from '../../_test_/fixtures/db'
import createFetchMessage from './fetchMessage'
import todaysDate from '../../Gifted-Date/Gifted-Date'

describe('Find message by is', () => {
  let messageDB
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })
  it('must have an id', () => {
    const messageToFetch = makeFakeMessage({ id: undefined })
    const fetchMessage = createFetchMessage({
      messageDB: {
        findById: () => {
          throw new Error('This Function should not be called without an Id passed ')
        }
      }
    })
    expect(fetchMessage(messageToFetch)).rejects.toThrow('Please enter the id of the message')
  })

  it('handles unknown id passed to DB', () => {
    const messageToFetch = makeFakeMessage()
    const fetchMessage = createFetchMessage({ messageDB })
    expect(fetchMessage({ id: messageToFetch.id })).rejects.toThrow('No message with this id')
  })

  it('handles message found', async () => {
    const messageToInsert = makeFakeMessage()
    const insertedMessage = await messageDB.insertMessage(messageToInsert)
    const fetchMessage = createFetchMessage({ messageDB })
    const findMessage = await fetchMessage(messageToInsert)
    expect(findMessage).toMatchObject(insertedMessage)
    return messageDB.deleteMessage(messageToInsert)
  })
})
