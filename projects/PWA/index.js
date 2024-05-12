const inputWeightField = document.getElementById('input-weight');
const planetField = document.getElementById('input-planet');
const outputWeight = document.getElementById('output-weight');
const form = document.getElementById('converter');

function convertWeight(value, planet) {
    if(planet === "moon")
        {
            return value*0.166;
        }
    if(planet === "jupiter")
        {
            return value*2.34;
        }
    if(planet === "mars")
        {
            return value*0.38;
        }
    if(planet === "venus")
        {
            return value*0.91;
        }
    return value;
}

form.addEventListener('input', () => {
    const inputWeight = inputWeightField.value;
    const inputPlanet = planetField.value;

    outputWeight.value = Math.round(convertWeight(inputWeight,inputPlanet))*100 /100 + " lbs";

});
