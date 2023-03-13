import Fourth from "imports/components/Fourth";
import Second from "imports/components/Second";
import Third from "imports/components/Third";
import First from "imports/components/First";
import Fifth from "imports/components/Fifth";
import Sixth from "imports/components/Sixth";
import Seventh from "imports/components/Seventh";
import Eight from "imports/components/Eight";
import Footer from "imports/components/Footer";
import Ninth from "imports/components/Ninth";
import Header from "imports/components/Header";
const View = () => {
  return (
      <div className="my-body">
        <Header/>
        <First/>
        <Second />
        <Third />
        {/* <Fourth/> */}
        <Fifth/>
        <Sixth  />
        <Seventh />
        {/* <Eight /> */}
        <Ninth />
        <Footer />
      </div>
 
       
  
  );
};
export default View;