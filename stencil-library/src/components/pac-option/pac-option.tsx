import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-option',
  styleUrl: 'pac-option.css',
  shadow: true,
})
export class PacOption {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
