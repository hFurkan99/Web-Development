import Category from "./Category";
function Categories({ genres, years }) {
  return (
    <section id="categories">
      <Category title="genre" category={genres} />
      <Category title="year" category={years} />
    </section>
  );
}

export default Categories;
