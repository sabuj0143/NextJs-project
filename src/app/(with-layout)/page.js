import img1 from '../../assets/slider-5.jpg';
// import img2 from '../../assets/slider-6.jpg';
import Image from 'next/image';


const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
      <Image src={img1} alt="" />
    </main>
  )
}
export default HomePage;
