import './IconBadge.css';

const IconBadge = ({ children, badgeCount }) => {
    return (
        <div className="icon-wrapper">
            {
                badgeCount > 0 &&
                <span className="badge">{badgeCount > 9 ? '9+' : badgeCount}</span>
            }
            {children}
        </div>
    )
}

export default IconBadge;