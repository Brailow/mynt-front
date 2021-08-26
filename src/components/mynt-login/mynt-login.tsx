import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-login',
  styleUrl: 'mynt-login.css',
  shadow: true,
})
export class MyntLogin {

  render() {

    return [
    <ion-card>
      <ion-item>
        <mynt-logo></mynt-logo>
        <ion-card-header>Log in to Mynt</ion-card-header>
      </ion-item>
      <ion-segment>
        <ion-segment-button>
          <ion-label>Login</ion-label>
        </ion-segment-button>
        <ion-segment-button>
          <ion-label>Sign Up</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-input placeholder="username"></ion-input>
      <ion-input placeholder="password"></ion-input>
      <ion-item>
        <ion-checkbox></ion-checkbox>
        <ion-label>I agree to the Terms and Conditions</ion-label>
      </ion-item>
    </ion-card>
    ];
  }

}
