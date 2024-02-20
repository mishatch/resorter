import {Component, inject, Input, TemplateRef} from '@angular/core';
import {NgbCarouselConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() allImages!: any;
  @Input() gearbox!: string;
  @Input() engine!: string;
  @Input() model!: string;
  @Input() year!: string;
  @Input() seats!: string;
  @Input() drive!: string;
  @Input() hp!: number;
  @Input() airbags!: number;
  @Input() airConditioning!: string;
  @Input() roof!: string;
  @Input() tank!: string;
  @Input() fuel!: string;
  @Input() wheelSide!: string;
  @Input() consumption!: string;
  @Input() interior!: string;
  @Input() windows!: number;
  @Input() abs!: boolean;
  @Input() esp!: boolean;
  @Input() ebd!: boolean;
  @Input() cruiseControl!: boolean;
  @Input() parkingAssist!: boolean;
  @Input() camera!: boolean;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  private modalService = inject(NgbModal);
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: "lg" }, );
  }
  showNavigationArrows = true;
  showNavigationIndicators = false;
}
