fetch("https://randomuser.me/api/?results=5").then((data) =>{
    return data.json();
}).then((objectData) => {
    let tableData = "";
    let i=1;
    objectData.results.map((values) => {
        tableData += `
        <tr>
        <td>${i}</td>
        <td>${values.name.first}</td>
        <td>${values.location.city}</td>
        </tr>
        `;
        i++;
    })
    document.getElementById("table_body").innerHTML=tableData;
})