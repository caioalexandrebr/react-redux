import { createStore } from "redux";

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        {
          id: 1,
          title: 'Primeira aula'
        },
        {
          id: 2,
          title: 'Segunda aula'
        }
      ]
    },
    {
      id: 2,
      title: 'Iniciando com Redux',
      lessons: [
        {
          id: 1,
          title: 'Primeira aula'
        },
        {
          id: 2,
          title: 'Segunda aula'
        }
      ]
    }
  ]
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeModule: action.module, activeLesson: action.lesson}
  }

  return state;
}

const store = createStore(reducer);

export default store;