import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-dms',
  styleUrl: 'mynt-dms.css',
  shadow: true,
})
export class MyntDms {

  render() {
    return (
    <ion-card>
      <ion-list>
        <ion-list-header>
          <h1>Direct Messages</h1>
        </ion-list-header>
        <mynt-dm profImg="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" name="LoganCoin"></mynt-dm>
        <mynt-dm profImg="https://cryptologos.cc/logos/bitcoin-btc-logo.png" name="CryptoCoin"></mynt-dm>
      </ion-list>
    </ion-card>
    );
  }

}
