import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'stack-bar',
  templateUrl: './stack-bar.component.html',
  styleUrls: ['./stack-bar.component.scss']
})
export class StackBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.drawChart()
    }, 500);
  }


  option: any;
  @ViewChild('stackbar') stackbar: ElementRef  ;
  
  drawChart()
  {
    var myChart = echarts.init(this.stackbar.nativeElement);
    window.addEventListener('resize',function(){
      myChart.resize();
    })

    
    this.option  = {

      tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'shadow'       
        }
      },
      legend: {
          data: ['nouvelle inscrit', 'deja inscrit']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Jui', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec']
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
      {
          name: 'nouvelle inscrit',
          type: 'bar',
          stack: 'stack',
          data: [320, 332, 301, 334]
      },
      {
          name: 'deja inscrit',
          type: 'bar',
          stack: 'stack',
          data: [120, 132, 101, 134]
      },
        
      ]

    }

    myChart.setOption(this.option, true);

  }

}
