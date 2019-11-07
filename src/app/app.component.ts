import { Component, OnInit } from '@angular/core';

// @Component({ 
//   selector: 'app-root',
//   templateUrl: './app.component.html',
// 	styleUrls: ['./app.component.scss']
// })
@Component({ 
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }
  
}