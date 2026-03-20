import clsx from 'clsx';
import './Tooltip.css'

const Tooltip = ({content, isTooltipVisible}) => {
    const tooltipStyles = clsx('tooltip-wrapper', {
        'hidden': !isTooltipVisible
    })

    return <div className={tooltipStyles}>{content}</div>
}

export default Tooltip;