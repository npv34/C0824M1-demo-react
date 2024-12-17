import "./Star.css";

function Star({totalStar}) {


    const starList = [];
    for (let i = 0; i < 5; i++) {
        if (i < totalStar) {
            starList.push(<i key={i} className="bi bi-star-fill my-star"></i>);
        } else {
            starList.push(<i key={i} className="bi bi-star-fill"></i>);
        }
    }

    return (
        <div>
            {starList}
        </div>
    );
}

export default Star;