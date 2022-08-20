import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pac-tag',
  styleUrl: 'pac-tag.scss',
  shadow: true,
})
export class PacTag {

  @Prop()
  deletable: boolean = false;

  @Prop()
  color: Color = "blue";

  @Event()
  pacRemove!: EventEmitter<void>;

  render() {
    return (
      <Host class={"color-" + this.color}>
        <div id="icon">
          <slot name="icon"></slot>
        </div>
        <div id="text">
          <slot></slot>
        </div>
        {this.deletable ? 
          <div id="remove-btn" onClick={() => this.pacRemove.emit()}>
            <ion-icon name="close"></ion-icon>
          </div>
          : null
        }
      </Host>
    );
  }

}
