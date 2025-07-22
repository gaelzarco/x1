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
      <div className="flex-1 flex flex-col justify-center">
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
      </div>
      <div className="flex-1 flex justify-center items-center">
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={500}
          particleCount={0}
          glowColor="218, 131, 0"
        />
      </div>
    </div>
  );
}
