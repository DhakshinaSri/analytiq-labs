export default function Img({ image, className = '', priority = false }) {
  return (
    <img
      className={className}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  );
}
