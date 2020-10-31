import {LitElement, html, customElement} from 'lit-element';

/**
 * A custom button element.
 */
@customElement('my-button')
export class MyButton extends LitElement {
  render() {
    return html`
      <button>My button</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
