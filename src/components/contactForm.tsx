'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@components/ui/textarea';
import {
  isFormServiceConfigured,
  openEmailDraft,
  submitForm,
} from '@lib/forms';
import { useToast } from '@src/hooks/useToast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  botcheck: boolean;
}

const ContactForm = () => {
  const { t } = useTranslation();

  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    const subject = `Contact form submission - by ${data.email}`;

    if (!isFormServiceConfigured) {
      openEmailDraft(
        subject,
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`,
      );
      return;
    }

    setIsLoading(true);
    const sent = await submitForm({
      subject,
      from_name: 'SKY Society website',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      botcheck: data.botcheck ? 'on' : '',
    });
    setIsLoading(false);
    if (sent) {
      // Handle success
      reset();
      toast({
        title: 'Message sent successfully',
        description: 'We will get back to you soon',
      });
    } else {
      // Handle error
      toast({
        title: 'Something went wrong',
        description: 'Please try again later',
      });
    }
  };

  return (
    <div className="w-full lg:max-w-[650px] md:mac-w-md mx-auto">
      <h2 className="font-bold py-6">{t('contactUsTitle')}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 lg:space-y-6"
      >
        <div className="space-y-2">
          {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder={t('namePlaceholder')}
            className={`h-10 border-2 border-gray-400 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          {/* <Label htmlFor="email">Email</Label> */}
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            placeholder={t('emailPlaceholder')}
            className={`h-10 border-2 border-gray-400 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          {/* <Label htmlFor="phone">Phone Number</Label> */}
          <Input
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\+65\s?\d{8}$|^\d{8}$/,
                message: 'Invalid phone number',
              },
            })}
            placeholder={t('phonePlaceholder')}
            className={`h-10 border-2 border-gray-400 ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          {/* <Label htmlFor="message">Message</Label> */}
          <Textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            placeholder={t('messagePlaceholder')}
            className={`min-h-[100px] border-2 border-gray-400 ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot: hidden from people, bots that tick it are rejected */}
        <input
          type="checkbox"
          {...register('botcheck')}
          className="hidden"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full flex flex-row items-center justify-center"
        >
          {isLoading ? (
            <div className="flex flex-row items-center justify-center gap-4">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <span>Sending...</span>
            </div>
          ) : (
            `${t('sendMessage')}`
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
