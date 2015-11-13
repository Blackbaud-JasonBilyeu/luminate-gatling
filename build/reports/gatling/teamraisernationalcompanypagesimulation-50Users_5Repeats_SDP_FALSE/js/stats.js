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
		total: "150",
		ok: "150",
		ko: "-"
	},
	maxResponseTime : {
		total: "910",
		ok: "910",
		ko: "-"
	},
	meanResponseTime : {
		total: "234",
		ok: "234",
		ko: "-"
	},
	standardDeviation : {
		total: "117",
		ok: "117",
		ko: "-"
	},
	percentiles1 : {
		total: "550",
		ok: "550",
		ko: "-"
	},
	percentiles2 : {
		total: "640",
		ok: "640",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 248,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 2,
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
		total: "8",
		ok: "8",
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
		total: "150",
		ok: "150",
		ko: "-"
	},
	maxResponseTime : {
		total: "910",
		ok: "910",
		ko: "-"
	},
	meanResponseTime : {
		total: "234",
		ok: "234",
		ko: "-"
	},
	standardDeviation : {
		total: "117",
		ok: "117",
		ko: "-"
	},
	percentiles1 : {
		total: "550",
		ok: "550",
		ko: "-"
	},
	percentiles2 : {
		total: "640",
		ok: "640",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 248,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 2,
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
		total: "8",
		ok: "8",
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
