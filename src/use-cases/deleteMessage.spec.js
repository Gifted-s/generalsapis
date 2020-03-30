
import makeMessageDB from '../db/messageDB'
import makeTestDB from '../../_test_/fixtures/db'
import makeFakeMessage from '../../_test_/fixtures/fakeMessage'
import createDeleteMessage from './deleteMessage'
import todaysDate from '../../Gifted-Date/Gifted-Date'

describe('delete message', () => {
  let messageDB
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })

  it('must have an id', async () => {
    const messageToDelete = makeFakeMessage({ id: undefined })
    const deleteMessage = createDeleteMessage({ messageDB: {
      deleteMessage: () => new Error('You should not have called the function deleteMessage')
    } })
    expect(deleteMessage(messageToDelete)).rejects.toThrow('Please enter the id of the message')
  })
  it('handles message that was not found', async () => {
    const messageToDelete = makeFakeMessage()
    const deleteMessage = createDeleteMessage({ messageDB })
    const result = await deleteMessage({ id: messageToDelete.id })
    const expected = {
      deleted: 0,
      status: 'failure',
      message: 'no message with this id'
    }
    expect(result).toEqual(expected)
  })

  it('handles delete message that was found', async () => {
    const messageToDelete = makeFakeMessage()
    const deleteMessage = createDeleteMessage({ messageDB })
    const insertedMessage = await messageDB.insertMessage(messageToDelete)
    const result = await deleteMessage({ id: insertedMessage.id })
    const expected = {
      deleted: 1,
      status: 'success',
      message: 'message deleted'
    }
    expect(result).toEqual(expected)
  })
})
