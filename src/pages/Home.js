import React from 'react';

import ProjectsGrid from '../components/ProjectsGrid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../redux/actions';
import { withRouter } from 'react-router-dom';

function Home({projects}) {
  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-semibold">Lista de Proyectos</h1>
      <ProjectsGrid projects={projects} />
    </React.Fragment>
  )
}

function mapStateToProps(state, props) {
  return {
    projects: state.data.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));