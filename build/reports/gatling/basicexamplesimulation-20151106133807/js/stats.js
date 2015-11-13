var stats = {
	type: "GROUP",
contents: {
		
				"hit-join-or-form-a-team-page-with-tr-dropdown-80f77dcd82f3cb69f0e932c0aa1f420f": {
		type: "REQUEST",
		name: "Hit Join or Form a Team Page with TR Dropdown",
path: "Hit Join or Form a Team Page with TR Dropdown",
pathFormatted: "hit-join-or-form-a-team-page-with-tr-dropdown-80f77dcd82f3cb69f0e932c0aa1f420f",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "6190",
		ok: "6190",
		ko: "-"
	},
	maxResponseTime : {
		total: "7400",
		ok: "7400",
		ko: "-"
	},
	meanResponseTime : {
		total: "6480",
		ok: "6480",
		ko: "-"
	},
	standardDeviation : {
		total: "333",
		ok: "333",
		ko: "-"
	},
	percentiles1 : {
		total: "7400",
		ok: "7400",
		ko: "-"
	},
	percentiles2 : {
		total: "7400",
		ok: "7400",
		ko: "-"
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
		count: 10,
		percentage: 100
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
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "6190",
		ok: "6190",
		ko: "-"
	},
	maxResponseTime : {
		total: "7400",
		ok: "7400",
		ko: "-"
	},
	meanResponseTime : {
		total: "6480",
		ok: "6480",
		ko: "-"
	},
	standardDeviation : {
		total: "333",
		ok: "333",
		ko: "-"
	},
	percentiles1 : {
		total: "7400",
		ok: "7400",
		ko: "-"
	},
	percentiles2 : {
		total: "7400",
		ok: "7400",
		ko: "-"
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
		count: 10,
		percentage: 100
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
