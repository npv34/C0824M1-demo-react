import "./Star.css";
import {useState} from "react";

function Star({totalStar}) {

    const [currentStar, setCurrentStar] = useState(totalStar)

    const starList = [];
    for (let i = 0; i < 5; i++) {
        if (i < currentStar) {
            starList.push(<i onMouseOver={() => handleHoverStar(i)} key={i} className="bi bi-star-fill my-star"></i>);
        } else {
            starList.push(<i onMouseOver={() => handleHoverStar(i)} key={i} className="bi bi-star-fill"></i>);
        }
    }

    const handleHoverStar = (index) => {
        setCurrentStar(index + 1)
    }

    return (
        <div>
            {starList}
        </div>
    );
}

export default Star;