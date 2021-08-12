import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-menu',
  styleUrl: 'mynt-menu.css',
  shadow: true,
})
export class MyntMenu {

  //ask Ben about loading and different URLs
  //should I integrate this with a router?
  //should I put an ion-nav in each tab here?
  //dunno why the logo isn't working

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="mynts" component="mynt-feed">
        </ion-tab>
        <ion-tab tab="watch" component="mynt-watch">
        </ion-tab>
        <ion-tab tab="market">
        </ion-tab>
        <ion-tab tab="assets">
        </ion-tab>

        <ion-tab-bar slot="top">
          <mynt-logo></mynt-logo>
          <ion-label>mynt</ion-label>
          <ion-searchbar></ion-searchbar>
          <ion-tab-button tab="mynts">
            <ion-label>Mynts</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="watch">
            <ion-label>Media</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="market">
            <ion-label>Market</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="assets">
            <ion-label>Assets</ion-label>
          </ion-tab-button>
          <ion-button>Create Account</ion-button>
          <ion-button>Sign In</ion-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
