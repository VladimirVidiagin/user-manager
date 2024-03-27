export const ColumnnTitle: React.FC<{
  children: string;
}> = ({ children }) => {
  return <th className="column-title">{children}</th>;
};
