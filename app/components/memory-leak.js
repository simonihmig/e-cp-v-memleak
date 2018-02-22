import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  foo: [
    validator('presence', {
      presence: true
    }),
    validator('length', {
      min: 4
    })
  ]
});

export default class MemoryLeak extends Component.extend(Validations) {

}
