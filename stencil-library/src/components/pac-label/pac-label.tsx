import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-label',
  styleUrl: 'pac-label.css',
  shadow: true,
})
export class PacLabel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
