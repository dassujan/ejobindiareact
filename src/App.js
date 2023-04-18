// import FirstFun from "./components/FirstFun.jsx"; 
// import {FirstFun, FirstFun1} from "./components/FirstFun.jsx"; 
// import FirstClass from "./components/FirstClass.jsx"; 
import ClassProps from './components/ClassProps.jsx';
import FunProps from './components/FunProps.jsx';

function App() {
  var name = "Sujan";
  return (
    <div>
      {/* <FirstFun1/> */}
      {/* <FirstFun/> */}
      {/* <FirstClass/> */}
      {/* <FunProps/> */}
      {/* <FunProps name = {name} add = "Burdwan" pin = "713101"/>
      <FunProps name = 'Sourav' add = "Mumbai" pin = "457898"/>
      <FunProps name = 'Raktim' add = "noida" pin = "235689"/>
      <FunProps name = 'Biju' add = "panjab" pin ="986532"/>
      <FunProps name = 'Suman' add = "delhi" pin ="784526"/>
      <FunProps name = 'Harry' add = "pune" pin ="321548"/>
      <FunProps name='Gobinda' add='london' pin='000789'>
        <em>This is Child Props</em>
      </FunProps> */}
      {/* <ClassProps com = "Class" besi = 'Fun'/> */}
      <ClassProps name = 'Sourav' add = "Mumbai" pin = "457898"/>
      <ClassProps name = 'Raktim' add = "noida" pin = "235689"/>
      <ClassProps name = 'Biju' add = "panjab" pin ="986532"/>
      <ClassProps name = 'Suman' add = "delhi" pin ="784526"/>
      <ClassProps name='Gobinda' add='london' pin='000789'>
        <em>This is Child Props in Class Components</em>
      </ClassProps>

    </div>
  );
}

export default App;
