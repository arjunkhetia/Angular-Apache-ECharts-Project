import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee'
  ],

  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#00aecd'
    }
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6']
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd']
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line： 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed'
      },
      crossStyle: {
        color: '#00aecd'
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)'
      }
    }
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd' // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd'
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd'
    }
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8'
    }
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)'
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)'
    },
    areaStyle: {
      color: '#0b5ea8'
    }
  },

  graph: {
    itemStyle: {
      color: '#b21ab4'
    },
    linkStyle: {
      color: '#2a2073'
    }
  },

  map: {
    itemStyle: {
      color: '#c12e34'
    },
    areaStyle: {
      color: '#ddd'
    },
    label: {
      color: '#c12e34'
    }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff']
        ],
        width: 8
      }
    }
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Angular-Apache-ECharts-Project';
  chart: any;
  xAxisData: any = [];
  data1: any = [];
  data2: any = [];
  data3: any = [];
  data4: any = [820, 932, 901, 934, 1290, 1330, 1320];
  theme: string | ThemeOption = '';
  coolTheme = CoolTheme;
  updateOptions: any;
  timer: any;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('category' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data3.push((Math.tan(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.timer = setInterval(() => {
      this.updateData(Math.random() * 21 - 10);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  chartOption: EChartsOption = {
    title: {
      text: 'Apache ECharts Example'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['series-1', 'series-2']
    },
    series: [
      {
        name: 'series-1',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {} // Only for line charts.
      },
      {
        name: 'series-2',
        data: [620, 332, 601, 234, 900, 1200, 1120],
        type: 'line',
        areaStyle: {} // Only for line charts.
      },
    ],
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
  };

  chartOption2: EChartsOption = {
    title: {
      text: 'Apache ECharts Example'
    },
    xAxis: {
      type: 'category',
      data: this.xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['series-1', 'series-2']
    },
    series: [
      {
        name: 'series-1',
        data: this.data1,
        type: 'bar',
        animationDelay: (idx) => idx * 10,
      },
      {
        name: 'series-2',
        data: this.data2,
        type: 'bar',
        animationDelay: (idx) => idx * 10 + 100,
      },
    ],
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
    animationEasing: 'elasticOut',
    animationDelayUpdate: (idx) => idx * 5,
  };

  chartOption3: EChartsOption = {
    title: {
      // text: 'Apache ECharts Example',
      subtext: 'Apache ECharts',
    },
    legend: {
      align: 'left',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'series-3',
        data: [
          { value: 10, name: 'Mon' },
          { value: 5, name: 'Tue' },
          { value: 15, name: 'Wed' },
          { value: 25, name: 'Thu' },
          { value: 20, name: 'Fri' },
          { value: 35, name: 'Sat' },
          { value: 30, name: 'Sun' }
        ],
        type: 'pie',
        radius: [30, 150],
        roseType: 'area',
      },
    ],
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
    animationEasing: 'elasticOut',
    animationDelayUpdate: (idx) => idx * 5,
  };

  chartOption4: EChartsOption = {
    title: {
      text: 'Apache ECharts Example'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['series']
    },
    series: [
      {
        name: 'series',
        data: this.data4,
        type: 'line',
        areaStyle: {} // Only for line charts.
      },
    ],
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
  };

  updateData(value: any) {
    this.data4.shift();
    this.data4.push(value);
    this.updateOptions = {
      series: [{
        data: this.data4
      }]
    };
  }

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }

  onChartClick(event: any) {
    console.log(event);
  }

  onChartInit(echartInstance: any) {
    this.chart = echartInstance;
  }
  
  resizeChart() {
    if (this.chart) {
      this.chart.resize();
    }
  }
}
