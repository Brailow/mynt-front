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
          <ion-col>
            <ion-card><h1>Trending</h1></ion-card>
            <mynt-side-list ttle="Following"></mynt-side-list>
            <mynt-side-list ttle="Wallet"></mynt-side-list>
          </ion-col>
          <ion-col>
            <slot></slot>
          </ion-col>
        </ion-row>
      </ion-grid>
        
      </Host>
    );
  }

}
