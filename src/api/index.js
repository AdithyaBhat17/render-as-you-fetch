export function fetchData() {
    return {
        avatars: wrapPromise(fetchAvatars())
    };
}
  
async function fetchAvatars() {
    const response = await fetch("https://randomuser.me/api/", {
        method: "GET"
    });
    if(response.status !== 200)
        throw new Error('error fetching user avatars')
    return response.json()
}

export function wrapPromise(promise) {
    console.log('fetching...')
    let status = "pending",
        result,
        suspender = promise.then(response => {
            result = response;
            status = "success";
        })
        .catch(error => {
            result = error;
            status = "error";
        });
    return {
        read() {
        if (status === "pending") throw suspender;
        if (status === "error") throw result;
        if (status === "success") return result;
        }
    };
}