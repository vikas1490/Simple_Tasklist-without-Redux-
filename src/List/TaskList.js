import React, { Component } from 'react'

export default class TaskList extends Component {

    deletehandler(id){
        this.props.deleteHandler(id)

    }
    edithandler(id){
        this.props.editHandler(id)

    }
    componentDidMount(){
        console.log("Tasklist-componenet did mount")
      }
   
    componentDidUpdate(){
        console.log("Tasklist-componenet did update")
      }

    shouldComponentUpdate(nextProps,nextState){
        //console.dir(nextProps);
        //console.dir(nextState);
        //console.dir(this.props)
        if(this.props.tasks !== nextProps.tasks){
            return true
        }else{
            return false
        }   

    }
  render() {
      console.log("tasklist render")
    const list = this.props.tasks.map((task,index)=>{
       return  (
       <tr key={task.id}>
           <td>{task.task}</td>
           <td>{task.description}</td>
           <td><button onClick={this.edithandler.bind(this,index)}>edit</button></td>
           <td><button onClick={this.deletehandler.bind(this,index)}>delete</button></td>
        </tr>
    )
})

    return (
      <div>
          <table>
              <tbody>{list}</tbody>
        </table>
      </div>
    )
  }
}
