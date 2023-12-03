'use client'
import { Categories } from '@/interfaces/Categories.interface'
import { ResponsiveOptions } from '@/lib/ResponsiveCaruselOptions'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShowRecipesOneCategory from './ShowRecipesOneCategory'

const Carusel = ({ categories }: { categories: Categories[] | undefined }) => {
	return (
		<section>
			<Swiper
				spaceBetween={50}
				slidesPerView={1.25}
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 4000 }}
				loop={true}
				breakpoints={ResponsiveOptions}
				pagination={{
					el: '.pagination',
					dynamicBullets: true,

				}}
			>
				{categories?.map(({ name, image, _id }, i) => (
					<SwiperSlide key={_id} virtualIndex={i}>
						<ShowRecipesOneCategory id={_id} category={name}>
							<section className="group">
								<Image
									src={image}
									alt={name}
									width={264}
									height={188}
									className="hover:scale-[1.03] transition-all rounded-md w-[182px] h-[130px] md:w-[264px] md:h-[188px]"
								/>
								<span className="text-xl text-slate-950 font-nunito block py-2 group-hover:text-gold transition-all ">
									{name}{' '}
								</span>
							</section>
						</ShowRecipesOneCategory>
					</SwiperSlide>
				))}
			</Swiper>
			<section className='flex justify-center mt-2'>
				<div className='pagination' />
			</section>
		</section>
	)
}

export default Carusel
