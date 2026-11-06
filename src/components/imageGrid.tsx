'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Fullscreen, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@components/ui/dialog';
import { Skeleton } from '@components/ui/skeleton';

const ImageCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md rounded-md h-[290px]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          title={title}
          height={600}
          className={`w-full h-48 object-cover ${!loaded ? 'bg-slate-200' : ''}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        {/* {!loaded ? (
          <div className="text-sm text-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {title}
          </div>
        ) : null} */}
      </div>
      {!loaded ? (
        <div className="space-y-2 p-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ) : (
        <div className="p-4">
          <h4 className="">{title}</h4>
          <p className="">{description}</p>
        </div>
      )}
    </div>
  );
};

const ImageGrid = () => {
  const images = [
    // 2024
    {
      src: '/images/gallery/2024-Velvi-Day-New-Year.png',
      title: '2024 Velvi Day New Year Speech',
      description: '',
    },
    {
      src: '/images/gallery/2024-Wife-Appreciation-Day.png',
      title: '2024 Wife Appreciation Day',
      description: '',
    },
    // 2023
    {
      src: '/images/gallery/2023-Velvi-Day New-Year.png',
      title: '2023 Velvi Day New Year',
      description: '',
    },
    {
      src: '/images/gallery/2023-Velvi-Day-New-Year-Speech.png',
      title: '2023 Velvi Day New Year Speech',
      description: '',
    },
    {
      src: '/images/gallery/2023-Wife-Appreciation-Day.png',
      title: '2023 Wife Appreciation Day',
      description: '',
    },
    // 2022
    {
      src: '/images/gallery/2022-Speech-by-Snr-Prof-Kanchinathan.png',
      title: '2022 Speech by Snr Prof Kanchinathan',
      description: '',
    },
    {
      src: '/images/gallery/2022-Velvi-Day-New-Year.png',
      title: '2022 Velvi Day New Year',
      description: '',
    },
    // 2020
    {
      src: '/images/gallery/2020-Dhana-Akarshana-Sangalpam.png',
      title: '2020 Dhana Akarshana Sangalpam',
      description: '',
    },
    {
      src: '/images/gallery/2020-Velvi-Day-Meditation-New-Year.png',
      title: '2020 Velvi Day Meditation New Year',
      description: '',
    },
    {
      src: '/images/gallery/2020-Velvi-Day-New-Year.png',
      title: '2020 Velvi Day New Year',
      description: '',
    },
    // 2018
    {
      src: '/images/gallery/2018-Velvi-Day-New-Year.png',
      title: '2018 Velvi Day New Year',
      description: '',
    },
    {
      src: '/images/gallery/2018-Velvi-Day-Prasadam-New-Year.png',
      title: '2018 Velvi Day Prasadam New Year',
      description: '',
    },
    {
      src: '/images/gallery/2018-Wife-Appreciation-Day.png',
      title: '2018 Wife Appreciation Day',
      description: '',
    },
    // 2017
    {
      src: '/images/gallery/2017-AGM.png',
      title: '2017 AGM',
      description: '',
    },
    {
      src: '/images/gallery/2017-Mudras-Class.png',
      title: '2017 Mudras Class',
      description: '',
    },
    {
      src: '/images/gallery/2017-SKY-Snr-Prof-Speech.png',
      title: '2017 SKY Snr Prof Speech',
      description: '',
    },
    // 2016
    {
      src: '/images/gallery/2016-SKY-Society-25th-Anniversary-Speech.png',
      title: '2016 SKY Society 25th Anniversary Speech',
      description: '',
    },
    {
      src: '/images/gallery/2016-SKY-Society-25th-Anniversary-Gathering.png',
      title: '2016 SKY Society 25th Anniversary Gathering',
      description: '',
    },
    {
      src: '/images/gallery/2016-SKY-Society-25th-Anniversary.png',
      title: '2016 SKY Society 25th Anniversary',
      description: '',
    },
    {
      src: '/images/gallery/2016-Velvi-Day-Blessings-New-Year.png',
      title: '2016 Velvi Day Blessings New Year',
      description: '',
    },
    {
      src: '/images/gallery/2016-Velvi-Day-Speech-New-Year.png',
      title: '2016 Velvi Day Speech New Year',
      description: '',
    },
    // 2015
    {
      src: '/images/gallery/2015-Wife-Appreciation-Day-Speech.png',
      title: '2015 Wife Appreciation Day Speech',
      description: '',
    },
    {
      src: '/images/gallery/2015-Wife-Appreciation-Day.png',
      title: '2015 Wife Appreciation Day',
      description: '',
    },
    {
      src: '/images/gallery/2015-Wife-Appreciation-Day-Meditation.png',
      title: '2015 Wife Appreciation Day Meditation',
      description: '',
    },
    // 2014
    {
      src: '/images/gallery/2014-Yoga-Workshop-for-students.png',
      title: '2014 Yoga Workshop for students',
      description: '',
    },
    // 2013
    {
      src: '/images/gallery/2013-Velvi Day-New-Year-Meditation.png',
      title: '2013 Velvi Day New Year Meditation',
      description: '',
    },
    {
      src: '/images/gallery/2013-Velvi Day-New-Year-Speech.png',
      title: '2013 Velvi Day New Year Speech',
      description: '',
    },
    {
      src: '/images/gallery/2013-Velvi Day-New-Year.png',
      title: '2013 Velvi Day New Year',
      description: '',
    },
    {
      src: '/images/gallery/2013-Wife-Appreciation-Day-Speech.png',
      title: '2013 Wife Appreciation Day Speech',
      description: '',
    },
    {
      src: '/images/gallery/2013-Wife-Appreciation-Day.png',
      title: '2013 Wife Appreciation Day',
      description: '',
    },
    // 2012
    {
      src: '/images/gallery/2012-Visit-by-thalaivar-SKM-entry.png',
      title: '2012 Visit by Thalaivar SKM entry',
      description: 'Celebration of IDY Event',
    },
    {
      src: '/images/gallery/2012-Visit-by-Thalaivar-SKM-Greeting.png',
      title: '2012 Visit by Thalaivar SKM Greeting',
      description: '',
    },
    {
      src: '/images/gallery/2012-Visit-by-Thalaivar-SKM-Speech.png',
      title: `2012 Visit by Thalaivar SKM And Speech`,
      description: '',
    },
    {
      src: '/images/gallery/2012-Wife-Appreciation-Day-Meditation.png',
      title: '2012 Wife Appreciation Day Meditation',
      description: '',
    },
    {
      src: '/images/gallery/2012-Wife-Appreciation-Day.png',
      title: '2012 Wife Appreciation Day',
      description: '',
    },
    // 2011
    {
      src: '/images/gallery/2011-SKY-Society-20th-Anniversary.png',
      title: '2011 SKY Society 20th Anniversary',
      description: '',
    },
    {
      src: '/images/gallery/2011-Velvi-Day-New-Year.png',
      title: '2011 Velvi Day New Year',
      description: '',
    },
    {
      src: '/images/gallery/2011-Visit-and-Speech-by-Snr-Prof-Lachuomanan.png',
      title: '2011 Visit and Speech by Snr Prof Lachuomanan',
      description: '',
    },
    {
      src: '/images/gallery/2011-Wife-Appreciation-Day.png',
      title: '2011 Wife Appreciation Day',
      description: '',
    },
    // 2010
    {
      src: '/images/gallery/2010-Swamiji-100th-Jayanthi.png',
      title: '2010 Swamiji 100th Jayanthi',
      description: 'Swamiji 100th Jayanthi Celebration',
    },
  ];

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullScreenHandle = useFullScreenHandle();

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <ImageCard
              image={image.src}
              title={image.title}
              description={image.description}
            />
          </div>
        ))}
      </div>
      {/* Modal for viewing the selected image */}
      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Gallery Dialog</DialogTitle>
          </VisuallyHidden>
          <FullScreen handle={fullScreenHandle}>
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              {selectedImage && (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full w-[calc(100%-90px)] h-[calc(100vh-90px)] max-h-full object-contain"
                  width={1920}
                  height={1440}
                  sizes="95vw"
                />
              )}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  variant="ghost"
                  onClick={prevImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="ghost"
                  onClick={nextImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                >
                  <ChevronRight size={24} />
                </Button>
                <Button
                  onClick={
                    fullScreenHandle.active
                      ? fullScreenHandle.exit
                      : fullScreenHandle.enter
                  }
                  className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                  variant="ghost"
                >
                  <Fullscreen size={24} />
                </Button>
                <Button
                  onClick={closeModal}
                  variant="ghost"
                  className=" text-white p-2 rounded "
                >
                  <X size={24} />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 p-4 rounded text-white">
                <h2 className="text-xl font-bold">{selectedImage?.title}</h2>
                <p>{selectedImage?.description}</p>
              </div>
            </div>
          </FullScreen>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGrid;
