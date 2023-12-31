import Movies from "models/Movies";
import connectDB from "utils/connectDB";

// Components
import CategoriesPage from "@/templates/CategoriesPage";

const Categories = ({ movie }) => {
  return <CategoriesPage data={movie} />;
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { score, year },
  } = context;
  try {
    await connectDB();
    const data = await Movies.find();

    const FiltredData = data.filter((movie) => {
      // Filtred By Year
      const yearsResult = movie.year_score.filter(
        (years) => years.year && years.year === year
      );

      // Filtred By Score
      const scoreResult = movie.year_score.filter((scores) => {
        if (score === "2-5" && scores.score >= "2" && scores.score <= "5") {
          return movie;
        } else if (
          score === "5-7" &&
          scores.score > "5" &&
          scores.score <= "7"
        ) {
          return movie;
        } else if (score === "7" && scores.score > "7") {
          return movie;
        }
      });

      if (score && year && yearsResult.length && scoreResult.length) {
        return movie;
      } else if (!score && year && yearsResult.length) {
        return movie;
      } else if (score && !year && scoreResult.length) {
        console.log(movie);
        return movie;
      }
    });

    return {
      props: { movie: JSON.parse(JSON.stringify(FiltredData)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
