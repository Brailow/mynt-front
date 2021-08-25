import { Component, h, State } from '@stencil/core';
import { popoverController } from '@ionic/core';

@Component({
  tag: 'mynt-make-post',
  styleUrl: 'mynt-make-post.css',
  shadow: true,
})
export class MyntMakePost {

  @State() createACoin: boolean = false;
  @State() viewRestrictions: boolean = false;
  @State() sellAsset: boolean = false;
  @State() sendAsset: boolean = false;
  @State() markNSFW: boolean = false;

  render() {
    return (
      <ion-card>
        <ion-item>
          <profile-pic source="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg"></profile-pic>
          <ion-button shape="round" expand="block">What's on your mind?</ion-button>
          <ion-select placeholder="Public">
            <ion-select-option>Public</ion-select-option>
            <ion-select-option>Private</ion-select-option>
          </ion-select>
          <ion-button>Mynt</ion-button>
        </ion-item>
        <ion-item>
          <ion-button shape="round">
            <ion-icon name="folder-outline"></ion-icon>
            <ion-label>Add File</ion-label>
          </ion-button>
          <ion-label>No files currently added to mynt</ion-label>
        </ion-item>
        <ion-item>
          <ion-toggle checked={this.createACoin}></ion-toggle><ion-label>Create a Coin</ion-label>
          <ion-toggle checked={this.viewRestrictions}></ion-toggle><ion-label>Viewing Restrictions</ion-label>
          <ion-toggle checked={this.sellAsset}></ion-toggle><ion-label>Sell an Asset</ion-label>
          <ion-toggle checked={this.sendAsset}></ion-toggle><ion-label>Send an Asset</ion-label>
          <ion-toggle checked={this.markNSFW}></ion-toggle><ion-label>Mark as NSFW</ion-label>
        </ion-item>
      </ion-card>
    );
  }

}

