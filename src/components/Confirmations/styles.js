import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

export const Confirmate = styled.div`
  z-index: 5;
  display: none;

  position: absolute;
  bottom: 20px;
  right: 20px;

  transition: display 2s ease-in-out;

  background: var(--reports);
  border-radius: 4px;

  min-width: 400px;
  min-height: 120px;
  height: 120px;
  border: 1px solid #6633cc;
  padding: 10px;

  &.confirmate {
    display: block;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
`;

export const Transcription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  max-width: 400px;
  color: #ffffff;
`;

export const Go = styled.a`
  background: #6633cc;
  color: white;
  cursor: pointer;

  border-radius: 6px;
  border-radius: 2px;
  font-size: 16px;
  padding: 1px 10px;

  position: absolute;
  bottom: 0;
  margin-bottom: 5px;

  transition: background-color 2s;

  &:hover {
    background: var(--ENTER);
    color: #111;
  }
`;

export const Close = styled(FiArrowRight)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  margin-bottom: 5px;

  color: var(--witer);
`;
