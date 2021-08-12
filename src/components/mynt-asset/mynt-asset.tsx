import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-asset',
  styleUrl: 'mynt-asset.css',
  shadow: true,
})
export class MyntAsset {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
