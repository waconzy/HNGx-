import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import poster from '../../../assets/Poster.png'
import imdb from '../../../assets/imdb.png'
import frut from '../../../assets/frut.png'
import button from '../../../assets/Button.png'
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
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
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
        
                <div className="backdrop-img">
                    <img src={poster} alt="" />
                </div>
            

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">John Wick 3 : 
                    Parabellum</span>
                    <div className="c1">
                        <span><img src={imdb} alt="" /> 860 / 100</span>
                        <span><img src={frut} alt="" /> 97%</span>
                    </div>
                    <span className="subTitle">
                    John Wick is on the run after killing a member <br /> of the international
                     assassins guild, and with a<br />  $14 million price tag on his head,
                      he is the target <br /> of hit men and women everywhere.
                    </span>
                    <span><img src={button} alt="" /></span>
                   
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
