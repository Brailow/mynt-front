import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-page',
  styleUrl: 'mynt-page.css',
  shadow: true,
})
export class MyntPage {

  render() {
    return (
      <Host>
        <ion-grid>
        <ion-row>
          <slot name="side"></slot>
          <slot name="main"></slot>
        </ion-row>
      </ion-grid>
      </Host>
    );
  }

}
