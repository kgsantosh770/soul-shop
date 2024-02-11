import './IconBadge.css';

const IconBadge = ({ children, badgeCount }) => {
    return (
        <div className="icon-wrapper">
            <span className="badge">{badgeCount > 10 ? '10⁺' : badgeCount}</span>
            {children}
        </div>
    )
}

export default IconBadge;