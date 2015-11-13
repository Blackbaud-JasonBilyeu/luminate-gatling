var stats = {
	type: "GROUP",
contents: {
		
				"hit-national-company-page-4eab78a208921a9a097bbd5979e9fb4c": {
		type: "REQUEST",
		name: "Hit National Company Page",
path: "Hit National Company Page",
pathFormatted: "hit-national-company-page-4eab78a208921a9a097bbd5979e9fb4c",
stats: {
	numberOfRequests : {
		total: "250",
		ok: "250",
		ko: "0"
	},
	minResponseTime : {
		total: "3420",
		ok: "3420",
		ko: "-"
	},
	maxResponseTime : {
		total: "33760",
		ok: "33760",
		ko: "-"
	},
	meanResponseTime : {
		total: "14246",
		ok: "14246",
		ko: "-"
	},
	standardDeviation : {
		total: "5463",
		ok: "5463",
		ko: "-"
	},
	percentiles1 : {
		total: "23670",
		ok: "23670",
		ko: "-"
	},
	percentiles2 : {
		total: "28480",
		ok: "28480",
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
		count: 250,
		percentage: 100
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
		total: "250",
		ok: "250",
		ko: "0"
	},
	minResponseTime : {
		total: "3420",
		ok: "3420",
		ko: "-"
	},
	maxResponseTime : {
		total: "33760",
		ok: "33760",
		ko: "-"
	},
	meanResponseTime : {
		total: "14246",
		ok: "14246",
		ko: "-"
	},
	standardDeviation : {
		total: "5463",
		ok: "5463",
		ko: "-"
	},
	percentiles1 : {
		total: "23670",
		ok: "23670",
		ko: "-"
	},
	percentiles2 : {
		total: "28480",
		ok: "28480",
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
		count: 250,
		percentage: 100
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
