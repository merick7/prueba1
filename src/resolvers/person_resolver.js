const personResolver = {
    Query: {
        personByPersonId: (_, {personId}, { dataSources, userIdToken}) => {
            if(personId == userIdToken) 
                return dataSources.ResumeAPI.personByPersonId(personId)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = personResolver;