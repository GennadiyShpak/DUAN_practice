import {polarExpressData} from "../../mockData/mock_data.js";
import ServiceTableHeader from "../ServiceTableHeader/ServiceTableHeader.jsx";
import ServiceTableRow from "../ServiceTableRow/ServiceTableRow.jsx";
import clsx from 'clsx'
import './Main.css'
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner.jsx";
import AddServiceForm from "../AddServiceForm/AddServiceForm.jsx";

const Main = () => {
    const { services } = polarExpressData
    const [deliveryServices, setDeliveryServices] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isAddServiceFormVisible, setIsAddServiceFormVisible] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(services)
            }, 1000)

            setTimeout(() => {
                reject()
            }, 1500)
        })

        promise.then((data) => {
            setDeliveryServices(data)
        })
        .catch(() => {
            setError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [services])

    const addServiceHandler = (service) => {
        const newService = {
            id: deliveryServices.length + 1,
            ...service
        }

        setDeliveryServices([...deliveryServices, newService])
    }

    return <main class="main_container">
        <h2 className={clsx('page-title')}>
            Service page
        </h2>

        <button onClick={() => setIsAddServiceFormVisible(true)}>Add service</button>

        {
            isAddServiceFormVisible 
            && <AddServiceForm
                    formStateHandler={setIsAddServiceFormVisible}
                    addServiceHandler={addServiceHandler}
                />
        }

        <ServiceTableHeader/>

        {
            deliveryServices.map(({id, description, title, priceFrom}) =>
                <ServiceTableRow key={id} description={description} title={title} priceFrom={priceFrom}/>)
        }

        <Spinner isVisible={isLoading}/>

        {error && <p className={clsx('error-message')}>Something went wrong. Please try again later.</p>}
    </main>
}

export default Main;
