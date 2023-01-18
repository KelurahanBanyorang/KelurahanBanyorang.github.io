export interface IFluentProps {
  size?: number;
  color?: IconColorScheme | string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export enum IconColorScheme {
  primaryText = "#334155",
  secondaryText = "#94a3b8",
  primary = "#5f5af7",
  secondary = "#deddf1",
  error = "#ff2c56",
  background = "#ffffff",
  divider = "#b5c2d1"
}

export function QuotesIconOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M29 23h8v-8h-8Zm-18 0h8v-8h-8Zm20.3 11 4-8H26V12h14v14.4L36.2 34Zm-18 0 4-8H8V12h14v14.4L18.2 34ZM15 19Zm18 0Z"
        fill={color}
      />
    </svg>
  );
}
