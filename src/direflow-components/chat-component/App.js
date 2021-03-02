import React, {Component} from 'react';

import WidgetButton from './components/WidgetButton/WidgetButton';
// import ChatContainer from './components/ChatContainer/ChatContainer';

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
          hola mundo
          <WidgetButton 
            show={!this.state.chatIsOpen}
            click={this.toggleChatHandler} />
          {/* <ChatContainer 
            show= {this.state.chatIsOpen}
            closeChat = {this.toggleChatHandler} />   */}
        </div>
      );
    }
  }


export default App;
