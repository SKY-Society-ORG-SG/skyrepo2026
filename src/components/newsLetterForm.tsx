'use client';

import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { gsap } from 'gsap';
import { FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/ui/button';
import {
  isFormServiceConfigured,
  openEmailDraft,
  submitForm,
} from '@lib/forms';
import { getPlaneKeyframes } from '@lib/getPlaneKeyFrames';
import { getTrailsKeyframes } from '@lib/getTrailsKeyFrames';
import { useToast } from '@src/hooks/useToast';

const NewsletterForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [input, setInput] = useState('');

  const [active, setActive] = useState(false);
  const [sending, setSending] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button || active || sending) return;

    if (!isFormServiceConfigured) {
      openEmailDraft(
        'Newsletter subscription',
        `Please add ${email} to the SKY Society newsletter.`,
      );
      return;
    }

    setSending(true);
    const subscribed = await submitForm({
      subject: 'New Subscriber Alert - by Sky Society',
      from_name: 'SKY Society website',
      email,
      message: `New newsletter subscriber: ${email}`,
    });
    setSending(false);

    if (!subscribed) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later',
      });
      return;
    }

    setActive(true);
    to(button, {
      keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
    });
    to(button, { keyframes: getTrailsKeyframes(button) });

    toast({
      title: 'Thank you for subscribing',
      description: 'We will keep you posted on SKY Society news and events.',
    });
  };

  return (
    <div className="flex flex-col space-y-8 justify-center items-center py-4">
      <form
        onSubmit={handleSubmit}
        className="newsletter-form animate-fade-in-3"
      >
        <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-gray-100 hover:bg-gray-50 shadow-outline-gray hover:shadow-transparent focus-within:bg-[#d1d1ea] focus-within:!shadow-outline-gray-focus transition-all duration-300">
          <EnvelopeClosedIcon className="hidden sm:inline w-6 h-6 text-[#090d23] group-focus-within:text-blue-700 group-hover:text-blue-950 transition-colors duration-300" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('emailPlaceholder')}
            required
            type="email"
            className="flex-1 xl:min-w-[200px] max-w-[180px] w-full text-blue-800 text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300"
          />
          <Button
            ref={buttonRef}
            className={`${
              active && 'active'
            } disabled:!bg-blue-300 disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
            disabled={!input || sending}
            type="submit"
          >
            <span className="default">{t('subscribeButton')}</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
