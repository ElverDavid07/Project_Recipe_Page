import { MaxWidthWrapper } from '@/(Recipes pages)/components/MaxWidthWrapper'
import Image from '@/globalComponents/Image'
import OverflowScroll from '@/globalComponents/OverflowScroll'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import { notFound } from 'next/navigation'
import { GetRecipeById } from '../../functions/GetRecipeById'

const PageById = async ({ params }: ParamProps) => {
  const recipe = await GetRecipeById(params.id)
  if (recipe === undefined) {
    notFound()
  }

  // const rtf = new Intl.RelativeTimeFormat('es')
  // console.log(rtf.format(-2, 'day'))
  return (
    <MaxWidthWrapper>
      <section>
        {recipe === undefined ? (
          <span>Cargando...</span>
        ) : (
          <div className="md:grid md:grid-cols-[40%_60%] justify-center items-center gap-10">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={400}
              height={300}
              className="rounded-md mx-auto"
            />
            <div>
              <span className="text-2xl font-bold uppercase flex justify-center mb-5 mt-5 md:mt-0">
                {recipe.name}
              </span>

              <OverflowScroll className="w-full h-[400px] ">
                <article className="first-letter:uppercase text-lg">
                  {recipe.description}
                </article>
                <h3 className="text-xl font-bold uppercase flex mt-10">
                  Ingredientes
                </h3>
                <ul className="mx-5 list-disc list-outside marker:text-gold">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i + ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold uppercase flex mt-10">
                  Pasos
                </h3>
                <ol className="mx-5 list-decimal list-outside">
                  {recipe.steps.map((step, i) => (
                    <li key={i + step}>{step}</li>
                  ))}
                </ol>
                <div className="mt-10">
                  Categoria :{' '}
                  <span className="bg-gold py-2 px-4 rounded-full text-white">
                    {recipe.category.name}
                  </span>
                </div>
              </OverflowScroll>
            </div>
          </div>
        )}
      </section>
    </MaxWidthWrapper>
  )
}

export default PageById
