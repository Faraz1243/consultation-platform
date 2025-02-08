import React, { Component } from 'react'
import Header from './header'
import ConsultantSidepane from './sidepane'

export class ConsultantHolidays extends Component {
  render() {
    return (
        <div className="provider-page">
        <div className="main-wrapper">
            <Header/>
            <ConsultantSidepane/>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                </div>
            </div>

        </div>
      </div>
      
    )
  }
}

export default ConsultantHolidays
