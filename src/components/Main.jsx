function Main({ data }) {
  if (!data || !data.main) {
    return <p style={{ textAlign: "center" }}>Nenhuma cidade buscada ainda.</p>;
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h2>{data.name}</h2>
          <p>As of {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} AEST</p>
        </div>
        <div className="weather-info">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <p>{data.weather[0].description}</p>
          <p>
            Day {Math.round(data.main.temp_max)}°C / Night {Math.round(data.main.temp_min)}°C
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
