function Banner(props) {
    let { url,title,source } = props;
    return (
        <div className="carousel-item active" style={{marginTop: "59px"}}>
      <img src={url} className="d-block w-100" alt="..." style={{ width: "600px", height: "400px" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{source}</h5>
        <p>{title}</p>
      </div>
    </div>
    )
}

export default Banner;