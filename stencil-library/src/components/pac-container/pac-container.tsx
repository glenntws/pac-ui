import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-container',
  styleUrl: 'pac-container.scss',
  shadow: true,
})
export class PacContainer {

  @Prop()
  look: "solid" | "inset" = "inset";

  @Prop()
  color: Color = "gray";

  render() {
    return (
      <Host class={"color-" + this.color + " look-" + this.look}>
        <slot></slot>
      </Host>
    );
  }

}
