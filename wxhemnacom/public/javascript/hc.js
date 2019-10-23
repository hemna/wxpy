function start_hc() {

    (function winddirworker() {
        $.ajax({
            url: "/wx_winddir.json",
            type: 'post',
            dataType: 'json',
            success: function(data) {
                winddiroptions.series = data;
                winddirgraph = new Highcharts.Chart(winddiroptions);
            },
            complete: function() {
                setTimeout(winddirworker, 60000);
            }
        });
    })();
    (function windspeedworker() {
        $.ajax({
            url: "/wx_windspeed.json",
            type: 'post',
            dataType: 'json',
            success: function(data) {
                windspeedoptions.series = data;
                console.log(data);
                windspeedgraph = new Highcharts.Chart(windspeedoptions);
            },
            complete: function() {
                setTimeout(windspeedworker, 60000);
            }
        });
    })();


}

// This is for all plots, change Date axis to local timezone
Highcharts.setOptions({  
    global : {
        useUTC : false
    }
});
