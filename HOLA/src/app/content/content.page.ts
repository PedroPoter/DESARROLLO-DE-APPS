import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, IonTitle, IonToolbar,IonContent  } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  imports: [ IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent ]
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
