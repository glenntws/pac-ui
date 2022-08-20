import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-list-header',
  styleUrl: 'pac-list-header.scss',
  shadow: true,
})
export class PacListHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
