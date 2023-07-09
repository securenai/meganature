import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

export default function ImageView({ imgSrc, desc }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = [
    imgSrc ||
      'https://fastly.picsum.photos/id/825/200/300.jpg?hmac=02AaqBOvx8gwrGt7a3HWzJHnZXrMzYoXbAYwjJWH40E',
  ]

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <div>
      {images.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      {desc}
    </div>
  )
}
