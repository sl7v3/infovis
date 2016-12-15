function plotGovernmentRace(params_array) {
  var years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];
  if (params_array[0] == "Government S&E Employment in Races"){
    var json_to_plot = [];
    var gemp_json = get_topic_json ("GovtEmployed.json");
    var gemp_plot_info = [params_array[2], "S&E Employed by Government Trend", '% employed by govt.',  '%']
    var gemp_totals_array = getMetricTotals(gemp_json);
    var gemp_percent = convertValsToPercent(gemp_totals_array, gemp_json);
    json_to_plot = get_json_to_plot(params_array[1], gemp_percent);
    return plotAnyLineTrend(json_to_plot, years, gemp_plot_info); //Plots the degrees percent first before calculating strict increase
  }

  /*
  var gemp_strict_plot_info = ["gemp-strict-container", "S&E Employed by Government Percent Increase Trend", '% employed by govt.',  '% change from previous year' ]
  var gemp_aligned_array = gemp_percent
  gemp_aligned_array = calcPercentChangeByYear(gemp_aligned_array);
  plotAnyLineTrend(gemp_aligned_array, years, gemp_strict_plot_info);*/
}