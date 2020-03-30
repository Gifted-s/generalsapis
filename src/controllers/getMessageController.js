export default function buildGetMessageController ({ fetchMessage }) {
  return async function getMessageController (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
      //  'accept': 'application/json'
    }
    try {
      const id = httpRequest.params.id
      const foundMessage = await fetchMessage({ id })
      return {
        headers,
        status: 200,
        body: {
          message: foundMessage
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
