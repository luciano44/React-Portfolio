import React from "react";
import SectionHeader from "../components/SectionHeader";
import WallpaperSection from "../components/WallpapersSection";
import WallpaperIcon from "../img/icons/wallpaper-icon.svg";

function Wallpapers() {
  return (
    <>
      <SectionHeader icon={WallpaperIcon}>Wallpapers</SectionHeader>
      <WallpaperSection />
    </>
  );
}

export default Wallpapers;
