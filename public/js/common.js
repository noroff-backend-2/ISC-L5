async function productDetails(userID, productID){
    url = "/products/:id";
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user: userID,
            product: productID
        })
    })
    .then((response) => {
        if (response.ok) {
            const resData = `Product details returned!`;
            alert(resData);
            // location.reload();
            return Promise.resolve(resData);
        } else {
            return response.json().then(data => {
                throw new Error(data.message);
        });
    }
    })
    .catch((error) => {
        alert(error.message);
    });
}