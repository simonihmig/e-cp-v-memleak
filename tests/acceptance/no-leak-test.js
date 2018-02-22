import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | no leak', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /no-leak', async function(assert) {
    await visit('/no-leak');
    assert.equal(currentURL(), '/no-leak');
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});
