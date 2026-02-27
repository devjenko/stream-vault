export async function searchMovies(movieName: string) {
  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${movieName}`
  )

  const movieData = await res.json()

  console.log(movieData)

  return movieData
}
