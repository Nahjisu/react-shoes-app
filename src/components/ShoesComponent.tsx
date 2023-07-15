import { useNavigate } from "react-router-dom";
import { Shoes } from "../model/shoes";

// props type
interface OwnProps {
  shoes: Shoes;
  index: number;
}

const ShoesComponent: React.FC<OwnProps> = ({ shoes, index }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center">
        <img
          className="h-52 cursor-pointer"
          src={"https://codingapple1.github.io/shop/shoes" + index + ".jpg"}
          alt=""
          onClick={() => {
            navigate(`/detail/${shoes.id}`);
          }}
        />
        <h4>상품명 : {shoes.title}</h4>
        <p>상품설명 : {shoes.content}</p>
      </div>
    </div>
  );
};

export default ShoesComponent;
