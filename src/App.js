import logo from './logo.svg';
import Card from "./components/Card/Card"
function App() {
  return (
    <div>
      <Card 
        name = "Sydney"
        phone = "555-555-5555"
        email = "drew@gmail.com"
        image = {{
            url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg", alt: "cute cat"
        }}
        favoured = {false}
      />
    </div>
  );
}

export default App;
