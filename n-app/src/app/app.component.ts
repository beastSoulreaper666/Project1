import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from "@angular/animations";
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  template: `
  <p [@myAws]='state' (click)="animateMe()">I will animate</p>
  `,
  styles: [` 
  
  p{
    width:200px;
    background:lightgray;
    margin:100px auto;
    text-align:center;
    padding: 20px;
    font-size:1.5em;
  }`
   
  ],
  animations:[
    trigger('myAws',[
      state('small',style({
        transform: 'scale(1)',
      })),
      state('large',style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity:0, transform: 'translateY(-75%)',offset: 0}),
        style({opacity:1, transform: 'translateY(35px)',offset: .5}),
        style({opacity:1, transform: 'translateY(0)',offset: 1}),
      ]))),
    ]),
  ] 
})
export class AppComponent {
  title = 'n-app';
  state: string = 'small'
  animateMe(){
    this.state = (this.state === 'small' ? 'large': 'small');
  }
}
