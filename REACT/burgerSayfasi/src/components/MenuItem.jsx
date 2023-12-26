

function MenuItem({ image, name, content, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1 style={{ marginBottom: "10px" }}>{name}</h1>
            <h6 style={{ marginTop: "0px", fontSize: "18px" }}>{content}</h6>
            <i style={{ color: "red" }}>
                <p style={{ margin: "0", position: "relative", bottom: "20px" }}>{price} TL</p>
            </i>


        </div>
    );
}

export default MenuItem;
