import SmeeClient from 'smee-client'

const smee = new SmeeClient({
  source: 'https://smee.io/hDMEHwzjjX1LeSRH',
  target: 'http://localhost:4000/events',
  logger: console
})

const events = smee.start()

// Stop forwarding events
//events.close()
