export function getConnectionsRequests() {
    return fetch(`http://www.json-generator.com/api/json/get/bVdbihgfxe?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error('Error when getting connections requests list')
        }
    })
}

export function getSpacesRequests() {
    return fetch(`http://www.json-generator.com/api/json/get/cgkLBKPYQy?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error('Error when getting spaces requests list');
        }
    })
}

export function getGamificationRank() {
    return fetch( `http://www.json-generator.com/api/json/get/cqoXpWOBxK?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error ('Error when getting gamification rank')
        }
    })
}
