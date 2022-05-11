import React, { useEffect, useState } from "react";
import CardData from "./CardData";

const NewsItem = (props) => {
    const [article, setdata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (props.category ==null) {
                const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87878f798bbd43649938ccc05261c206&pagesize=${props.pageSize}`;
                let dat = await fetch(url);
                let jsonData = await dat.json();
                setdata(jsonData.articles);
            } else {
                const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=87878f798bbd43649938ccc05261c206&pagesize=${props.pageSize}`;
                let dat = await fetch(url);
                let jsonData = await dat.json();
                setdata(jsonData.articles);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="container" style={{marginTop: "25px"}}>
            {
                article.map((element) => {
                    return <div className="card mt-2" style={{ width: "auto" }}>
                        <CardData key={element.urlToImage} url={element.urlToImage} title={element.title} description={element.description} publishedAt={element.publishedAt} source={element.source.name} content={element.url}/>
                    </div>
                })
            }
        </div>
    )
}
export default NewsItem;