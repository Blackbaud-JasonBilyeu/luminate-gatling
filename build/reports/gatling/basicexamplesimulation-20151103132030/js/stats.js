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
		total: "50",
		ok: "50",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	meanResponseTime : {
		total: "16",
		ok: "16",
		ko: "-"
	},
	standardDeviation : {
		total: "7",
		ok: "7",
		ko: "-"
	},
	percentiles1 : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	percentiles2 : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 50,
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
		total: "2",
		ok: "2",
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
		total: "50",
		ok: "50",
		ko: "0"
	},
	minResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	maxResponseTime : {
		total: "90",
		ok: "90",
		ko: "-"
	},
	meanResponseTime : {
		total: "50",
		ok: "50",
		ko: "-"
	},
	standardDeviation : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	percentiles1 : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	percentiles2 : {
		total: "90",
		ok: "90",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 50,
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
		total: "2",
		ok: "2",
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
		total: "100",
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "90",
		ok: "90",
		ko: "-"
	},
	meanResponseTime : {
		total: "33",
		ok: "33",
		ko: "-"
	},
	standardDeviation : {
		total: "19",
		ok: "19",
		ko: "-"
	},
	percentiles1 : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	percentiles2 : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 100,
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
		total: "3",
		ok: "3",
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
