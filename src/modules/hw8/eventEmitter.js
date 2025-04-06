import EventEmitter from 'events';

class Chat extends EventEmitter {
  constructor() {
    super();
  }

  sendMessage(messageText) {
    this.emit('message', messageText);
  }
}

const chat = new Chat();

chat.on('message', (messageText) => {
  console.log(`New message: ${messageText}`);
});

chat.sendMessage("Hey, how's going?");
chat.sendMessage("Testing HW-8 functionality");

export default chat;