import OllyAdd from "../components/OllyAddItems";
import { TheApp, Content, Description } from "../css/App.styled";

const Olly = () => {
  return (
    <TheApp>
      <Content>
        <Description>
          <p>Olly</p>
        </Description>
        <OllyAdd />
      </Content>
    </TheApp>
  );
};

export default Olly;
