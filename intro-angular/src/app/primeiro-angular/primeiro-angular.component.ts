import { Component } from "@angular/core";

 @Component ({
   selector: "<primeiro-angular>",
   template:  `
   <p>Meu primeiro projeto {{framework}}</p>
   `
 })
 
 export class PrimeiroAngularComponent {
     framework = "Angular";

}

