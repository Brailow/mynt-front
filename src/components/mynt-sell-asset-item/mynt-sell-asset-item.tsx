import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-sell-asset-item',
  styleUrl: 'mynt-sell-asset-item.css',
  shadow: true,
})
export class MyntSellAssetItem {

  render() {
    return (
      <ion-item>
        <ion-checkbox></ion-checkbox>
        <ion-label>Logan Coin</ion-label>
        <ion-label>Quantity: </ion-label>
        <ion-input></ion-input>
        <ion-toggle>All</ion-toggle>
      </ion-item>
    );
  }

}
