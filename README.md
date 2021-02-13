# Zen Store ☮️

A simple reactive state store

## installation
```bash
yarn add @zenstack/zen-store
```
or
```bash
npm install @zenstack/zen-store
```

## Usage

### Create A State Store
```javascript
import { createStateStore } from "@zenstack/zen-store";
const initialState = 0;
const stateStore = createStateStore(initialState);

//you can also use a class if you are object oriented
import { StateStore } from "@zenstack/zen-bus";
const initialState = 0;
const stateStore = new StateStore(initialState);
```

### Retrieve State
The store offers an API, `.getState()` to retrieve the current state
```javascript
const currentState = store.getState();
```

### Update State
The store offers an API, `.setState(:newState)` to update the state
```javascript
const newState = 5;
store.setState(newState);
```

### Subscribe To State
The store offers an API, `.subscribe(:handler)` to subscribe to updates in the store.
The `.subscribe(:handler)` returns an unsubscribe function that can be executed to detach
the handler from the event.
```javascript
const logState = (state) => console.log(state);

// .subscribe() returns an unsubscribe method
const unsubscribe = store.subscribe(logState);

// logState will be triggered
store.setState('some new state');

// logState will not be triggered after unsubscribing
unsubscribe();
store.setState('some other new state');
```


