type CaseStudyFigureProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  width?: number;
  height?: number;
};

export function CaseStudyFigure({
  src,
  alt,
  caption,
  className = '',
  width,
  height,
}: CaseStudyFigureProps) {
  return (
    <figure className={`digiq-figure ${className}`.trim()}>
      <div className="digiq-figure__media">
        <img src={src} alt={alt} loading="lazy" width={width} height={height} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
