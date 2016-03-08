let nextTopicId = 0;

export const addTopic = (title, body) => {
  return {
    type: 'TOPIC_ADD',
    id: nextTopicId++,
    title, body
  }
}
