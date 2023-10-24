import React from 'react';
import {useAppDispatch} from "../hooks/redux";
import {fetchData} from "../providers/store/reducers/ApiRequestSlice";
function App() {
    const dispatch = useAppDispatch();
  return (
        <div className="App">
          asdasdasd
            <button onClick={() => dispatch(fetchData())}>FETCH DATA</button>
        </div>
  );
}

export default App;
