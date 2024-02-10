import {CDN_URL} from "./components/utils/constants";

const ResturantCarts = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = props;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={CDN_URL +
                resData.data.cloudinaryImageId
                }
            />
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(",")}</h4>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.costForTwo / 100}</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    );
};

export default ResturantCarts;