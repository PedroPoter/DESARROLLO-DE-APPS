import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
         IonAccordion, IonAccordionGroup, IonItem, IonLabel } 
         from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
            IonAccordion, IonAccordionGroup, IonItem, IonLabel]
})
export class AccordionPage  {

  constructor() { }

}
