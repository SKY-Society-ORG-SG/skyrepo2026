// Widths of the resized copies generated for every image in public/images.
// Shared by next.config.mjs (so next/image only asks for these widths) and
// scripts/postbuild.mjs (which generates them), so the two can't drift apart.
export const IMAGE_WIDTHS = [384, 640, 1280, 1920];
