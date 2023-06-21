import DataGetAsync from "./API Call/DataGetAsync";
import DataGetPromise from "./API Call/DataGetPromise";

import DataDelete from "./API Call/DataDelete";
import DataPost from "./API Call/DataPost";
import DataPut from "./API Call/DataPut";
import DynSearch from "./API Call/DynSearch";

function App() {
  return (
    <>
      <DataGetPromise/>
      <hr/>
      <DataGetAsync/>
      <hr/>
      <DataPost/>
      <hr/>
      <DataPut/>
      <hr/>
      <DataDelete/>
      {/* <DynSearch /> */}
    </>
  );
}
export default App;