import React from 'react';
import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = (props: RoomCodeProps) => {
  const { code } = props;

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button
      type="button"
      onClick={copyRoomCodeToClipboard}
      className="room-code"
    >
      <div>
        <img src={copyImg} alt="Botão para copiar códfio da sala" />
      </div>

      <span>Sala #{code}</span>
    </button>
  );
};

export default RoomCode;
