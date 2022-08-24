import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-alert',
  styleUrl: 'pac-alert.css',
  shadow: true,
})
export class PacAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
