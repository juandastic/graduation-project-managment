import React from 'react';

import ProjectForm from '../components/ProjectForm';
import TaskForm from '../components/TaskForm';
import TasksGrid from '../components/TasksGrid';

function EditProject() {
  let projectInfo = {
    title: "title",
    finishDate: "2020-04-04",
    description: "description"
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Editar Proyecto</h1>
      <ProjectForm projectInfo={projectInfo} />
      <h2 className="text-center text-3xl font-semibold">Tareas del Proyecto</h2>
      <TaskForm projectInfo={projectInfo} />
      <div className="w-full max-w-6xl m-auto mt-8">
        <TasksGrid />
      </div>
    </React.Fragment>
  )
}

export default EditProject