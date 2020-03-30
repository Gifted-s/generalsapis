import buildDeleteMessageController from './deleteMessageController'
import buildGetMessageController from './getMessageController'
import buildEditMessageController from './editMessageController'
import buildPutMessage from './addMessageController'
import Services from '../use-cases'
import buildListMessagesController from './listMessagesController'
import builddownloadMessageController from './downloadMessageController'

const { addMessage, deleteMessage, editMessage, fetchMessage, listMessages } = Services
const listMessagesController = buildListMessagesController({ listMessages })
const deleteMessageController = buildDeleteMessageController({ deleteMessage })
const getMessageController = buildGetMessageController({ fetchMessage })

const downloadMesageController = builddownloadMessageController({ fetchMessage })
const editMessageController = buildEditMessageController({ editMessage })
const putMessageController = buildPutMessage({ addMessage })

const Controller = Object.freeze({
  deleteMessageController,
  getMessageController,
  putMessageController,
  editMessageController,
  listMessagesController,
  downloadMesageController
})

export default Controller
export {
  deleteMessageController,
  getMessageController,
  listMessagesController,
  putMessageController,
  editMessageController,
  downloadMesageController }
