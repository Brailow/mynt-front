import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-create-coin',
  styleUrl: 'mynt-create-coin.css',
  shadow: true,
})
export class MyntCreateCoin {

  render() {
    return (
      <ion-list>
        <ion-item>
          <ion-label>Documentation</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Feedback</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>
    );
  }

}
