
import makeMessageDB from '../db/messageDB'
import makeFakeMessage from '../../_test_/fixtures/fakeMessage'
import makeTestDB from '../../_test_/fixtures/db'
import createEditMessage from './editMessage'
import todaysDate from '../../Gifted-Date/Gifted-Date'

describe('edit message', () => {
  let messageDB
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })

  it('must have an id', async () => {
    const messageToEdit = makeFakeMessage({ id: undefined })
    const editMessage = createEditMessage({
      messageDB: {
        update: () => {
          throw new Error(' update function should not have been called')
        }
      }
    })
    expect(editMessage({ messageToEdit })).rejects.toThrow('No id was passed')
  })

  it('modifies a comment', async () => {
    const message = makeFakeMessage()
    const editMessage = createEditMessage({
      messageDB
    })
    const messageToEdit = await messageDB.insertMessage(message)
    const editedMessage = await editMessage({ ...messageToEdit, name: 'apostle joseph joshua' })
    expect(editedMessage.name).toBe('apostle joseph joshua')
    return messageDB.deleteMessage({ id: editedMessage.id })
  })
})
