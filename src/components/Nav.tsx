"use client"

import { useRouter } from 'next/navigation';
import Dock from '@/blocks/Components/Dock/Dock';
import { HomeIcon, PersonIcon, ArchiveIcon, SewingPinFilledIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Nav() {
  const router = useRouter();

  const items = [
    { icon: <HomeIcon />, label: 'Home', onClick: () => router.push('/') },
    { icon: <PersonIcon />, label: 'Experience', onClick: () => router.push('/about/#experience') },
    { icon: <ArchiveIcon />, label: 'Education', onClick: () => router.push('/about/#education') },
    { icon: <SewingPinFilledIcon />, label: 'Projects', onClick: () => router.push('/projects') },
    { icon: <ArrowTopRightIcon />, label: 'Contact', onClick: () => router.push('/contact') },
  ];

  return (
    <Dock
      items={items}
      panelHeight={50}
      baseItemSize={30}
      magnification={60}
    />
  );
}
