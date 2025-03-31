import React, { useState, useEffect } from "react";
import Banner from "./Banner";


const Middle = (props) => {
    const [article, setdata] = useState([]);
    useEffect(() => {
        let { category, pageSize } = props;
        async function fetchData() {
            if (props.category === null) {
                const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pagesize=${pageSize}`;
                let dat = await fetch(url);
                let jsonData = await dat.json();
                setdata(jsonData.articles);
            } else {
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}&pagesize=${pageSize}`;
                let dat = await fetch(url);
                let jsonData = await dat.json();
                setdata(jsonData.articles);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {
                        article.map((element) => {
                            return <Banner url={element.urlToImage ? element.urlToImage : ""} title={element.title ? element.title : ""} source={element.source.name ? element.source.name : ""} key={element.urlToImage} />
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Middle;
