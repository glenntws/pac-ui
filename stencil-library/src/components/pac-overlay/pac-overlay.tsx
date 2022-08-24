import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-overlay',
  styleUrl: 'pac-overlay.css',
  shadow: true,
})
export class PacOverlay {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
