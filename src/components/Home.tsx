import shoesData from "../model/shoes";
import Menu from "./Menu";
import ShoesComponent from "../components/ShoesComponent";

const Home: React.FC = () => {
  return (
    <div>
      <Menu />
      <div className="flex m-6">
        {shoesData.map((shoes, i) => (
          <ShoesComponent shoes={shoes} index={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
