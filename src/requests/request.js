import axios from 'axios';
// import Cookies from 'js-cookie'
// import Auth from '../components/Utils/Auth'
// import Toastr from '../components/Toastr';

const urlBase = "http://localhost:3333"//+window.location.hostname//+":8080"
var port='';

export default class Requests {
    port = '3333'
    host_url = urlBase;
    valid = true;
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "senha": ""
    }

    // setPassword(pwd){
    //     this.headers['senha'] = pwd;
    //     return this;
    // }

    request = async (url, method = 'GET', data = {}) => {
        let verify = "";
        // if (url === '/login' || url ==='/novoLogin' || url ==='/ativarLogin' || url ==='/solicitacaoAlterarSenha' ||  url ==='/alterarSenha' || url.substring(0, 12) === '/token/renew'){
        //     verify = true;
        // }else{
        //     verify = Auth.isTokenValid(url)
        // }

        verify = true;
        if (verify){
            // let sessionUser = Cookies.get('sessionUser');
            // var user = sessionUser ? JSON.parse(sessionUser) : '';
            
            url = url.startsWith('http') || url.startsWith('https') ? url : this.host_url + port + url;
            const options = {
                method, data, url
            }
            
            if (method.toUpperCase() === 'GET') {
                options.data = undefined;
            }
            this.headers = {
                ...this.headers,
                // Authorization:user.token,
                // tipoLogin:sessionUser ? user.tipo_login : ''
            }

            return new Promise((resolve, reject) => {
                console.log('url->',url)
                axios({                    
                    url: options.url,
                    method: options.method,
                    data: options.data,
                    headers: this.headers,
                    timeout:8000
                })
                .then(response => {
                    if (response.status === 200 || response.status === 202) {
                        
                        resolve(response)
                    } else {
                        // Toastr.error(response)
                        reject(response);
                    }
                })
                .catch(err => {
                    // Toastr.error(err.response,url)
                    reject(err.response);
                })
            })
        }
    }

}