import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-logo',
  styleUrl: 'mynt-logo.css',
  shadow: true,
})
export class MyntLogo {

  render() {
    return (
      <ion-img src="myntlogo.svg"></ion-img>
    );
  }

}
