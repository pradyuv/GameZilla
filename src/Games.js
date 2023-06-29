import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import gamesData from './games.json';

function Games() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelection = (genre) => {
    setSelectedGenre(selectedGenre === genre ? null : genre);
  };

  const renderGames = () => {
    let filteredGames = gamesData.games;

    if (selectedGenre) {
      filteredGames = filteredGames.filter((game) => game.genre === selectedGenre);
    }

    return filteredGames.map((game) => (
      <Col md={4} key={game.name}>
        <Link to="/thisgame" state={{ name: game.name, imagePath: game.imagePath }}>
          <Card className="bg-dark text-white">
            <Card.Img src={game.imagePath} alt={game.name} />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Title>{game.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    ));
  };

  const genres = ['Action RPG', 'FPS', 'Open World'];

  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Featured Games</h2>
          <Row>
            <Col md={3}>
              <h4 className="text-white">Genres:</h4>
              {genres.map((genre) => (
                <div key={genre} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={genre}
                    checked={selectedGenre === genre}
                    onChange={() => handleGenreSelection(genre)}
                  />
                  <label className="form-check-label text-white" htmlFor={genre}>
                    {genre}
                  </label>
                </div>
              ))}
            </Col>
            <Col md={9}>
              <Row>{renderGames()}</Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Games;
