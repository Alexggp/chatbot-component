import React, {Component} from 'react';
import { withStyles } from 'direflow-component';

import WidgetButton from './components/WidgetButton/WidgetButton';
import ChatContainer from './components/ChatContainer/ChatContainer';
import styles from './App.css';
class App extends Component {
  constructor(){
    super();
    this.state= {
      chatIsOpen: false
    }

    this.toggleChatHandler = () =>{
      this.setState(prevState => (
        {chatIsOpen: !prevState.chatIsOpen}
      ))
    }

  }
  
  render(){
    return (
        <div className="App">
          <WidgetButton 
            show={!this.state.chatIsOpen}
            click={this.toggleChatHandler} />
          <ChatContainer 
            show= {this.state.chatIsOpen}
            closeChat = {this.toggleChatHandler} />  
        </div>
      );
    }
  }


export default withStyles(styles)(App);
