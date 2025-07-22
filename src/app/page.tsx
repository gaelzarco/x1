import MagicBento from '@/blocks/Components/MagicBento/MagicBento';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';
import localFont from 'next/font/local'

const dots = localFont({
  src: '../../public/dots.ttf',
})

export default function Home() {
  return (
    <main className="flex flex-row gap-0 w-full max-w-full h-screen">
      <div className="flex-1 flex justify-center items-center">
          <BlurText
            text="Gael Zarco"
            delay={150}
            animateBy="words"
            direction="top"
            className={`${dots.className} ${dots.className} antialiased text-4xl font-bold`}
          />
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
    </main>
  );
}
