import "./home.css"
import Featuredinfo from "../../components/featuredInfo/Featuredinfo"
import Charts from "../../components/chart/Chart"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethod"

export default function Home() {
  const [stats,setStats]=useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err) {}
    };
    getStats();
  }, [MONTHS]);

  
  return (
    <div className="home">
     <Featuredinfo />
     <Charts data={stats} title="User Analytics" grid dataKey="Active User"/>
     <div className="homeWidgets"> 
     <WidgetSm/>
     <WidgetLg/>
     </div>
    </div>
  )
}
