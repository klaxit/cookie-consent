import EventEmitter from "events"

const emitter = new EventEmitter()

export default class Observable {
  constructor() {
    this.on = emitter.on.bind( emitter )
    this.emit = emitter.emit.bind( emitter )
  }
}