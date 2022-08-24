import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-note',
  styleUrl: 'pac-note.css',
  shadow: true,
})
export class PacNote {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
