new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["Asia", "Africa", "Europe", "North America", "South America", "Australia", "Antarctica"],
        datasets: [
            {
                label: "Population(in millions)",
                backgroundColor:["blue","green","yellow","black","teal","red","purple"],
                data: [7909,4694,1393,745,595,44,0]
            }   
        ]
    },
    options:{
        legend: { display: false },
        title:{
            display: true,
            text: 'Continent Population(in millions) 2021 Tao Wang'   
        }
    }
});

new Chart(document.getElementById("pie-chart"),{
    type: 'pie',
    data: {
        labels: ["Asia", "Africa", "Europe", "North America", "South America", "Australia", "Antarctica"],
        datasets: [
            {
                label: "Population(in millions)",
                backgroundColor:["blue","green","yellow","black","teal","red","purple"],
                data: [7909,4694,1393,745,595,44,0]
            }   
        ]
    },
    options:{
        title: {
            display: true,
            text: 'Contient Population(in millions) 2021 Tao Wang'
        }
    }
});