import { useState } from "react"
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"
import { useEffect } from "react"
import { userRequest } from "../../requestMethod"

export default function WidgetSm() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const getUsers = async ()=>{
            const res = await userRequest.get("users/?new=true")
            setUsers(res.data)
        }
        getUsers()
    },[])
  return (
    <div className="widgetSm">
     <span className="widgetSmTitle">New join members</span>
     <ul className="widgetSmList">
     {users.map((user) =>(

     
        <li className="widgetSmListItem" key={user._id}>
            <img src={user.img || "http://localhost:3000/images/me.jpg"} alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
               
            </div>
            <button className="widgetSmButton">
           <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
    )
)}
     </ul>
    </div>
  )
}
