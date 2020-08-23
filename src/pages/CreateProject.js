import React from 'react';
import { useHistory } from "react-router-dom";

import ProjectForm from '../components/ProjectForm';
import { addProjectAction } from '../redux/actions';

function CreateProject() {
  let history = useHistory();

  const handleSave = (values, dispatch) => {
    let project =  {
      id: Math.random().toString(36).substr(2, 9),
      title: values.title,
      description: values.description,
      finish_date: values.finish_date,
      students: ["Luisa Fernanda Cano Cano", "Alejandro Cardenas", "Jose Gabriel", "Juan David Gómez", "Nelson Fernando"],
      adviser: "Profesor Logeado",
      state: "En proceso"
    }

    dispatch(addProjectAction(project))
    alert("Tu Proyecto fue creado correctamente")
    history.push('/')
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Crear Proyecto</h1>
      <ProjectForm  onSubmit={handleSave} />
    </React.Fragment>
  )
}

export default CreateProject