import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-toast',
  styleUrl: 'pac-toast.css',
  shadow: true,
})
export class PacToast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
