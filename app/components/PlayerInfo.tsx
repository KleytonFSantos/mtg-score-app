"use client"
import { useState } from 'react';

type PlayerInfoProps = {
  name: string;
  wins: number;
  losses: number;
  points: number;
};

export default function PlayerInfo({ name, wins, losses, points }: PlayerInfoProps) {
  const [editing, setEditing] = useState(false);
  const [localWins, setLocalWins] = useState(wins);
  const [localLosses, setLocalLosses] = useState(losses);
  const [localPoints, setLocalPoints] = useState(points);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    console.log('Salvar valores editados:', localWins, localLosses, localPoints);
    setEditing(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="text-white text-base font-medium leading-normal line-clamp-1">{name}</p>
      <p className="text-[#93a5c8] text-sm font-normal leading-normal line-clamp-2">
        {editing ? (
          <input
            className="ml-4 w-8 text-black"
            type="number"
            value={localWins}
            onChange={(e) => setLocalWins(Number(e.target.value))}
            onBlur={handleSave}
          />
        ) : (
          <span onClick={handleEdit}>Wins: {localWins}</span>
        )} |
        {editing ? (
          <input
            className="ml-4 w-8 text-black"
            type="number"
            value={localLosses}
            onChange={(e) => setLocalLosses(Number(e.target.value))}
            onBlur={handleSave}
          />
        ) : (
          <span onClick={handleEdit}>Losses: {localLosses}</span>
        )} |
        {editing ? (
          <input
            className="ml-4 w-8 text-black"
            type="number"
            value={localPoints}
            onChange={(e) => setLocalPoints(Number(e.target.value))}
            onBlur={handleSave}
          />
        ) : (
          <span onClick={handleEdit}>Points: {localPoints}</span>
        )}
      </p>
    </div>
  );
}