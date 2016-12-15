function plotAnyLineTrend(deg, years, deg_plot_info) { 
  var lineChart = Highcharts.chart( deg_plot_info[0], {
        chart: {
            type: 'line'
        },
        title: {
            text:  deg_plot_info[1]
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            title: {
                text: deg_plot_info[2]
            }
        },tooltip: {
            //split: true,
            shared: true,
            valueSuffix: deg_plot_info[3],
            crosshairs: {
              color: 'black',
              dashStyle: 'solid',
              width: 2
            },
            //shared: true
        },
        series: deg
  });
  return lineChart;
};


function getMetricTotals (vals_json){
  var sum_total_array = [];
  for (var i = 0; i < vals_json.length; i++) {
    if (vals_json[i].name == "Men (all)"){//gets all male totals
      for (var j = 0; j < vals_json[i].data.length; j++) {
        sum_total_array.push(vals_json[i].data[j])
      }
    }
    else if (vals_json[i].name == "Women (all)"){ //gets all female totals
      for (var j = 0; j < vals_json[i].data.length; j++) {
        sum_total_array[j]+=vals_json[i].data[j]
      }
    }
  }
  return sum_total_array;
};



function convertValsToPercent (totals_array, vals_json){
  for (var i = 0; i < vals_json.length; i++) { //for each json object in array
    for (var j = 0; j < vals_json[i].data.length; j++) { //convert each of its data element (value of feature) to a percentage 
        vals_json[i].data[j]= ((vals_json[i].data[j]/totals_array[j]))*100
        vals_json[i].data[j]=Math.round(vals_json[i].data[j]*100) / 100 //round it to 2 d.p
    }
  }
  return vals_json;
}

function calcPercentChangeByYear(percent_json){
  var data = []
  for (var i = 0; i < percent_json.length; i++) { //for each json object in array
    var value_of_start_year = percent_json[i].data[0];
    var data = []
    for (var j = 0; j < percent_json[i].data.length; j++) { 
      var percent_change_from_start_year;
      percent_change_from_start_year = Math.round(((percent_json[i].data[j]-value_of_start_year)/value_of_start_year)*100*100)/100
      data.push(percent_change_from_start_year)     
    }
    percent_json[i].data = data;
  }
  return percent_json;
}

function calcPercentChangeByYearOnButtonClick(input_array){
  var arr_to_return = [];
  for (var i = 0; i < input_array.length; i++) { //for each json object in array
    var value_of_start_year = input_array[i][0];
    var data = []
    for (var j = 0; j < input_array[i].length; j++) { 
      var percent_change_from_start_year;
      percent_change_from_start_year = Math.round(((input_array[i][j]-value_of_start_year)/value_of_start_year)*100*100)/100
      data.push(percent_change_from_start_year)     
    }
    arr_to_return[i] = data;
  }
  return arr_to_return;
}

function get_topic_json (url){
    var json;
    $.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
};



function get_json_to_plot(params_array, topic_json){
  var json_to_plot = [];
  for (var i = 0; i < params_array.length; i++) {
      for (var j = 0; j < topic_json.length; j++) {
        if (params_array[i] == topic_json[j].name){
          json_to_plot.push(topic_json[j]);
          break;
        }
      }
  }
  return json_to_plot;
}