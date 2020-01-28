import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  /* 
   * Capture the `x` and `y` coordinates of the mouse from the event
   * and use them to invoke the `drawChromeBoiAtCoords(x, y)` function.
  */
  handleMouseMove = event => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
  
  /* 
   * Invoke `toggleCycling` function with no arguments.
  */
  performCycling = () => {
    toggleCycling();
  }
   
  /* 
   * Event listener on the `<canvas>` element to capture when a key
   * is pressed. When a key is pressed, this event handler invokes 
   * `resize(arg)` function with a single argument of either '+' or '-'
   *   if the key pressed was 'a', then it should call `resize` with '+'
   *   if the key pressed was 's', then it should call `resize` with '-' 
  */
  adjustSize = evt => {
    switch (evt.key) {
      case "a":
        resize("+")
        break;

      case "s":
          resize("-")
        break;

      default:
        break;
    }
  }
  
  render() {
    return (
      <canvas 
        onKeyDown={this.adjustSize}
        onClick={this.performCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
