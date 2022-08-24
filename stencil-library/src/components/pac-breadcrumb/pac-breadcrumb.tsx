import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-breadcrumb',
  styleUrl: 'pac-breadcrumb.css',
  shadow: true,
})
export class PacBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
