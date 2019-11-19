import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-modal-loc',
  templateUrl: './modal-loc.page.html',
  styleUrls: ['./modal-loc.page.scss'],
})
export class ModalLocPage implements OnInit {
  addForm: FormGroup;
  submitted = false;

  image: string;

  map: GoogleMap;
  loading: any;

  public TiposMascotas;

  constructor(private Fbuilder: FormBuilder,
              private camera: Camera,
              public navCtrl: NavController,
              private alertController: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public platform: Platform) {
                this.addForm = this.Fbuilder.group({
                  descripcion: ['', Validators.required],
                  tipo: ['', Validators.required],
                  contacto: ['', Validators.required],
                  latitud: '',
                  longitud: '',
                });
              }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();

    this.TiposMascotas = [
      {tipo: 'Perro'},
      {tipo: 'Gato'},
      {tipo: 'Conejo'},
      {tipo: 'Tortuga'},
      {tipo: 'Ave'}
    ];
  }

  salirAdd() {
    this.navCtrl.navigateRoot('tabs/localizado');
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
      .then((imageData) => {
         this.image = 'data: image/jpeg;base64,' + ImageData;
      }, (err) => {
        console.log(err);
      }
      );
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 25.725639,
          lng: -100.315297
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null , 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      const marker: Marker = this.map.addMarkerSync({
        title: 'Posible mascota extraviada.',
        snippet: 'Enviaremos esta ubicacion!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
