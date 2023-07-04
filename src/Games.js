import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import gamesData from './games.json'; //imported necessary modules

function Games() {
  const [selectedGenres, setSelectedGenres] = useState([]); //set up states, selectedGenres array and setSelectedGenres func to update selected genres

  const handleGenreSelection = (genre) => { // this function is called when a checkbox(s) for a genre are clicked, used onChange
    if (selectedGenres.includes(genre)) { //checks if array has said genre
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre)); //removes genre from array
    } else {
      setSelectedGenres([...selectedGenres, genre]); //adds genre to to array using spread op
    }
  };

  const renderGames = () => { //function to check for selected genres, then filter the filteredGames array 
    let filteredGames = gamesData.games;

    if (selectedGenres.length > 0) {
      filteredGames = filteredGames.filter((game) => {
        const gameGenres = game.genre.split(',').map((genre) => genre.trim()); //split into individual genres
        return selectedGenres.some((selectedGenre) => gameGenres.includes(selectedGenre)); //check if in array
      });
    }

    return filteredGames.map((game) => ( //render the filtered genres
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

  const genres = ['Action RPG', 'FPS', 'Open World', 'Zombie'];

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
                    checked={selectedGenres.includes(genre)}
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
