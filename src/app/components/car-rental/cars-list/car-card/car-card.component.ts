import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RentalFormService } from "../../../../modules/core/services/rental-form.service";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() image!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() allImages!: string[];
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
  @Input() id!: string;

  constructor(
      config: NgbCarouselConfig,
      private rentalFormService: RentalFormService
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

  private modalService = inject(NgbModal);
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: "lg" });
    this.rentalFormService.setId(this.id);
  }

  showNavigationArrows = true;
  showNavigationIndicators = false;
}
