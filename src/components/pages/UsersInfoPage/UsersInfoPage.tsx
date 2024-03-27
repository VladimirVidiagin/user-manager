import { Header } from "../../molecules/Header/Header";
import { Sidebar } from "../../molecules/Sidebar/Sidebar";
import { UsersInfoBlock } from "../../organisms/UsersInfoBlock/UsersInfoBlock";
import { TemplateUserPage } from "../../templates/TemplateUserPage/TemplateUserPage";

export const UserInfoPage: React.FC = () => {
  return (
    <TemplateUserPage
      header={<Header />}
      sidebar={<Sidebar />}
      usersInfoBlock={<UsersInfoBlock />}
    />
  );
};
