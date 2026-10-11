import { create } from 'zustand';
import { BookingFormData } from '../types';

interface BookingState {
  currentBooking: Partial<BookingFormData>;
  updateBooking: (data: Partial<BookingFormData>) => void;
  resetBooking: () => void;
  step: number;
  setStep: (step: number) => void;
}

const initialBookingState: Partial<BookingFormData> = {
  passengers: 1,
};

export const useBookingStore = create<BookingState>((set) => ({
  currentBooking: initialBookingState,
  step: 1,
  updateBooking: (data) => set((state) => ({ 
    currentBooking: { ...state.currentBooking, ...data } 
  })),
  resetBooking: () => set({ currentBooking: initialBookingState, step: 1 }),
  setStep: (step) => set({ step }),
}));
