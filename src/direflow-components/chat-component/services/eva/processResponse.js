import { TextMsg, QuickReply, Button } from '../../components/chatElements/chatClasses';

const processResponse = (rowData) => {
  const context = rowData.data.context;
  const sessionCode = rowData.data.sessionCode;
  const dataAnswers = rowData.data.answers;

  const messages =  [];

  dataAnswers.forEach(answer=>{
    const text = answer.content;
    const newMsg = new TextMsg({fromUser: false, text: text});
    messages.push(newMsg);

    if (answer.quickReply.length){
      const buttonsArray = [];
      answer.quickReply.forEach(option=>{
        const newBtn = new Button({
          title: option.name,
          value: option.value,
          action: null,
          type: 'quick_reply'
        });
        buttonsArray.push(newBtn);
      })
      const newQuickReply = new QuickReply({buttons:buttonsArray});
      messages.push(newQuickReply);
    }

  });
  return {messages, context, sessionCode};
  
   

}

export default processResponse;