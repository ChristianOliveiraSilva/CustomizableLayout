import axios from 'axios'


function buildQueryString (data) {

    if (typeof data === "string") {
        return data;
    }

    return "obj="+JSON.stringify(data)
}

function call(url, data, success, error) {

    if (!url) {
        url = ""
    }

    const path = 'http://localhost:3001/'
    const finalUrl = path + url + "?" + buildQueryString(data)

    if (!success) {
        success = success => console.log(success)
    }

    if (!error) {
        error = err => console.error(err)
    }

    axios.post(finalUrl)
    .then((s) => s.data.status == 200 ? success(s.data) : error(s))
    .catch((e) => error(e))
}

export function exporter(obj, success, error) {
    call('exporter', obj, success, error)
}

export default call;