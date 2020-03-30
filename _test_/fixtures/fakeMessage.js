import faker from 'faker'
import todaysDate from '../../Gifted-Date/Gifted-Date'

export default function makeFakeMessage (override) {
  const fakeMessage = {
    name: faker.lorem.paragraph(1),
    speaker: faker.lorem.paragraph(1),
    id: String(Math.random()),
    category: faker.lorem.paragraph(1),
    messageUri: faker.internet.url(),
    dateAdded: todaysDate.getFullDate()
  }
  return {
    ...fakeMessage, ...override
  }
}
function makeFakeFeedbackMessage (override) {
  const fakeFeedbackMessage = {
    feedback: faker.lorem.paragraph(1)
  }
  return { ...fakeFeedbackMessage, ...override }
}
export { makeFakeFeedbackMessage }
