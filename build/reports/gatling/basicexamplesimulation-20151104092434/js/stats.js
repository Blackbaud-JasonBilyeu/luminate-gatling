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
		total: "10000",
		ok: "10000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "1650",
		ok: "1650",
		ko: "-"
	},
	meanResponseTime : {
		total: "8",
		ok: "8",
		ko: "-"
	},
	standardDeviation : {
		total: "47",
		ok: "47",
		ko: "-"
	},
	percentiles1 : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	percentiles2 : {
		total: "130",
		ok: "130",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 9996,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 3,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 1,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "74",
		ok: "74",
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
		total: "10000",
		ok: "10000",
		ko: "0"
	},
	minResponseTime : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	maxResponseTime : {
		total: "3370",
		ok: "3370",
		ko: "-"
	},
	meanResponseTime : {
		total: "1047",
		ok: "1047",
		ko: "-"
	},
	standardDeviation : {
		total: "543",
		ok: "543",
		ko: "-"
	},
	percentiles1 : {
		total: "1940",
		ok: "1940",
		ko: "-"
	},
	percentiles2 : {
		total: "2420",
		ok: "2420",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 3422,
		percentage: 34
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 2777,
		percentage: 27
	},
	group3 : {
		name: "t > 1200 ms",
		count: 3801,
		percentage: 38
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "74",
		ok: "74",
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
		total: "20000",
		ok: "20000",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "3370",
		ok: "3370",
		ko: "-"
	},
	meanResponseTime : {
		total: "528",
		ok: "528",
		ko: "-"
	},
	standardDeviation : {
		total: "647",
		ok: "647",
		ko: "-"
	},
	percentiles1 : {
		total: "1750",
		ok: "1750",
		ko: "-"
	},
	percentiles2 : {
		total: "2190",
		ok: "2190",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 13418,
		percentage: 67
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 2780,
		percentage: 13
	},
	group3 : {
		name: "t > 1200 ms",
		count: 3802,
		percentage: 19
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "149",
		ok: "149",
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
