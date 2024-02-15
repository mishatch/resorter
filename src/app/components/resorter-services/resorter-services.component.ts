import { Component } from '@angular/core';

@Component({
  selector: 'app-resorter-services',
  templateUrl: './resorter-services.component.html',
  styleUrl: './resorter-services.component.scss'
})
export class ResorterServicesComponent {
services = [
    {
        name: 'Spa',
        content: 'Relax and rejuvenate with our spa services.'
    },
    {
        name: 'Golf',
        content: 'Enjoy a round of golf on our beautiful course.'
    },
    {
        name: 'Dining',
        content: 'Savor a delicious meal at our on-site restaurant.'
    },
    {
        name: 'Pool',
        content: 'Take a dip in our refreshing pool.'
    },
    {
        name: 'Fitness Center',
        content: 'Stay in shape with our state-of-the-art fitness center.'
    },
    {
        name: 'Tennis',
        content: 'Play a game of tennis on our well-maintained courts.'
    }
];
}
