import MagicBento from '@/blocks/Components/MagicBento/MagicBento';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import localFont from 'next/font/local';

const dots = localFont({
  src: '../../public/Dots.ttf',
})

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-row gap-0 w-full max-w-[1750px] h-screen">
        <div className="flex-1 flex flex-col justify-center">
            <BlurText
              text="Gael Zarco"
              delay={150}
              animateBy="words"
              direction="top"
              className={`${dots.className} ${dots.className} antialiased text-4xl font-bold`}
            />
            <h2>Software engineer and computer science student</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={0}
            glowColor="218, 131, 0"
          />
        </div>
      </div>
    </main>
  );
}
