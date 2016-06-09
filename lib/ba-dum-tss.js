'use babel'

import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,

  activate (state) {
    this.audio = document.createElement('audio')
    this.audio.src = 'atom://ba-dum-tss/lib/ba-dum-tss.ogg'

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ba-dum-tss:bad-joke': () => this.baDumTss()
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  serialize () {
    return { }
  },

  baDumTss () {
    this.audio.currentTime = 0
    this.audio.play()
  }
}
