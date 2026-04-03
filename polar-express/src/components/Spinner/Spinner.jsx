import './Spinner.css'
import { useEffect, useState } from "react";

const Spinner = ({isVisible}) => {
    const [isLoaderVisible, setIsLoaderVisible] = useState(false)

    useEffect(() => {
        setIsLoaderVisible(isVisible)
    }, [isVisible])

    return isLoaderVisible
        ? <div className="loader"></div>
        : null
}

export default Spinner;
