import React from "react";

const CardData = (props) => {
    let {key,url,title,description,publishedAt,source,content}=props;
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={!url?'https://bitsofco.de/content/images/2018/12/broken-1.png':url} className="img-fluid rounded-start" alt={source} style={{width:"420px", height: "240px"}}/>
            </div>
            <div className="col-md-8">
            <span className="badge bg-primary">{!source?"Unknown":source}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Last updated { new Date(publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={content} target="_blank" className="btn btn-sm btn-dark position-absolute bottom-0 start-35 "style={{marginBottom: "5px"}}>Read More</a>
                </div>
            </div>
        </div>
    )
}
export default CardData;