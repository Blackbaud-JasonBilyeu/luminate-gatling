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
		ok: "0",
		ko: "10"
	},
	minResponseTime : {
		total: "60250",
		ok: "-",
		ko: "60250"
	},
	maxResponseTime : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	meanResponseTime : {
		total: "60395",
		ok: "-",
		ko: "60395"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	percentiles2 : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
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
		count: 10,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "-",
		ko: "0"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "0",
		ko: "10"
	},
	minResponseTime : {
		total: "60250",
		ok: "-",
		ko: "60250"
	},
	maxResponseTime : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	meanResponseTime : {
		total: "60395",
		ok: "-",
		ko: "60395"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	percentiles2 : {
		total: "61250",
		ok: "-",
		ko: "61250"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
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
		count: 10,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "-",
		ko: "0"
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
