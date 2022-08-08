import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-input',
  styleUrl: 'pac-input.css',
  shadow: true,
})
export class PacInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
