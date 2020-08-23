import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function StudentList(props) {
  const {
    input: { value, onChange }
  } = props

  const [studentArray, setStudentArray] = useState( value || [] );

  const updateList = (list) => {
    onChange(list)
  }

  const onSearchStudent = (e) => {
    if (e.key === 'Enter') {
      const newList = [
        ...studentArray,
        e.target.value
      ]
      setStudentArray(newList)
      updateList(newList)
      e.target.value = ''

      e.preventDefault()
    }
  }

  const removeStudent = (id) => {
    let list = [...studentArray]
    list.splice(id, 1)
    setStudentArray(list);
    updateList(list)
  }

  return (
    <React.Fragment>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        Seleccionar estudiantes
      </label>
      <input onKeyDown={onSearchStudent} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Ingrese el nombre del estudiante" />
      <ul className="mt-2">
        {studentArray.map((name, i)=>(
          <li key={i} className="border p-2 flex justify-between">{name} <FontAwesomeIcon onClick={()=>{removeStudent(i)}} icon={faTrash} /></li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default StudentList