import React from "react";
import { useTranslation } from "react-i18next";
import { useViewportWidth } from "hooks";
import { useArt } from "hooks";
import {
  useFirebaseStorageSet,
  useFirebaseStorageImg,
} from "../../hooks/useFirebaseStorage";

const GalleryListWrapper = (props) => (
  <main className="gallery">
    <div className="gallery__content">
      <ul className="gallery__list">{props.children}</ul>
    </div>
  </main>
);

const GalleryIntro = ({ title, content }) => {
  const { t } = useTranslation("intro");
  return (
    <li className="gallery__intro">
      <div className="arrow intro__arrow--back">←</div>
      <div className="intro__text">
        <h1>{t(title)}</h1>
        <p>{t(content)}</p>
      </div>
      <div className="arrow intro__arrow--next">→</div>
    </li>
  );
};

const GalleryItem = ({ loadingMode, caption, url }) => {
  const { field, cycle, id } = useArt();
  const [src, loading] = useFirebaseStorageImg(field, cycle, id);
  const { t } = useTranslation("captions");

  return (
    <li className="gallery__item">
      <figure className="gallery__figure">
        {loading ? (
            <>
                Loading...
            </>
        ) : (
          <img
            alt={caption}
            loading={loadingMode}
            className="gallery__image"
            src={url || src}
          />
        )}
        <figcaption className="gallery__caption">{t(caption)}</figcaption>
      </figure>
    </li>
  );
};

const GalleryItems = ({ hash }) => {
  const { field, cycle } = useArt();
  const [set, loading] = useFirebaseStorageSet(field, cycle);

  return (
    <>
      <GalleryIntro
        title={`${field}.${cycle}.title`}
        content={`${field}.${cycle}.content`}
      />
      {set.map((url, i) => (
        <GalleryItem
          key={i}
          url={url}
          hash={hash}
          caption={`${field}.${cycle}.${i}`}
          loadingMode="lazy"
          isLoading={loading}
        />
      ))}
    </>
  );
};

export default function GalleryContainer() {
  const [isMobile] = useViewportWidth();

  return (
    <GalleryListWrapper>
      {isMobile ? (
        <GalleryItems />
      ) : (
        <GalleryItem loadingMode="eager" />
      )}
    </GalleryListWrapper>
  );
}
