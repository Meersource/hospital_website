# Assets Folder Structure

This folder contains all static assets for the Family Hospital website.

## Folder Structure:
```
Assets/
├── carousel/          # Carousel images (hero images, banners)
├── icons/            # Icons and small graphics
├── logos/            # Hospital logos and branding
├── backgrounds/      # Background images and patterns
└── README.md         # This file
```

## Usage in Next.js:
To reference assets in your Next.js components, use:
```jsx
// Example usage
<img src="/Assets/carousel/hero-1.jpg" alt="Hospital Hero Image" />
```

## Free Image Sources:
- **Unsplash.com** - High-quality free photos
- **Pexels.com** - Free stock photos and videos
- **Pixabay.com** - Free images, vectors, and illustrations
- **Freepik.com** - Free and premium graphics (free tier available)

## Image Optimization Tips:
1. Use WebP format when possible for better compression
2. Optimize images for web (compress without losing quality)
3. Use appropriate dimensions (1920x1080 for hero images)
4. Add alt text for accessibility
5. Consider using Next.js Image component for automatic optimization

## Carousel Images:
The carousel folder is ready for your hero images. Suggested naming:
- hero-1.jpg
- hero-2.jpg
- hero-3.jpg
- hero-4.jpg
- hero-5.jpg

Each image should represent different aspects of your hospital services.
