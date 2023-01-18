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

export function LocationIcon({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 0 48 48`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5Zm0 16.55q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Zm0-23.6Z'
      fill={color}
      />
    </svg>
  );
}

export function DownArrowNoTailOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 22 13`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M0.723878 1.05744C0.973915 0.80748 1.31299 0.66706 1.66654 0.66706C2.0201 0.66706 2.35917 0.80748 2.60921 1.05744L10.9999 9.44811L19.3905 1.05744C19.5135 0.930095 19.6607 0.828518 19.8233 0.758639C19.986 0.68876 20.161 0.651979 20.338 0.650441C20.515 0.648903 20.6906 0.682639 20.8545 0.74968C21.0183 0.816721 21.1672 0.915725 21.2924 1.04092C21.4176 1.16611 21.5166 1.31497 21.5836 1.47884C21.6507 1.6427 21.6844 1.81827 21.6829 1.99531C21.6813 2.17235 21.6446 2.34731 21.5747 2.50998C21.5048 2.67265 21.4032 2.81978 21.2759 2.94277L11.9425 12.2761C11.6925 12.5261 11.3534 12.6665 10.9999 12.6665C10.6463 12.6665 10.3072 12.5261 10.0572 12.2761L0.723878 2.94277C0.473917 2.69274 0.333496 2.35366 0.333496 2.00011C0.333496 1.64656 0.473917 1.30748 0.723878 1.05744Z"
        fill={color}
      />
    </svg>
  );
}

export function UpArrowNoTailOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 22 13`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M21.2761 11.9426C21.0261 12.1925 20.687 12.3329 20.3335 12.3329C19.9799 12.3329 19.6408 12.1925 19.3908 11.9426L11.0001 3.55189L2.60946 11.9426C2.48646 12.0699 2.33933 12.1715 2.17666 12.2414C2.01399 12.3112 1.83903 12.348 1.66199 12.3496C1.48495 12.3511 1.30938 12.3174 1.14552 12.2503C0.981655 12.1833 0.832785 12.0843 0.707596 11.9591C0.582405 11.8339 0.4834 11.685 0.416359 11.5212C0.349318 11.3573 0.315582 11.1817 0.31712 11.0047C0.318659 10.8277 0.355442 10.6527 0.42532 10.49C0.495199 10.3273 0.596773 10.1802 0.724121 10.0572L10.0575 0.723889C10.3075 0.473928 10.6466 0.333508 11.0001 0.333508C11.3537 0.333508 11.6928 0.473928 11.9428 0.723889L21.2761 10.0572C21.5261 10.3073 21.6665 10.6463 21.6665 10.9999C21.6665 11.3534 21.5261 11.6925 21.2761 11.9426Z"
        fill={color}
      />
    </svg>
  );
}

