import React from 'react';

import ProjectsGrid from '../components/ProjectsGrid';

function Home() {
  const projects = [
    {
      title: "Vivencias académicas de los ECAES",
      adviser: "Profesor Asesor",
      students: ["Luisa Fernanda Cano Cano", "Alejandro Cardenas", "Jose Gabriel", "Juan David Gómez", "Nelson Fernando"],
      state: "En proceso"
    },
    {
      title: "Vivencias académicas de los ECAES",
      adviser: "Profesor Asesor",
      students: ["Luisa Fernanda Cano Cano", "Alejandro Cardenas", "Jose Gabriel", "Juan David Gómez", "Nelson Fernando"],
      state: "En proceso"
    },
    {
      title: "Vivencias académicas de los ECAES",
      adviser: "Profesor Asesor",
      students: ["Luisa Fernanda Cano Cano", "Alejandro Cardenas", "Jose Gabriel", "Juan David Gómez", "Nelson Fernando"],
      state: "En proceso"
    },
    {
      title: "Vivencias académicas de los ECAES",
      adviser: "Profesor Asesor",
      students: ["Luisa Fernanda Cano Cano", "Alejandro Cardenas", "Jose Gabriel", "Juan David Gómez", "Nelson Fernando"],
      state: "En proceso"
    }
  ]
  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Lista de Proyectos</h1>
      <ProjectsGrid projects={projects} />

    </React.Fragment>
  )
}

export default Home