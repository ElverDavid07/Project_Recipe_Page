import Hero from '@app/HomePage/components/Hero'
import SectionCategories from '@app/HomePage/components/sections/SectionCategories'
import SectionCountry from '@app/HomePage/components/sections/SectionCountry'
import SectionRecipesLatest from '@app/HomePage/components/sections/SectionRecipesLatest'
import CategorySkeleton from '@app/HomePage/components/skeletons/CategorySkeleton'
import CountrySkeleton from '@app/HomePage/components/skeletons/CountrySkeleton'
import RecipesLatestSkeleton from '@app/HomePage/components/skeletons/RecipesLatestSkeleton'
import { Suspense } from 'react'

const HomePage = () => {
	return (
		<main>
			<Hero />
			<Suspense fallback={<CategorySkeleton />}>
				<SectionCategories />
			</Suspense>
			<Suspense fallback={<CountrySkeleton />}>
				<SectionCountry />
			</Suspense>
			<Suspense fallback={<RecipesLatestSkeleton />}>
				<SectionRecipesLatest />
			</Suspense>
		</main>
	)
}

export default HomePage
