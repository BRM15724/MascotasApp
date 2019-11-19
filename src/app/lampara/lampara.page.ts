import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-lampara',
  templateUrl: './lampara.page.html',
  styleUrls: ['./lampara.page.scss'],
})
export class LamparaPage {

  constructor( private flashlight: Flashlight ) {
  }

  switchFlash( evento ) {

    const power: boolean = evento.target.checked;
    if (power) {
      console.log('On');
      this.flashlight.switchOn();
    } else {
      console.log('Off');
      this.flashlight.switchOff();
    }
  }
}
