import React from "react";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import Item from "./Item";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [
      { text: "Walk the Cat", completed: true, date: "2019-10-16", Id: 1 },
      { text: "Buy Oats", completed: true, date: "2019-10-21", Id: 2 },
      { text: "Walk the Tortoise", completed: true, date: "2019-10-22", Id: 3 },
      { text: "Learn React", completed: true, date: "2019-10-23", Id: 4 }
    ]
  }

// Function to update the tasks with a new task
addTask = (taskText) => {
  console.log(taskText)
// create new task with default compelted and date properties 
//Add that task to the state

}


  render() {
    return (
      <div className="container">
        <h1 id="mainHeading">Todo List</h1>
        <h3>Things I need to do very soon.</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <AddItem addTaskFunc={this.addTask} />
          </div>
          <div className="col-12 col-lg-6">
            <ItemCount count={this.state.tasks.length} />
            <ul id="itemList">
              {this.state.tasks.map(item => {
                return <Item key ={item.Id} text={item.text} completed={item.complete} date={item.date} />
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
