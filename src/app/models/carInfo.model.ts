export interface Car {
    body_color: string;
    brand: string;
    chassis: {
        abs: boolean;
        drive: string;
        ebd: boolean;
        esp: boolean;
        transmission: string;
    };
    discounted?: number;
    engine: {
        engine_type: string;
        fuel: string;
        fuel_consumption: string;
        horsepower: number;
        tank_capacity: string;
    };
    extra_services: [];
    id: string;
    image: {
        images: string[];
    };
    insurance: {
        deposit: boolean;
        deposit_amount: string;
        franchise: boolean;
        franchise_amount?: string;
    };
    license_plate: string;
    mileage_limit: {
        limit: string;
        overage_fee: string;
        unlimited: boolean;
    };
    model: string;
    music: string;
    price: number;
    specs: {
        air_conditioning: string;
        airbags: number;
        cruise_control: boolean;
        doors: string;
        interior: string;
        parking_assist: boolean;
        powered_windows: number;
        rear_view_camera: boolean;
        required_license: string;
        roof: string;
        seats: string;
        side_wheel: string;
    };
    year_of_manufacture: string;
}