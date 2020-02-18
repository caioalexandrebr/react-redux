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

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LESSON':
      return { ...state, activeModule: action.module, activeLesson: action.lesson };
    default:
      return state;
  }
}