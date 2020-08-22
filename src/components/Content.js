import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';

function Content() {
  return (
    <div className="p-5 flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Content