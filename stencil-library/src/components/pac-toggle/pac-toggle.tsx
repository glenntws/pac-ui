import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pac-toggle',
  styleUrl: 'pac-toggle.scss',
  shadow: true
})
export class PacToggle {

  @Prop()
  color: Color = "blue";

  @Prop({mutable: true})
  enabled: boolean = false;

  @Event()
  pacToggle!: EventEmitter<boolean>;

  render() {
    return (
      <Host class={"color-" + this.color + (this.enabled ? " enabled" : "")} onClick={() => {this.enabled = !this.enabled; this.pacToggle.emit(this.enabled);}}>
        <div id="inner" class={this.enabled ? "enabled" : ""}></div>
      </Host>
    );
  }

}
