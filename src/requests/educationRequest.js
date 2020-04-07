import Request from './request';
export default class EducationRequest extends Request{
    getEducation(params){   
        let query = `/education?`
        return this.request(query)
    }
}