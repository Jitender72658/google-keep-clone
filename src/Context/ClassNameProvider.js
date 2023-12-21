import React,{useState} from 'react';
import ClassNameContext from './ClassNameConext';

const ClassNameProvider = (props) => {
   const [className, setClassName] = useState("showName");
  return (
    <ClassNameContext.Provider value={{className, setClassName}}>
        {props.children}
    </ClassNameContext.Provider>
  );
};

export default ClassNameProvider;