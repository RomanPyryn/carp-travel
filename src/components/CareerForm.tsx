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

  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({
    fullName: false,
    email: false,
    phone: false,
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

  const onFieldBlur = (fieldName: string) => {
    setTouchedFields(prevState => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const isFormSubmitted = formState.isSubmitted && !formState.isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="relative">
        <label
          htmlFor="fullName"
          className={clsx(
            'label',
            isFullNameInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
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
                isFullNameInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
              )}
              placeholder="John Smith"
              onBlur={() => {
                field.onBlur();
                onFullNameChange(field.value); // перевірка валідності під час втрати фокусу
                onFieldBlur('phone'); // позначка, що поле було доторкнуте
							}}
							onChange={e => {
                field.onChange(e);
                setIsFullNameInvalid(false); // Прибираємо помилку при введенні тексту
              }}
            />
          )}
        />
        {isFullNameInvalid && (touchedFields.phone || isFormSubmitted) && (
          <span className="error error-text label">X Incorrect name</span>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className={clsx(
            'label',
            isEmailInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
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
                isEmailInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
              )}
              placeholder="johnsmith@email.com"
              onBlur={() => {
                field.onBlur();
                onEmailChange(field.value);
                onFieldBlur('email');
              }}
              onChange={e => {
                field.onChange(e);
                setIsEmailInvalid(false); // Прибираємо помилку при введенні тексту
              }}
            />
          )}
        />
        {isEmailInvalid && (touchedFields.phone || isFormSubmitted) && (
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
            isPhoneInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
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
                isPhoneInvalid && (touchedFields.phone || isFormSubmitted) && 'error'
              )}
              placeholder="(097) 12 34 567"
              onBlur={() => {
                field.onBlur();
                onPhoneChange(field.value); // перевірка валідності під час втрати фокусу
                onFieldBlur('phone'); // позначка, що поле було доторкнуте
							}}
							onChange={e => {
                field.onChange(e);
                setIsPhoneInvalid(false); // Прибираємо помилку при введенні тексту
              }}
            />
          )}
        />
        <span className="absolute left-2 bottom-0 font-[13px] leading-[1.85]">+ 38</span>
        {isPhoneInvalid && (touchedFields.phone || isFormSubmitted) && (
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
