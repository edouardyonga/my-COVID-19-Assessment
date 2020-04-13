const covid19ImpactEstimator = (data) => {

	const input = data
	const currentlyInfected = reportedCases * 10
	const currentlyInfected = reportedCases * 50

	return {
		"data": input,
		"impact":{
			"currentlyInfected": currentlyInfected,
		},
		"severeImpact": {
			"currentlyInfected": currentlyInfected,
		}
	};
};

export default covid19ImpactEstimator;
