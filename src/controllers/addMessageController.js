export default function buildPutMessage ({ addMessage }) {
  return async function putMessage (httpRequest) {
    const headers = {
      'Content-Type': 'text/html'
    }
    const body = httpRequest.body
    try {
      const result = await addMessage({ ...body })
      // console.log('result')
      return {
        headers,
        status: 200,
        body: {
          addMessage: result
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
