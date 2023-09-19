import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "./style.scss";
export default function Herobanner() {
  // States
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  // Navigate
  const Navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      Navigate(`/search/${query}`);
    }
  };
  const search = ()=>{
    Navigate(`/search/${query}`);

  }

  return (
    <>
      <div className="herobanner">
        {!loading && (
          <div className="backdrop-img">
            <img src={background} alt="" />
          </div>
        )}
        <ContentWrapper>
          <div className="opacity-layer"></div>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. explore now
            </span>
            <div className="searchInput">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                type="text"
                placeholder="Search for a movie or tv show..."
              />
              <button onClick={search}>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}
