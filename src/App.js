import React, { Component } from 'react';
import './App.css';
import TaskForm from './Form/TaskForm';
import TaskList from './List/TaskList';
class App extends Component {
  constructor(props){

    console.log("Appjs - Constructor")
    super(props)
    this.state = {
      updateIndex:'',
      task:'',
      description:'',
      tasks:[]
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const {tasks,task,description,updateIndex} = this.state;
    if(task!=='' && description !==''){
      if(updateIndex!==''){
        const updateTasks = tasks.slice();
        updateTasks[updateIndex].task = task;
        updateTasks[updateIndex].description = description;

        this.setState({
          updateIndex:'',
          task:'',
          description:'',
         tasks:updateTasks
        
        })

      }else{
        let id;
        console.log(tasks.length)
        if (tasks.length >0){
            id = tasks[tasks.length - 1].id + 1;
        }else{
            id=0
        }
        const item = {  id:id, task:task, description:description }
        let updateTasks = tasks.slice()
        updateTasks.push(item)
        this.setState({
          task:'',
            description:'',
          tasks:updateTasks
        
        })
      }
  }else{
    alert("Please enter something")
  }
    

  }
  handleChange(e){
    const name = e.target.name;
    const val = e.target.value
    this.setState({[name]:val})
    }

  deleteHandler(index){
    const tasks = this.state.tasks.slice();
    tasks.splice(index,1)
    this.setState({tasks:tasks})

  }
  editHandler(index){
    const task  = this.state.tasks[index]
    this.setState({
      updateIndex:index,
      task:task.task,
      description:task.description
    })
  }
  componentDidMount(){
    console.log("Appjs-componenet did mount")
  }

  componentDidUpdate(){
    console.log("App js-componenet did update")
  }
  render() {
    console.log("Appjs - Render")
    let {task,description}= this.state;
    let values = {task,description}
    return (
      <div className="App">
        <TaskForm formValues={values} change={this.handleChange.bind(this)} submitform = {this.handleSubmit.bind(this)}/>
        <TaskList tasks={this.state.tasks} deleteHandler={this.deleteHandler.bind(this)} editHandler={this.editHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
