export function getSliderItems() {
    return fetch(`http://www.json-generator.com/api/json/get/cbEwqEAAHS?indent=2`, {
        method: 'GET',
    }).then((resp) => {
        if(resp && resp.ok) {
            return resp.json();
        } else {
            throw new Error(('Error when getting news list'));
        }
    })
}