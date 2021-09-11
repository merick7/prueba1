const experienceResolver = {
    Query: {
        experienceByExperienceId: (_, {experienceId}, { dataSources, userIdToken}) => {
            if(experienceId == userIdToken) 
                return dataSources.ResumeAPI.experienceByExperienceId(experienceId)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = experienceResolver;