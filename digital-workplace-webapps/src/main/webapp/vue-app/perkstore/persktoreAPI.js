export function getProductsSize() {
    return fetch('/portal/rest/perkstore/api/product/list?returnSize=true&available=true', {
        method: 'GET',
    }).then((resp) => {
      if(resp && resp.ok) {
        return resp.json();
      } else {
        throw new Error ('Error getting products list');
      }
    })
}

export function getPendingOrdersSize() {
    const filter = {notProcessed :true}
    return fetch('/portal/rest/perkstore/api/order/list?returnSize=true', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filter),
    }).then((resp) => {
      if (resp && resp.ok) { 
        return resp.json();
      } 
    });
}