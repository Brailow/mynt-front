import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-assets',
  styleUrl: 'mynt-assets.css',
  shadow: true,
})
export class MyntAssets {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
