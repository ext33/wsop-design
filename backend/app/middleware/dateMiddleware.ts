export function getNowDate(withTime?: boolean) {
    const date_ob = new Date(Date.now())

    if(withTime) {
        return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()} ${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}`
    } else {
        return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()}`
    }
}