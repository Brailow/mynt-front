import { Component, h } from '@stencil/core';


@Component({
  tag: 'create-coin',
  styleUrl: 'create-coin.css',
  shadow: true,
})
export class CreateCoin {

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
