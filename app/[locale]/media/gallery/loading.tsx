'use client';

import React from 'react';

import { SkeletonCard } from '@src/components/skeletonCard';

const length = 6;

const LoadingSkeletonImage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default LoadingSkeletonImage;
