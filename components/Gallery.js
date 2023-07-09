import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: '/static/images/gallery/1.png',
    thumbnail: '/static/images/gallery/1.png',
  },
  {
    original: '/static/images/gallery/2.png',
    thumbnail: '/static/images/gallery/2.png',
  },
  {
    original: '/static/images/gallery/3.png',
    thumbnail: '/static/images/gallery/3.png',
  },
  {
    original: '/static/images/gallery/4.png',
    thumbnail: '/static/images/gallery/4.png',
  },
  {
    original: '/static/images/gallery/5.png',
    thumbnail: '/static/images/gallery/5.png',
  },
]

export default function Gallery() {
  return <ImageGallery showThumbnails={false} items={images} autoPlay slideInterval={8000} />
}
