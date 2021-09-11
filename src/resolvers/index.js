const educationResolver = require('./education_resolver');
const experienceResolver = require('./experience_resolver');
const personResolver = require('./person_resolver');
const softSkillResolver = require('./softSkill_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(educationResolver, experienceResolver,personResolver, softSkillResolver, userResolver);

module.exports = resolvers;