const softSkillResolver = {
    Query: {
        softSkillBySoftSkillId: (_, {softSkillId}, { dataSources, userIdToken}) => {
            if(softSkillId == userIdToken) 
                return dataSources.ResumeAPI.softSkillBySoftSkillId(softSkillId)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = softSkillResolver;