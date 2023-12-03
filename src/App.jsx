import { createContext, useState } from "react";
import "./App.css";
import Granda from "./componints/Granda/Granda";
import Reuseabole from "./componints/ReuseAbole/Reuseabole";
import CustomeFrom from './componints/CoutomeFRom/CustomeFrom'
import RefFrom from './componints/RefFrom/RefFrom'
import SimpleFrom2 from './componints/SimpleFrom2/SimpleFrom2'
import SimpleFrom from './componints/SimpleFrom/SimpleFrom'

export const AssetContest = createContext('This is gold');
export const MoneyAsset = createContext(1000)

function App() {
  const [money, setMoney] = useState(1000)
  const handelSingUp = (data) => {
    console.log("sing s", data);
  };
  const handelUpdate = (data) => {
    console.log("udate ", data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <SimpleFrom></SimpleFrom>
      <SimpleFrom2></SimpleFrom2>
      <h1>Example no : 3</h1>
      <RefFrom></RefFrom><hr />
      <h1>Example no : 4</h1>
      <CustomeFrom></CustomeFrom><hr />
      <h1>Example no : 5</h1>
      <Reuseabole formTitle={"Sing up"} handelClick={handelSingUp}>
        <div>
          <h2>Sing Up</h2>
          <p>please prvide your info</p>
        </div>
      </Reuseabole>
      <Reuseabole
        formTitle={"Profile Update"}
        handelClick={handelUpdate}
        submitBtnText="Update"
      >
        <div>
          <h2>Update prfile</h2>
          <p>Change your infoff</p>
        </div>
      </Reuseabole>
      <hr />
      <MoneyAsset.Provider value={[money, setMoney]}>
      <AssetContest.Provider value="This is gold">
      <Granda></Granda>
      </AssetContest.Provider>
      </MoneyAsset.Provider>
    </>
  );
}

export default App;
