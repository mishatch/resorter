export interface Filter {
    "start_date": string,
    "end_date": string,
    "pick_up": string,
    "min_price": number,
    "max_price": number,
    "body_types": string[],
    "fuels": string[],
    "drives": string[],
    "transmission": string,
    "year": number,
    "fuel_consumption_min": number,
    "fuel_consumption_max": number,
    "engine_type_min": number,
    "engine_type_max": number
}