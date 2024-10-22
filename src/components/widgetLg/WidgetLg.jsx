import "./widgetLg.css"
import { useState } from "react"
import { useEffect } from "react"
import { userRequest } from "../../requestMethod"
import {format} from "timeago.js"


export default function WidgetLg() {
  const [Orders,setOrders] = useState([])

    useEffect(()=>{
        const getOrders = async ()=>{
            const res = await userRequest.get("orders")
            setOrders(res.data)
        }
        getOrders()
    },[])
  const Button=({type})=>{
    return <button className={"WidgetLgButton "+ type}>{type}</button>
  }
  return (
    <div className="widgetLg">
   <h3 className="widgetLgTitle">Latest Transactions</h3>
   <table className="widgetLgTable">
    <tr className="widgetLgTr">
      <th className="widgetLgTh">Customer</th>
      <th className="widgetLgTh">Date</th>
      <th className="widgetLgTh">Amount</th>
      <th className="widgetLgTh">Status</th>
    </tr>
    {Orders.map((order) =>(
    <tr className="widgetLgTr" key={order._id}>
      <td className="widgetLgUser">
       
        <span className="widgetLgName">{order.userId}</span>
      </td>
      <td className="widgetLgDAte">{format(order.createdAt)}</td>
      <td className="widgetLgAmount">${order.amount}</td>
      <td className="widgetLgStatus">
        <Button type={order.status}/>
      </td>
    </tr>
 ) )}

    
   </table>
    </div>
  )
}