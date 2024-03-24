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

  constructor(private fb: FormBuilder, private carsService: CarsService) {
    this.carsService.getCarOptions().subscribe((res) => {
        console.log(res);
        this.airConditioning = res.airConditioning;
        this.airbags = res.airbags;
        this.bodyColor = res.bodyColor;
        this.bodyType = res.bodyType;
        this.doors = res.doors;
        this.drive = res.drive;
        this.interior = res.interior;
        this.poweredWindows = res.poweredWindows;
        this.requiredLicense = res.requiredLicense;
        this.roof = res.roof;
        this.sideWheel = res.sideWheel;
        this.transmission = res.transmission;
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
