import { useEffect, useState } from "react";
import { Content, Description } from "../css/App.styled";


const CatInfo = () => {
    const [catInformation, setCatinformation] = useState ([]);
    const [error, setError] = useState(null);
  
    useEffect (() => {
      const fetchData = async () => {
        try{
          const response = await fetch('https://api.thecatapi.com/v1/breeds');
          if(!response.ok){
            throw new Error(response.statusText)
          };
          const data = await response.json()
          setCatinformation(data);
          console.log(data);
        } catch(error) {
          console.log(error);
          setError("Could not fetch data")
        };
      };
      fetchData();
    }, []);


  return (
    <div className="App">
      {error && <p>{error}</p>}
    <Content>
      {catInformation.map((cats) => (
        <items className="items" key={cats.id}>
          <h3>{cats.name}</h3>
          <h3>{cats.origin}</h3>
        </items>
      ))}
      <Description>
        <p>Home</p>
        
      </Description>
    </Content>
    </div>
  );
};

export default CatInfo;
