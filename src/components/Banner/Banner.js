import './Banner.css';

const Banner = ({ beforeHighlightText, highlightText, afterHighlightText, children, style }) => {
    return (
        <div style={style ? style : {}}>
            <div className="banner-text">
                <p>{beforeHighlightText}</p>
                <p className="highlight">{highlightText}</p>
                <p>{afterHighlightText}</p>
            </div>
            {children && children}
        </div>

    )
}

export default Banner