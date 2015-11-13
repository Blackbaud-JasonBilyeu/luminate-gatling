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
		total: "1000",
		ok: "1000",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "640",
		ok: "640",
		ko: "-"
	},
	meanResponseTime : {
		total: "57",
		ok: "57",
		ko: "-"
	},
	standardDeviation : {
		total: "101",
		ok: "101",
		ko: "-"
	},
	percentiles1 : {
		total: "280",
		ok: "280",
		ko: "-"
	},
	percentiles2 : {
		total: "530",
		ok: "530",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1000,
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
		total: "33",
		ok: "33",
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
		total: "1000",
		ok: "1000",
		ko: "0"
	},
	minResponseTime : {
		total: "30",
		ok: "30",
		ko: "-"
	},
	maxResponseTime : {
		total: "850",
		ok: "850",
		ko: "-"
	},
	meanResponseTime : {
		total: "98",
		ok: "98",
		ko: "-"
	},
	standardDeviation : {
		total: "110",
		ok: "110",
		ko: "-"
	},
	percentiles1 : {
		total: "340",
		ok: "340",
		ko: "-"
	},
	percentiles2 : {
		total: "480",
		ok: "480",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 994,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 6,
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
		total: "33",
		ok: "33",
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
		total: "2000",
		ok: "2000",
		ko: "0"
	},
	minResponseTime : {
		total: "10",
		ok: "10",
		ko: "-"
	},
	maxResponseTime : {
		total: "850",
		ok: "850",
		ko: "-"
	},
	meanResponseTime : {
		total: "77",
		ok: "77",
		ko: "-"
	},
	standardDeviation : {
		total: "108",
		ok: "108",
		ko: "-"
	},
	percentiles1 : {
		total: "320",
		ok: "320",
		ko: "-"
	},
	percentiles2 : {
		total: "520",
		ok: "520",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 1994,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 6,
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
		total: "67",
		ok: "67",
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
