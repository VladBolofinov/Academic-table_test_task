import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchData} from "../providers/store/reducers/ApiRequestSlice";
import SubjectCard from "./subjectCard/SubjectCard";
function App() {
    const dispatch = useAppDispatch();
  return (
        <div className="App">
            <SubjectCard/>
            <button onClick={() => dispatch(fetchData())}>FETCH DATA</button>
        </div>
  );
}

export default App;
