import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-label',
  styleUrl: 'pac-label.scss',
  shadow: true,
})
export class PacLabel {

  @Prop()
  position: "fixed" | "stacked" = "fixed";

  render() {
    return (
      <Host class={"position-" + this.position}>
        <slot></slot>
      </Host>
    );
  }

}
