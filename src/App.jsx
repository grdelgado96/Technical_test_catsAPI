import { useCatImage } from "../hooks/useCatImage";
import { useCatFact } from "../hooks/useCatFact";

export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleRefresh = async () => {
    refreshRandomFact();
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>App de gatitos</h1>
      <button onClick={handleRefresh}>Get new fact</button>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
            src={imageUrl}
            alt="image of a cat saying a word"
          />
        )}
      </section>
    </main>
  );
}
