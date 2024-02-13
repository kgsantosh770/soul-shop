import Image from '../Image/Image';
import './Banner.css';

const Banner = ({ beforeHighlightText, highlightText, afterHighlightText, children }) => {
    return (
        <>
            <div className="banner-text">
                <p>{beforeHighlightText}</p>
                <p className="highlight">{highlightText}</p>
                <p>{afterHighlightText}</p>
            </div>
            {children && children}
        </>

    )
}

export default Banner