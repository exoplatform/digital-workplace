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
      } 
      else {
        throw new Error ('Error when getting user informations');
      }
    })
}

export function getSpaces() {
  return fetch( '/portal/rest/v1/social/spaces?returnSize=true', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting spaces');
    }
  })
}

export function getSpacesRequests() {
  return fetch( '/portal/rest/v1/social/spacesMemberships?status=invited&returnSize=true&limit=3', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting spaces requests');
    }
  })
}

export function replyInvitationToJoinSpace(spaceMembershipId, reply) {
  const data = {status: `${reply}`}; 
  return fetch(`/portal/rest/v1/social/spacesMemberships/${spaceMembershipId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when replying invitation to join space');
    }
  })
}

export function getConnections() {
  return fetch('/portal/rest/v1/social/relationships?status=confirmed&returnSize=true', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
	} 
	else {
      throw new Error ('Error when getting connections');
	}
  })
}

export function getConnectionsRequests() {
  return fetch('/portal/rest/v1/social/relationships?status=pending&returnSize=true&limit=3', {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
	} 
	else {
      throw new Error ('Error when getting connections requests');
    }
  })
}

export function getConnectionRequestSender(senderUrl) {
  return fetch(`${senderUrl}`, {
    method: 'GET',
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
    } 
    else {
      throw new Error ('Error when getting connection request sender');
	}
  })
}

export function replyInvitationToConnect(relationId, reply) {
  const data = {status: `${reply}`}; 
  return fetch(`/portal/rest/v1/social/relationships/${relationId}`, {
    method: 'PUT',
	body: JSON.stringify(data),
	headers: {
      'Content-Type': 'application/json'
	}
  }).then((resp) => {
    if(resp && resp.ok) {
      return resp.json();
	} 
	else {
      throw new Error ('Error when replying invitation to connect');
	}
  })
}