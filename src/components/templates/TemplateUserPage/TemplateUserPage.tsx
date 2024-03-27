interface TemplateUserPageProps {
  header: JSX.Element;
  sidebar: JSX.Element;
  usersInfoBlock: JSX.Element;
}

export const TemplateUserPage: React.FC<TemplateUserPageProps> = ({
  header,
  sidebar,
  usersInfoBlock,
}) => {
  return (
    <>
      {header}
      <section className="users-page">
        {sidebar}
        {usersInfoBlock}
      </section>
    </>
  );
};
