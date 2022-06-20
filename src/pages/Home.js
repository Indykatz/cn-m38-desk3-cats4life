import { useEffect, useState } from "react";
import { TheApp, Content, Description } from "../css/App.styled";
import { CatImgage, CatFlex, EachCat } from "../css/Home.styled";
import { faker } from "@faker-js/faker";

const Home = () => {
  const [catsInformation, setCatsinformation] = useState([]);
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
        setCatsinformation(data);
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
    console.log(NewList[i].cost);
    let theCost = NewList[i].cost;
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
          {catsInformation.map((cats) => (
            <EachCat key={cats.id}>
              <CatImgage src={cats.url} alt="cats" />
              <h3>
                {faker.name.findName()} is {faker.word.adjective()}
              </h3>
              <p>£{faker.finance.amount(100, 200, 0)}</p>
              <p>{faker.word.adjective()}</p>
              <button onClick={() => handleClick(cats)}>Buy now</button>
            </EachCat>
          ))}
        </CatFlex>
      </Content>
    </TheApp>
  );
};

export default Home;
