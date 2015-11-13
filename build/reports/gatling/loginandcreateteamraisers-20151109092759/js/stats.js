var stats = {
	type: "GROUP",
contents: {
		
				"create-teamraiser-9df40da9f28f70f6757f48d980dce0d1": {
		type: "REQUEST",
		name: "Create TeamRaiser",
path: "Create TeamRaiser",
pathFormatted: "create-teamraiser-9df40da9f28f70f6757f48d980dce0d1",
stats: {
	numberOfRequests : {
		total: "2",
		ok: "2",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	meanResponseTime : {
		total: "95",
		ok: "95",
		ko: "-"
	},
	standardDeviation : {
		total: "85",
		ok: "85",
		ko: "-"
	},
	percentiles1 : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	percentiles2 : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 2,
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
		total: "7",
		ok: "7",
		ko: "-"
	}
}


	}
		,		
				"create-teamraiser-redirect-1-95d1a00e00688ac8e2689326aa881117": {
		type: "REQUEST",
		name: "Create TeamRaiser Redirect 1",
path: "Create TeamRaiser Redirect 1",
pathFormatted: "create-teamraiser-redirect-1-95d1a00e00688ac8e2689326aa881117",
stats: {
	numberOfRequests : {
		total: "2",
		ok: "2",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	meanResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	percentiles2 : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 2,
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
		total: "7",
		ok: "7",
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
		total: "4",
		ok: "4",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	meanResponseTime : {
		total: "53",
		ok: "53",
		ko: "-"
	},
	standardDeviation : {
		total: "73",
		ok: "73",
		ko: "-"
	},
	percentiles1 : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	percentiles2 : {
		total: "180",
		ok: "180",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 4,
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
		total: "13",
		ok: "13",
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
