import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-login',
  styleUrl: 'mynt-login.css',
  shadow: true,
})
export class MyntLogin {

  render() {
    const enableBackdropDismiss = true;
    const showBackdrop = true;
    const shouldPropagate = false;

    return [
      // Backdrop that sets dynamic properties
      <ion-backdrop
        tappable={enableBackdropDismiss}
        visible={showBackdrop}
        stopPropagation={shouldPropagate}>
      </ion-backdrop>
    ];
  }

}
