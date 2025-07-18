'use client';

import { useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpriteSet {
  [key: string]: [number, number][];
}

const SPRITE_SETS: SpriteSet = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  scratchWallN: [[0, 0], [0, -1]],
  scratchWallS: [[-7, -1], [-6, -2]],
  scratchWallE: [[-2, -2], [-2, -3]],
  scratchWallW: [[-4, 0], [-4, -1]],
  tired: [[-3, -2]],
  sleeping: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
};

const NEKO_SPEED = 10;

export default function OnekoCat() {
  const nekoRef = useRef<HTMLDivElement>(null);
  const [nekoPos, setNekoPos] = useState<Position>({ x: 32, y: 32 });
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [frameCount, setFrameCount] = useState(0);
  const [idleTime, setIdleTime] = useState(0);
  const [idleAnimation, setIdleAnimation] = useState<string | null>(null);
  const [idleAnimationFrame, setIdleAnimationFrame] = useState(0);
  const lastFrameTimestamp = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const setSprite = (name: string, frame: number) => {
    if (!nekoRef.current) return;
    const sprite = SPRITE_SETS[name][frame % SPRITE_SETS[name].length];
    nekoRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  };

  const resetIdleAnimation = () => {
    setIdleAnimation(null);
    setIdleAnimationFrame(0);
  };

  const handleIdle = () => {
    setIdleTime(prev => prev + 1);

    if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && !idleAnimation) {
      const availableIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPos.x < 32) availableIdleAnimations.push("scratchWallW");
      if (nekoPos.y < 32) availableIdleAnimations.push("scratchWallN");
      if (nekoPos.x > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE");
      if (nekoPos.y > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS");

      setIdleAnimation(availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)]);
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          setIdleAnimationFrame(prev => prev + 1);
        } else {
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          } else {
            setIdleAnimationFrame(prev => prev + 1);
          }
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        } else {
          setIdleAnimationFrame(prev => prev + 1);
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
  };

  const handleMovement = () => {
    const diffX = nekoPos.x - mousePos.x;
    const diffY = nekoPos.y - mousePos.y;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < NEKO_SPEED || distance < 48) {
      handleIdle();
      return;
    }

    setIdleTime(0);
    resetIdleAnimation();

    const directionX = diffX / distance;
    const directionY = diffY / distance;

    const newX = nekoPos.x - directionX * NEKO_SPEED;
    const newY = nekoPos.y - directionY * NEKO_SPEED;

    setNekoPos({ x: newX, y: newY });

    // Determine sprite direction
    const angle = Math.atan2(diffY, diffX);
    const direction = Math.round(angle / (Math.PI / 4)) + 4;
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    setSprite(directions[direction % 8], frameCount);
  };

  const animate = (timestamp: number) => {
    if (!lastFrameTimestamp.current) {
      lastFrameTimestamp.current = timestamp;
    }

    if (timestamp - lastFrameTimestamp.current > 100) {
      setFrameCount(prev => prev + 1);
      handleMovement();
      lastFrameTimestamp.current = timestamp;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (nekoRef.current) {
      nekoRef.current.style.left = `${nekoPos.x - 16}px`;
      nekoRef.current.style.top = `${nekoPos.y - 16}px`;
    }
  }, [nekoPos]);

  return (
    <div
      ref={nekoRef}
      id="oneko"
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        pointerEvents: 'none',
        backgroundImage: 'url("/oneko.gif")',
        imageRendering: 'pixelated',
        zIndex: 99999,
      }}
    />
  );
}
