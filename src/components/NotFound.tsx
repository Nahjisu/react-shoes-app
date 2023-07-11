import { FC } from "react";
import Menu from "./Menu";

const NotFound: FC = () => {
  return (
    <div>
      <Menu />
      <p>존재하지 않는 페이지 입니다.</p>
    </div>
  );
};

export default NotFound;
