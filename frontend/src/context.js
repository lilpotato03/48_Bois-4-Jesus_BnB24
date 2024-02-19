import React,{createContext,useState} from "react";

export const MyContext=createContext(null);

 function AppContext({children}) {
  //states
  const [inputText,setInputText]=useState('');
  const [tag,setTag]=useState('');
  const [tagList,setTagList]=useState([]);
  const [searchQuery,setSearchQuery]=useState({});
    return (
    <MyContext.Provider value={{inputText,setInputText,tag,setTag,tagList,setTagList,searchQuery,setSearchQuery}} >
        {children}
    </MyContext.Provider>
  )
}

export default AppContext   