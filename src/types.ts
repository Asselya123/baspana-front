export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
}

export interface Apartment {
  id: string;
  name: string;
  address: string;
  images: string[];
  object_code: string;
  floor: number;
  building_count: number;
  material: string;
  start_date: string;
  end_date: string;
  available_programs: string[];
  conditions: string[];
  description: string;
  has_balcony: boolean;
  is_balcony_glazed: boolean;
  home_type: string;
  bathroom_type: string;
  security: string;
  parking_type: string;
  elevator_type: string;
  cost_per_square_meter: number;
  builder: {
    icon: string;
    name: string;
    contacts: string;
    phone_number: string;
    site: string;
    email: string;
  };
}
