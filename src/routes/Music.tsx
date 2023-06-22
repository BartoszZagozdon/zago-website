import styled from 'styled-components';

import BorderRules from '../utils/borderAnimation';

import TrackCard from '../components/TrackCard';

import musicPortfolio from '../utils/musicPortfolio';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeMsgContext } from '../context/WelcomeMsgProvider';

const MusicContainer = styled(BorderRules)`
  width: 73%;
  min-height: 70vh;
  font-size: 1.2rem;

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
  min-width: 180px;
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
  const { setMsg } = useContext(WelcomeMsgContext);

  useEffect(() => {
    setMsg('My Tunes');
  }, []);

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
