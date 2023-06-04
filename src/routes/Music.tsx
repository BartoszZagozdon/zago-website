import styled from 'styled-components';

import TrackCard from '../components/TrackCard';

import musicPortfolio from '../utils/musicPortfolio';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MusicContainer = styled.div`
  width: 73%;
  min-height: 70vh;
  font-size: 1.2rem;
  border: 2px solid lime;
  border-radius: 10px 10px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 20px;
`;

const SearchInput = styled.input`
  margin-top: 30px;
  width: 15%;
  height: 30px;
  color: #0de1cd;
  font-size: 1.2rem;
  padding: 15px 10px;
  border: 2px solid violet;
  border-radius: 10px 10px;

  background-color: black;

  &:focus {
    outline: none;
  }
`;

const Music = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [displayedMusic, setDisplayedMusic] = useState(musicPortfolio);

  const navigate = useNavigate();

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredMusic = musicPortfolio.filter((track) => track.title.toLowerCase().includes(query));
    setDisplayedMusic(filteredMusic);
  }, [searchQuery]);

  return (
    <>
      <SearchInput
        type="text"
        value={searchQuery}
        placeholder="Search a track..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MusicContainer>
        {displayedMusic.map((track) => (
          <TrackCard
            onClick={() => navigate(`/music/${track.title}`)}
            key={track.title}
            title={track.title}
            img={track.img}
          />
        ))}
      </MusicContainer>
    </>
  );
};

export default Music;
