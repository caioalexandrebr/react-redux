import React, { Component } from 'react';

export default class Sidebar extends Component {
  state = {
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
      },
    ]
  };

  render() {
    const { modules } = this.state;
    return (
      <aside>
        { modules.map(module => (
          <div key={module.id}>
            <strong>{ module.title }</strong>
            <ul>
              { module.lessons.map(lesson => (
                <li>{ lesson.title }</li>
              )) }
            </ul>
          </div>
        )) }
      </aside>
    );
  }
}
