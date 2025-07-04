
import '../AboutUspages/AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Networkbg from "../../assets/Network/Networkbanner.jpg"

const Network1 = () => {
    return (
        <div>

            <div className="aboutUsContainer" style={{ backgroundImage: `url(${Networkbg})` }}>
                <div className="navigation">
                    <span>Home</span>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <span>Network</span>
                </div>

                <h1 className="aboutUsTitle">Network</h1>
            </div>
        </div>
    )
}

export default Network1
