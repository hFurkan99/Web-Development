import Category from "./Category";
function Categories({ genres }) {
  return (
    <section id="categories">
      <Category title="genre" category={genres} />
    </section>
  );
}

export default Categories;
