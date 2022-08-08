import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-badge',
  styleUrl: 'pac-badge.scss',
  shadow: true,
})
export class PacBadge {

  @Prop()
  color: "slate" | "gray" |
          "neutral" | "red" |
          "orange" | "yellow" |
          "green" | "emerald" |
          "teal" | "cyan" | "sky" |
          "blue" | "indigo" | "violet" |
          "purple" | "fuchsia" | "pink" | "rose" = "blue";

  @Prop()
  effect: "none" | "fast-glow" | "slow-glow" = "none";

  @Prop()
  text: string = "";

  render() {
    return (
      <Host class={"color-" + this.color + " effect-" + this.effect}>
        {this.text}
      </Host>
    );
  }

}
