import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextType {
  usersData: any;
  setUsersData: Dispatch<SetStateAction<any>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
