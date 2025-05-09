import Hamburger from "./Hamburger";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

const Head =()=>{
    return(
        <div className="flex items-center">
            
            <Hamburger/>
            <Logo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

export default Head;