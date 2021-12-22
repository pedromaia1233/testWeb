import "../styles/Testemunhos.css"
import BannerImage from "../assets/home3.jpg";

function Testemunhos() {
    return (
        <div className="testemunhos">
            <div className="imageContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
                <div className="headerContainer">
                    <h1> TESTEMUNHOS </h1>
                </div>
            </div>
        </div>
    )
}

export default Testemunhos
