import '../AboutUspages/AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import New_arrivals from "../../assets/New_arrivals/NewArreivalbanner.jpg";
import ClickSpark from '../../style/ClickSpark';

const NewArrivals1 = () => {
    return (
        <div>
            <div className="aboutUsContainer" style={{ backgroundImage: `url(${New_arrivals})` }}>
                <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                >
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <div className="navigation">
                            <span>Home</span>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <span>New Arrivals</span>
                        </div>

                        <h1 className="aboutUsTitle">New Arrivals</h1>
                    </div>
                </ClickSpark>
            </div>
        </div>
    )
}

export default NewArrivals1

