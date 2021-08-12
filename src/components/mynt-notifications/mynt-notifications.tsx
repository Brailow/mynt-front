import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-notifications',
  styleUrl: 'mynt-notifications.css',
  shadow: true,
})
export class MyntNotifications {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
