import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  //Initial State
  state = {
    newTaskText: ""
  }

updateTaskText = (event) => {
console.log(event.target.value);
this.setState({
  newTaskText: event.target.value
})
}

handleClick = (event) => {
this.props.addTaskFunc(this.state.newTaskText)
}


  render() {
    // JSX is NOT HTML
    return (
      <section>
        <input
          id="addItemInput"
          type="text"
          className="form-control"
          placeholder="E.g. take out bins"
          value={this.state.newTaskText}
          onChange={this.updateTaskText}
        />
        <div className="mt-3 mb-3">
          <button id="addButton" className="btn" onClick={this.handleClick}>
            Add to list
          </button>
        </div>
      </section>
    );
  }
}

export default AddItem;
