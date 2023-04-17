import styles from './page.module.css'
import { getDiagrams } from '@/use-cases/diagrams'

export default async function Home() {
	const diagrams = await getDiagrams()

	return (
		<main className={styles.main}>
			<h1>Draw Prisma</h1>
			<ul>
				{diagrams.map(diagram => (
					<li key={diagram.id}>{diagram.name}</li>
				))}
			</ul>
		</main>
	)
}
