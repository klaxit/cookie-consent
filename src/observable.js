"use strict"

import EventEmitter from "events"

export default class Observable {
  constructor() {
    const emitter = new EventEmitter()
    this.on = emitter.on.bind( emitter )
    this.emit = emitter.emit.bind( emitter )
  }
}