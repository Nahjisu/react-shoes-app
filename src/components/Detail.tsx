import { useParams } from "react-router-dom";
import shoesData from "../model/shoes";
import Menu from "./Menu";

const Detail: React.FC = () => {
  const { id } = useParams();
  const imageId = Number(id) + 1;
  const shoes = shoesData.find((item) => String(item.id) === id);

  const addCart = () => {
    alert("상품이 카트에 추가 되었습니다");
  };

  return (
    <>
      <Menu />
      <div className="flex">
        {shoes ? (
          <div>
            <img
              className="w-full"
              src={
                "https://codingapple1.github.io/shop/shoes" + imageId + ".jpg"
              }
              alt=""
            />
            <div className="text-center">
              <p className="m-3 text-lg font-bold">상품명 : {shoes?.title}</p>
              <p className="m-3">상품설명 : {shoes?.content}</p>
              <p className="m-3">상품가격 : {shoes?.price}</p>
              <button
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full m-3"
                onClick={addCart}
              >
                구매하기
              </button>
            </div>
          </div>
        ) : (
          <NotShoes />
        )}
      </div>
    </>
  );
};

/**
 *
 * Not Shoes Component
 */
const NotShoes = () => {
  return <div>상품이 존재하지 않습니다</div>;
};

export default Detail;
