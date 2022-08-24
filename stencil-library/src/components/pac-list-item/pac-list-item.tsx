import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-list-item',
  styleUrl: 'pac-list-item.scss',
  shadow: true,
})
export class PacListItem {

  render() {
    return (
      <Host>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </Host>
    );
  }

}
