import MagicBento from '@/blocks/Components/MagicBento/MagicBento';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import localFont from 'next/font/local';

const dots = localFont({
  src: '../../public/Dots.ttf',
})

const aux = localFont({
  src: '../../public/Aux_Mono.ttf',
})

export default function Home() {
  return (
    <div className="flex flex-row gap-0 w-full max-w-[1750px] h-full">
      <div className="basis-[35%] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12">
          <BlurText
            text="Gael Zarco"
            delay={150}
            animateBy="words"
            direction="top"
            className={`${dots.className} ${dots.className} antialiased text-4xl font-bold`}
          />
          <h2 className={`${aux.className} ${aux.className} antialiased text-md`}>
            Software Engineer | Computer Science Student
          </h2>
          <div>
          </div>
      </div>
      <div className="basis-[65%]  flex justify-center items-center">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={0}
          glowColor="218, 131, 0"
        />
      </div>
    </div>
  );
}
