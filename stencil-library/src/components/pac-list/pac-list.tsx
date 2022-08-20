import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-list',
  styleUrl: 'pac-list.scss',
  shadow: true,
})
export class PacList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
