import ShowRecipesOneCountry from '@/app/(landing)/components/ShowRecipesOneCountry'
import CardCountry from '@/components/shared/CardCountry'
import { GetAllCountry } from '@/services/GetAllCountry'
import { Metadata } from 'next'
import { Suspense } from 'react'
import SkeletonAllCountry from './components/SkeletonAllCountry'

export const metadata: Metadata = {
	title: 'Explora la Gastronomía Internacional por Países | GlobalFood',
}

const pageAllCountry = async () => {
	const dataCountry = await GetAllCountry(12)
	return (
		<Suspense fallback={<SkeletonAllCountry />}>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-20">
				<div className="flex justify-between items-center">
					<h1 className="lg:text-4xl text-2xl font-poppins-bold">Paises</h1>
					<h3 className="text-xl">{dataCountry?.totalItems} Paises totales</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10  gap-y-5 mt-16">
					{dataCountry?.data.map(({ _id, image, name }) => (
						<div key={_id}>
							<ShowRecipesOneCountry id={_id} name={name}>
								<CardCountry img={image} name={name} />
							</ShowRecipesOneCountry>
						</div>
					))}
				</div>
			</section>
		</Suspense>
	)
}

export default pageAllCountry
