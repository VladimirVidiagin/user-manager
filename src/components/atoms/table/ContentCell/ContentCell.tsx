export const ContentCell: React.FC<{
  children: string | JSX.Element;
}> = ({ children }) => {
  return <td className="content-cell">{children}</td>;
};
