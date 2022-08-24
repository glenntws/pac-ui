import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-breadcrumbs',
  styleUrl: 'pac-breadcrumbs.css',
  shadow: true,
})
export class PacBreadcrumbs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
