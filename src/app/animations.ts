import { animate, animation, style, transition, trigger } from '@angular/animations';

export const fadeUpAnimation= animation( trigger('fadeUp' ,  [
    transition(':enter',[
      style({  opacity: 0, transform: 'translateY(320px)' }),
      animate('1.5s ease-out')
    ])
  ]));



  export const fadeAnimation= animation(trigger('fade' , [
    transition(':enter',[
      style({  opacity: 0, transform: 'translateY(-120px)' }),
      animate('1.5s ease-out')
    ])
  ]));