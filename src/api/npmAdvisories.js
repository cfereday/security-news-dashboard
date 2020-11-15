const extractOutAdvisories = (advisories) => {
    const splicedAdvisories = advisories.advisoriesData.objects.slice(0, 5);
    return splicedAdvisories.map(advisory => {
        const splitReferences = advisory.references.split('\n');
        const resplitReferences = splitReferences.map(reference => {
            return reference.substr(1);
        });
        return {
            title: advisory.title,
            description: 'The Overview: ' + advisory.overview + ' Recommendations: ' + advisory.recommendation,
            url: resplitReferences[0]
        }
    });
};

export const npmAdvistories = (advisories) => {
    return extractOutAdvisories(advisories);
};

