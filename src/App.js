// import DataGetAsync from "./API Call/DataGetAsync";
// import DataGetPromise from "./API Call/DataGetPromise";

import DataDelete from "./API Call/DataDelete";
import DataPost from "./API Call/DataPost";
import DataPut from "./API Call/DataPut";
import DynSearch from "./API Call/DynSearch";

function App() {
  return (
    <>
      {/* <DataGetPromise/> */}
      {/* <DataGetAsync/> */}
      
      <DataPost/>
      <br/>
      <DataPut/>
      <br/>
      <DataDelete/>
      {/* <DynSearch /> */}
    </>
  );
}
export default App;