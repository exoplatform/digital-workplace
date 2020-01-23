  export function getNotifications() {
    return fetch('/rest/notifications/webNotifications', {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error(('Error when getting notification list'));
        }
    })
}

  export function updateNotification(id, operation) {
    return fetch(`/portal/rest/notifications/webNotifications/${id}`, {
        headers: {
            'Content-Type': 'text/plain'
        },
        method: 'PATCH',
        body: operation
    });
}