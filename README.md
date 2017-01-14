# ember-phoenix-shim

[![CircleCI](https://circleci.com/gh/dustinfarris/ember-phoenix-shim.svg?style=svg)](https://circleci.com/gh/dustinfarris/ember-phoenix-shim)

Use [phoenix.js](https://github.com/phoenixframework/phoenix) in your Ember project.


## Installation

```
ember install ember-phoenix-shim
```


## Usage

```javascript
import { Socket } from 'phoenix';

const socket = new Socket("/ws", { params: { userToken: "123" } })
socket.connect()
```


## Development

### Installation

* `git clone <repository-url>` this repository
* `cd ember-phoenix-shim`
* `yarn install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
