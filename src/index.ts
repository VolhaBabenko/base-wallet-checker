console.log("Starting app...")
console.log("Base Wallet Checker Lite")
const address = process.argv[2]

console.log("Wallet:", address)
import { format } from './utils/format.js'

const address = format(process.argv[2] || '')
if (!address) {
  console.log("Please provide address")
}
import { RPC } from './config.js'

console.log("RPC:", RPC)
