import { TheApp, Content, Description } from "../css/App.styled";
import KatAddItem from "../components/KatAddItem";

const Example = () => {
  return (
    <TheApp>
      <Content>
        <Description>
          <p>Kat</p>
        </Description>
        <KatAddItem />
      </Content>
    </TheApp>
  );
};

export default Example;
