import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-subtitle',
  styleUrl: 'pac-subtitle.css',
  shadow: true,
})
export class PacSubtitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
