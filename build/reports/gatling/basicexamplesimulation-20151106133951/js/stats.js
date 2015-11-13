var stats = {
	type: "GROUP",
contents: {
		
				"search-for-participant-or-team-page-3598dae908156722d832d783c4f35e56": {
		type: "REQUEST",
		name: "Search for Participant or Team Page",
path: "Search for Participant or Team Page",
pathFormatted: "search-for-participant-or-team-page-3598dae908156722d832d783c4f35e56",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "170",
		ok: "170",
		ko: "-"
	},
	maxResponseTime : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	meanResponseTime : {
		total: "282",
		ok: "282",
		ko: "-"
	},
	standardDeviation : {
		total: "300",
		ok: "300",
		ko: "-"
	},
	percentiles1 : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	percentiles2 : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 9,
		percentage: 90
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 1,
		percentage: 10
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
		total: "170",
		ok: "170",
		ko: "-"
	},
	maxResponseTime : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	meanResponseTime : {
		total: "282",
		ok: "282",
		ko: "-"
	},
	standardDeviation : {
		total: "300",
		ok: "300",
		ko: "-"
	},
	percentiles1 : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	percentiles2 : {
		total: "1180",
		ok: "1180",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 9,
		percentage: 90
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 1,
		percentage: 10
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
