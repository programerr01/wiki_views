const ApiRequest = {
    request: function(method, url,body){
        let config = {
            // mode: 'no-cors',
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
                "origin":"*"
            },
            "mode": "cors",
            "credentials": "omit"
		};
		if (body !== '') {
			config = { ...config, body };
		}
        return fetch(url , config)
        .then((res)=>{
            return res.json();
        })
        .then(this.sendResponse)
        .catch((er)=>{
            return {'error':er}
        })

    },
    sendResponse:async function(response){
        return response
    }
}

export default ApiRequest;