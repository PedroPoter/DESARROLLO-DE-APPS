import { Injectable, signal } from '@angular/core';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo
} from '@capacitor/camera';

import { ToastController } from '@ionic/angular';

import { UserPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosSignal = signal<UserPhoto[]>([]);

  public readonly photos = this.photosSignal.asReadonly();

  constructor(
    private toastController: ToastController
  ) {}

  async takeNewPhoto(highDef: boolean = false): Promise<void> {

    try {

      const permissionStatus = await Camera.checkPermissions();

      if (permissionStatus.camera !== 'granted') {

        const request = await Camera.requestPermissions({
          permissions: ['camera']
        });

        if (request.camera !== 'granted') {

          console.warn('Permiso de cámara denegado.');

          return;
        }
      }

      const capturedPhoto: Photo = await Camera.getPhoto({

        resultType: CameraResultType.Uri,

        source: CameraSource.Prompt,

        quality: highDef ? 100 : 85,

        allowEditing: false,

        width: highDef ? 1920 : 1280

      });

      const newPhoto: UserPhoto = {

        filepath: `${Date.now()}.${capturedPhoto.format}`,

        webPath: capturedPhoto.webPath,

        format: capturedPhoto.format

      };

      this.photosSignal.update(photos => [

        newPhoto,

        ...photos

      ]);

      const toast = await this.toastController.create({

        message: 'Fotografía agregada correctamente 📸',

        duration: 2000,

        position: 'bottom'

      });

      await toast.present();

    } catch (error: any) {

      if (
        error?.message?.includes('cancelled') ||
        error?.message?.includes('User cancelled')
      ) {

        console.log('El usuario canceló la selección.');

        return;
      }

      console.error(
        'Error al utilizar la cámara:',
        error
      );

    }
  }

  deletePhoto(index: number): void {

    this.photosSignal.update(

      photos => photos.filter((_, i) => i !== index)

    );

  }
}