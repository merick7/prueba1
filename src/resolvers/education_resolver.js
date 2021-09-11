const educationResolver = {
    Query: {
        educationByEducationId: (_, {educationId}, { dataSources, userIdToken}) => {
            if(educationId == userIdToken) 
                return dataSources.ResumeAPI.educationByEducationId(educationId)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = educationResolver;