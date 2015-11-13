var stats = {
	type: "GROUP",
contents: {
		
				"request-0-684d2e5c539ef4b9da810a1e45e08000": {
		type: "REQUEST",
		name: "request_0",
path: "request_0",
pathFormatted: "request-0-684d2e5c539ef4b9da810a1e45e08000",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "1",
		ko: "0"
	},
	minResponseTime : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	maxResponseTime : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	meanResponseTime : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	percentiles2 : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1,
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
		,		
				"request-0-redirect-1-e6ac5b104812df04babc1fb45c539a6b": {
		type: "REQUEST",
		name: "request_0 Redirect 1",
path: "request_0 Redirect 1",
pathFormatted: "request-0-redirect-1-e6ac5b104812df04babc1fb45c539a6b",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "1",
		ko: "0"
	},
	minResponseTime : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	maxResponseTime : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	meanResponseTime : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	percentiles2 : {
		total: "70",
		ok: "70",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1,
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
		,		
				"create-teamraiser-9df40da9f28f70f6757f48d980dce0d1": {
		type: "REQUEST",
		name: "Create TeamRaiser",
path: "Create TeamRaiser",
pathFormatted: "create-teamraiser-9df40da9f28f70f6757f48d980dce0d1",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "1",
		ko: "0"
	},
	minResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	maxResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	meanResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	percentiles2 : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1,
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
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "3",
		ok: "3",
		ko: "0"
	},
	minResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	maxResponseTime : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	meanResponseTime : {
		total: "90",
		ok: "90",
		ko: "-"
	},
	standardDeviation : {
		total: "51",
		ok: "51",
		ko: "-"
	},
	percentiles1 : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	percentiles2 : {
		total: "160",
		ok: "160",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 3,
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
		total: "9",
		ok: "9",
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
