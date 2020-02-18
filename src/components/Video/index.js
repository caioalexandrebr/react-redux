import React from 'react';

import { useSelector } from 'react-redux';

export default function Video() {
  const active = useSelector(state => state.course)

  return (
    <div>
      <strong>Módulo {active.activeModule.title}</strong>
      <span>Aula {active.activeLesson.title}</span>
    </div>
  );
};