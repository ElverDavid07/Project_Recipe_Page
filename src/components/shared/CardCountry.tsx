import { type CardCountryProps } from '@interfaces/CardCountryProps.interface'
import { UiImage } from '@shared-components/ui'

const CardCountry = ({ img, name }: CardCountryProps) => {
	return (
		<div className="relative group cursor-pointer">
			<UiImage
				src={img}
				alt={name}
				width={400}
				height={300}
				className="transition-transform group-hover:scale-105 w-full"
			/>
			<span className="text-2xl text-white font-readexPro absolute bottom-4 left-5 z-10">
				{name}
			</span>
			<div className="absolute inset-0 bg-black opacity-50 rounded-md" />
		</div>
	)
}

export default CardCountry
