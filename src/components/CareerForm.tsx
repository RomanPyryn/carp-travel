'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  consent: boolean;
}

const CareerForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      position: '',
      phone: '+ 38 ',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.consent) {
      console.log('Consent given:', data);
    } else {
      console.log('Not agree!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 font-extralight">
      <div>
        <label htmlFor="fullName" className="label">
          Full Name
        </label>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className="input" placeholder="John Smith" />
          )}
        />
      </div>

      <div>
        <label htmlFor="email" className="label">
          E-mail
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input {...field} type="email" className="input" placeholder="johnsmith@email.com" />
          )}
        />
      </div>

      <div>
        <label htmlFor="position" className="label">
          Position
        </label>
        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" className="input" placeholder="Movie maker" />
          )}
        />
      </div>

      <div>
        <label htmlFor="phone" className="label">
          Phone
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input {...field} type="tel" className="input" placeholder=" (097) 12 34 567" />
          )}
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea {...field} className="input" rows={4} style={{ resize: 'none' }} />
          )}
        />
      </div>

      <div className="flex items-center">
        <Controller
          name="consent"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <label className="agreement text-[12px] leading-[1.84] pl-7">
              <input
                type="checkbox"
                className="checkbox visually-hidden"
                checked={field.value}
                onChange={field.onChange}
              />
              <span className="agreement-text">
                I confirm my consent to the processing of personal data.
              </span>
            </label>
          )}
        />
      </div>

      <button type="submit" className="btn ml-auto">
        SEND
      </button>
    </form>
  );
};

export default CareerForm;
