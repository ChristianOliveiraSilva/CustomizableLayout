
function call(url, data, success, error) {

    if (!url) {
        url = ""
    }

    const path = 'http://localhost:3001/'
    const finalUrl = path + url

    if (!success) {
        success = success => console.log(success)
    }

    if (!error) {
        error = err => alert("Erro: alertar o criador do site: "+err)
    }

    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            if (this.status == 200)
                success(JSON.parse(this.responseText))
            else
                error(JSON.parse(this.responseText))
        }
    }
    xhttp.open("POST", finalUrl, true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('obj='+JSON.stringify(data))
}

export function exporter(obj, success, error) {
    call('exporter', obj, success, error)
}

export function upload(obj, success, error) {
    call('upload', obj, success, error)
}

export function stylize(obj, success, error) {
    call('stylize', obj, success, error)
}

export default call