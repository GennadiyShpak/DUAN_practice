import {polarExpressData} from "../../mockData/mock_data.js";
import ServiceTableHeader from "../ServiceTableHeader/ServiceTableHeader.jsx";
import ServiceTableRow from "../ServiceTableRow/ServiceTableRow.jsx";

const Main = () => {
    const { services } = polarExpressData
    return <main class="main_container">
        <ServiceTableHeader/>
        {
            services.map(({id, description, title, priceFrom}) =>
                <ServiceTableRow key={id} description={description} title={title} priceFrom={priceFrom}/>)
        }
    </main>
}

export default Main;
