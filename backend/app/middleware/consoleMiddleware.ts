import {getNowDate} from './dateMiddleware'

export default function log(type: String, message: String) {
    switch (type) {
        case 'ok': 
            return console.log(`✅ ${message}.`)
        
        case 'info': 
            return console.log(`ℹ️  ${message}.`)
        
        case 'error': 
            return console.log(`❌ ${message}.`)
        
        case 'warn':
            return console.log(`🔶 ${message}.`)
        
        case 'api': 
            return console.log(`[${getNowDate(true)}] ${message}.`)
        
        default: 
            return console.log(message)
    }
}