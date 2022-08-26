import gsap from 'gsap';
import React from 'react';

const MountainCard = () => {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.set(overlayRef.current, { y: '300', x: '300', opacity: 0 });
    gsap.to(overlayRef.current, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: overlayRef.current,
        start: 'top += 100px',
        toggleActions: 'restart none none none',
      },
    });
  }, []);
  return (
    <div className='mountain_card bg-red-100 mt-80 mb-44 relative overflow-hidden'>
      <div
        ref={overlayRef}
        className='overlay_txt p-6 overflow-hidden lg:rounded-lg sm:pt-12'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-poppins font-bold'>
          THE MOUNTAINS SNOWBOARDING
        </h2>
        <p className='text-sm  sm:text-lg mt-8 xl:mt-12 font-poppins'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          laudantium eius ex, iusto ratione adipisci tempore nemo qui ullam
          beatae commodi necessitatibus incidunt tenetur perferendis voluptate
          omnis ipsa neque! A enim voluptate, laborum, deleniti praesentium vel
          exercitationem facilis aliquid nemo sit cum recusandae ad culpa? Illo
          repellat numquam porro molestiae harum accusamus suscipit tempore
          atque deleniti, libero delectus eos maiores, assumenda debitis odit
          laudantium praesentium dolorum recusandae cum, excepturi tempora unde
          vel! Assumenda ea sed dolorem, dolore fugiat ratione. Nesciunt laborum
          doloremque vero omnis velit non saepe tempore quia aperiam porro nobis
          itaque fugit incidunt, veritatis, voluptatem atque. Ea, possimus.
        </p>
      </div>
    </div>
  );
};

export default MountainCard;
