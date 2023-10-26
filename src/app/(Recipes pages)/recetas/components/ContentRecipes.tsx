'use client'
import CardRecipe from '@/SharedComponents/CardRecipe'
import NotFound from '@/SharedComponents/NotFound'
import ShowOneRecipe from '@/SharedComponents/ShowOneRecipe'
import useRecipes from '@/hooks/useRecipes'
import { type RecipeList } from '@/interfaces/RecipesList.interface'
import PaginationComponent from './Pagination'
import Search from './Search'

const ContentRecipes = ({ data }: { data: RecipeList | undefined }) => {
  const {
    recipes,
    currentPage,
    setCurrentPage,
    searchRecipeTyped,
    totalPages,
    isFilteredData
  } = useRecipes({
    initialData: data?.data,
    initialPage: 1,
    productsPerPage: data?.data.length,
    countOfPages: data?.totalPages
  })

  const totalRecipes = isFilteredData ? recipes.length : data?.totalItems
  return (
    <>
      <Search handleValue={searchRecipeTyped} />
      <div className="flex items-center justify-between px-5">
        <h2 className="Subtitle">Recetas</h2>
        <span className="text-lg font-nunito">
          {totalRecipes} Recetas totales
        </span>
      </div>
      <section>
        {recipes.length === 0 ? (
          <NotFound description="No hay receta que coinsida con la busqueda" />
        ) : (
          <section className="mt-16 px-4 mx-auto  grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3">
            {recipes.map(
              ({ _id, image, name, category, duration, portions }) => (
                <div key={_id}>
                  <ShowOneRecipe id={_id}>
                    <CardRecipe
                      img={image}
                      name={name}
                      category={category.name}
                      duration={duration}
                      portions={portions}
                    />
                  </ShowOneRecipe>
                </div>
              )
            )}
          </section>
        )}
      </section>
      <PaginationComponent
        currentPage={currentPage}
        handlePage={setCurrentPage}
        total={totalPages}
      />
    </>
  )
}

export default ContentRecipes
