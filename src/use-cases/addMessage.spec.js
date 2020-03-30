
import makeMessageDB from '../db/messageDB'
import makeTestDB from '../../_test_/fixtures/db'
import makeFakeMessage from '../../_test_/fixtures/fakeMessage'
import buildAddMessage from './addMessage'
import todaysDate from '../../Gifted-Date/Gifted-Date'

let messageDB
describe('Insert a message', () => {
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })
  it('must insert a message to the database ', async () => {
    const fakeMessage = makeFakeMessage()
    const addMessage = buildAddMessage({ messageDB })
    const insertedMessage = await addMessage({ ...fakeMessage })
    expect(insertedMessage).toMatchObject({ ...fakeMessage, _id: insertedMessage._id })
  })

  it('it is idempotent', async () => {
    const fakeMessage = makeFakeMessage({ id: undefined })
    const messageMaker = buildAddMessage({ messageDB })
    const insertedMessage = await messageMaker({ ...fakeMessage })
    expect(insertedMessage.id).toBeDefined()
  })
})
