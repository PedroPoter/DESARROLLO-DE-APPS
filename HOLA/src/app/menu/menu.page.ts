import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenu, IonMenuButton, IonTitle, IonToolbar  } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, CommonModule, FormsModule, IonButtons,  IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar ]
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
