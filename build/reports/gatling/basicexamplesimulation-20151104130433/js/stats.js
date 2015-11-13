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
		total: "100",
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	maxResponseTime : {
		total: "300800",
		ok: "300800",
		ko: "-"
	},
	meanResponseTime : {
		total: "29972",
		ok: "29972",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "268500",
		ok: "268500",
		ko: "-"
	},
	percentiles2 : {
		total: "297690",
		ok: "297690",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 69,
		percentage: 69
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 3,
		percentage: 3
	},
	group3 : {
		name: "t > 1200 ms",
		count: 28,
		percentage: 28
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
		total: "100",
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "60",
		ok: "60",
		ko: "-"
	},
	maxResponseTime : {
		total: "300800",
		ok: "300800",
		ko: "-"
	},
	meanResponseTime : {
		total: "29972",
		ok: "29972",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "268500",
		ok: "268500",
		ko: "-"
	},
	percentiles2 : {
		total: "297690",
		ok: "297690",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 69,
		percentage: 69
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 3,
		percentage: 3
	},
	group3 : {
		name: "t > 1200 ms",
		count: 28,
		percentage: 28
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
