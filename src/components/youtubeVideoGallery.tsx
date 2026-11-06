'use client';

import { DialogClose } from '@radix-ui/react-dialog';
import { Play } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description?: string;
}

interface Category {
  title: string;
  videos: Video[];
  parts?: number;
}

const YouTubeVideoGallery = ({
  categories,
  closeModal,
}: {
  categories: Category[];
  closeModal: string;
}) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideoModal = (video: Video): void => {
    setSelectedVideo(video);
  };

  const closeVideoModal = (): void => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-4">
      {categories.map((category) => (
        <div key={category.title} className="">
          {' '}
          {/* Padding between categories */}
          <div className="text-center space-y-2 py-8">
            <h2 className="">{category.title}</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  <Image
                    unoptimized
                    src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => openVideoModal(video)}
                      variant="outline"
                      size="icon"
                      className="bg-red-600 text-white rounded-full p-3 transform transition duration-300 hover:scale-110 hover:bg-red-700"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Video Modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={(open) => !open && closeVideoModal()}
      >
        <DialogContent className="sm:max-w-[720px] bg-white">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
            <DialogDescription>{selectedVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="w-full">
            {selectedVideo && (
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <DialogFooter>
            <DialogClose className="justify-center items-center flex">
              <div
                className="px-4 py-2 flex hover:bg-blue-700 bg-primary text-white dark:text-black rounded-md"
                onClick={closeVideoModal}
              >
                {closeModal}
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YouTubeVideoGallery;
