import React, { useState } from "react";
import SwitchTabs from "../../../components/switchApps/SwitchTabs";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "../../home/style.scss";
import Carousel from "../../../components/carousel/carousel";
import useFetch from "../../../hooks/useFetch";
export default function Tranding() {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Tranding</span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
      </div>
    </>
  );
}
