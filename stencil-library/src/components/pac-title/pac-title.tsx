import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-title',
  styleUrl: 'pac-title.css',
  shadow: true,
})
export class PacTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
