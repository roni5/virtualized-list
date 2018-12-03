import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import SockJsClient from 'react-stomp';

export default class Socket extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <SockJsClient
            url = 'http://localhost:8081/refresh/'
            topics={['/topic/notification']}
            onConnect={console.log("Connection established!")}
            onDisconnect={console.log("Disconnected!")}
            onMessage={() => this.update()}
            debug= {true}
          />

      </div>
    )
  }
}
