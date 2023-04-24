import { useRef, useState, useMemo } from "react"

type Props = {
  playerRef: any;
  playing: boolean;
  loop: boolean;
  volume: number;
  muted: boolean;
  progress: number;
  duration: number;

  handlePlay: () => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  handlePause: () => void;
  handleVolumeChange: (newVolume: number) => void;
};

export const PlayerControls = ({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null)

  //Play and Pause
  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  //Seeking
  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  }

  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  }

  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  }


  return (
    <div className="bg-gray-50 rounded-b-xl py-10">

    </div>
  );
};
