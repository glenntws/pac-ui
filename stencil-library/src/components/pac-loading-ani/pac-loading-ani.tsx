import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pac-loading-ani',
  styleUrl: 'pac-loading-ani.css',
  shadow: true,
})
export class PacLoadingAni {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
