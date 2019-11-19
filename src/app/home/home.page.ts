import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSolPage } from '../modal-sol/modal-sol.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public mascotas;
  constructor( private modalControl: ModalController ) { }

  ngOnInit() {
    this.mascotas = [
      {
        nombre: 'Panfilo',
        tipo: 'Perro',
        raza: 'Mestizo',
        color: 'Blanco/Cafe',
        edad: '2 años',
        imagen: './assets/adopta1.jfif',
        audio: './assets/sonido1.mp3',
      },
      {
        nombre: 'Solovino',
        tipo: 'Perro',
        raza: 'Mestizo',
        color: 'Cafe',
        edad: '4 meses',
        imagen: './assets/adopta2.jfif',
        audio: './assets/sonido2.mp3',
      },
      {
        nombre: 'Blaky',
        tipo: 'Perro',
        raza: 'Labrador',
        color: 'Negro',
        edad: '3 años',
        imagen: './assets/adopta3.jfif',
        audio: './assets/sonido3.mp3',
      },
      {
        nombre: 'Locky',
        tipo: 'Perro',
        raza: 'Mestizo',
        color: 'Cafe',
        edad: '2 años',
        imagen: './assets/adopta4.jpg',
        audio: './assets/sonido4.mp3',
      }
    ];
  }

  public sonido( mascota ) {
    const audio = new Audio();
    const imagen = new Image();
    audio.src = mascota.audio;
    imagen.src = mascota.imagen;

    audio.load();
    audio.play();
  }

  async  EnviaSolicitud() {
    const modal = await this.modalControl.create({
      component: ModalSolPage,
      componentProps: {
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('Retorno de modal:', data);
    }
  }


}
