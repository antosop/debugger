'use babel';

import {CompositeDisposable, Disposable} from 'atom';

export default {
  subscriptions: null,
  provider: null,

  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'debugger:start-resume': this.startOrResume,
      'debugger:pause': this.pause,
      'debugger:stop': this.stop,
      'debugger:toggle-breakpoint': this.toggleBreakpoint,
      'debugger:step-next': this.stepNext,
      'debugger:step-in': this.stepIn,
      'debugger:step-out': this.stepOut,
    }));

    if (this.provider && this.provider.customCommands) {
      this.subscriptions.add(atom.commands.add('atom-workspace',
        this.provider.customCommands));
    }
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  startOrResume() {
    console.log('start');
  },

  pause(){
    console.log('pause');
  },

  stop(){
    console.log('stop');
  },

  toggleBreakpoint(){
    console.log('toggle breakpoint');
  },

  stepNext(){
    console.log('step next');
  },

  stepIn(){
    console.log('step in');
  },

  stepOut(){
    console.log('step out');
  },

  consumeProvider(provider) {
    this.provider = provider;
    return new Disposable(() => {
      this.provider = null;
    });
  },
};
