import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-message',
  styleUrl: 'mynt-message.css',
  shadow: true,
})
export class MyntMessage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
