import { Component } from '@angular/core';
import { RouterOutlet, OutletContext } from '@angular/router';
import { 
  //slider, 
  //transfromer,
   fader, 
   //stepper 
  } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    //slider, 
    //transfromer, 
    fader, 
    //stepper
  ]
})
export class AppComponent {
  title = 'angular-project';

  prepareRoute(outlet: RouterOutlet){
    
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
