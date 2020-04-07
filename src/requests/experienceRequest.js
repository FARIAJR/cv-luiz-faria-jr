import Request from './request';
export default class ExperienceRequest extends Request{
    getExperience(params){   
        let query = `/experience?`

        // if(params.descricao !== undefined && params.descricao!==""){
        //     query +=`descricao=${params.descricao}&`
        // }
        // if(params.limit !== undefined  && params.limit > 0){
        //     query +=`limit=${params.limit}&`
        // }
        // if(params.page !== undefined && params.page > 0){
        //     query +=`page=${params.page}&`
        // }
        return this.request(query)
    }
}