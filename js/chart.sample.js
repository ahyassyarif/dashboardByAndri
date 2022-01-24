"use strict";

var randomChartData = function randomChartData(n) {
  var data = [];

  for (var i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200));
  }

  return data;
};

var chartColors = {
  "default": {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860'
  }
};
var ctx = document.getElementById('chart1').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
      data: randomChartData(7),
      backgroundColor: '#00D1B2',

    }],
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
  }
});

// cahrt 2

var ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'line',
  data: {
    datasets: [{
      data: randomChartData(7),
      backgroundColor: '#00D1B2',
      fill: false,

    }],
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements:{
      point:{
        radius: 3,
      },
      line:{
        borderWidth: 3,
        borderColor: '#36ebd0',
      }
    }
  }
});

// cahrt 3

var ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: randomChartData(2),
      backgroundColor: ['#00D1B2','#FF3860'],
      fill: false,
    }],
    labels: ['Payment', 'Transfer']
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'left',
      labels:{
        boxWidth: 20,
        boxHeight: 20,
      }
    },
    elements:{
      point:{
        radius: 3,
      },
      line:{
        borderWidth: 3,
        borderColor: '#36ebd0',
      }
    }
  }
});