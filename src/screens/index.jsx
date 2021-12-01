import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import { cleanObject,useMount} from "../utils"
import qs from 'qs'
export const ProjectList = () =>{
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(param))}`).then(async res=> {
              if(res.ok){
                  setList(await res.json())
              }
        })
    },[param]);
    useMount(()=>{
              fetch('http://localhost:3001/users').then(async res =>{
                  if(res.ok){
                      setUsers(await res.json());
                  }
              })
        })
    return <div>
       <SearchPanel param={param} setParam={setParam} users={users}/>
       <List list={list} users = {users}/>
    </div>
}