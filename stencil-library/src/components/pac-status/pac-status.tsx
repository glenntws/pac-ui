import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pac-status',
  styleUrl: 'pac-status.scss',
  shadow: true,
})
export class PacStatus {

  @Prop()
  color: Color = "green";

  @Prop()
  mode: "off" | "on" | "blinking" = "on";

  render() {
    return (
      <Host>
        <div class={"color-" + this.color + " mode-" + this.mode}></div>
      </Host>
    );
  }

}
