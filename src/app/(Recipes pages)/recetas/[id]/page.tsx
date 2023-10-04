import Image from '@/globalComponents/Image'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import { notFound } from 'next/navigation'
import { GetRecipeById } from '../../functions/GetRecipeById'
const PageById = async ({ params }: ParamProps) => {
  const recipe = await GetRecipeById(params.id)
  if (recipe === null) {
    notFound()
  }

  // const rtf = new Intl.RelativeTimeFormat('es')
  // console.log(rtf.format(-2, 'day'))
  return (
    <section>
      {recipe === undefined
        ? (
        <span>Cargando...</span>
          )
        : (
        <div key={recipe._id}>
          <Image
            url={recipe.image}
            name={recipe.name}
            width={400}
            height={300}
            customStyles="rounded-md"
          />
          <span className="text-lg">{recipe.name} </span>
          <article>{recipe.description} </article>
          <ul className="mt-10 mx-5 list-disc list-outside marker:text-gold">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i + ingredient}>{ingredient}</li>
            ))}
          </ul>
          <ol className="mt-10 mx-10 list-decimal list-outside">
            {recipe.steps.map((step, i) => (
              <li key={i + step}>{step}</li>
            ))}
          </ol>
          <span>Categoria : {recipe.category.name} </span>
        </div>
          )}
    </section>
  )
}

export default PageById
