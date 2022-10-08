import heartFilled from "../../svgs/heartFilled.svg"
import heartOutlined from "../../svgs/heartOutlined.svg"
// src/svgs/heartFilled.svg
const Card = ({name, phone, email, image, favoured}) => {
    return <div className="card">
        <div className="card-header">
            <img src={image.url} alt={image.alt} className="card-img"/>
            {/* in the card-header we use a ternary expression to show the right heart svg */}
            <button className="heart">
                {favoured ? (
                    <img src={heartFilled} alt="filled heart" />
                ) : <img src={heartOutlined} alt="outlined heart" />}
            </button>
        </div>
        <div className="card-content">
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div>;
};

export default Card;