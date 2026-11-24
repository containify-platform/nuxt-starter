export default defineEventHandler(() => {
  return { message: 'Hello from Nitro', at: new Date().toISOString() }
})
