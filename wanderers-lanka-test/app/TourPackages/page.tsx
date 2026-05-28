export const metadata = {
  title: "Tour Packages",
  description: "Browse curated tour packages with filters for duration, budget, interests, and luxury level.",
};

import React from 'react'
import TourPackages from './TourPackages';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';

const page = () => {
  return (
    <div>

        <ResponsiveNav forceBg={true} />

        <TourPackages />
    </div>
  )
}

export default page