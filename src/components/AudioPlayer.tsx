import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

const StyledPlay = styled(FaPlay)`
  background-color: #2a2f90;
`;

const StyledPause = styled(FaPause)`
  background-color: #2a2f90;
`;

const StyledSpeaker = styled(GiSpeaker)`
  background-color: #2a2f90;
  border-radius: 10px 10px;
  width: 30px;
`;

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
    background: #605eec;
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => progress + 0.5 + '%'};
    background: violet;
    z-index: 2;
  }
`;

const VolumeBar = styled.input<{ progress: number }>`
  -webkit-appearance: none;
  width: 75px;
  height: 5px;
  background: lime;
  outline: none;
  appearance: none;
  position: relative;

  transform: rotate(270deg);
  transform-origin: top left;

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
    background: #605eec;
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => progress + 1 + '%'};
    background: violet;
    z-index: 2;
  }
`;

const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const AudioPlayer: React.FC<{ song: string }> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [progressDone, setProgressDone] = useState(0);

  const [progressValue, setProgressValue] = useState(0);

  const [volume, setVolume] = useState(0.5);
  const [volumeIndicator, setVolumeIndicator] = useState(50);

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

    setProgressDone(percent);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  //volume

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.volume = volume;
    }
  }, []);

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    const newVolumeIndicator = Number(e.target.value) * 100;
    console.log(newVolume);
    if (audioElement.current) {
      audioElement.current.volume = newVolume;
      setVolume(newVolume);
      setVolumeIndicator(newVolumeIndicator);
    }
  };

  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: '#2A2F90',
        borderRadius: '20px 20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AudioPlayerContainer>
        <audio
          src={song}
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

        <VolumeContainer onMouseEnter={() => setIsVolume(true)} onMouseLeave={() => setIsVolume(false)}>
          {isVolume && (
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                background: '#2A2F90',
                width: '30px',
                height: '90px',
                borderRadius: '10px 10px',
                padding: '10px',
              }}
            >
              <div style={{ position: 'absolute', bottom: '0', left: '40%' }}>
                <VolumeBar
                  type="range"
                  value={volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  progress={volumeIndicator}
                />
              </div>
            </div>
          )}
          <StyledSpeaker />
        </VolumeContainer>
      </AudioPlayerContainer>
    </div>
  );
};

export default AudioPlayer;
