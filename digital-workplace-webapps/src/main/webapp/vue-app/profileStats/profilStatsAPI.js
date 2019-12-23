export function getConnectionsRequests() {
    return fetch(`https://www.json-generator.com/api/json/get/bVdbihgfxe?indent=2`, {
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
    return fetch(`https://www.json-generator.com/api/json/get/cgkLBKPYQy?indent=2`, {
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
    return fetch( `https://www.json-generator.com/api/json/get/cqoXpWOBxK?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error ('Error when getting gamification rank')
        }
    })
}

export function getUserInformations() {
    return fetch(`/portal/rest/v1/social/users/${eXo.env.portal.userName}`, {
      method: 'GET',
    }).then((resp) => {
      if(resp && resp.ok) {
        return resp.json();
      } else {
        throw new Error ('Error when getting user info')
      }
    })
}
