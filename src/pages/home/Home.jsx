import "./home.css"
import Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import Charts from "../../components/charts/Charts"
import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

export default function Home() {
  return (
    <div className="home">
     <Featuredinfo />
     <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
     <div className="homeWidgets"> 
     <WidgetSm/>
     <WidgetLg/>
     </div>
    </div>
  )
}
