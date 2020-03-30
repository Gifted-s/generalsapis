
import makeTestDB from '../../_test_/fixtures/db'
import todaysDate from '../../Gifted-Date/Gifted-Date'
import makeHandlesMakeFeedBack from './handlesFeedBack'
import { makeFakeFeedbackMessage } from '../../_test_/fixtures/fakeMessage'
import makeMessageDB from '../db/messageDB'
let messageDB
describe('feedback from client', () => {
  beforeAll(() => {
    messageDB = makeMessageDB({ makeDB: makeTestDB, date_Module: todaysDate })
  })
  it('must contain a text', () => {
    const feedbackMessage = makeFakeFeedbackMessage({ feedback: null })
    const handlesFeedBack = makeHandlesMakeFeedBack({
      messageDB
    })

    expect(handlesFeedBack(feedbackMessage)).rejects.toThrow('Please enter a message')
  })
  it('must contain text greater than 4 characters', () => {
    const feedbackMessage = makeFakeFeedbackMessage({ feedback: 'nic' })
    const handlesFeedBack = makeHandlesMakeFeedBack({
      messageDB
    })

    expect(handlesFeedBack(feedbackMessage)).rejects.toThrow('Please enter a message that has more characters')
  })

  it('should submit text to database', async () => {
    // const feedbackMessage = makeFakeFeedbackMessage({ feedback: ` Joshua message Ado The app is nice but i want to add new feetures` })
    const handlesFeedBack = makeHandlesMakeFeedBack({ messageDB })
    const dataReport = await handlesFeedBack({ feedback: 'I love this wonderfull app' })
    expect(dataReport).toMatchObject({ feedback: 'I love this wonderfull app' })
  })
})
