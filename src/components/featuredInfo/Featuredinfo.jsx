import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
         <span className="featuredTitle">Revenue</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,344</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon Negative" /></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
         <span className="featuredTitle">Sales</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,344</span>
            <span className="featuredMoneyRate">+11.4 <ArrowUpward className="featuredIcon " /></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
         <span className="featuredTitle">Cost</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,644</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward  className="featuredIcon Negative" /></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
      </div>
    
    </div>
  )
}
