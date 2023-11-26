const CountrySkeleton = () => {
	return (
		<section className="mt-32 px-4 lg:px-20 py-4 2xl:container mx-auto">
			<h2 className="Subtitle">Recetas de todo el mundo</h2>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
				{[...Array(6)].map((_, index) => (
					<div
						key={index + 1}
						className="w-[380px] h-[271px] md:w-[379px] md:h-[270px] lg:w-[388px] lg:h-[277px] bg-gray-300 rounded-md animate-pulse"
					/>
				))}
			</section>
		</section>
	)
}

export default CountrySkeleton