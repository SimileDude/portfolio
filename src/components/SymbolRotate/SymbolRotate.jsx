import React, { useEffect } from 'react';

const SymbolRotate = () => {
  const symbolArray = [
    '!',
    '@',
    '{',
    '}',
    '<',
    '>',
    '?',
    '/',
    ':',
    ';',
    '"',
    '*',
    '&',
    '%',
  ];

  const createSymbol = () => {
    const symbol = document.createElement('span');
    symbol.innerHTML =
      symbolArray[Math.floor(Math.random() * symbolArray.length)];
    symbol.style.opacity = Math.random();
    symbol.style.fontSize = Math.floor(Math.random() * 20) + 10 + 'px';
    symbol.style.animationDelay = Math.random() * 5 + 's';
    symbol.style.left = Math.random() * 100 + '%';
    return symbol;
  };

  useEffect(() => {
    const portrait = document.querySelector('.portrait');
    const symbolRotate = document.querySelector('.symbol-rotate');

    for (let i = 0; i < 100; i++) {
      const symbol = createSymbol();
      symbolRotate.appendChild(symbol);
    }

    const updateSymbolPositions = () => {
      const symbolList = symbolRotate.querySelectorAll('span');
      symbolList.forEach((symbol) => {
        const x = portrait.offsetLeft + portrait.offsetWidth / 2;
        const y = portrait.offsetTop + portrait.offsetHeight / 2;
        const angle =
          (Math.atan2(symbol.offsetTop - y, symbol.offsetLeft - x) * 180) /
          Math.PI;
        symbol.style.transform = `rotate(${angle}deg)`;
      });
    };

    updateSymbolPositions();
    window.addEventListener('resize', updateSymbolPositions);

    return () => {
      symbolRotate.innerHTML = '';
      window.removeEventListener('resize', updateSymbolPositions);
    };
  }, []);

  return <div className="symbol-rotate"></div>;
};

export default SymbolRotate;

