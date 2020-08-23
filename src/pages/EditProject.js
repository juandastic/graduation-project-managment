import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../redux/actions';
import { withRouter, Redirect } from 'react-router-dom';

import ProjectForm from '../components/ProjectForm';
import TaskForm from '../components/TaskForm';
import TasksGrid from '../components/TasksGrid';

function EditProject({project, actions, dispatch}) {
  const [projectData, setProjectData] = useState(project)

  const handleSave = (values, dispatch) => {
    let projectFormData =  {
      id: project.id,
      title: values.title,
      description: values.description,
      finish_date: values.finish_date,
      student_list: values.student_list || [],
      adviser: "Profesor Logeado",
      state: "En proceso",
      tasks: project.tasks
    }

    setProjectData(projectFormData)
    dispatch(actions.editProjectAction(projectFormData))
    alert("Tu Proyecto fue actualizado correctamente")
  }

  const handleTaskCreation = (data) => {
    let projectFormData =  {
      ...projectData,
      tasks: [
        ...projectData.tasks,
        data
      ]
    }

    setProjectData(projectFormData)
    dispatch(actions.editProjectAction(projectFormData))
    alert("La tarea fue creada correctamente")
  }

  if (!project) return (<Redirect to="/" />)

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Editar Proyecto</h1>
      <ProjectForm initialValues={project} onSubmit={handleSave} />
      <h2 className="text-center text-3xl font-semibold">Tareas del Proyecto</h2>
      <TaskForm handleTaskCreation={handleTaskCreation} />
      <div className="w-full max-w-6xl m-auto mt-8">
        <TasksGrid tasks={projectData.tasks || []} />
      </div>
    </React.Fragment>
  )
}

function mapStateToProps(state, props) {
  const project = state.data.projects.find((p) => p.id == props.match.params.id)

  return {
    project: project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProject));
