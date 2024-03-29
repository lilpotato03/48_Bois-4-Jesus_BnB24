import React,{useState,useContext} from 'react'
import AppContext,{MyContext} from '../../context'
import FilOptions from '../smaller_components/FilOptions'
import Tag from '../smaller_components/Tag'
import FilterAdd from '../smaller_components/FilterAdd'
function Filter() {
  const {tagList,setTagList}=useContext(MyContext);
  console.log(MyContext)
  function addTag(title){
    setTagList((prev)=>{  
      return[
        ...prev,
        title
      ]
    })
  }
  function deleteTag(id){
    setTagList((prev)=>{
      return prev.filter((tags,index)=>{
        return index !==id;
      })
    })
  }
  function genTags(tag,index){
    return(
      <Tag 
        id={index}
        key={index}
        title={tag}
        onDelete={deleteTag}
      />
    );
  }
  return (
    <div className='filter'>
      <div className="upload hover">
        <h1>UPLOAD</h1>
      </div>
      <FilOptions title="Skills"/>
      <FilterAdd onAdd={addTag}/>
      <div className='tagCont'>
        {tagList.map(genTags)}
      </div>
    </div>
  )
}

export default Filter