var stats = {
	type: "GROUP",
contents: {
		
				"hit-registration-page-with-tr-dropdown-f75cd6f5ea32fd73a3bd1bfcd9a1917b": {
		type: "REQUEST",
		name: "Hit Registration Page with TR Dropdown",
path: "Hit Registration Page with TR Dropdown",
pathFormatted: "hit-registration-page-with-tr-dropdown-f75cd6f5ea32fd73a3bd1bfcd9a1917b",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "290",
		ok: "290",
		ko: "-"
	},
	maxResponseTime : {
		total: "490",
		ok: "490",
		ko: "-"
	},
	meanResponseTime : {
		total: "352",
		ok: "352",
		ko: "-"
	},
	standardDeviation : {
		total: "84",
		ok: "84",
		ko: "-"
	},
	percentiles1 : {
		total: "490",
		ok: "490",
		ko: "-"
	},
	percentiles2 : {
		total: "490",
		ok: "490",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "0",
		ko: "-"
	}
}


	}
		,		
				"hit-registration-page-with-tr-dropdown-redirect-1-6d6bf9bd8377e368997de4e58fb0872c": {
		type: "REQUEST",
		name: "Hit Registration Page with TR Dropdown Redirect 1",
path: "Hit Registration Page with TR Dropdown Redirect 1",
pathFormatted: "hit-registration-page-with-tr-dropdown-redirect-1-6d6bf9bd8377e368997de4e58fb0872c",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "110",
		ok: "110",
		ko: "-"
	},
	maxResponseTime : {
		total: "2890",
		ok: "2890",
		ko: "-"
	},
	meanResponseTime : {
		total: "466",
		ok: "466",
		ko: "-"
	},
	standardDeviation : {
		total: "832",
		ok: "832",
		ko: "-"
	},
	percentiles1 : {
		total: "2890",
		ok: "2890",
		ko: "-"
	},
	percentiles2 : {
		total: "2890",
		ok: "2890",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 9,
		percentage: 90
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 1,
		percentage: 10
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "0",
		ko: "-"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "20",
		ok: "20",
		ko: "0"
	},
	minResponseTime : {
		total: "110",
		ok: "110",
		ko: "-"
	},
	maxResponseTime : {
		total: "2890",
		ok: "2890",
		ko: "-"
	},
	meanResponseTime : {
		total: "409",
		ok: "409",
		ko: "-"
	},
	standardDeviation : {
		total: "594",
		ok: "594",
		ko: "-"
	},
	percentiles1 : {
		total: "790",
		ok: "790",
		ko: "-"
	},
	percentiles2 : {
		total: "2890",
		ok: "2890",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 19,
		percentage: 95
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 1,
		percentage: 5
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "1",
		ok: "1",
		ko: "-"
	}
}



}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
