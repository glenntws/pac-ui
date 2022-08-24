import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'pac-card',
  styleUrl: 'pac-card.scss',
  shadow: true,
})
export class PacCard {

  @Prop()
  look: "solid" | "inset" = "solid";

  @Prop()
  contentPosition: "overlaying" | "below" = "below";

  @Prop()
  color: Color = "gray";

  @State()
  isClickable: boolean;

  @Element()
  nativeElement: HTMLElement;

  render() {
    
    // Check if div is clickable
    this.isClickable = (typeof this.nativeElement.onclick == "function");

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
