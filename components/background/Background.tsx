import { COLORS } from "@/lib/constants";
import React, { FC, HTMLAttributes, ReactNode } from "react";
import styled, { keyframes } from "styled-components";

export type T_BackgroundComponent = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Background: FC<T_BackgroundComponent> = ({ children }) => {
  return (
    <BackgroundElement>
      <GradientBall />
      <GradientBall $left={60} $top={70} $opacity={0.5} $animationTiming={15} />
      <Contents>{children}</Contents>
    </BackgroundElement>
  );
};

export default Background;

const BackgroundElement = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.background1};
  color: ${COLORS.textOnDark};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BallMovementAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        transform: translate(0%, 0%) scale(1.2);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
    `;

const GradientBall = styled.div<{
  $top?: number;
  $left?: number;
  $size?: number;
  $opacity?: number;
  $animationTiming?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top ?? 25}%;
  left: ${({ $left }) => $left ?? 25}%;
  opacity: ${({ $opacity }) => $opacity ?? 1};
  width: ${({ $size }) => $size ?? 50}%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: radial-gradient(
    circle,
    ${COLORS.background3} 0%,
    ${COLORS.background2} 50%,
    ${COLORS.background1} 100%
  );
  z-index: 1;
  filter: blur(100px);
  animation: ${BallMovementAnimation}
    ${({ $animationTiming }) => $animationTiming || 10}s infinite;
`;

const Contents = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
