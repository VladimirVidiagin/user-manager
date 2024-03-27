import React, { ReactNode } from "react";

export const CreateUserForm: React.FC<{
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: (e: React.MouseEvent) => void;
}> = ({ children }) => {
  return <form>{children}</form>;
};
