/* eslint-disable default-param-last */
const initialState = {
  localeLanguage: 'fa',
  todoList: [],
  notesList: [],
  tweetsList: [],
};

const dataReducer = (state = initialState, action) => {
  console.log('%c Line:7 🥒 action', 'color:#6ec1c2', action);
  console.log('%c Line:7 🍅 state', 'color:#ed9ec7', state);
  switch (action.type) {
    case 'CHANGE_LOCALE_LANGUAGE':
      return {
        ...state,
        localeLanguage: action.payload.localeLanguage,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.taskId,
        ),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.taskId) {
            return {
              ...todo,
              title: action.payload.value,
            };
          }
          return todo;
        }),
      };
    case 'CHANGE_TODO_ITEM_TO_EDIT_MODE':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.taskId) {
            return {
              ...todo,
              editMode: !todo?.editMode,
            };
          }
          return todo;
        }),
      };

    case 'ADD_TWEET':
      return {
        ...state,
        tweetsList: [...state.tweetsList, action.payload],
      };

    case 'DELETE_TWEET':
      return {
        ...state,
        tweetsList: state.tweetsList.filter(
          (tweet) => tweet.id !== action.payload.tweetId,
        ),
      };

    case 'ADD_NOTE':
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };

    default:
      return state;
  }
};
export default dataReducer;
