# Voting Client

Note: The server side of this project can be found [here](https://github.com/chloeverity/voting-server)

### How it currently works

1. A client sends an action to the server
2. The server hands the action to the Redux store
3. The store calls the reducer and the reducer executes the logic related to the action
4. The store updates its state based on the return value of the reducer
5. The store executes the listener function subscribed by the server
6. The server emits a 'state' event
7. All connected clients, including the one that initiated the original action, receive the new state.

### Aims for this project

* Improve my TDD instincts for React
* Get the hang of Redux
* Get a better understanding of WebSockets
* Get more familiar with Mocha and Chai
