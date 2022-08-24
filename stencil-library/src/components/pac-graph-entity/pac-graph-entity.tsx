import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-graph-entity',
  styleUrl: 'pac-graph-entity.css',
  shadow: true,
})
export class PacGraphEntity {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
