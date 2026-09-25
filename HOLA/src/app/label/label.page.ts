import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
  styleUrls: ['./label.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonItem, IonLabel]
})
export class LabelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
