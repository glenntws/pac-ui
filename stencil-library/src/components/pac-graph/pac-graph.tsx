import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-graph',
  styleUrl: 'pac-graph.css',
  shadow: true,
})
export class PacGraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
