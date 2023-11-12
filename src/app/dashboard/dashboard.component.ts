import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public sparklineData: number[] = [
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
    27, 54, 43, 19, 46,
  ];

  public colorPalette: string[] = [
    '#00D8B6',
    '#008FFB',
    '#FEB019',
    '#FF4560',
    '#775DD0',
  ];

  public chartOptions: any = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Sales',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$424,652',
      offsetX: 30,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    subtitle: {
      text: 'Sales',
      offsetX: 30,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title'
      }
    }
  }

  public spark2: any = {
    chart: {
      id: 'sparkline2',
      group: 'sparklines',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Expenses',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$235,312',
      offsetX: 30,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    subtitle: {
      text: 'Expenses',
      offsetX: 30,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title'
      }
    }
  }

  public spark3: any = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Profits',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0
    },
    colors: ['#008FFB'],
    //colors: ['#5564BE'],
    title: {
      text: '$135,965',
      offsetX: 30,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    subtitle: {
      text: 'Profits',
      offsetX: 30,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title'
      }
    }
  }

  public optionsBar: any = {
    chart: {
      type: 'bar',
      height: 380,
      width: '100%',
      stacked: true,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
      }
    },
    colors: this.colorPalette,
    series: [{
      name: "Clothing",
      data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
    }, {
      name: "Food Products",
      data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
    }],
    labels: [10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#78909c'
        }
      }
    },
    title: {
      text: 'Monthly Sales',
      align: 'left',
      style: {
        fontSize: '18px'
      }
    }

  }
  public optionsArea: any = {
    chart: {
      height: 340,
      type: 'area',
      zoom: {
        enabled: false
      },
    },
    stroke: {
      curve: 'straight'
    },
    colors: this.colorPalette,
    series: [
      {
        name: "Blog",
        data: [{
          x: 0,
          y: 0
        }, {
          x: 4,
          y: 5
        }, {
          x: 5,
          y: 3
        }, {
          x: 9,
          y: 8
        }, {
          x: 14,
          y: 4
        }, {
          x: 18,
          y: 5
        }, {
          x: 25,
          y: 0
        }]
      },
      {
        name: "Social Media",
        data: [{
          x: 0,
          y: 0
        }, {
          x: 4,
          y: 6
        }, {
          x: 5,
          y: 4
        }, {
          x: 14,
          y: 8
        }, {
          x: 18,
          y: 5.5
        }, {
          x: 21,
          y: 6
        }, {
          x: 25,
          y: 0
        }]
      },
      {
        name: "External",
        data: [{
          x: 0,
          y: 0
        }, {
          x: 2,
          y: 5
        }, {
          x: 5,
          y: 4
        }, {
          x: 10,
          y: 11
        }, {
          x: 14,
          y: 4
        }, {
          x: 18,
          y: 8
        }, {
          x: 25,
          y: 0
        }]
      }
    ],
    fill: {
      opacity: 1,
    },
    title: {
      text: 'Daily Visits Insights',
      align: 'left',
      style: {
        fontSize: '18px'
      }
    },
    markers: {
      size: 0,
      style: 'hollow',
      hover: {
        opacity: 5,
      }
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      max: 12,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#78909c'
        }
      }
    },
    legend: {
      show: false
    }
  }



  public randomizeArray(arg: any[]) {
    var array = arg.slice();
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
