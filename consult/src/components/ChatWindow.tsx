import React from 'react';

const ChatWindow = ({ messages, onSendMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="col-lg-8 chat-cont-right chat-window-long">
      <div className="card chat-window mb-0 shadow-none">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <a
              id="back_user_list"
              href="javascript:void(0)"
              className="back-user-list"
            >
              <i className="fas fa-chevron-left" />
            </a>
            <div className="avatar avatar-lg online flex-shrink-0 me-2">
              <img
                className="rounded-circle"
                src="assets/img/profiles/avatar-01.jpg"
                alt="User"
              />
            </div>
            <div>
              <h6 className="fs-16 fw-medium mb-1">Pharmacist LLM</h6>
              <p className="fs-14">Online</p>
            </div>
          </div>
          <div className="d-flex align-items-center send-action">
            <a href="javascript:void(0);">
              <i className="ti ti-search fs-16" />
            </a>
            <a href="javascript:void(0);" className="me-0">
              <i className="ti ti-dots-vertical fs-16" />
            </a>
          </div>
        </div>
        <div className="card-body msg_card_body chat-scroll pt-0">
          <ul className="list-unstyled">
            {messages.map((msg, index) => (
              <li key={index} className={`media ${msg.sender === 'user' ? 'sent' : 'received'} d-flex align-items-end`}>
                {msg.sender === 'bot' && (
                  <div className="avatar avatar-lg flex-shrink-0">
                    <img
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="rounded-circle"
                    />
                  </div>
                )}
                <div className="media-body flex-grow-1">
                  <div className="msg-box">
                    <div className={`d-flex align-items-center ${msg.sender === 'user' ? 'justify-content-end' : ''} mb-1`}>
                      {msg.sender === 'bot' && <p className="fs-14 mb-0">Bot</p>}
                      <i className="ti ti-point-filled mx-1 text-light" />
                      <span className="d-flex align-items-center fs-14">
                        {msg.time}
                        {msg.sender === 'user' && <i className="ti ti-checks text-success ms-2" />}
                      </span>
                    </div>
                    <div className="position-relative">
                      <div className={`${msg.sender === 'user' ? 'sent-message' : 'received-message'}`}>
                        <p className="fs-14">{msg.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <div className="input-group">
            <a href="javascript:void(0);" className="microphone-chat">
              <i className="ti ti-microphone fs-16" />
            </a>
            <input
              className="form-control type_msg mh-auto empty_check"
              placeholder="Type Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="send-action">
              <button className="btn btn-primary btn_send" onClick={handleSendMessage}>
                <i className="bi bi-send fs-16 " aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;