'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactsForm: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({
    fullName: false,
    email: false,
  });

  const [isFullNameInvalid, setIsFullNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const onSubmit = (data: FormData) => {
    if (!isFullNameInvalid && !isEmailInvalid) {
      toast.success("Thank's! We will contact you soon");
      console.log('Form data:', data);
    } else {
      toast.error('Fill in the required fields');
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

  const onFieldBlur = (fieldName: string) => {
    setTouchedFields(prevState => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const isFormSubmitted = formState.isSubmitted && !formState.isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="smOnly:space-y-4 md:grid md:grid-cols-2 gap-5">
        <div className="space-y-4">
          <div className="relative">
            <label
              htmlFor="fullName"
              className={clsx(
                'label',
                isFullNameInvalid && (touchedFields.fullName || isFormSubmitted) && 'error'
              )}
            >
              Full Name *
            </label>
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={clsx(
                    'input',
                    isFullNameInvalid && (touchedFields.fullName || isFormSubmitted) && 'error'
                  )}
                  placeholder="John Smith"
                  onBlur={() => {
                    field.onBlur();
                    onFullNameChange(field.value);
                    onFieldBlur('fullName');
                  }}
                  onChange={e => {
                    field.onChange(e);
                    setIsFullNameInvalid(false);
                  }}
                />
              )}
            />
            {isFullNameInvalid && (touchedFields.fullName || isFormSubmitted) && (
              <span className="error error-text label">X Incorrect name</span>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className={clsx(
                'label',
                isEmailInvalid && (touchedFields.email || isFormSubmitted) && 'error'
              )}
            >
              E-mail *
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className={clsx(
                    'input',
                    isEmailInvalid && (touchedFields.email || isFormSubmitted) && 'error'
                  )}
                  placeholder="johnsmith@email.com"
                  onBlur={() => {
                    field.onBlur();
                    onEmailChange(field.value);
                    onFieldBlur('email');
                  }}
                  onChange={e => {
                    field.onChange(e);
                    setIsEmailInvalid(false);
                  }}
                />
              )}
            />
            {isEmailInvalid && (touchedFields.email || isFormSubmitted) && (
              <span className="error error-text label">X Incorrect email</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="label">
            Message
          </label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className="input min-h-[200px] md:min-h-[224px] xl:min-h-[268px]"
                style={{ resize: 'none' }}
              />
            )}
          />
        </div>
      </div>
      <button type="submit" className="btn-send">
        SEND
      </button>
    </form>
  );
};

export default ContactsForm;
