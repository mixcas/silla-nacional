import { Masonry } from 'react-masonry'

const images = [
  '/images/6E6EC316-DF3A-4118-B6AF-E7CE38948DD1.JPG',
  '/images/IMG-0849.jpg',
  '/images/IMG-1358.jpg',
  '/images/IMG-1360.jpg',
  '/images/IMG-1492.jpg',
  '/images/IMG-1496.jpg',
  '/images/IMG-1506.jpg',
  '/images/IMG-1523.jpg',
  '/images/IMG-1530.jpg',
  '/images/IMG-1682.jpg',
  '/images/IMG-1684.jpg',
  '/images/IMG-6377.jpg',
  '/images/IMG-6378.jpg',
  '/images/IMG-6379.jpg',
  '/images/IMG-8939-Original.jpg',
];


const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Chamba = () => {
  return (
    <div style={{ width: 'calc(80% - 64px)', margin: '42px auto' }}>
      <Masonry gutter={32}>
        {shuffleArray(images).map(imageSize => (
          <img
            style={{ maxWidth: "40%", zIndex: 10000 }}
            key={imageSize}
            src={imageSize}
            alt="" />
        ))}
      </Masonry>
      </div>
  );
};

export default Chamba;
