import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-viewing-restrictions',
  styleUrl: 'mynt-viewing-restrictions.css',
  shadow: true,
})
export class MyntViewingRestrictions {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
