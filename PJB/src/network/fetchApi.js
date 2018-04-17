
import api from './api'
export const BASE_API_URL = 'http://192.168.1.188:8084/'
// const BASE_API_URL = 'http://192.168.1.190:8084/'
// const BASE_API_URL = 'http://218.17.157.55:8086/'
// const BASE_API_URL = 'http://218.17.157.55:8084/'
// const BASE_API_URL = 'https://scf.pj.com/'
// 
const headers = {
    				'Content-Type': 'application/json',
    				'clientType': '4',
    				'referral': '',
    				'appVersion': '6.0.0'
          }

export function fetchApi(url, params){
  console.log('path=',url, 'params=',params);
	return new Promise((resolve, reject) => {
		    fetch(BASE_API_URL + url, {
             method: 'POST',
             headers: headers,
             body: JSON.stringify(params)
        })
        .then(response => response.json())
        .then((json) => {
          console.log('json=', json);
        	if (json.retCode === api.STATUS_OK) {
				    resolve(json.data)
        	} else {
        		reject(data.retMsg);
        	}
        })
        .catch((error) => {
            console.log('error=', error);
            reject(error);
        });
	})
};

