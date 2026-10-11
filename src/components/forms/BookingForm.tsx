'use client';

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { LocationAutocompleteInput } from '../ui/LocationAutocompleteInput';
import { useBookingStore } from '../../store/useBookingStore';
import { Calendar, Clock, Car, Phone, CheckCircle2 } from 'lucide-react';

const bookingSchema = z.object({
  pickup: z.string().min(2, 'Start destination is required'),
  drop: z.string().min(2, 'End destination is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  passengers: z.string().min(5, 'Phone number is required'),
  vehicleCategoryId: z.string().min(1, 'Service / vehicle type is required'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const BookingForm = ({ variant = 'default' }: { variant?: 'default' | 'transparent-horizontal' }) => {
  const { updateBooking, currentBooking } = useBookingStore();
  const searchParams = useSearchParams();
  const requestedCategory = searchParams?.get('category');

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickup: currentBooking.pickup || '',
      drop: currentBooking.drop || '',
      date: currentBooking.date ? new Date(currentBooking.date).toISOString().split('T')[0] : '',
      time: currentBooking.time || '',
      passengers: '',
      vehicleCategoryId: currentBooking.vehicleCategoryId || requestedCategory || '',
    },
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  useEffect(() => {
    if (requestedCategory) {
      setValue('vehicleCategoryId', requestedCategory);
    }
  }, [requestedCategory, setValue]);

  const vehicleOptions = [
    { value: '', label: 'Select Service / Option' },
    { value: 'town', label: 'Taxi - Maruti Suzuki Dzire (Sedan)' },
    { value: 'hybrid', label: 'Taxi - Toyota Etios / Camry (Executive)' },
    { value: 'limousine', label: 'Taxi - Toyota Innova Crysta (7-Seater)' },
    { value: 'suv', label: 'Taxi - Maruti Ertiga / Mahindra XUV700 (SUV)' },
    { value: 'homestay', label: 'Stay - Homestay Accommodation' },
    { value: 'rented-house', label: 'Stay - Private Rented House' },
  ];

  const onSubmit = (data: BookingFormValues) => {
    updateBooking({
      ...data,
      date: new Date(data.date),
      passengers: parseInt(data.passengers, 10) || 1,
    });

    const selectedServiceLabel =
      vehicleOptions.find((opt) => opt.value === data.vehicleCategoryId)?.label || data.vehicleCategoryId;

    const message = [
      `*New Booking Request - Shrinika Travels*`,
      `----------------------------------`,
      `*Service / Option:* ${selectedServiceLabel}`,
      `*Start Destination:* ${data.pickup}`,
      `*End Destination:* ${data.drop}`,
      `*Date:* ${data.date}`,
      `*Time:* ${data.time}`,
      `*Customer Phone:* ${data.passengers}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/917353837847?text=${encodeURIComponent(message)}`;
    setLastWhatsappUrl(whatsappUrl);
    setSubmittedSuccess(true);

    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const isHorizontal = variant === 'transparent-horizontal';

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={
        isHorizontal 
        ? "w-full max-w-[1400px] mx-auto px-4" 
        : "bg-white p-6 shadow-xl rounded-xl w-full max-w-4xl mx-auto border-t-4 border-primary-500"
      }
    >
      {!isHorizontal && (
        <h3 className="text-2xl mb-6 text-center font-bold text-dark-950 uppercase tracking-tight">Book Your Ride or Stay</h3>
      )}
      
      <div className={
        isHorizontal
        ? "flex flex-col lg:flex-row gap-0 shadow-2xl rounded-sm bg-white items-stretch"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      }>
        <div className={isHorizontal ? "flex-1 border-r border-gray-200 relative" : "relative"}>
          <Controller
            name="pickup"
            control={control}
            render={({ field }) => (
              <LocationAutocompleteInput
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Start Destination (e.g. Bengaluru, Mysuru, Coorg)"
                error={errors.pickup?.message}
                className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white" : ""}
              />
            )}
          />
        </div>
        <div className={isHorizontal ? "flex-1 border-r border-gray-200 relative" : "relative"}>
          <Controller
            name="drop"
            control={control}
            render={({ field }) => (
              <LocationAutocompleteInput
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="End Destination (e.g. Chikkamagaluru, Udupi, Goa)"
                error={errors.drop?.message}
                className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white" : ""}
              />
            )}
          />
        </div>
        <div className={isHorizontal ? "flex-1 border-r border-gray-200" : ""}>
          <Input
            type="date"
            leftIcon={<Calendar className="h-5 w-5 text-gray-400" />}
            error={errors.date?.message}
            {...register('date')}
            className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white" : ""}
          />
        </div>
        <div className={isHorizontal ? "flex-1 border-r border-gray-200" : ""}>
          <Input
            type="time"
            leftIcon={<Clock className="h-5 w-5 text-gray-400" />}
            error={errors.time?.message}
            {...register('time')}
            className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white" : ""}
          />
        </div>
        <div className={isHorizontal ? "flex-1 border-r border-gray-200" : ""}>
          <Select
            leftIcon={<Car className="h-5 w-5 border-none p-0 text-gray-400" />}
            options={vehicleOptions}
            error={errors.vehicleCategoryId?.message}
            {...register('vehicleCategoryId')}
            className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white mt-0" : ""}
          />
        </div>
        <div className={isHorizontal ? "flex-1" : ""}>
          <Input
            type="tel"
            placeholder="Your Phone"
            leftIcon={<Phone className="h-5 w-5 text-gray-400" />}
            error={errors.passengers?.message}
            {...register('passengers')}
            className={isHorizontal ? "border-0 focus:ring-0 rounded-none h-14 bg-white" : ""}
          />
        </div>
      </div>

      {isHorizontal && (
        <div className="text-white mt-8 flex flex-col items-center max-w-[1400px] mx-auto text-sm">
           <Button type="submit" size="lg" className="px-14 py-4 rounded-full font-bold bg-[#A68A36] text-dark-950 hover:bg-[#8F762B] transition-colors uppercase border-transparent hover:border-transparent drop-shadow-2xl text-lg hover:-translate-y-1 transform">
             Book Now!
           </Button>
        </div>
      )}

      {!isHorizontal && (
        <div className="mt-6 flex justify-center">
          <Button type="submit" size="lg" className="px-12 w-full md:w-auto font-bold uppercase tracking-widest text-dark-950 transition-colors">
            Book Now!
          </Button>
        </div>
      )}

      {submittedSuccess && (
        <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-medium">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Redirecting to WhatsApp (+91 7353837847) with your booking details...</span>
          </div>
          {lastWhatsappUrl && (
            <a
              href={lastWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors text-xs uppercase tracking-wider shrink-0"
            >
              Open WhatsApp
            </a>
          )}
        </div>
      )}
    </form>
  );
};
