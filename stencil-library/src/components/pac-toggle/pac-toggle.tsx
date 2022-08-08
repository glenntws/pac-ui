import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-toggle',
  styleUrl: 'pac-toggle.css',
  shadow: true,
})
export class PacToggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
