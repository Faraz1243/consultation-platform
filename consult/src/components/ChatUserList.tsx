import React from 'react';

const ChatUserList = ({ users, onUserClick }) => {
  return (
    <div className="col-lg-4 chat-cont-left d-flex">
      <div className="card mb-3 mb-md-0 flex-fill">
        <div className="chat-header">
          <div className="mb-3">
            <h6>Chats</h6>
          </div>
          <div className="position-relative mb-0">
            <input
              type="text"
              placeholder="Search For Contacts or Messages"
              className="form-control"
            />
            <div className="search-icon-right">
              <span className="search_btn">
                <i className="feather-search" />
              </span>
            </div>
          </div>
        </div>
        <div className="card-body chat-users-list chat-scroll pt-0">
          <div className="chat-header inner-chat-header pt-0">
            <div>
              <h6>All Chats</h6>
            </div>
          </div>
          {users.map((user, index) => (
            <a
              key={index}
              href="javascript:void(0);"
              className={`d-flex justify-content-between chat-member ${user.active ? 'active' : ''} mb-2`}
              onClick={() => onUserClick(user)}
            >
              <div className="d-flex align-items-center">
                <div className={`avatar avatar-lg online ${user.active ? 'active' : ''} flex-shrink-0 me-2`}>
                  <img
                    src={user.avatar}
                    alt="User Image"
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <h6 className="fs-16 fw-medium mb-1">{user.name}</h6>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatUserList;