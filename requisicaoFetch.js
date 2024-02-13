async function fetchData() {
    try {
        const response = await fetch('url_do_endpoint');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        fillGrid(data);
    } catch (error) {
        console.log('Houve um problema com a requisição Fetch:' + error.message);
    }

}

function fillGrid(data) {
    const table = document.getElementById('orderTable');

    table.innerHTML = '';

    const headerRow = document.createElement('tr');
    ['Pedido', 'Nota Fiscal', 'Emissão' , 'Código', 'Descrição', 'Quantidade', 'Valor Unitário'].forEach(headerText => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(rowData => {
        const row = document.createElement('tr');
        Object.values(rowData).forEach(cellData => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(cellData));
            row.appendChild(td);
        });
        table.appendChild(row);
    });
}

fetchData();


function ClearForm() {
    document.getElementById('cliente').value = '';
    document.getElementById('representante').value = '';
    document.getElementById('pedidoVenda').value = '';
    document.getElementById('status').value = '';
    document.getElementById('peridoInicio').value = '';
    document.getElementById('periodoFim').value = '';
}


document.querySelectorAll('a').forEach(link => {
    const  sidebar = document.getElementById('header')

    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.href)
        .then(resp => resp.text())
        .then(html => header.innerHTML = html)
    }
})