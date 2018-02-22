import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | leak', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /leak', async function(assert) {
    await visit('/leak');
    assert.equal(currentURL(), '/leak');
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});
