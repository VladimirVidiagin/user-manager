export const ButtonTitle: React.FC<{
  children: string;
  disabled?: boolean;
  styleType?: string;
}> = ({ children, disabled = false, styleType = "primary" }) => {
  return <span className={`button-title ${styleType}`}>{children}</span>;
};
