import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      show: 'all'
    };
  }

  componentDidMount() {
    this.id = 0;
  }

  handleEnterKey = (e) => {
    e.keyCode === 13 && this.create();
  };

  create = () => {
    const {task} = this.state;
    if(!task) return;
    this.props.dispatch({ type: 'create', text: this.state.task, id: this.id++ });
    this.setState({task: ''});
  };

  handleChange = (e) => {
    this.setState({task: e.target.value});
  };

  toggleTask = (id) => {
    this.props.dispatch({type: 'toggle', id});
  };

  showList = (filter) => {
    this.setState({show: filter});
  };

  render() {
    const {show} = this.state;
    let {tasks} = this.props;
    show === 'finished' ? tasks = tasks.filter(task => task.finished) : '';
    show === 'unfinished' ? tasks = tasks.filter(task => !task.finished) : '';
    return(
      <React.Fragment>
        <div>
          <input type="text" value={this.state.task} onChange={this.handleChange} onKeyUp={this.handleEnterKey} />
          <button onClick={this.create}>新建</button>
        </div>

        <div>
          <button disabled={show === 'all'} onClick={() => this.showList('all')}>展示全部</button>
          <button disabled={show === 'unfinished'} onClick={() => this.showList('unfinished')}>展示待办事项</button>
          <button disabled={show === 'finished'} onClick={() => this.showList('finished')}>展示已完成</button>
        </div>

        {
          tasks &&
          <ul style={{padding: 0}}>
            {
              tasks.map(task => (
                <li key={task.id} style={{textDecoration: task.finished ? 'line-through' : 'none'}}>
                  <input type="checkbox" value={task.text} checked={task.finished} onChange={() => this.toggleTask(task.id)}/>
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