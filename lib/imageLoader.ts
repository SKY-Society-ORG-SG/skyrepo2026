const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Maps a next/image request to the resized WebP copy generated at build time:
// /images/foo.png at 640px -> /_img/640/images/foo.webp
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) {
    return src;
  }

  // The resized copies only exist after `npm run build`, so dev serves originals.
  if (process.env.NODE_ENV === 'development') {
    return `${basePath}${encodeURI(src)}?w=${width}`;
  }

  const webp = src.replace(/\.(png|jpe?g|webp)$/i, '.webp');
  return `${basePath}/_img/${width}${encodeURI(webp)}`;
}
