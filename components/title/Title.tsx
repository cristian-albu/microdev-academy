import { COLORS, T_Colors } from "@/lib/constants";
import React, { FC, ReactNode, createElement } from "react";
import styled from "styled-components";

export type T_TitleComponent = {
  children: ReactNode;
  titleSize?: number;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  titleColor?: T_Colors;
};

const Title: FC<T_TitleComponent> = ({
  children,
  titleSize,
  titleTag,
  titleColor,
}) => {
  return (
    <TitleElement $titleSize={titleSize} $titleColor={titleColor}>
      {createElement(titleTag ?? "p", {}, children)}
    </TitleElement>
  );
};

export default Title;

const TitleElement = styled.div<{
  $titleSize?: number;
  $titleColor?: T_Colors;
}>`
  font-size: ${({ $titleSize }) => $titleSize ?? 1}rem;
  font-weight: 700;
  color: ${({ $titleColor }) =>
    $titleColor ? COLORS[$titleColor] : "inherit"};
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
`;
