import React, {Component} from 'react';
import Question from './Question'

class App extends Component {
  render() {
    return (<Question description={'This is a question with a long text which will get into two lines'} options={['this is a answer1', 'this is a answer2', 'this is a answer3', 'this is a answer4']}/>);
  }
}

export default App;
