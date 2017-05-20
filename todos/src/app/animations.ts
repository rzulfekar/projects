import { trigger, state, style, transition, animate } from '@angular/core';

export const pageTransition = 
    trigger('transition', [

        state('in', style({transform: 'translateY(0)', opacity: '0'})),

        transition('void => *', [
            style({transform: 'translateX(100%)', opacity: '1', zIndex:'-1'}),
            animate(300)
        ])
    ]);