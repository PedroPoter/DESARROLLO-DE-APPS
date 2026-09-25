import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IonHeader, IonToolbar, IonTitle, IonContent,
   IonList, IonItem, IonLabel }
  
    from '@ionic/angular';

@Component({ selector: 'app-lista', 
            templateUrl: './lista.page.html',
            imports: [ IonHeader, IonToolbar, IonTitle, IonContent,
                       IonList, IonItem, IonLabel, RouterLink ],

 }) export class ListaPage
  { constructor() {} }