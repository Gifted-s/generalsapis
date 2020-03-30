export default function buildEditMessageController ({ editMessage }) {
  return async function editMessageController (httpRequest) {
    const id = httpRequest.params.id
    const changes = httpRequest.body
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const editedMessage = await editMessage({ id, ...changes })
      return {
        headers,
        status: 200,
        body: {
          editedMessage
        }
      }
    } catch (err) {
      console.log(err.message)
      return {
        headers,
        status: 400,
        body: {
          error: err.message
        }
      }
    }
  }
}
