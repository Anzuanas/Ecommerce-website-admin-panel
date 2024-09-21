import "./widgetLg.css"

export default function WidgetLg() {
  const Button=({type})=>{
    return <button className={"WidgetLgButton"+type}>{type}</button>
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
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetLgImg"></img>
        <span className="widgetLgName">susan carol</span>
      </td>
      <td className="widgetLgDAte">20 jan 2024</td>
      <td className="widgetLgAmount">22000$</td>
      <td className="widgetLgStatus">
        <Button type="Approved"/>
      </td>
    </tr>

    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetLgImg"></img>
        <span className="widgetLgName">susan carol</span>
      </td>
      <td className="widgetLgDAte">20 jan 2024</td>
      <td className="widgetLgAmount">22000$</td>
      <td className="widgetLgStatus">
        <Button type="Declined"/>
      </td>
    </tr>

    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetLgImg"></img>
        <span className="widgetLgName">susan carol</span>
      </td>
      <td className="widgetLgDAte">20 jan 2024</td>
      <td className="widgetLgAmount">22000$</td>
      <td className="widgetLgStatus">
        <Button type="Pending"/>
      </td>
    </tr>

    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetLgImg"></img>
        <span className="widgetLgName">susan carol</span>
      </td>
      <td className="widgetLgDate">20 jan 2024</td>
      <td className="widgetLgAmount">22000$</td>
      <td className="widgetLgStatus">
        <Button type="Approved"/>
      </td>
    </tr>
   </table>
    </div>
  )
}