
export default function log(type: String, message: String) {
    switch (type) {
        case 'ok': 
            return console.log(`✅ ${message}.`)
        
        case 'info': 
            return console.log(`ℹ️  ${message}.`)
        
        case 'error': 
            return console.log(`❌ Error: ${message}.`)
        
        case 'warn':
            return console.log(`🔶 Warning: ${message}.`)
        
        case 'api': 
            let date_ob = new Date(Date.now())
            return console.log(`[${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()} ${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}] ${message}.`)
        
        default: 
            return console.log(message)
    }
}