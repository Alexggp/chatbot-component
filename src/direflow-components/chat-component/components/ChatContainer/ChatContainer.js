import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'direflow-component';

import EvaConexion from '../../services/eva/EvaConection';
import styles from './ChatContainer.css';
import { TextMsg } from '../chatElements/chatClasses';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

import demoInput from '../../demoInput';

class ChatContainer extends Component {
  constructor(){
    super();
    this.brokerConexion = new EvaConexion();

    this.state= {
      // messages:[],
      messages: demoInput,
      showSpinner: false
    }
  
    this.addUserMessage = (text) => {
      if(!text) return;
      const newMsg = new TextMsg({fromUser: true, text: text});
      // addMessages gets ARRAY as parameter
      this.addMessages([newMsg]);
      this.sendUserMessage(text);
    }
  
    this.sendUserMessage = (text) =>{
      // Sending user message to the broker
      this.setState({showSpinner: true});
      this.brokerConexion.sendMessage(text)
        .then(response => this.addMessages(response))
        .catch(err => console.log(err));
    }
  
    this.addMessages = (newMsgsArray) => {
      // Adding new messages to the state
      const currentMsgs = [...this.state.messages, ...newMsgsArray];
      this.setState({
        messages: currentMsgs,
        showSpinner: false
      })
    }
  }
  componentDidMount(){
    // If messages array is empty, It sends the initial message to the broker
    if (!this.state.messages.length){
      this.setState({showSpinner: true});
      this.brokerConexion.sendInitialMessage()
        .then(response => this.addMessages(response))
        .catch(err => console.log(err));
    }
  }

  render(){

    const chatContainer = (

        <div className='ChatContainer'>
          <ChatHeader close={this.props.closeChat}/>
          <ChatBody 
            messages={this.state.messages} 
            showSpinner={this.state.showSpinner}
            sendMsg={this.sendUserMessage}/>
          <ChatFooter send={this.addUserMessage}/> 
        </div>
    
    )

    return (
      <React.Fragment>
        {this.props.show ? chatContainer : ''}
      </React.Fragment>
          

    );

  }
}

ChatContainer.propTypes = {
  show: PropTypes.bool,
  closeChat: PropTypes.func,
};

export default withStyles(styles)(ChatContainer);