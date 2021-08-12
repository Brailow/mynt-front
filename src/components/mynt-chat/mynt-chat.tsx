import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-chat',
  styleUrl: 'mynt-chat.css',
  shadow: true,
})
export class MyntChat {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
