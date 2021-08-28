import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-post',
  styleUrl: 'mynt-post.css',
  shadow: true,
})
export class MyntPost {

  @Prop() name: string = "";
  @Prop() user: string = "";
  @Prop() profPicSrc: string = "";
  @Prop() text= "";
  @Prop() mediaPicSrc: string = "";

  render() {
    return (
      <ion-card>
        <ion-card-header>
          <ion-item>
            <profile-pic source={this.profPicSrc}></profile-pic>
            <ion-card-title>{this.name}</ion-card-title>
          </ion-item>
          <ion-card-subtitle>{this.user}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {this.text}
        </ion-card-content>
        <ion-card-content>
          <ion-thumbnail>
            <ion-img src={this.mediaPicSrc}></ion-img>
          </ion-thumbnail>
        </ion-card-content>
        <ion-item>
          <ion-button slot="start"><ion-icon name="thumbs-up-outline"></ion-icon></ion-button>
          <ion-button slot="start"><ion-icon name="chatbox-outline"></ion-icon></ion-button>
          <ion-button slot="start"><ion-icon name="repeat-outline"></ion-icon></ion-button>
          <ion-button slot="end">Tip</ion-button>
          <ion-button slot="end">Buy Coin</ion-button>
        </ion-item>
      </ion-card>
    );
  }

}
