import React from 'react';
import { ProductCard } from '@/src/components/product';
import { Layout, MainContent } from '@/src/components/common';

export default function Card() {
  return (
    <MainContent heading="New and trending" subtitle="Based on player counts and release date">
      <ProductCard />
    </MainContent>
  );
}

Card.Layout = Layout;

// const [value, setValue] = useState(true);

// const Video = useMemo(
//   () => (
//     <ReactPlayer
//       volume={0}
//       playing={true}
//       url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
//     />
//   ),
//   [],
// );

// const ImageM = useMemo(
//   () => (
//     <Image
//       src="https://i.picsum.photos/id/674/640/360.jpg?hmac=wRJJ7BljLaVGAswX1O3AZsqyrwHd-vStRoFIMIv076s"
//       alt="Picture of the author"
//       width={640}
//       height={360}
//     />
//   ),
//   [],
// );

// const handleMouseEnter = useCallback(() => {
//   setValue(false);
// }, []);

// const handleMouseLeave = useCallback(() => {
//   setValue(true);
// }, []);

// return (
//   <div>
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       {value ? ImageM : Video}
//     </div>
//     <div className="p-5 bg-gray-100">{value}</div>
//   </div>
// );
