export function convertMoiveToFormData(movie) {
  const formData = new FormData();

  formData.append("name", movie.name);
  formData.append("description", movie.description);
  formData.append("rating", movie.rating);
  formData.append("genre", movie.genre);
  formData.append("year", movie.year);
  formData.append("runtime", movie.runtime);
  formData.append("director", movie.director);
  formData.append("poster", movie.poster);

  return formData;
}
