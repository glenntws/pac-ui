import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-sidebar',
  styleUrl: 'pac-sidebar.css',
  shadow: true,
})
export class PacSidebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
