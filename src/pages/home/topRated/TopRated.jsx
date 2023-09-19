import React, { useState } from "react";
import SwitchTabs from "../../../components/switchApps/SwitchTabs";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "../../home/style.scss";
import Carousel from "../../../components/carousel/carousel";
import useFetch from "../../../hooks/useFetch";
export default function TopRated() {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} endpoint={endpoint} loading={loading} />
      </div>
    </>
  );
}
