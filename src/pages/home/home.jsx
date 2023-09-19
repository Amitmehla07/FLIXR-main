import "./style.scss";
import Herobanner from "./heroBanner/Herobanner";
import Tranding from "./Tranding/Tranding";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import ad from "../../../ads.txt"
import AdComponent from "../../components/adComponent/AdComponent";
const home = () => {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <AdComponent/>
        <Tranding />
        <AdComponent/>
        <Popular/>
        <AdComponent/>
        <TopRated/>
        <AdComponent/>
      </div>
    </>
  );
};

export default home;
