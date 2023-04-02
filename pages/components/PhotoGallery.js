import React, { useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import imageStyle from "../styles/Gallery.module.scss"
import { images } from "./images"

export default function PhotoGallery({ currentIdx }) {
  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }))
  const [index, setIndex] = useState(-1)

  const handleClick = (index, item) => setIndex(index)

  return (
    <div>
      {currentIdx == 2 ? (
        <div className={imageStyle.gallery}>
          <div className={imageStyle.scroll}>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
              rowHeight={300}
              margin={3}
            />
          </div>
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      ) : null}
    </div>
  )
}
