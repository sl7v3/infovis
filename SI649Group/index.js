function plotEmployedSEByDegree_2013(data, id) {
    // plotting function
      Highcharts.chart(id, {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Employed S&E by Degree in 2013'
          },
          xAxis: {

            // columns based on degrees
              categories: [
                  'All Degrees',
                  'Bachelor',
                  'Master',
                  'Doctoral'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              tickInterval: 5,
              title: {
                  text: 'Percent'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} % </b></td></tr>',
              footerFormat: '</table>',
              shared: false,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: data
      });
}


// get input value
function getValue(array, id) {
  
    // the input get from the interface
    var degree_data = [];

    // for loop to concatenate the inputs
    // Men - Hispanic, Women - White

    for ( index in array ) {
        if ( array[index] == "Men - White" ) {
            degree_data.push(
                    {
                      color: "#A4BBD5",          
                      name: 'Men - White',
                      data: [73,74, 71, 68]
                    }
            );    
        }

        if ( array[index] == "Women - White" ) {
            degree_data.push(
                    {
                      color: "#388CE8",         
                      name: 'Women - White',
                      data: [71,70,73,68]
                    }
            );    
        }

        if ( array[index] == "Men - Hispanic" ) {
            degree_data.push(
                    {        
                      color: "#FFCA72",   
                      name: 'Men - Hispanic',
                      data: [7,7,6,4]
                    }
            );    
        }

        if ( array[index] == "Women - Hispanic" ) {
            degree_data.push(
                    {        
                      color: "#F6A623",   
                      name: 'Women - Hispanic',
                      data: [8,9,7,5]
                    }
            );    
        }

        if ( array[index] == "Men - African" ) {
            degree_data.push(
                    {         
                      color: "#A8EE5C",
                      name: 'Men - African American',
                      data: [4,5,5,3]
                    }
            );    
        }

        if ( array[index] == "Women - African" ) {
            degree_data.push(
                    {
                      color: "#7ED321",       
                      name: 'Women - African American',
                      data: [8,8,8,6]
                    }
            );    
        }

        if ( array[index] == "Men - Native" ) {
            degree_data.push(
                    {
                      color:"#F386B3",         
                      name: 'Men - Native American',
                      data: [0.2,0.2,0.2,0.1]
                    }
            );    
        }

        if ( array[index] == "Women - Native" ) {
            degree_data.push(
                    {         
                      color:"#ED2A7B",
                      name: 'Women - Native American',
                      data: [0.3,0.4,0.2,0.4]
                    }
            );    
        

        }
    }
    // call plotting function
    plotEmployedSEByDegree_2013(degree_data, id);
}