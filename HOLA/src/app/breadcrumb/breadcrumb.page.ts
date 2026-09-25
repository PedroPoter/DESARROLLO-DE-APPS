import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonBreadcrumb} from '@ionic/angular';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.page.html',
  styleUrls: ['./breadcrumb.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBreadcrumb, IonBreadcrumb]
})
export class BreadcrumbPage {

  constructor() { }


}
