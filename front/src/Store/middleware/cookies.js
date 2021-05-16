
export function setCookie(name, value) {
    var cookie = [name, '=', JSON.stringify(value), '; path=/; SameSite=Strict;'].join('')
    document.cookie = cookie
}

export function readCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'))
    result && (result = JSON.parse(result[1]))
    return result
}

export function deleteCookie(name) {
    document.cookie = [name, '=; path=/; SameSite=Strict;'].join('')
}