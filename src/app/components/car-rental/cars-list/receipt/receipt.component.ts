import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  date: number = 3;
  takeTime: string = "2024-02-01";
    returnTime: string = "2024-02-10";
    takePlace: string = "Zestafoni";
}
