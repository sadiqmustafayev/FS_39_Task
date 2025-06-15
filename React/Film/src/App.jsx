import FilmCard from "./components/FilmCard";

const movies = [
  {
    title: "Inception",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    description: "A thief steals secrets by infiltrating dreams, and is tasked with planting an idea in a CEO's mind.",
  },
  {
    title: "Mad Max: Fury Road",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    description: "In a post-apocalyptic wasteland, Max helps a rebellious woman flee a tyrant and his army in a high-octane road chase.",
  },
  {
    title: "The Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg",
    description: "A hacker discovers reality is a simulation and joins a rebellion against the machines controlling humanity.",
  },
  {
    title: "Die Hard",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg",
    description: "An NYPD officer single‑handedly takes on terrorists in a high-rise building to save hostages.",
  },
  {
    title: "Top Gun",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg",
    description: "A hotshot naval aviator is sent to an elite fighter weapons school and faces personal and professional challenges.",
  },
  {
    title: "John Wick: Chapter 4",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg",
    description: "John Wick uncovers a path to defeating the High Table while facing new ruthless enemies across the globe.",
  },
  {
    title: "Mission: Impossible – Fallout",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    description: "Ethan Hunt and his IMF team race against time after a mission goes wrong, facing betrayal and deadly adversaries.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Aksion Filmləri</h1>
      <div className="flex flex-wrap justify-center gap-7">
        {movies.map((film) => (
          <FilmCard
            key={film.title}
            title={film.title}
            poster={film.poster}
            description={film.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
