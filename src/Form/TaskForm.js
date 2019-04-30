import React from 'react'

export default function TaskForm(props) {
    console.log("taskform render")
  return (
    <div className="form">
        <form action="#" onSubmit={props.submitform} method="post">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" onChange={props.change} value={props.formValues.task}/>
            <label htmlFor="description">Task Description</label>
            <input type="text" name="description" onChange={props.change} value={props.formValues.description}/>
            <button type="submit">Sumit</button>
           
        </form>
      
    </div>
  )
}
