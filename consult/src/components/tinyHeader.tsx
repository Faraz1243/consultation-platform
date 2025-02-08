import React, { Component } from 'react'
import Logo from "./../assets/img/logo.png"
export class TinyHeader extends Component {

  render() {
    return (
        <>
        <div className="authentication-header">
          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                <img src={Logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        {/* /Header */}
      </>
      
    )
  }
}

export default TinyHeader
