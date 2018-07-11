import React, {Component} from 'react';
import { connect } from "react-redux";
class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }
  create = () => {
    this.props.dispatch({ type: 'create', task: this.state.task });
    console.log(window.store.getState(), 'store')
  };
  handleChange = (e) => {
    this.setState({task: e.target.value});
  };
  render() {
    return(
      <div>
        <input type="text" value={this.state.task} onChange={this.handleChange} />
        <button onClick={this.create}>新建</button>
      </div>
    )
  }
}

export default connect()(Task);