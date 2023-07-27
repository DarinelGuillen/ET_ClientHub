import { createContext, Dispatch, SetStateAction } from "react";

interface CurrenUserContextType {
  currenUser: any;
  setCurrenUser: Dispatch<SetStateAction<any>>;
}

const CurrenUserContext = createContext<CurrenUserContextType>({} as CurrenUserContextType);

export default CurrenUserContext;
