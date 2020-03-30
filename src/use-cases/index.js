import messageDB from '../db'
import buildAddMessage from './addMessage'
import createFetchMessage from './fetchMessage'
import createEditMessage from './editMessage'
import createDeleteMessage from './deleteMessage'
import buildListMessages from './listMessages'
import makeHandlesMakeFeedBack from './handlesFeedBack'
const addMessage = buildAddMessage({ messageDB })
const listMessages = buildListMessages({ messageDB })
const fetchMessage = createFetchMessage({ messageDB })
const handlesFeedbackMessage = makeHandlesMakeFeedBack({ messageDB })
const editMessage = createEditMessage({ messageDB })
const deleteMessage = createDeleteMessage({ messageDB })

const Services = Object.freeze({
  addMessage,
  fetchMessage,
  deleteMessage,
  handlesFeedbackMessage,
  editMessage,
  listMessages

})

export default Services
export { addMessage, fetchMessage, handlesFeedbackMessage, editMessage, deleteMessage, listMessages }
