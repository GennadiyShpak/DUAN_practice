import './ServiceTableRow.css'
import clsx from 'clsx'
import Tooltip from '../Tooltip/Tooltip'
import { useState } from 'react'

const ServiceTableRow = ({ description, title, priceFrom }) => {
    const rowWrapperClasses = ['table-item-wrapper']
    const tableDescriptionClasses = ['description']

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const onMouseEnter = () => {
        setIsTooltipVisible(true)
    }

    const onMouseLeave = () => {
        setIsTooltipVisible(false)
    }

    return (
        <div className={clsx(rowWrapperClasses)}>
            <span>{title}</span>
            <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={description} className={clsx(tableDescriptionClasses)}>
                <span className={'description-content'}>{description}</span>
                <Tooltip content={description} isTooltipVisible={isTooltipVisible}/>
            </span>
            <span>{priceFrom}</span>
        </div>
    )
}

export default ServiceTableRow;
