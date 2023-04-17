import { z } from 'zod'
import { diagram } from '@/validators/diagrams'

export async function getDiagrams() {
	const res = await fetch('http://localhost:3000/api/diagrams', { cache: 'no-store' })
	const body = await res.json()
	return z.array(diagram).parse(body.data)
}

export async function postDiagram(name: string) {
	const res = await fetch('http://localhost:3000/api/diagrams', {
		method: 'POST',
		body: JSON.stringify({ name }),
		headers: { 'Content-Type': 'application/json' },
	})
	const data = await res.json()
	return data
}
