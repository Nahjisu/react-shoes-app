import { Shoes } from "../model/shoes";

// props type
interface OwnProps {
  shoes: Shoes;
  index: number;
}

const ShoesComponent: React.FC<OwnProps> = ({ shoes, index }) => {
  return (
    <div>
      <div className="text-center">
        <img
          className="h-52"
          src={"https://codingapple1.github.io/shop/shoes" + index + ".jpg"}
          alt=""
        />
        <h4>상품명 : {shoes.title}</h4>
        <p>상품설명 : {shoes.content}</p>
      </div>
    </div>
  );
};

export default ShoesComponent;
