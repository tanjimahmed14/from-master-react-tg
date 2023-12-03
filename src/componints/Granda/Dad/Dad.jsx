import { useContext } from "react";
import { AssetContest, MoneyAsset } from "../../../App";

const Dad = () => {
  const gift = useContext(AssetContest);
  const [money, setMoney] = useContext(MoneyAsset);

  const style = {
    border: "2px solid red",
    padding: "20px",
  };
  return (
    <div>
      <div style={style}>
        <h1>this is dad section</h1>
        <p>{gift}</p>
        <h1>{money}</h1>
        <button onClick={() => setMoney(money + 100)}>Add 100</button> <br /> <br />
        <button onClick={() => setMoney(money - 100)}>Remove 100</button>
      </div>
    </div>
  );
};

export default Dad;
