
import api from './api'
const BASE_API_URL = 'http://192.168.1.188:8084/'

export function fetchApi(url, params){
	return new Promise((resolve, reject) => {
		fetch(BASE_API_URL + url, {
             method: 'POST',
             headers: {
				'Content-Type': 'application/json',
				'clientType': '4',
				'referral': '',
				'appVersion': '6.0.0'
             },
        })
        .then(response => response.json())
        .then((json) => {
        	if (json.retCode === api.STATUS_OK) {
				resolve(json.data)
        	} else {
        		reject(data.retMsg);
        	}
        })
        .catch((error) => {//2
            reject(error);
        });
	})
};

/*
 fetch('http://192.168.1.188:8084/pj-p2p-core/appFront/v1.0/appIndexPage', {
             method: 'POST',
             headers: {
              'Content-Type': 'application/json',
              'clientType': '4',
              'referral': '',
              'appVersion': '6.0.0'
            }
        })
        .then(response => response.json())
        .then(json => {//1
            console.log('json ==== ',json)
        })
        .catch((error) => {//2
            alert('error= ',error);
        });
 */
