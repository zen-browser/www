"use client"
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none !important;
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 15px;
  height: 15px;
  pointer-events: none;
  z-index: 9999;
  left: -7px;
  top: -7px;
  transition: all 0.1s ease;
  mix-blend-mode: difference;
  isolation: isolate;

  &.clickable {
    width: 20px;
    height: 20px;
    left: -10px;
    top: -10px;
    mix-blend-mode: normal;
  }
`;

const CursorDot = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  transition: background-color 0.1s ease;

  .clickable & {
    background-color: #3C82F6;
  }
`;

const CustomCursor: React.FC = () => {

  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement;

    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.onclick ||
          getComputedStyle(target).cursor === 'pointer') {
        cursor.classList.add('clickable');
      }
    };

    const handleMouseOut = () => {
      cursor.classList.remove('clickable');
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Cursor className="cursor">
        <CursorDot />
      </Cursor>
    </>
  );
};

export default CustomCursor;