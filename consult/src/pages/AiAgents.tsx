import React, { Component } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import ChatUserList from '../components/ChatUserList';
import ChatWindow from '../components/ChatWindow';
import 'bootstrap-icons/font/bootstrap-icons.css';
export class AiAgents extends Component {
  state = {
    users: [
      { id: 1, name: 'PharmaBot', avatar: 'https://placehold.co/150x150', active: true },
      { id: 2, name: 'Tax Consultant', avatar: 'https://placehold.co/150x150', active: false },
      { id: 3, name: 'Legal Advisor', avatar: 'https://placehold.co/150x150', active: false },
    ],
    messages: [],
    selectedUser: null,
  };

  // WebSocket connection setup


  // Use only when you have web-socket url

  // componentDidMount() {
  //   this.socket = new WebSocket('ws://your-websocket-url');

  //   this.socket.onmessage = (event) => {
  //     const message = JSON.parse(event.data);
  //     this.setState((prevState) => ({
  //       messages: [...prevState.messages, message],
  //     }));
  //   };

  //   this.socket.onopen = () => {
  //     console.log('WebSocket connected');
  //   };

  //   this.socket.onclose = () => {
  //     console.log('WebSocket disconnected');
  //   };
  // }


  // componentWillUnmount() {
  //   this.socket.close();
  // }

  // Handle user selection
  handleUserClick = (user) => {
    this.setState({ selectedUser: user });
  };

  // Handle sending messages
  handleSendMessage = (message) => {
    const newMessage = {
      id: this.state.messages.length + 1,
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString(),
    };

    // Send the message via WebSocket
    // this.socket.send(JSON.stringify(newMessage));

    // Update the local state with the new message
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
    }));
  };

  render() {
    const { users, messages, selectedUser } = this.state;

    return (
      <div>
        <NavBar />
        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="customer-chat">
                <div className="row chat-window">
                  <ChatUserList users={users} onUserClick={this.handleUserClick} />
                  <ChatWindow messages={messages} onSendMessage={this.handleSendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AiAgents;