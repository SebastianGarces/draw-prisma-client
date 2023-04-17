import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!req.method) return res.status(405).end()

	switch (req.method) {
		case 'GET':
			// TODO: Get tables
			return res.status(200).json({ data: [] })
		case 'POST':
			return res.status(200).json({ data: {} })
	}
}
