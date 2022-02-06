import { useRouter } from "next/router";
import Image from "next/image";

export default function Movie({ movie }) {
  const router = useRouter();
  const { id } = router.query;
  const { title, backdrop_path, poster_path, video } = movie;
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // /movies/524434 MOVIE ID
  //INSPIRED: https://www.imdb.com/title/tt9032400/

  console.log("video", movie);

  return (
    <div>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${backdrop_path || poster_path}` ||
          `${BASE_URL}${poster_path}`
        }
        height={1080}
        width={1920}
        alt=""
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const genre = context.query.genre;
  const API_KEY = process.env.API_KEY;

  const MOVIE_ID = context.params.id;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US
    }`
  ).then((res) => res.json());

  return {
    props: { movie: request },
  };
}
