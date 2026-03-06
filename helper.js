export const createServiceTableItem = (item, isLongLine) => {
    const tableElement = document.createElement("span");
    tableElement.textContent = item;
    tableElement.style.display = "inline-block";
    tableElement.style.height = "30px";
    tableElement.style.padding = "2px";
    tableElement.style.border = "1px solid black";
    tableElement.style.textOverflow = "ellipsis";
    tableElement.style.overflow = "hidden";
    tableElement.style.whiteSpace = "nowrap";

    if (isLongLine) {
        tableElement.style.width = "400px";
    } else {
        tableElement.style.width = "150px";
    }

    return tableElement;
}


export const createServiceTableRow = (tagName = "p") => {
    const seviceTableHeader = document.createElement(tagName);
    seviceTableHeader.style.paddingLeft = "20px";
    seviceTableHeader.style.display = "flex";
    seviceTableHeader.style.width = "700px";
    seviceTableHeader.style.borderCollapse = "collapse";

    return seviceTableHeader;
}

export const createServiceRowItems = (service) => {
    return Object.entries(service).reduce((acc, [key, content]) => {
        if (key === "id") {
            return acc;
        }
        const params = [content];
        if (key === "description") {
            params.push(true);
        }

        const seviceTableRow = createServiceTableItem(...params);
        acc.push(seviceTableRow);

        return acc;
    }, []);
}

export const createTitle = (content) => {
    const title = document.createElement("h2");
    title.textContent = content;
    title.style.textAlign = "center";
    title.style.marginBottom = "42px";

    return title;
}