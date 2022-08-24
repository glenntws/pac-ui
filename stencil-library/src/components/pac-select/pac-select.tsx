import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-select',
  styleUrl: 'pac-select.css',
  shadow: true,
})
export class PacSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
