export type VehicleCategory = 'hybrid' | 'town' | 'limousine' | 'suv';

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: VehicleCategory;
  images: string[];
  passengerCapacity: number;
  luggageCapacity: number;
  hasAC: boolean;
  features: string[];
  pricing: {
    perKm: number;
    hourly: number;
    airportTransfer: number;
    outstation: number;
    baseRate: number;
  };
  description: string;
  specs: Record<string, string>;
  logo: string;
}

export interface BookingFormData {
  pickup: string;
  drop: string;
  date: Date | undefined;
  time: string;
  passengers: number;
  vehicleCategoryId: string;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  photo?: string;
  date: string;
}
