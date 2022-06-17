import { useEffect, useState } from "react";
//
import { Content, Description } from "../css/App.styled";
import { BengalText } from "../css/Bengal.styled";
//
import React from "react";
//
import { faker } from "@faker-js/faker";
//
import { BengalFlex, EachBengal, BenaglImgage } from "../css/Bengal.styled";
//
import aryeh1 from "../images/Aryeh1.JPG";
import aryeh2 from "../images/Aryeh2.JPG";
import aryeh3 from "../images/Aryeh3.JPG";
import aryeh4 from "../images/Aryeh4.JPG";
import mira1 from "../images/Mira1.JPG";
import mira2 from "../images/Mira2.JPG";
import mira3 from "../images/Mira3.JPG";
import mira4 from "../images/Mira4.JPG";
import nuka1 from "../images/Nuka1.JPG";
import nuka2 from "../images/Nuka2.JPG";
import nuka3 from "../images/Nuka3.JPG";
import nuka4 from "../images/Nuka4.JPG";

const Bengals = () => {
  const [cat] = useState([
    {
      img: aryeh1,
      description: "Aryeh Looking down at humans",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: aryeh2,
      description: "Aryeh Lounging",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: aryeh3,
      description: "Aryeh Sleeping",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: aryeh4,
      description: "Aryeh Attacking a Tree",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: mira1,
      description: "Samira Up High",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: mira2,
      description: "Samira Posing",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: mira3,
      description: "Samira Spotted a Fly",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: mira4,
      description: "Samira Playing",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: nuka1,
      description: "Nuka and Aryeh",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: nuka2,
      description: "All three",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: nuka3,
      description: "Samira and Nuka Kissing",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
    {
      img: nuka4,
      description: "Samira and Nuka",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
  ]);
  // useState animal
  const [cats, setCats] = useState([]);
  // error handling useState
  const [error, setError] = useState(null);

  // use effect function from react
  // fetch function goes inside so only handle fetch request once
  useEffect(() => {
    const fetchData = async () => {
      // error
      try {
        //
        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds/search?q=bengal&api_key=c9d88068-26d3-4c95-9506-7b644e299d54"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        //
        const data = await response.json();
        setCats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch the data");
      }
    };

    fetchData();
  }, []);

  const [NewList, setNewList] = useState([
    {
      img: nuka4,
      description: "Samira and Nuka",
      cost: faker.finance.amount(100000000, 200000000, 2, "£"),
    },
  ]);

  // add item handle submit new items
  const [itemInput, setItemInput] = useState("");
  const handleClick = (index) => {
    setNewList([...NewList, { NewList: itemInput }]);
    setItemInput("");
    console.log(NewList);
  };

  return (
    <div>
      <Content>
        <Description>
          <p>Bengal - {}</p>
        </Description>
        {/* error */}
        {error && <p>{error}</p>}
        {/* Map Array */}
        <div>
          {cats.map((cat) => (
            <div key={cat.id}>
              <BengalText>
                <h1>{cat.name}</h1>
                <p>{cat.temperament}</p>
                <p>{cat.description}</p>
              </BengalText>
            </div>
          ))}
        </div>
        <div>
          <BengalFlex>
            {cat.map((cat, index) => (
              <EachBengal key={index}>
                <div>
                  <BenaglImgage src={cat.img} alt={cat.description} />
                  <h4>{cat.description}</h4>
                  <p>{cat.cost}</p>
                  <button onClick={handleClick}>Buy now</button>
                </div>
              </EachBengal>
            ))}
          </BengalFlex>
        </div>
      </Content>
    </div>
  );
};

export default Bengals;
