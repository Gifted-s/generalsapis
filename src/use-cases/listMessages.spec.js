import makeMessageDB from '../db/messageDB'
import makeTestDB from '../../_test_/fixtures/db'
import todaysDate from '../../Gifted-Date/Gifted-Date'

describe('list messages', () => {
  let messageDB
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })
  it('must list all messages', async () => {
    const messages = await messageDB.listMessages()
    expect(messages).toBeDefined()
  })
})
