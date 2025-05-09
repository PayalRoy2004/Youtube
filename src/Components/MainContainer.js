
import InnerContainer from "./InnerContainer";
import SideBar from "./SideBar";

const MainConrainer =()=>{
    return(
        <div className="flex">
            <SideBar/>
            <InnerContainer/>
        </div>
    )
}

export default MainConrainer;