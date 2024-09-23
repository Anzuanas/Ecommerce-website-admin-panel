import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">
     <div className="userTitleContainer">
     <h1 className="userTitle">Edit user</h1>
     <Link to="/newUser">
     <button  className="userAddButton">Create</button>
     </Link>

     </div>
     <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" className="userShowImg"/>
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account details</span>
               <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck 99</span>
                </div>

                <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1999</span>
                </div>

                <span className="userShowTitle">Contact details</span>
                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">9072376547</span>
                </div>

                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck@gmail.com</span>
                </div>

                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">New York</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    
                    
                <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                    </div>

                    <div className="userUpdateItem">
                        <label>Full name</label>
                        <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                    </div>

                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                    </div>

                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="annabeck" className="userUpdateInput"/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png" alt="" className="userUpdateImg"/>
                        <label htmlFor="file"><Publish/></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
     </div>
    </div>
  )
}
