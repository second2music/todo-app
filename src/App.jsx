import React, { Component } from "react";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todo: [],
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }
  add(e) {
    if (this.state.value === "") {
      alert("入力されていません");
      e.preventDefault();
    } else {
      this.setState({ todo: this.state.todo.concat(this.state.value) });
      this.setState({ value: "" });
      e.preventDefault();
    }
  }

  handleRemove(index) {
    this.state.todo.splice(index, 1);
    this.setState({ todo: this.state.todo });
  }

  render() {
    return (
      <div>
        <h1>ToDoApp</h1>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.onChange(e)}
          />
          <button onClick={(e) => this.add(e)}>追加</button>
        </form>

        <List
          todos={this.state.todo}
          handleRemove={(index) => this.handleRemove(index)}
        />
      </div>
    );
  }
}

export default App;
