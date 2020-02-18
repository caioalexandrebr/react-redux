import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

export default function Sidebar() {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();

  function toggle(module, lesson) {
    dispatch(CourseActions.toggleLesson(module, lesson))
  }

  return (
    <aside>
      { modules.map(module => (
        <div key={module.id}>
          <strong>{ module.title }</strong>
          <ul>
            { module.lessons.map(lesson => (
              <li key={ lesson.id }>
                { lesson.title }
                <button onClick={() => toggle(module, lesson)}>Selecionar</button>
              </li>
            )) }
          </ul>
        </div>
      )) }
    </aside>
  );
}