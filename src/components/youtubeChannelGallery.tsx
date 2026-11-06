'use client';

import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ChannelData {
  channelName: string;
  channelPicture: string;
  channelHandle: string;
  channelId: string;
  videos: Video[];
}

interface Video {
  videoId: string;
  title: string;
  thumbnail: string;
}

export default function YoutubeChannelGallery() {
  const { t } = useTranslation('videos');
  const channels = t('channels', { returnObjects: true }) as ChannelData[];

  //   useEffect(() => {
  //     async function fetchChannelData() {
  //       try {
  //         const response = await fetch('/api/youtubeChannel');
  //         const data = await response.json();
  //         console.log(data.channels);
  //         setChannels(data.channels);
  //       } catch (error) {
  //         console.error('Error fetching channel data:', error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchChannelData();
  //   }, []);

  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center min-h-screen">
  //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  //       </div>
  //     );
  //   }

  //   if (!channels || channels.length === 0) {
  //     return (
  //       <div className="flex justify-center items-center min-h-screen">
  //         <p className="text-lg text-gray-600">No channel data found.</p>
  //       </div>
  //     );
  //   }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {channels.map((channel, index) => (
        <div key={index} className="mb-12">
          <Link
            // Channel IDs never change; handles can be renamed and then 404.
            href={`https://www.youtube.com/channel/${channel.channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mb-6"
          >
            <Image
              unoptimized
              width={600}
              height={600}
              src={channel.channelPicture}
              alt={channel.channelName}
              className="w-20 h-20 rounded-full shadow-md border-2 border-gray-300 mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              {channel.channelName}
            </h1>
            <ExternalLinkIcon className="w-5 h-5 mx-4 text-blue-800" />
          </Link>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Latest Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
            {channel.videos.map((video) => (
              <Link
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <Image
                  unoptimized
                  width={600}
                  height={600}
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 h-20">
                  <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
