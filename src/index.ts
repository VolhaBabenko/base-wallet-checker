console.log("Base Wallet Checker Lite")
const address = process.argv[2]

console.log("Wallet:", address)
import { format } from './utils/format.js'

const address = format(process.argv[2] || '')
