const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ResumeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.resumemanagement_api_url;    
  }

  async educationByEducationId(educationId){
    return await this.get(`/education/${educationId}`);    
  }

  async experienceByExperienceId(experienceId){
    return await this.get(`/experience/${experienceId}`);    
  }

  async personByPersonId(personId){
    return await this.get(`/person/${personId}`);    
  }

  async softSkillBySoftSkillId(softSkillId){
    return await this.get(`/softSkill/${softSkillId}`);    
  }

}

module.exports = ResumeAPI;