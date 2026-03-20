import clsx from "clsx";
import './ServiceTableHeader.css'


const ServiceTableHeader = () => {
    const headerWrapperClasses = 'table-item-wrapper'

   return (
       <div className={clsx(headerWrapperClasses)}>
           <span>title</span>
           <span>description</span>
           <span>price-form</span>
       </div>
   )
}

export default ServiceTableHeader;
