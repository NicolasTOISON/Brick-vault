import { registerOTel } from '@vercel/otel'
 
export function register() {
  registerOTel({ serviceName: 'brick-vault-front-end' })
}