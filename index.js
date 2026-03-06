import { polarExpressData } from "./mock_data.js";
import {
    createServiceTableItem,
    createServiceTableRow,
    createServiceRowItems,
    createTitle,
    } from "./helper.js";

const serviceTableItemList = ['title', 'description', 'priceFrom'];
const services = polarExpressData.services;

const servicesContainer = document.querySelector("main");
servicesContainer.classList.add("main_container");
const title = createTitle("Our Services");
servicesContainer.appendChild(title);

const servicesList = document.createElement("ul");
const seviceTableHeader = createServiceTableRow();



const headerElements = serviceTableItemList.map(item => {
    if (item === 'description') {
        return createServiceTableItem(item, true);
    }

    return createServiceTableItem(item);
});

headerElements.forEach(headerElement => {
    seviceTableHeader.appendChild(headerElement);
});
servicesContainer.appendChild(seviceTableHeader);

const serviceElementList = services.map(service => {
    const rowContainer = createServiceTableRow("li");
    
    const serviceRowContentList = createServiceRowItems(service);
    serviceRowContentList.forEach(serviceRowContent => {
        console.log(serviceRowContent);
        
        rowContainer.appendChild(serviceRowContent)
    });

    return rowContainer;
});

servicesList.append(...serviceElementList);
servicesContainer.appendChild(servicesList);