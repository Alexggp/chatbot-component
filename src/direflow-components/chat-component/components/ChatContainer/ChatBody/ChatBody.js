import React, { useEffect, useRef } from 'react';

import classes from './ChatBody.module.css';
import Spinner from '../../chatElements/Spinner/Spinner';

import TextMessage from '../../chatElements/TextMessage/TextMessage';
import QuickReply from '../../chatElements/QuickReply/QuickReply';
import Carousel from '../../chatElements/Carousel/Carousel';
import Card from '../../chatElements/Card/Card';
import Image from '../../chatElements/Image/Image';

import CustomCard from '../../customElements/CustomCard/CustomCard';


const ChatBody = (props) => {
  const chatBodyDiv = useRef(null);
  const selectionHandler = (value) => {
    props.sendMsg(value);
  }

  useEffect(() => {

    chatBodyDiv.current.scrollTop = chatBodyDiv.current.scrollHeight - chatBodyDiv.current.clientHeight;

  });


  const processMsgs = (messages)=>(
    messages.map((msg, index)=>{
      const origin = msg.fromUser ? 'User' : 'Bot';
      switch (msg.type){
        case 'text':
          return <TextMessage key={index} origin={origin} payload={msg.payload} />
        case 'quick_reply':
          return <QuickReply key={index} origin={origin} payload={msg.payload} selected={selectionHandler}/>
        case 'carousel':
          return (
            <Carousel key={index} origin={origin}>
             {processMsgs(msg.payload.items)}
            </Carousel>
          )
        case 'card':
          return <Card key={index} origin={origin} payload={msg.payload} selected={selectionHandler}/>
        case 'image':
          return <Image key={index} origin={origin} payload={msg.payload}/>

        case 'custom_card':
          return <CustomCard key={index} origin={origin} payload={msg.payload} selected={selectionHandler}/>
        default:
          return <TextMessage key={index} origin='Bot' payload={{text:'Ha ocurrido un error'}} />;
      }
  
    })
  )


  
  const msgElements = processMsgs(props.messages);

  return (
    <div className={classes.ChatBody} ref={chatBodyDiv}>
      <div className={classes.MessagesContainer}>
        {msgElements}
        {props.showSpinner ? <Spinner/> : ''}
      </div>
    </div>
  )
}



export default ChatBody;