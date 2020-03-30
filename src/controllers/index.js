import buildDeleteMessageController from './deleteMessageController'
import buildGetMessageController from './getMessageController'
import buildEditMessageController from './editMessageController'
import buildPutMessage from './addMessageController'
import Services from '../use-cases'
import buildListMessagesController from './listMessagesController'
import builddownloadMessageController from './downloadMessageController'
import makeHandlesFeedBackMessageController from './handlesFeedBackController'

const { addMessage, deleteMessage, editMessage, fetchMessage, handlesFeedbackMessage, listMessages } = Services
const listMessagesController = buildListMessagesController({ listMessages })
const deleteMessageController = buildDeleteMessageController({ deleteMessage })
const getMessageController = buildGetMessageController({ fetchMessage })
const handlesFeedBackController = makeHandlesFeedBackMessageController({ handlesFeedback: handlesFeedbackMessage })
const downloadMesageController = builddownloadMessageController({ fetchMessage })
const editMessageController = buildEditMessageController({ editMessage })
const putMessageController = buildPutMessage({ addMessage })

const Controller = Object.freeze({
  deleteMessageController,
  getMessageController,
  putMessageController,
  editMessageController,
  listMessagesController,
  downloadMesageController,
  handlesFeedBackController
})

export default Controller
export {
  deleteMessageController,
  getMessageController,
  listMessagesController,
  putMessageController,
  handlesFeedBackController,
  editMessageController,
  downloadMesageController }
