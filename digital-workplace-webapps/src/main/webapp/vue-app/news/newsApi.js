export function getLatestNews() {
    return fetch(`https://www.json-generator.com/api/json/get/bUsggXSgde?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error(('Error when getting news list'));
        }
    })
}