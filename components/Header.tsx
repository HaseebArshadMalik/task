import Image from "next/image";
const Header = () => {
    return (
   <nav className="mynav">
    <div className="container-fluid">
        <div className="mycolor">
        <Image src="/headerlogo.png" width="100" height="100" className="images1 p-2" alt="noimage" ></Image>
        <div className="myround">
            <ul>
                <li> <a href="#welcome"> WELCOME</a></li>
                <li> <a href="#about"> ABOUT</a></li>
                <li> <a href="#artist"> ARTIST</a></li>
                <li> <a href="#roadmap"> ROADMAP</a></li>
                <li> <a href="#team"> TEAM</a></li>
                <li> <a href="#"> FAQ</a></li>
                
            </ul>
            <a href="#" className="my-btn mx-3"> MINT</a>
        </div>
        </div>
    </div>
   </nav>
    )
}
export default Header;