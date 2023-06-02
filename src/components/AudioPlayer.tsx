import styled from 'styled-components';

import Blooming from '../assets/music/Blooming.mp3';

import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

const StyledPlay = styled(FaPlay)``;

const StyledPause = styled(FaPause)``;

const StyledSpeaker = styled(GiSpeaker)``;

const ProgressBar = styled.input<{ progress: number }>`
  -webkit-appearance: none;
  width: 300px;
  height: 5px;
  background: lime;
  outline: none;
  appearance: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: pink;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
    position: relative;
    z-index: 3;
  }

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: red;
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => progress + 1 + '%'};
    background: violet;
    z-index: 2;
  }
`;

const VolumeBar = styled.input<{ progress: number }>`
  -webkit-appearance: none;
  width: 10px;
  height: 50px;
  background: lime;
  outline: none;
  appearance: none;
  position: relative;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: pink;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
    position: relative;
    z-index: 3;
  }

  &::-webkit-slider-runnable-track {
    height: 5px;
    width: 5px;
    background: red;
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => progress + 1 + '%'};
    background: violet;
    z-index: 2;
  }
`;

const VolumeContainer = styled.div<{ isDisplayed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
  height: ${({ isDisplayed }) => (isDisplayed ? '80px' : 'fit-content')};
`;

const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [progressDone, setProgressDone] = useState(0);

  const [progressValue, setProgressValue] = useState(0);

  const audioElement = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioElement.current) {
      if (isPlaying) {
        audioElement.current.pause();
      } else {
        audioElement.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioElement.current) {
      setCurrentTime(audioElement.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioElement.current) {
      setDuration(audioElement.current.duration);
    }
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const newTime = Number(e.target.value);
    if (audioElement.current) {
      audioElement.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgressValue(newTime);
    }
  };

  useEffect(() => {
    setProgressValue(currentTime);
    handleProgressDone();
  }, [currentTime]);

  const handleProgressDone = () => {
    const percent = (progressValue / duration) * 100;

    setProgressDone(Math.floor(percent));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  //volume

  return (
    <AudioPlayerContainer>
      <audio
        src={Blooming}
        preload="metadata"
        ref={audioElement}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />
      <button style={{ backgroundColor: 'black', border: 'none' }} onClick={togglePlay}>
        {isPlaying ? <StyledPlay /> : <StyledPause />}
      </button>
      <div style={{ width: '45px' }}>{formatTime(currentTime)}</div>
      <ProgressBar
        type="range"
        value={progressValue}
        min={0}
        max={duration}
        onChange={handleProgressChange}
        progress={progressDone}
      />
      <div style={{ width: '45px' }}>{formatTime(duration)}</div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute' }}>
          <VolumeContainer
            isDisplayed={isVolume}
            onMouseEnter={() => setIsVolume(true)}
            onMouseLeave={() => setIsVolume(false)}
          >
            <div style={{ position: 'absolute', bottom: '30px' }}>
              {isVolume && <VolumeBar progress={progressDone} />}
            </div>
            <StyledSpeaker />
          </VolumeContainer>
        </div>
      </div>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
