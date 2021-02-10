interface Listener<S> {
  (state: S): void;
}

interface Unsubscriber {
  (): void;
}

class StateStore<S> {
  private state: S;
  private listeners: Listener<S>[] = [];

  private removeListener(listener: Listener<S>) {
    const listenerIndex = this.listeners.indexOf(listener);
    this.listeners.splice(listenerIndex, 1);
  }

  private executeListeners(state: S) {
    this.listeners.forEach(listener => listener(state));
  }

  constructor(initialState: S) {
    this.state = initialState;
  }

  setState(newState: S) {
    this.state = newState;
    this.executeListeners(newState);
  }

  getState(): S {
    return this.state;
  }

  subscribe(listener: Listener<S>): Unsubscriber {
    this.listeners.push(listener);
    return () => this.removeListener(listener);
  }
}

export default StateStore;
