let nextTodoId = 0

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
})

export const increment = () => ({
  type: "INCREMENT"
})

export default addTodo
