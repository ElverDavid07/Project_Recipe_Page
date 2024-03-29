import SkeletonCardCountry from '@/components/shared/skeletons/SkeletonCardCountry'

const SkeletonAllCountry = () => {
	return (
		<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-20">
			<section className="2xl:mx-auto 2xl:container mt-20">
				<div className="flex justify-between items-center">
					<h1 className="lg:text-4xl text-2xl font-poppins-bold">Paises</h1>
					<h3 className="text-xl flex items-center gap-x-2">
						<span className="h-5 w-12 rounded-full bg-gray-300 animate-pulse block" />{' '}
						Paises totales
					</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10  gap-y-5 mt-16">
					{[...Array(9)].map((_, index) => (
						<SkeletonCardCountry key={index + 1} />
					))}
				</div>
			</section>
		</section>
	)
}

export default SkeletonAllCountry
