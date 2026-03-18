import { formatInput } from './utils/format.js'

function run() {
  console.log("Starting app...")

  const address = formatInput(process.argv[2] || '')

  if (!address) {
    console.log("Please provide address")
    process.exit(1)
  }

  const result = {
    address
  }

  console.log("==== WALLET INFO ====")
  console.log(JSON.stringify(result, null, 2))
}

run()
