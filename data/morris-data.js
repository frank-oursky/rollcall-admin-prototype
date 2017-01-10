$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            users: 2666,
            events: null,
            incidents: 2647
        }, {
            period: '2010 Q2',
            users: 2778,
            events: 2294,
            incidents: 2441
        }, {
            period: '2010 Q3',
            users: 4912,
            events: 1969,
            incidents: 2501
        }, {
            period: '2010 Q4',
            users: 3767,
            events: 3597,
            incidents: 5689
        }, {
            period: '2011 Q1',
            users: 6810,
            events: 1914,
            incidents: 2293
        }, {
            period: '2011 Q2',
            users: 5670,
            events: 4293,
            incidents: 1881
        }, {
            period: '2011 Q3',
            users: 4820,
            events: 3795,
            incidents: 1588
        }, {
            period: '2011 Q4',
            users: 15073,
            events: 5967,
            incidents: 5175
        }, {
            period: '2012 Q1',
            users: 10687,
            events: 4460,
            incidents: 2028
        }, {
            period: '2012 Q2',
            users: 8432,
            events: 5713,
            incidents: 1791
        }],
        xkey: 'period',
        ykeys: ['users', 'events', 'incidents'],
        labels: ['users', 'events', 'sign up'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });



    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Sep16',
            a: 100,
            b: 90
        }, {
            y: 'Oct16',
            a: 75,
            b: 65
        }, {
            y: 'Nov16',
            a: 50,
            b: 40
        }, {
            y: 'Dec16',
            a: 75,
            b: 65
        }, {
            y: 'Jan17',
            a: 50,
            b: 40
        }, {
            y: 'Feb17',
            a: 75,
            b: 65
        }, {
            y: 'Mar17',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['User open every day', 'User open every week'],
        hideHover: 'auto',
        resize: true
    });

        Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });
    
});
