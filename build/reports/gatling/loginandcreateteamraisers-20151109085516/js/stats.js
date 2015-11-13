var stats = {
	type: "GROUP",
contents: {
		
				"login-99dea78007133396a7b8ed70578ac6ae": {
		type: "REQUEST",
		name: "Login",
path: "Login",
pathFormatted: "login-99dea78007133396a7b8ed70578ac6ae",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "1",
		ko: "0"
	},
	minResponseTime : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	maxResponseTime : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	meanResponseTime : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	standardDeviation : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles1 : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	percentiles2 : {
		total: "140",
		ok: "140",
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
		total: "0",
		ok: "0",
		ko: "-"
	}
}


	}
		,		
				"login-redirect-1-a267f1a93828d62df210e6c2719738a7": {
		type: "REQUEST",
		name: "Login Redirect 1",
path: "Login Redirect 1",
pathFormatted: "login-redirect-1-a267f1a93828d62df210e6c2719738a7",
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
		total: "0",
		ok: "0",
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
		total: "140",
		ok: "140",
		ko: "-"
	},
	meanResponseTime : {
		total: "73",
		ok: "73",
		ko: "-"
	},
	standardDeviation : {
		total: "48",
		ok: "48",
		ko: "-"
	},
	percentiles1 : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	percentiles2 : {
		total: "140",
		ok: "140",
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
		total: "1",
		ok: "1",
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
