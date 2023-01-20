import { useState, useEffect } from 'react';
import rot from 'rot'

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const setFontSizes = (content) => {
  return [...content].map(letter => <span style={{ fontSize: `${(randomNumber(1, 4) * 16)}px` }}>{letter}</span>);
};

const getTimeValues = () => {
  const time = new Date();
  const [HH, MM, SS] = time.toLocaleTimeString().split(':');

  if (HH === '11' && MM === '11') {
    return {
      h: 0,
      m: 0,
    }
  }

  return {
    h: getDigitalRoot(HH),
    m: getDigitalRoot(MM)
  }
}

const getDigitalRoot = (n) => {
  return (n - 1) % 9 + 1;
}

function ConfesionesList({ confesiones }) {
  const [digitalRoot, setDigitalRoot] = useState(Date.now());
  const { h, m } = getTimeValues();

  useEffect(() => {
    const currentDigitalRoot = getDigitalRoot(`${h}${m}`);
    setDigitalRoot(currentDigitalRoot);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDigitalRoot = getDigitalRoot(`${h}${m}`);
      setDigitalRoot(currentDigitalRoot);
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  if (confesiones && confesiones.length) {
    return (
      <div style={{ margin: 'auto 0', fontFamily:  digitalRoot ? "'KR Kats Flowers'" : 'sans-serif' }}>
        {confesiones.map((confesion) => {
          const { id, content, date } = confesion;
          return <p key={date || id} style={{ marginBottom: '1rem' }}>{setFontSizes(rot(content, digitalRoot))}</p>;
        })}
      </div>
    );
  }

  return null;
}


export default ConfesionesList;
