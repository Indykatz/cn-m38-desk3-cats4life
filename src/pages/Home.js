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

  const [NewList, setNewList] = useState([
    {
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
  ]);
  
  let totalSumVar = 0;
  // add item handle submit new items
  const handleClick = (item, e) => {
    setNewList([...NewList, item]);
    // sum
    let num = item.cost;
    let numVal = parseFloat(num.substring(1));
    totalSumVar += numVal;
    console.log(totalSumVar);
    e.preventDefault()

  };

  return (
    <TheApp>
      {error && <p>{error}</p>}
      <Content>
        <Description>
          <p>Home</p>
          Total Items {NewList.length} : Total Cost £{totalSumVar}
        </Description>
        <CatFlex>
          {catsInformation.map((cats) => (
            <EachCat key={cats.id}>
              <CatImgage src={cats.url} alt="cats" />
              <h3>{faker.name.findName()}</h3>
              <p>{faker.finance.amount(100, 200, 2, "£")}</p>
              <p>{faker.word.adjective()}</p>
              <button onClick={() => handleClick(catsInformation)}>Click</button>
            </EachCat>
          ))}
        </CatFlex>
      </Content>
    </TheApp>
  );
};

export default Home;
