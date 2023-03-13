
import Image from "next/legacy/image";
import { relative } from "path";
const First = () => {
  return (
    <section className="mt-3" id="welcome">
      <Image src="/head.svg" layout="fill" className="home-tiger-head" style={{zIndex:-1}} alt="noimage"></Image>
      <div className="container">
        <div className="row justify-content-between text-white">
          <div className="col-lg-6">
            <h1 className="myh1">WELCOME TO META TIGERS</h1>
          </div>
          <div className="col-lg-6 ">
            <p >
              Welcome to Meta Tiger Society, where an exclusive collection of 5,555
              hand-drawn NFT tigers prowl the Ethereum blockchain...

              <br /><br />
              Celebrate the natural majesty of the tiger, support the protection of this critically endangered animal, and benefit from a range
              of incredible utilities by joining the Meta Tiger movement today!.
              <br /><br />

            </p>
            <a href="#" className="my-btn" style={{position:"relative"}}>JOIN DISCORD</a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
          <div className="col-lg-4">
            <div className="mydiv2 m-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default First;