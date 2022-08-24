import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-chart',
  styleUrl: 'pac-chart.css',
  shadow: true,
})
export class PacChart {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
