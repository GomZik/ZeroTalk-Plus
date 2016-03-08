const initialState = {}

const topic = (state = {}, action) => {
  switch (action.type) {
    case 'TOPIC_ADD':
      return {
        id: action.id,
        body: action.body,
        title: action.title
      }
    default:
      return state
  }
}

export const topics = (state = initialState, action) => {
  switch (action.type) {
    case 'TOPIC_ADD':
      return {
        ...state,
        [action.id]: topic(undefined, action)
      }
    default:
      return state
  }
}
