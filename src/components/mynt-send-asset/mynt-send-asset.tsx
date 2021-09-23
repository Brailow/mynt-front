import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-send-asset',
  styleUrl: 'mynt-send-asset.css',
  shadow: true,
})
export class MyntSendAsset {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
