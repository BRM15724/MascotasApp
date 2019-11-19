import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-localizado',
  templateUrl: './localizado.page.html',
  styleUrls: ['./localizado.page.scss'],
})
export class LocalizadoPage implements OnInit {
  public mascotas;
  constructor( private modalControl: ModalController) { }

  ngOnInit() {
    this.mascotas = [
      {
        descripcion: 'Se localizó perrito color cafe con blanco en la colonia Universidad.',
        lat: 25.725639,
        lng: -100.315297,
        imagen: './assets/mascota1.jpg',
      },
      {
        descripcion: 'Tenemos un gato tipo salchicha, color gris con blanco, comuniquese al 818373737.',
        lat: 25.725639,
        lng: -100.315297,
        imagen: './assets/mascota2.jpg',
      },
      {
        descripcion: 'Se vio pasar a un perro color cafe, pelo largo, parece perdido, en la colonia Trabajadores.',
        lat: 25.725639,
        lng: -100.315297,
        imagen: './assets/mascota3.jpg',
      },
      {
        descripcion: 'Tenemos un gato color gris con blanco, no cuenta con placa, en espera de contacto del dueño.',
        lat: 25.725639,
        lng: -100.315297,
        imagen: './assets/mascota4.jpg',
      }
    ];
  }

}
