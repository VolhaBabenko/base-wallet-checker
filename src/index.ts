console.log("Starting app...")

import { format } from './utils/format.js'

const address = format(process.argv[2] || '')

if (!address) {
  console.log("Please provide address")
  process.exit(1)
}

const result = {
  address
}

console.log(JSON.stringify(result, null, 2))
