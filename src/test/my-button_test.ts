import {MyButton} from '../my-button';
import {expect, fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('my-button', () => {
  test('is defined', () => {
    const el = document.createElement('my-button');
    assert.instanceOf(el, MyButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<my-button></my-button>`);
    assert.shadowDom.equal(
      el,
      `Click me!`
    );

    expect(el).shadowDom.to.equalSnapshot();
  });
});