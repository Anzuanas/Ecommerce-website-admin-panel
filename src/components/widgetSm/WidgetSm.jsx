import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
     <span className="widgetSmTitle">New join members</span>
     <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anas kv</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
           <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anas kv</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
           <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anas kv</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anas kv</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
           <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src="http://localhost:3000/images/me.jpg" alt="do" className="widgetSmImage"></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Anas kv</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
           <Visibility className="widgetSmIcon"/>
            Display
            </button>
        </li>
     </ul>
    </div>
  )
}
