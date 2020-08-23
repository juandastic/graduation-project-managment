import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';

function Content() {
  return (
    <div className="p-5 flex flex-col md:flex-row">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Content