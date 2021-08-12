import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-market',
  styleUrl: 'mynt-market.css',
  shadow: true,
})
export class MyntMarket {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
