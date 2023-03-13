import Image from "next/image";
const Footer = () => {
    return (
        <section>
        <div className="footer-wrapper p-5">
            <Image src="/MTS.png" width="100" height="100" style={{opacity: .3}}alt="noimage" ></Image>
            <div className="footer-menu text-white">
                <a href="#welcome" className="nav-link hover">WELCOME</a> 
                <a href="#about" className="nav-link ">ABOUT</a>
                <a href="#artist" className="nav-link">ARTIST</a>
                <a href="#roadmap" className="nav-link">ROADMAP</a>
                <a href="#team" className="nav-link">TEAM</a>
                <a href="#" className="nav-link">FAQ</a>
            </div>
            <div className="margin-top margin-small">
            <a href="#" className="my-btn"> JOIN DISCORD</a>
            </div>
        </div>
        <div className="text-center copyfoot">
            <p className=" p-3">
            META TIGER SOCIETY - ALL RIGHTS RESERVED | DESIGN BY CERKA
            </p>
        </div>
        </section>
    );
  };
  export default Footer;