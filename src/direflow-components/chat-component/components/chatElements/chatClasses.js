class Msg {
  constructor(type, fromUser, payload){
    this.type= type;
    this.fromUser= fromUser || false;
    this.payload= payload;
  }
}

export class TextMsg extends Msg{
  constructor({fromUser, text}){
    super();
    this.type= 'text';
    this.fromUser= fromUser;
    this.payload = {
      text: text
    }
  }
}

export class Button {
  constructor({title, value, action, type}){
      this.title = title;
      this.value= value;
      this.action= action;
      this.type= type;
  }
}

export class QuickReply extends Msg{
  constructor({buttons}){
    super();   
    this.type= 'quick_reply';
    this.payload= {
      buttons: buttons
    }
  }
}

export class Carousel extends Msg{
  constructor({items}){
    super();   
    this.type= 'carousel';
    this.payload= {
      items: items
    }
  }
}

export class Card extends Msg{
  constructor({title, image, buttons}){
    super();   
    this.type= 'card';
    this.payload= {
      title: title,
      image: image,
      buttons: buttons
    }
  }
}

export class Image extends Msg{
  constructor({image}){
    super();   
    this.type= 'card';
    this.payload= {
      image: image
    }
  }
}