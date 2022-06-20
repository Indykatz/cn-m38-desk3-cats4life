import { useEffect, useState } from "react";
import { TheApp, Content, Description } from "../css/App.styled";
import { CatImgage, CatFlex, EachCat } from "../css/Home.styled";
import { faker } from "@faker-js/faker";

const Home = () => {
  const [cat, setCat] = useState([]);
  const [catName, setcatName] = useState([]);
  const [catWord, setcatWord] = useState([]);
  const [catCost, setCatCost] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20&breed_is=beng&api_key=c9d88068-26d3-4c95-9506-7b644e299d54"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setCat(data);
        setcatName(faker.name.findName());
        setcatWord(faker.word.adjective());
        setCatCost(faker.finance.amount(100, 200, 0));
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch data");
      }
    };
    fetchData();
  }, []);

  const [NewList, setNewList] = useState([]);

  // add item handle submit new items
  const handleClick = (cats) => {
    setNewList([...NewList, cats]);
  };

  let total = 0;
  for (let i = 0; i < NewList.length; i++) {
    console.log(NewList[i].catCost);
    let theCost = NewList[i].catCost;
    console.log(theCost);
    let anInt = parseInt(theCost);
    total += anInt;
  }

  // add item handle submit new items
  const handleCheckout = () => {
    alert("Total cost: ", total);
  };

  return (
    <TheApp>
      {error && <p>{error}</p>}
      <Content>
        <Description>
          <p>Home</p>
          Total Items {NewList.length} : Total Cost £{total}
          <p>
            <button onClick={() => handleCheckout()}>Check Out</button>
          </p>
        </Description>
        <CatFlex>
          {cat.map((cat) => (
            <EachCat key={cat.id}>
              <CatImgage src={cat.url} alt="cats" />
              <h3>{catName}</h3>
              <p>{catWord}</p>
              <p>£{catCost}</p>

              <button onClick={(e) => handleClick(cat)}>Buy now</button>
            </EachCat>
          ))}
        </CatFlex>
      </Content>
    </TheApp>
  );
};

export default Home;
