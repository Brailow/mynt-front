import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-sell-asset',
  styleUrl: 'mynt-sell-asset.css',
  shadow: true,
})
export class MyntSellAsset {

  render() {
    return (
      <ion-card>
        <ion-list>
          <mynt-sell-asset-item></mynt-sell-asset-item>
        </ion-list>
      </ion-card>
    );
  }

}
