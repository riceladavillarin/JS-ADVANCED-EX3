function handleLoadData(event) {
    if (event.target.id === 'loadData') {
        const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
        fetchData(apiUrl)
            .then(fetchedData => {
                console.log("Fetched Data:", fetchedData);
                displayData(fetchedData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}

function handleClearTable(event) {
    if (event.target.id === 'clearTable') {
        clearTable();
    }
}

function displayData(data) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    const headers = ["User ID", "Task ID", "Title", "Status"];

    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        th.style.border = "1px solid black";
        th.style.textAlign = "center";
        headerRow.appendChild(th);
    });

    data.forEach(item => {
        const row = table.insertRow();
        row.style.border = "1px solid black";

        const userIdCell = row.insertCell();
        userIdCell.textContent = item.userId;
        userIdCell.style.border = "1px solid black";
        userIdCell.style.textAlign = "left";

        const taskIdCell = row.insertCell();
        taskIdCell.textContent = item.id;
        taskIdCell.style.border = "1px solid black";
        taskIdCell.style.textAlign = "left";

        const titleCell = row.insertCell();
        titleCell.textContent = item.title;
        titleCell.style.border = "1px solid black";
        titleCell.style.textAlign = "left";

        const statusCell = row.insertCell();
        statusCell.textContent = item.completed ? "Completed" : "Not yet completed";
        statusCell.style.color = item.completed ? "green" : "red";
        statusCell.style.border = "1px solid black";
        statusCell.style.textAlign = "left";
    });

    document.body.appendChild(table);
}

function clearTable() {
    const table = document.querySelector("table");
        table.remove();
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", handleLoadData);
    document.addEventListener("click", handleClearTable);
});
