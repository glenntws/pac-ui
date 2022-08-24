import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-header',
  styleUrl: 'pac-header.css',
  shadow: true,
})
export class PacHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
