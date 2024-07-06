import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'stack-adherent',
  templateUrl: './stack-adherent.component.html',
  styleUrls: ['./stack-adherent.component.scss']
})
export class StackAdherentComponent implements OnInit {

  option: any;
  @ViewChild('stackA') stackA: ElementRef  ;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
        this.drawChart()
      }, 500);
    }

  drawChart()
  {
    var myChart = echarts.init(this.stackA.nativeElement);
    window.addEventListener('resize',function(){
      myChart.resize();
    })

    
    this.option  = {
      backgroundColor: 'transparent',
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow',
              label: {
                  show: true,
                  backgroundColor: '#333'
              }
          }
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
      },
      legend: {
          show: false,
          data: [],
          textStyle: {
              color: '#ccc'
          }
      },
      xAxis: {
          type: 'category',
          data: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Jui', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisTick: {
              alignWithLabel: true
          },
        
          splitLine: {
                  show: false,
                
              },
          axisLabel:{
                  fontsize:2,
                  align:'center',
                  color:'rgba(0,0,0,0.3)'
              }
      },
      yAxis: [{
          type: 'value',
          splitLine: {
                  show: true,
                  lineStyle:{
                      color:'rgba(0,0,0,0.2)'
                  }
              },
              axisLine:{
                  show:false
              },
              axisLabel:{
                
                  fontWeight:10,
                  fontsize:5,
                color:'rgba(0,0,0,0.3)'
              }
              
      }],
      series: [{
          name: 'New',
          type: 'bar',
          stack: 'stack',
          barWidth: 10,
          itemStyle: {
              normal: {
                  barBorderRadius: 50,
                /* color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#BC34BC'},
                          {offset: 1, color: '#7F3594'}
                      ]
                  )*/
              }
          },
          data: [80, 90, 145, 170, 65, 89, 170, 112, 161, 130, 115, 199]
      },{
          name: 'Retained',
          type: 'bar',
          stack: 'stack',
          barWidth: 10,
          itemStyle: {
              normal: {
                  barBorderRadius: 50,
                  /*color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#4740C8'},
                          {offset: 1, color: '#EF71FF'}
                      ]
                  )*/
              }
          },
          data: [-60, -136, -54, -48, -104, -87, -12, -46, -10, -34, -55, -7]
      }]
    }

    myChart.setOption(this.option, true);

  }

}
