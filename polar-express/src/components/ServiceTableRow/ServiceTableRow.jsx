const ServiceTableRow = ({ description, title, priceFrom }) => {
    console.log(description, title, priceFrom)
    return (
        <div>
            <span>{title}</span>
            <span>{description}</span>
            <span>{priceFrom}</span>
        </div>
    )
}

export default ServiceTableRow;
