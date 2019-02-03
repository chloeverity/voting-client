# Voting Client

Note: The server side of this project can be found [here](https://github.com/chloeverity/voting-server)

React/Redux tutorial by https://github.com/teropa

App that organises live votes, putting options together in pairs, like bracket voting. When there's just one left, that's the winner.

Will use 2 separate user interfaces: Voting UI and Results UI.

The system will consist of 2 applications, there's a browser app (React) that provides both the UIs, and a server app that handles the voting logic (Node). The communication between the two will be handled using WebSockets. Redux will be used to organise the application code on both the client and on the server. For holding the state we'll use Immutable data structures.

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
