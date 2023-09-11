import ShowOneRecipe from "@/app/ShowOneRecipe";
import { GetAllRecipes } from "../functions/GetAllRecipes";

const ContentRecipes = async () => {
	const data = await GetAllRecipes();
	console.log(data);
	return (
		<>
			<div className="flex items-center justify-between px-5">
				<h2 className="Subtitle">Recetas</h2>
				<span className="text-lg font-rubik px-10">Total de recetas {data?.totalRecipes} </span>
			</div>
			<section className="mt-16 lg:mx-16 mx-4 grid grid-cols-4 gap-5">
				{!data ? (
					<span>Cargando...</span>
				) : (
					data?.data.map(({ _id, image, name }) => (
						<ShowOneRecipe id={_id} key={_id}>
							<img src={image} alt={name} className="rounded-md"/>
							<span>{name} </span>
						</ShowOneRecipe>
					))
				)}
			</section>
		</>
	);
};

export default ContentRecipes;
