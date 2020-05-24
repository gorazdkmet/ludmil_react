import React from "react";
import { useTranslation } from "react-i18next";

const GalleryItem = ({ caption, src, isLoading }) => (
  <li className="gallery__item">
    <figure className="gallery__figure">
      {isLoading ? (
        <span>Content is loading please wait...</span>
      ) : (
        <img alt="img" className="gallery__image" src={src} />
      )}
      <figcaption className="gallery__caption">{caption}</figcaption>
    </figure>
  </li>
);

const GalleryListWrapper = (props) => (
  <main className="gallery">
    <div className="gallery__content">
      <ul className="gallery__list">{props.children}</ul>
    </div>
  </main>
);

export default function GalleryContainer({
  id,
  cycle,
  field,
  set,
  isMobile,
  isLoading,
}) {
  const { t } = useTranslation("captions");

  return (
    <GalleryListWrapper>
      {isMobile ? (
        set.map((src, i) => (
          <GalleryItem
            key={i}
            src={src}
            caption={t(`${field}.${cycle}.${i}`)}
            isLoading={isLoading}
          />
        ))
      ) : (
        <GalleryItem
          src={set[id]}
          caption={t(`${field}.${cycle}.${id}`)}
          isLoading={isLoading}
        />
      )}
    </GalleryListWrapper>
  );
}
