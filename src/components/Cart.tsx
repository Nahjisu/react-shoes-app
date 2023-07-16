import Menu from "./Menu";

const Cart: React.FC = () => {
  return (
    <div>
      <Menu />
      <CartTable />
    </div>
  );
};

const CartTable = () => {
  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>상품</th>
          <th>변경</th>
          <th>삭제</th>
        </thead>
        <tbody>
          <td>1</td>
          <td>shoes</td>
          <td>
            <button>변경하기</button>
          </td>
          <td>
            <button>삭제하기</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
