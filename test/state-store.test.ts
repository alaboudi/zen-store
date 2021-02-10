import StateStore from '../src/state-store';

describe('StateStore', () => {
  it('should create a store with the passed in initial state', () => {
    const initialState = Symbol('initial state');
    const store = new StateStore(initialState);
    expect(store.getState()).toBe(initialState);
  });

  describe('setState()', () => {
    it('should update the state and trigger listeners with updated state', () => {
      const initialState = 0;
      const newState = 1;
      const store = new StateStore(initialState);
      store.setState(newState);
      expect(store.getState()).toBe(newState);
    });
  });

  describe('subscribe()', () => {
    it('should execute the subscriber functions upon state update', () => {
      const initialState = 0;
      const firstNewState = 1;
      const secondNewState = 2;
      const fn1 = jest.fn(state => state);
      const fn2 = jest.fn(state => state);
      const store = new StateStore(initialState);

      const unsubscribeFn1 = store.subscribe(fn1);
      store.subscribe(fn2);
      store.setState(firstNewState);
      unsubscribeFn1();
      store.setState(secondNewState);

      expect(fn1).toBeCalledTimes(1);
      expect(fn1).toBeCalledWith(firstNewState);
      expect(fn2).toBeCalledTimes(2);
      expect(fn2).toBeCalledWith(firstNewState);
      expect(fn2).toBeCalledWith(secondNewState);
    });
  });
});
