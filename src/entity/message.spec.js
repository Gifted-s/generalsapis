import makeFakeMessage from '../../_test_/fixtures/fakeMessage'
import makeMessage from '.'

describe('message', () => {
  it('must have a name', () => {
    const fakeMessage = makeFakeMessage({ name: null })

    expect(() => makeMessage(fakeMessage)).toThrow('Please enter the name of the message')
  })

  it('message name must be longer that 2 characters ', () => {
    const fakeMessage = makeFakeMessage({ name: 'A' })

    expect(() => makeMessage(fakeMessage)).toThrow('The name of the message is too short')
  })
  it('must have a source ', () => {
    const fakeMessage = makeFakeMessage({ messageUri: null })

    expect(() => makeMessage(fakeMessage)).toThrow('Message must have a source or uri, e.g http://mesage1.mp3')
  })
  it('must have a category', () => {
    const fakeMessage = makeFakeMessage({ category: null })

    expect(() => makeMessage(fakeMessage)).toThrow('Message must have a category, please enter the category, e.g Spiritual')
  })

  it('message name must be shorter that 2 characters ', () => {
    const fakeMessage = makeFakeMessage({ category: 'A' })

    expect(() => makeMessage(fakeMessage)).toThrow('The category name is too short')
  })
  it('must have a speaker', () => {
    const fakeMessage = makeFakeMessage({ speaker: null })

    expect(() => makeMessage(fakeMessage)).toThrow('Message must have a speaker, please enter the speaker, e.g Myles Monroe')
  })

  it('speaker name must be shorter that 2 characters ', () => {
    const fakeMessage = makeFakeMessage({ speaker: 'A' })

    expect(() => makeMessage(fakeMessage)).toThrow('The speaker name is too short')
  })
  // it('message must have a unique id ', () => {
  //   const fakeMessage = makeFakeMessage({ id: null })

  //   expect(() => makeMessage(fakeMessage)).toThrow('message must have a unique id')
  // })
})
