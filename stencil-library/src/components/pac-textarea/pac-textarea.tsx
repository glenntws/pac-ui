import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-textarea',
  styleUrl: 'pac-textarea.css',
  shadow: true,
})
export class PacTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
