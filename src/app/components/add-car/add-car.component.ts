import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../modules/core/services/cars.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;
  airConditioning!: string[];
  airbags!: number[];
  bodyColor!: string[];
  bodyType!: string[];
  doors!: string[];
  drive!: string[];
  interior!: string[];
  poweredWindows!: string[];
  requiredLicense!: string[];
  roof!: string[];
  sideWheel!: string[];
  transmission!: string[];
  tariffs!: any;
  seasons!: any;

  constructor(private fb: FormBuilder, private carsService: CarsService) {
    this.carsService.getCarOptions().subscribe((res) => {
        console.log(res);
        this.airConditioning = res.select_fields.airConditioning;
        this.airbags = res.select_fields.airbags;
        this.bodyColor = res.select_fields.bodyColor;
        this.bodyType = res.select_fields.bodyType;
        this.doors = res.select_fields.doors;
        this.drive = res.select_fields.drive;
        this.interior = res.select_fields.interior;
        this.poweredWindows = res.select_fields.poweredWindows;
        this.requiredLicense = res.select_fields.requiredLicense;
        this.roof = res.select_fields.roof;
        this.sideWheel = res.select_fields.sideWheel;
        this.transmission = res.select_fields.transmission;
        this.tariffs = res.tariffs;
        this.seasons = res.seasons;
    });
  }
  ngOnInit() {
    this.addCarForm = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', Validators.required],
      licensePlate: ['', Validators.required],
      year: [2000, Validators.required],
      bodyColor: ['White'],
      bodyType: ['Sedan'],
      limit: ['', Validators.required],
      overageFee: ['', Validators.required],
      radio: [false],
      aux: [false],
      bluetooth: [false],
      audio_cd: [false],
      usb: [false],
      mp3: [false],
      franchise: [false],
      franchiseAmount: [''],
      deposit: [false],
      depositAmount: [''],
      engineType: ['', Validators.required],
      horsepower: ['', Validators.required],
      fuel: ['', Validators.required],
      tankCapacity: ['', Validators.required],
      fuelConsumption: ['', Validators.required],
      transmission: ['Manual', Validators.required],
      drive: ['Front Wheel', Validators.required],
      abs: [false],
      esp: [false],
      ebd: [false],
      requiredLicense: ['A1', Validators.required],
      seats: ['', Validators.required],
      doors: ['2', Validators.required],
      airConditioning: ['1 Zone Climate Control', Validators.required],
      interior: ['Fabric', Validators.required],
      roof: ['Standard', Validators.required],
      poweredWindows: ['None', Validators.required],
      airbags: [1, Validators.required],
      sideWheel: ['Left', Validators.required],
      cruiseControl: [false],
      rearViewCamera: [false],
      parkingAssist: [false],

    });
  }
  onSubmit() {
    console.log(this.addCarForm.value);

    const formErrors: {[key: string]: any} = {};

    Object.keys(this.addCarForm.controls).forEach(key => {
      const controlErrors = this.addCarForm.get(key)?.errors;
      if (controlErrors != null) {
        formErrors[key] = controlErrors;
      }
    });

    console.log('Form errors:', formErrors);
  }
 get brand() {
    return this.addCarForm.get('brand');
  }
    get model() {
        return this.addCarForm.get('model');
    }
    get licensePlate() {
        return this.addCarForm.get('licensePlate');
    }
    get year() {
        return this.addCarForm.get('year');
    }
    get limit() {
        return this.addCarForm.get('limit');
    }
    get overageFee() {
        return this.addCarForm.get('overageFee');
    }
    get franchiseAmount() {
        return this.addCarForm.get('franchiseAmount');
    }
    get depositAmount() {
        return this.addCarForm.get('depositAmount');
    }
    get engineType() {
        return this.addCarForm.get('engineType');
    }
    get horsepower() {
        return this.addCarForm.get('horsepower');
    }
    get fuel() {
        return this.addCarForm.get('fuel');
    }
    get tankCapacity() {
        return this.addCarForm.get('tankCapacity');
    }
    get fuelConsumption() {
        return this.addCarForm.get('fuelConsumption');
    }
    get seats() {
        return this.addCarForm.get('seats');
    }
    get interiorField() {
        return this.addCarForm.get('interior');
    }
    get poweredWindowsField() {
        return this.addCarForm.get('poweredWindows');
    }


}
