"use strict"

import EventEmitter from "events"

export default class Observable {
  constructor(emitter = null) {
    this._emitter = emitter || new EventEmitter()
  }

  on() { this._emitter.on.apply(this._emitter, arguments)}
  emit() { this._emitter.emit.apply(this._emitter, arguments)}
}
