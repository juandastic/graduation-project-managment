import React from 'react';

import ProjectForm from '../components/ProjectForm';

function CreateProject() {
  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Crear Proyecto</h1>
      <ProjectForm />
    </React.Fragment>
  )
}

export default CreateProject