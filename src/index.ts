import { formatInput } from './utils/format.js'
import { hasInput, startsWith0x } from './utils/validate.js'

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

  const result = {
    address
  }

  console.log("==== WALLET INFO ====")
  console.log(JSON.stringify(result, null, 2))
}

run()
