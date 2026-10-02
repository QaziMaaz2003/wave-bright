export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  shape?: 'tall' | 'wide';
};

/** → core/gallery (or a Group of Cover blocks with the .wb-gallery CSS grid) */
export function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="wb-gallery">
      {items.map((item) => (
        <figure
          key={item.src}
          className={`wb-gallery__item${item.shape ? ` wb-gallery__item--${item.shape}` : ''}`}
        >
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
