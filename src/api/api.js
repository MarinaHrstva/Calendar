
const host = 'http://localhost:3030'

async function request(url, method, data) {

    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}


export async function get(url) {
    return request(url, 'get')
}

export async function post(url, data) {
    return request(url, 'post', data)
}

export async function patch(url, data) {
    return request(url, 'patch', data)
}

export async function del(url) {
    return request(url, 'delete',)
}