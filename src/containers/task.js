import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }

  handleEnterKey = (e) => {
    e.keyCode === 13 && this.create();
  };

  create = () => {
    this.props.dispatch({ type: 'create', task: this.state.task });
    this.setState({task: ''});
  };

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({task: inputValue});
  };

  toggleTask = (index) => {
    this.props.dispatch({type: 'toggle', index});
  };

  render() {
    console.log(this.props.tasks, 'tasks');
    return(
      <React.Fragment>
        <div>
          <input type="text" value={this.state.task} onChange={this.handleChange} onKeyUp={this.handleEnterKey} />
          <button onClick={this.create}>新建</button>
        </div>
        {
          this.props.tasks &&
          <ul style={{padding: 0}}>
            {
              this.props.tasks.map((task, index) => (
                <li key={index} onClick={() => this.toggleTask(index)}>
                  <input type="checkbox" value={task.text} checked={task.finished}/>
                  {task.text}
                </li>
              ))
            }
          </ul>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {tasks: state.tasks}
};
export default connect(mapStateToProps)(Task);