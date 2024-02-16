type LogoProps = {
  ariaHidden?: boolean;
  className?: string;
};

export const Logo = ({ ariaHidden = false, className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2 2"
      className={className}
      aria-hidden={ariaHidden}
    >
      <circle cx="1" cy="1" r="1" fill="currentColor" />
    </svg>
  );
};
