'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';

interface FormData {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  consent: boolean;
}

const CareerForm: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      position: '',
      phone: '',
      message: '',
    },
  });

  const [isFullNameInvalid, setIsFullNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);

  const onSubmit = (data: FormData) => {
    if (data.consent && !isFullNameInvalid && !isEmailInvalid && !isPhoneInvalid) {
      const phoneWithCode = '+38' + data.phone;
      console.log('Consent given:', { ...data, phone: phoneWithCode });
    } else {
      console.log('Not agree!');
    }
  };

  const onFullNameChange = (value: string) => {
    const isValid = /^[a-zA-Zа-яА-Я]{2,}$/.test(value);
    setIsFullNameInvalid(!isValid);
  };
  const onEmailChange = (value: string) => {
    const isValid = /^[a-zA-Zа-яА-Я0-9]+@[a-zA-Zа-яА-Я0-9]+\.[A-Za-zа-яА-Я]+$/.test(value);
    setIsEmailInvalid(!isValid);
  };
  const onPhoneChange = (value: string) => {
    const isValid = /^[0-9\s()+-]+$/.test(value) && value.replace(/[^0-9]/g, '').length === 10;
    setIsPhoneInvalid(!isValid);
  };

  const isFormSubmitted = formState.isSubmitted && !formState.isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="relative">
        <label
          htmlFor="fullName"
          className={clsx(
            'label',
            (isFullNameInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
          )}
        >
          Full Name
        </label>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*[a-zA-Zа-яА-Я]).{2,}$/,
          }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={clsx(
                'input',
                (isFullNameInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
              )}
              placeholder="John Smith"
              onChange={e => {
                field.onChange(e);
                onFullNameChange(e.target.value);
              }}
            />
          )}
        />
        {(isFullNameInvalid || (isFormSubmitted && !formState.isValid)) && (
          <span className="error error-text label">X Incorrect name</span>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className={clsx(
            'label',
            (isEmailInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
          )}
        >
          E-mail
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className={clsx(
                'input',
                (isEmailInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
              )}
              placeholder="johnsmith@email.com"
              onChange={e => {
                field.onChange(e);
                onEmailChange(e.target.value);
              }}
            />
          )}
        />
        {(isEmailInvalid || (isFormSubmitted && !formState.isValid)) && (
          <span className="error error-text label">X Incorrect email</span>
        )}
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

      <div className="relative">
        <label
          htmlFor="phone"
          className={clsx(
            'label',
            (isPhoneInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
          )}
        >
          Phone
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="tel"
              className={clsx(
                'input  phone',
                (isPhoneInvalid || (isFormSubmitted && !formState.isValid)) && 'error'
              )}
              placeholder="(097) 12 34 567"
              onChange={e => {
                field.onChange(e);
                onPhoneChange(e.target.value);
              }}
            />
          )}
        />
        <span className="absolute left-2 bottom-0 font-[13px] leading-[1.85]">+ 38</span>
        {(isPhoneInvalid || (isFormSubmitted && !formState.isValid)) && (
          <span className="error error-text label">X Incorrect name</span>
        )}
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

      <button type="submit" className="block w-auto ml-auto">
        SEND
      </button>
    </form>
  );
};

export default CareerForm;
