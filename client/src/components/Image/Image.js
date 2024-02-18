import { DESKTOP_MIN_WIDTH } from '../../utils/constants';

const Image = ({ image, alt, title, desktopImage = null, className }) => {
    return (
        <picture>
            {desktopImage && <source srcSet={desktopImage} media={`(min-width: ${DESKTOP_MIN_WIDTH}px)`} />}
            <img className={className ? className : ''} alt={alt} title={title} src={image} />
        </picture>
    )
}

export default Image