import Image from "next/legacy/image";

const Second = () => {
    return (
      
       <section className="p-5" id="about">

      <div className="container">
        <div className="row justify-content-between text-white">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="mydiv2 m-2"></div>
              </div>
              <div className="col-lg-6">
                <div className="mydiv2 m-2"></div>
              </div>
              <div className="col-lg-6">
                <div className="mydiv2 m-2"></div>
              </div>
              <div className="col-lg-6">
                <div className="mydiv2 m-2"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 about">
            <h1 className="myh1">META TIGERS</h1>
            <br />
            <p>
              The Meta Tiger team is dedicated to bringing awareness to and
              supporting the preservation of the critically endangered tiger.
              With just a few percent of the world’s tigers left alive, this
              cause has never been more vital. …
              <br /><br />
              As our passionate project grows, we plan to create a virtual
              Conservation Station where members can learn all there is to know
              about this incredible animal. It will be possible for Meta Tiger
              Society members to , support tiger organizations doing invaluable
              work worldwide, and even secure spots on educational trips to
              glimpse tigers in their natural habitats!
              <br /><br />
              Together, let’s make a roaring difference…
            </p>
            <br />
            <a href="#" className="my-btn "> BUTTON TEXT</a>
          </div>
        </div>
      </div>
    </section>
    );
  };
  export default Second;