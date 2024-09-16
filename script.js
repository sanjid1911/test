// Default data for each region
const regionData = {
    region1: {
        soilMoisture: [20, 25, 22, 30, 28, 35, 33, 38, 36, 40, 42, 45],
        precipitation: [120, 150, 110, 170, 180, 220, 210, 190, 160, 140, 130, 125],
        temperature: [15, 18, 20, 25, 30, 35, 38, 36, 32, 28, 22, 18],
        windSpeed: [5, 7, 10, 12, 8, 15, 20, 18, 13, 10, 7, 5],
        solarRadiation: [200, 250, 300, 400, 500, 600, 550, 500, 450, 400, 350, 300],
        soilNutrients: [80, 90, 85, 88, 95, 100, 105, 102, 98, 93, 90, 85]
    },
    region2: {
        soilMoisture: [18, 22, 25, 32, 27, 35, 33, 40, 38, 42, 45, 48],
        precipitation: [130, 160, 140, 190, 200, 220, 210, 185, 175, 150, 135, 130],
        temperature: [20, 25, 27, 29, 33, 38, 42, 40, 35, 30, 25, 20],
        windSpeed: [6, 9, 12, 13, 9, 17, 19, 16, 12, 10, 8, 6],
        solarRadiation: [220, 270, 320, 420, 520, 620, 570, 520, 470, 420, 370, 320],
        soilNutrients: [85, 95, 90, 93, 100, 105, 110, 108, 102, 98, 95, 90]
    },
    region3: {
        soilMoisture: [22, 28, 26, 32, 30, 38, 36, 40, 38, 45, 48, 50],
        precipitation: [150, 170, 160, 200, 210, 230, 225, 190, 180, 160, 150, 140],
        temperature: [10, 12, 15, 20, 25, 28, 30, 28, 24, 20, 18, 12],
        windSpeed: [7, 10, 13, 15, 11, 18, 22, 19, 14, 11, 9, 7],
        solarRadiation: [240, 280, 330, 430, 530, 630, 580, 530, 480, 430, 380, 330],
        soilNutrients: [90, 100, 95, 98, 105, 110, 115, 112, 105, 100, 98, 90]
    },
    region4: {
        soilMoisture: [25, 30, 28, 35, 32, 40, 38, 45, 42, 48, 50, 52],
        precipitation: [140, 180, 170, 210, 220, 240, 230, 200, 190, 170, 160, 150],
        temperature: [22, 25, 28, 33, 38, 42, 45, 42, 38, 35, 30, 25],
        windSpeed: [8, 11, 14, 16, 12, 20, 24, 21, 15, 12, 10, 8],
        solarRadiation: [260, 300, 340, 450, 550, 650, 600, 550, 500, 450, 400, 350],
        soilNutrients: [95, 105, 100, 103, 110, 115, 120, 118, 110, 105, 102, 95]
    }
};

// Initialize Charts
const soilMoistureCtx = document.getElementById('soilMoistureChart').getContext('2d');
const soilMoistureChart = new Chart(soilMoistureCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Soil Moisture (mm)',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const precipitationCtx = document.getElementById('precipitationChart').getContext('2d');
const precipitationChart = new Chart(precipitationCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Precipitation (mm)',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
const temperatureChart = new Chart(temperatureCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const windSpeedCtx = document.getElementById('windSpeedChart').getContext('2d');
const windSpeedChart = new Chart(windSpeedCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Wind Speed (km/h)',
            data: [],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const solarRadiationCtx = document.getElementById('solarRadiationChart').getContext('2d');
const solarRadiationChart = new Chart(solarRadiationCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Solar Radiation (W/m²)',
            data: [],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const soilNutrientsCtx = document.getElementById('soilNutrientsChart').getContext('2d');
const soilNutrientsChart = new Chart(soilNutrientsCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Soil Nutrients (mg/kg)',
            data: [],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update all charts based on the selected region
function updateCharts() {
    const selectedRegion = document.getElementById('region').value;

    // Update Soil Moisture Chart
    soilMoistureChart.data.datasets[0].data = regionData[selectedRegion].soilMoisture;
    soilMoistureChart.update();

    // Update Precipitation Chart
    precipitationChart.data.datasets[0].data = regionData[selectedRegion].precipitation;
    precipitationChart.update();

    // Update Temperature Chart
    temperatureChart.data.datasets[0].data = regionData[selectedRegion].temperature;
    temperatureChart.update();

    // Update Wind Speed Chart
    windSpeedChart.data.datasets[0].data = regionData[selectedRegion].windSpeed;
    windSpeedChart.update();

    // Update Solar Radiation Chart
    solarRadiationChart.data.datasets[0].data = regionData[selectedRegion].solarRadiation;
    solarRadiationChart.update();

    // Update Soil Nutrients Chart
    soilNutrientsChart.data.datasets[0].data = regionData[selectedRegion].soilNutrients;
    soilNutrientsChart.update();
}

// Function to show selected chart and hide others
function showChart(chartId) {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.style.display = 'none';
    });

    document.getElementById(`${chartId}Container`).style.display = 'block';
}

// Event listener for region selection
document.getElementById('region').addEventListener('change', updateCharts);

// Initial load of charts
updateCharts();
