import Star from "../img/Star1.png"

function Card(props){
    return(
        <div className="card">                                                 
            <img className="card-img" src={props.image} alt="first-card"/>
            <div className="card-stat">
                <img className="card-star" src={Star} alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) . {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span class="bold">From ${props.price}</span> / person</p>
        </div>
    )
}


export default Card;