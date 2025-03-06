import { Container } from "react-bootstrap";
import { NavBar } from "./component/NavBar";
import { Header } from "./component/Header";
import { Category } from "./component/Category";
import { Itemlist } from "./component/Itemlist";
import { items } from "./data";
import { useState } from "react";
function App() {
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  const [itemsdata, setitemdata] = useState(items);

  // filter by category
  const filterbycategory = (cat) => {
    const newarr = items.filter((item) => item.category === cat);
    if (cat === "الكل") {
      setitemdata(items);
      return; //stop the function execution here if the category is "الكل"
    } else setitemdata(newarr);
  };
  const filterbySearch = (word) => {
    const newarr = items.filter((item) => item.title === word);
    if (word !== "") {
      setitemdata(newarr);
      return; //stop the function execution here if the category is "الكل"
    } else setitemdata(items);
  };
  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container className="">
        <Header />
        <Category filtercategory={filterbycategory} allCategory={allCategory} />
        <Itemlist itemsdata={itemsdata} />
      </Container>
    </div>
  );
}

export default App;
