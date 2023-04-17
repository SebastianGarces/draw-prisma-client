import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!req.method) return res.status(405).end()

	switch (req.method) {
		case 'GET':
			const diagrams = await prisma.diagram.findMany({ include: { schema: true } })
			return res.status(200).json({ data: diagrams })
		case 'POST':
			const { name } = req.body
			const diagram = await prisma.diagram.create({ data: { name } })
			await prisma.schema.create({ data: { diagram: { connect: { id: diagram.id } } } })

			const updatedDiagram = await prisma.diagram.findUnique({
				where: { id: diagram.id },
				include: { schema: true },
			})

			return res.status(200).json({ data: updatedDiagram })
	}
}
