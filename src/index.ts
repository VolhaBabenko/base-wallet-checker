import { RPC } from './config.js'
import { formatInput } from './utils/format.js'
import { hasInput, startsWith0x } from './utils/validate.js'
import { createResult } from './utils/result.js'
import { printHeader } from './utils/output.js'

function run() {
  console.log("Starting app...")

  const address = formatInput(process.argv[2] || '')

  if (!hasInput(address)) {
    console.log("Please provide address")
    process.exit(1)
  }

  if (!startsWith0x(address)) {
    console.log("Address must start with 0x")
    process.exit(1)
  }

  const result = createResult(address, RPC)

  printHeader()
  console.log(JSON.stringify(result, null, 2))
}

run()
