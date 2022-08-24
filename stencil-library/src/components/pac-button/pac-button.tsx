import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-button',
  styleUrl: 'pac-button.scss',
  shadow: true,
})
export class PacButton {

  @Prop()
  color: "slate" | "gray" |
          "neutral" | "red" |
          "orange" | "yellow" |
          "green" | "emerald" |
          "teal" | "cyan" | "sky" |
          "blue" | "indigo" | "violet" |
          "purple" | "fuchsia" | "pink" | "rose" = "blue";

  @Prop()
  look: "solid" | "inset" | "clear" = "solid";

  @Prop()
  size: "small" | "normal" | "large" = "normal";

  @Prop()
  enabled: boolean = true;

  render() {
    console.log
    return (
      <Host class={"size-" + this.size + " " + (this.enabled ? "" : " disabled ") + " color-" + this.color + " look-" + this.look}>
        <slot name="start"></slot>
        <span><slot></slot></span>
        <slot name="end"></slot>
      </Host>
    );
  }

}
