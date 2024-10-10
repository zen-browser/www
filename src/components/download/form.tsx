import styled, { keyframes } from "styled-components";

const field_enter = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(10px);
  }
  1% {
    max-height: 100%;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

const field_exit = keyframes`
  from {
    display: flex;
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  99% {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(10px);
  }
  100% {
    display: none;
  }
`;

export const FormField = styled.div<{ enter: boolean; out: boolean }>`
	max-height: 0;
	flex-direction: column;
	margin-top: 2rem;
	opacity: 0;
	width: 100%;
	animation: 0.2s ease-in-out forwards
		${({ enter, out }) => (enter ? field_enter : out ? field_exit : "")} !important;
	animation-delay: ${({ enter }) => (enter ? "0.4s" : "0s")};
`;

export const FieldTitle = styled.div`
	font-size: 1.35rem;
	font-weight: 500;
`;

export const FieldDescription = styled.div`
	font-size: 1rem;
	color: #666;
	margin-bottom: 1rem;
`;