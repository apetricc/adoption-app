import "./Pets.css";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

const Pets = () => (
    <div className="container">
        <div className="app-container">
            <Filter />
            <Cards cats={[]} />
        </div>
    </div>
);

export default Pets;