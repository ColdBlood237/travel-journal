import data from "./data";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

// design
// https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=2%3A28&mode=dev

function App() {
  let cards = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <>
      <Header />
      {cards}
    </>
  );
}

export default App;
