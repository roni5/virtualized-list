import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import WebSocket from './WebSocket' <WebSocket />


import loremIpsum from 'lorem-ipsum';

import { List } from "react-virtualized";
import Socket from './Socket'
import  SimpleLineChart  from './Graph';
import Frames from './Frames'
{/* <SimpleLineChart /> */}

const rowCount = 1000;
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class App extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: 'http://example.com',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
          count: 1,
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8
        })
      }
    });
  }

  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title ">Blinds</h1>
        </header>
        <SimpleLineChart />
        <div id="example1"></div>
        <div id="example2"></div>
        <Frames />
        <Frames />
        <Frames />
        <Frames />
        <Frames />
        <Frames />
        <div className="clearfix"></div>
        <Socket />

        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length}
            overscanRowCount={3} />
        </div>
      </div>
    );
  }
}

export default App;
