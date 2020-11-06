import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * A custom button element.
 */
@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
      border: 3px solid #70a5e0;
      border-radius: 64px;
      box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .75);
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: sans-serif;
      font-size: 32px;
      font-weight: bold;
      padding: 16px 32px;
      user-select: none;
    }

    :host(:focus) {
      outline: none;
      border-color:#1e5799;
    }

    :host(:hover) {
      background: linear-gradient(to bottom, #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);
      color: #1e5799;
      text-shadow: none;
    }

    :host(:active) {
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, .75);
      transform: translateY(2px);
    }
  `;
  /**
   * The label of the button
   */
  @property()
  label = 'Click me!';

  render() {
    return html`${this.label}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
