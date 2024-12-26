
import img from './assets/home/featured.jpg';
import HeaderTitles from './HeaderTitiles';

const CheckitoutSection = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8)), url(${img})`,
      }}
    >
      <HeaderTitles mainheading="From Our Menu" subheading="--Check out --" />

      <div className='flex justify-center'>
        <div className='w-1/2'>

      <img src={img} className='w-[300px] ml-[40%]' alt="" />
        </div>
      <div className='w-1/2 mr-[10%]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis, laboriosam voluptatibus perspiciatis sit dolorum tempora adipisci nostrum laudantium sapiente aliquid quidem architecto maxime, eius deleniti excepturi illo sed? Ab!
      </div>
      </div>
    </div>
  );
};

export default CheckitoutSection;
