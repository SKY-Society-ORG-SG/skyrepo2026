'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VenueLocationCard = ({ address }: { address: string[] }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full overflow-hidden mb-12">
      <CardHeader className="pb-2">
        <CardTitle className="">{t('contact.venue.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-4 rounded-lg">
              {address.map((line, index) => (
                <p
                  key={index}
                  className={`${index !== address.length - 1 ? 'mb-2' : ''}`}
                >
                  {line}
                </p>
              ))}
            </div>
            <p>{t('contact.dayTitle')} : Thursday</p>
            <p>{t('contact.time')}: 7.30 pm to 9.00 pm</p>
          </div>
          <div className="h-[400px]">
            <div className="w-full h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6801333444346!2d103.86726197447199!3d1.3686052615163151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1655d8e87903%3A0xe4f1ac6d45305de9!2sSri%20Darma%20Muneeswaran%20Temple!5e0!3m2!1sen!2sin!4v1729254024706!5m2!1sen!2sin"
                className="w-full h-full rounded-lg shadow-md"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueLocationCard;
