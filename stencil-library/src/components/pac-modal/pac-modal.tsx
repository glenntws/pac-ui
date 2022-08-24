import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-modal',
  styleUrl: 'pac-modal.css',
  shadow: true,
})
export class PacModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
