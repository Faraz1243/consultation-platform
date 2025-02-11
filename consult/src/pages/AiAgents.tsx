import React, { Component } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import ChatUserList from '../components/ChatUserList';
import ChatWindow from '../components/ChatWindow';
import 'bootstrap-icons/font/bootstrap-icons.css';

export class AiAgents extends Component {
  state = {
    users: [
      { id: 2, name: 'Tax Consultant', avatar: 'https://placehold.co/150x150', active: true },
    ],
    showChatWindow: false,
    messages: [],
    selectedUser: null,
    loading: false, // New state to track bot loading
  };

  // Handle user selection
  handleUserClick = (user) => {
    this.setState({ selectedUser: user, showChatWindow: true });
  };

  // Handle sending messages
  handleSendMessage = async (message) => {
    const newMessage = {
      id: this.state.messages.length + 1,
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString(),
    };

    // Update the local state with the new user message
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
      loading: true, // Set loading to true while waiting for the bot's response
    }));

    try {
      // Send the message to the backend
      const response = await fetch('http://localhost:5000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }),
      });

      const data = await response.json();

      // Add the bot's response to the messages
      const botMessage = {
        id: this.state.messages.length + 1,
        text: data.response,
        sender: 'bot',
        time: new Date().toLocaleTimeString(),
      };

      this.setState((prevState) => ({
        messages: [...prevState.messages, botMessage],
        loading: false, // Set loading to false after the bot responds
      }));
    } catch (error) {
      console.error('Error sending message to the backend:', error);
      this.setState({ loading: false }); // Ensure loading is reset even if there's an error
    }
  };

  // Toggle back to user list in mobile view
  handleBackToUserList = () => {
    this.setState({ showChatWindow: false });
  };

  render() {
    const { users, messages, selectedUser, showChatWindow, loading } = this.state;

    return (
      <div>
        <NavBar />
        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="customer-chat">
                <div className="row chat-window">
                  <ChatUserList users={users} onUserClick={this.handleUserClick} />
                  <ChatWindow
                    messages={messages}
                    onSendMessage={this.handleSendMessage}
                    onBack={this.handleBackToUserList}
                    loading={loading} // Pass loading state to ChatWindow
                  />
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