const covid19ImpactEstimator = (data) => {

	const input = data
	const currentlyInfected1 = reportedCases * 10
	const currentlyInfected2 = reportedCases * 50

	return {
		"data": input,
		"impact":{
			"currentlyInfected": currentlyInfected1 * 512,
		},
		"severeImpact": {
			"currentlyInfected": currentlyInfected2,
		}
	};
};

export default covid19ImpactEstimator;
