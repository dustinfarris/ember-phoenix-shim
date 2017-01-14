import { module, test } from 'ember-qunit';

import {
  Channel,
  Socket,
  LongPoll,
  Ajax,
  Presence
} from 'phoenix';


module('Unit | vendor imports | phoenix');


test('it exports Channel', function(assert) {
  assert.ok(Channel);
});


test('it exports Socket', function(assert) {
  assert.ok(Socket);
});


test('it exports LongPoll', function(assert) {
  assert.ok(LongPoll);
});


test('it exports Ajax', function(assert) {
  assert.ok(Ajax);
});


test('it exports Presence', function(assert) {
  assert.ok(Presence);
});
