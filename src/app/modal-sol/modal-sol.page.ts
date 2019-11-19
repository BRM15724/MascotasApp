import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-sol',
  templateUrl: './modal-sol.page.html',
  styleUrls: ['./modal-sol.page.scss'],
})
export class ModalSolPage implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(private Fbuilder: FormBuilder,
              private modalCtrl: ModalController,
              public alertCtrl: AlertController) {
                this.addForm = this.Fbuilder.group({
                  nombre: ['', Validators.required],
                  apellidoP: ['', Validators.required],
                  apellidoM: ['', Validators.required],
                  patio: ['', Validators.required],
                  numMascotas: ['', Validators.required],
                  correo: ['', [Validators.required, Validators.email]],
                  telefono: ['', Validators.required]
                });
              }

  ngOnInit() {
  }

  async enviar( datos ) {
    console.log(datos);
    const alert = await this.alertCtrl.create({
      header: 'Gracias por su Solicitud',
      subHeader: '',
      message: 'Estimad@ ' + datos.nombre + ' ' + datos.apellidoP +
      ', su solicitud fue enviada con exito, responderemos a la misma al correo ' +
      datos.correo + ' lo antes posible.',
      buttons: ['OK']
    });

    await alert.present();
    this.modalCtrl.dismiss();
  }

  salirAdd() {
    this.modalCtrl.dismiss();
  }

}
