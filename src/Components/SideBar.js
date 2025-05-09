import SideBarItems from "./SideBarItems";

const SideBar =()=>{
    return(
        <div className="h-80 w-1/5 bg-red-400">
            
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Sports
                </li>
                <li>
                    News
                </li>
            </ul>
            <SideBarItems/>
        </div>
    )
}

export default SideBar;