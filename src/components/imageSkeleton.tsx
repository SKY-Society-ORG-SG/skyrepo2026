'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

import { cn } from '@lib/utils';

const ImageSkeleton = ({
  src,
  alt,
  width,
  height,
  classname,
  title,
}: {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  classname?: string;
  title?: string;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div className="relative">
      <Image
        width={width}
        height={height}
        src={src}
        onLoad={() => setIsLoaded(true)}
        alt={alt}
        className={cn(`w-full ${isLoaded ? '' : 'bg-slate-100'}`, classname)}
      />
      {!isLoaded && title ? (
        <div className="text-sm text-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {title}
        </div>
      ) : null}
    </div>
  );
};

export default ImageSkeleton;
