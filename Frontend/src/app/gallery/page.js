"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HomeTitle from "@/components/Home/HomeTitle";
import "@fontsource/quicksand";
import styles from "./gallery.module.scss";

import DSC6292 from "@/assets/images/shared/DSC_6292.jpg";
import DSC6295 from "@/assets/images/shared/DSC_6295.jpg";
import DSC6296 from "@/assets/images/shared/DSC_6296.jpg";
import DSC6298 from "@/assets/images/shared/DSC_6298.jpg";
import DSC6300 from "@/assets/images/shared/DSC_6300.jpg";
import DSC6302 from "@/assets/images/shared/DSC_6302.jpg";
import DSC6304 from "@/assets/images/shared/DSC_6304.jpg";
import DSC6305 from "@/assets/images/shared/DSC_6305.jpg";
import DSC6307 from "@/assets/images/shared/DSC_6307.jpg";
import DSC6308 from "@/assets/images/shared/DSC_6308.jpg";
import DSC6310 from "@/assets/images/shared/DSC_6310.jpg";
import DSC6313 from "@/assets/images/shared/DSC_6313.jpg";
import DSC6315 from "@/assets/images/shared/DSC_6315.jpg";
import DSC6316 from "@/assets/images/shared/DSC_6316.jpg";
import DSC6317 from "@/assets/images/shared/DSC_6317.jpg";
import DSC6318 from "@/assets/images/shared/DSC_6318.jpg";
import DSC6319 from "@/assets/images/shared/DSC_6319.jpg";
import DSC6321 from "@/assets/images/shared/DSC_6321.jpg";
import DSC6323 from "@/assets/images/shared/DSC_6323.jpg";
import DSC6325 from "@/assets/images/shared/DSC_6325.jpg";
import DSC6327 from "@/assets/images/shared/DSC_6327.jpg";
import DSC6328 from "@/assets/images/shared/DSC_6328.jpg";
import DSC6330 from "@/assets/images/shared/DSC_6330.jpg";
import DSC6332 from "@/assets/images/shared/DSC_6332.jpg";
import DSC6333 from "@/assets/images/shared/DSC_6333.jpg";
import DSC6335 from "@/assets/images/shared/DSC_6335.jpg";
import DSC6337 from "@/assets/images/shared/DSC_6337.jpg";
import DSC6338 from "@/assets/images/shared/DSC_6338.jpg";
import DSC6339 from "@/assets/images/shared/DSC_6339.jpg";
import DSC6340 from "@/assets/images/shared/DSC_6340.jpg";
import DSC6342 from "@/assets/images/shared/DSC_6342.jpg";
import DSC6343 from "@/assets/images/shared/DSC_6343.jpg";
import DSC6347 from "@/assets/images/shared/DSC_6347.jpg";
import DSC6348 from "@/assets/images/shared/DSC_6348.jpg";
import DSC6350 from "@/assets/images/shared/DSC_6350.jpg";
import DSC6352 from "@/assets/images/shared/DSC_6352.jpg";
import DSC6355 from "@/assets/images/shared/DSC_6355.jpg";
import DSC6356 from "@/assets/images/shared/DSC_6356.jpg";
import DSC6357 from "@/assets/images/shared/DSC_6357.jpg";
import DSC6359 from "@/assets/images/shared/DSC_6359.jpg";
import DSC6361 from "@/assets/images/shared/DSC_6361.jpg";
import DSC6363 from "@/assets/images/shared/DSC_6363.jpg";
import DSC6365 from "@/assets/images/shared/DSC_6365.jpg";
import DSC6367 from "@/assets/images/shared/DSC_6367.jpg";
import DSC6370 from "@/assets/images/shared/DSC_6370.jpg";
import DSC6371 from "@/assets/images/shared/DSC_6371.jpg";
import DSC6372 from "@/assets/images/shared/DSC_6372.jpg";
import DSC6373 from "@/assets/images/shared/DSC_6373.jpg";
import DSC6376 from "@/assets/images/shared/DSC_6376.jpg";
import DSC6377 from "@/assets/images/shared/DSC_6377.jpg";
import DSC6379 from "@/assets/images/shared/DSC_6379.jpg";
import DSC6383 from "@/assets/images/shared/DSC_6383.jpg";
import DSC6386 from "@/assets/images/shared/DSC_6386.jpg";
import DSC6388 from "@/assets/images/shared/DSC_6388.jpg";
import DSC6391 from "@/assets/images/shared/DSC_6391.jpg";
import DSC6392 from "@/assets/images/shared/DSC_6392.jpg";
import DSC6395 from "@/assets/images/shared/DSC_6395.jpg";
import DSC6396 from "@/assets/images/shared/DSC_6396.jpg";
import DSC6397 from "@/assets/images/shared/DSC_6397.jpg";
import DSC6399 from "@/assets/images/shared/DSC_6399.jpg";
import DSC6400 from "@/assets/images/shared/DSC_6400.jpg";
import DSC6402 from "@/assets/images/shared/DSC_6402.jpg";
import DSC6403 from "@/assets/images/shared/DSC_6403.jpg";
import DSC6405 from "@/assets/images/shared/DSC_6405.jpg";
import DSC6406 from "@/assets/images/shared/DSC_6406.jpg";
import DSC6407 from "@/assets/images/shared/DSC_6407.jpg";
import DSC6409 from "@/assets/images/shared/DSC_6409.jpg";
import DSC6411 from "@/assets/images/shared/DSC_6411.jpg";
import DSC6412 from "@/assets/images/shared/DSC_6412.jpg";
import DSC6416 from "@/assets/images/shared/DSC_6416.jpg";
import DSC6417 from "@/assets/images/shared/DSC_6417.jpg";
import DSC6419 from "@/assets/images/shared/DSC_6419.jpg";
import DSC6420 from "@/assets/images/shared/DSC_6420.jpg";
import DSC6421 from "@/assets/images/shared/DSC_6421.jpg";
import DSC6422 from "@/assets/images/shared/DSC_6422.jpg";
import DSC6424 from "@/assets/images/shared/DSC_6424.jpg";
import DSC6426 from "@/assets/images/shared/DSC_6426.jpg";
import DSC6428 from "@/assets/images/shared/DSC_6428.jpg";
import DSC6429 from "@/assets/images/shared/DSC_6429.jpg";
import DSC6430 from "@/assets/images/shared/DSC_6430.jpg";
import DSC6432 from "@/assets/images/shared/DSC_6432.jpg";
import DSC6434 from "@/assets/images/shared/DSC_6434.jpg";
import DSC6435 from "@/assets/images/shared/DSC_6435.jpg";
import DSC6436 from "@/assets/images/shared/DSC_6436.jpg";
import DSC6437 from "@/assets/images/shared/DSC_6437.jpg";
import DSC6439 from "@/assets/images/shared/DSC_6439.jpg";
import DSC6443 from "@/assets/images/shared/DSC_6443.jpg";
import DSC6444 from "@/assets/images/shared/DSC_6444.jpg";
import DSC6446 from "@/assets/images/shared/DSC_6446.jpg";
import DSC6449 from "@/assets/images/shared/DSC_6449.jpg";
import DSC6452 from "@/assets/images/shared/DSC_6452.jpg";
import DSC6454 from "@/assets/images/shared/DSC_6454.jpg";
import DSC6455 from "@/assets/images/shared/DSC_6455.jpg";
import DSC6456 from "@/assets/images/shared/DSC_6456.jpg";
import DSC6459 from "@/assets/images/shared/DSC_6459.jpg";
import DSC6461 from "@/assets/images/shared/DSC_6461.jpg";
import DSC6463 from "@/assets/images/shared/DSC_6463.jpg";
import DSC6465 from "@/assets/images/shared/DSC_6465.jpg";
import DSC6468 from "@/assets/images/shared/DSC_6468.jpg";
import DSC6472 from "@/assets/images/shared/DSC_6472.jpg";
import DSC6474 from "@/assets/images/shared/DSC_6474.jpg";
import DSC6476 from "@/assets/images/shared/DSC_6476.jpg";
import DSC6479 from "@/assets/images/shared/DSC_6479.jpg";
import DSC6481 from "@/assets/images/shared/DSC_6481.jpg";
import DSC6482 from "@/assets/images/shared/DSC_6482.jpg";
import DSC6483 from "@/assets/images/shared/DSC_6483.jpg";
import DSC6486 from "@/assets/images/shared/DSC_6486.jpg";
import DSC6487 from "@/assets/images/shared/DSC_6487.jpg";
import DSC6488 from "@/assets/images/shared/DSC_6488.jpg";
import DSC6490 from "@/assets/images/shared/DSC_6490.jpg";
import DSC6492 from "@/assets/images/shared/DSC_6492.jpg";
import DSC6493 from "@/assets/images/shared/DSC_6493.jpg";
import DSC6496 from "@/assets/images/shared/DSC_6496.jpg";
import DSC6499 from "@/assets/images/shared/DSC_6499.jpg";
import DSC6502 from "@/assets/images/shared/DSC_6502.jpg";
import DSC6505 from "@/assets/images/shared/DSC_6505.jpg";
import DSC6506 from "@/assets/images/shared/DSC_6506.jpg";
import DSC6509 from "@/assets/images/shared/DSC_6509.jpg";
import DSC6515 from "@/assets/images/shared/DSC_6515.jpg";
import DSC6516 from "@/assets/images/shared/DSC_6516.jpg";
import DSC6517 from "@/assets/images/shared/DSC_6517.jpg";
import DSC6519 from "@/assets/images/shared/DSC_6519.jpg";
import DSC6520 from "@/assets/images/shared/DSC_6520.jpg";
import DSC6522 from "@/assets/images/shared/DSC_6522.jpg";
import DSC6523 from "@/assets/images/shared/DSC_6523.jpg";

const mosqueInteriorImages = [
  { fileName: "DSC_6292", src: DSC6292 },
  { fileName: "DSC_6295", src: DSC6295 },
  { fileName: "DSC_6296", src: DSC6296 },
  { fileName: "DSC_6298", src: DSC6298 },
  { fileName: "DSC_6300", src: DSC6300 },
  { fileName: "DSC_6302", src: DSC6302 },
  { fileName: "DSC_6304", src: DSC6304 },
  { fileName: "DSC_6305", src: DSC6305 },
  { fileName: "DSC_6307", src: DSC6307 },
  { fileName: "DSC_6308", src: DSC6308 },
  { fileName: "DSC_6310", src: DSC6310 },
  { fileName: "DSC_6313", src: DSC6313 },
  { fileName: "DSC_6315", src: DSC6315 },
  { fileName: "DSC_6316", src: DSC6316 },
  { fileName: "DSC_6317", src: DSC6317 },
  { fileName: "DSC_6318", src: DSC6318 },
  { fileName: "DSC_6319", src: DSC6319 },
  { fileName: "DSC_6321", src: DSC6321 },
  { fileName: "DSC_6323", src: DSC6323 },
  { fileName: "DSC_6325", src: DSC6325 },
  { fileName: "DSC_6327", src: DSC6327 },
  { fileName: "DSC_6328", src: DSC6328 },
  { fileName: "DSC_6330", src: DSC6330 },
  { fileName: "DSC_6332", src: DSC6332 },
  { fileName: "DSC_6333", src: DSC6333 },
  { fileName: "DSC_6335", src: DSC6335 },
  { fileName: "DSC_6337", src: DSC6337 },
  { fileName: "DSC_6338", src: DSC6338 },
  { fileName: "DSC_6339", src: DSC6339 },
  { fileName: "DSC_6340", src: DSC6340 },
  { fileName: "DSC_6342", src: DSC6342 },
  { fileName: "DSC_6343", src: DSC6343 },
  { fileName: "DSC_6347", src: DSC6347 },
  { fileName: "DSC_6348", src: DSC6348 },
  { fileName: "DSC_6350", src: DSC6350 },
  { fileName: "DSC_6352", src: DSC6352 },
  { fileName: "DSC_6355", src: DSC6355 },
  { fileName: "DSC_6356", src: DSC6356 },
  { fileName: "DSC_6357", src: DSC6357 },
  { fileName: "DSC_6359", src: DSC6359 },
  { fileName: "DSC_6361", src: DSC6361 },
  { fileName: "DSC_6363", src: DSC6363 },
  { fileName: "DSC_6365", src: DSC6365 },
  { fileName: "DSC_6367", src: DSC6367 },
  { fileName: "DSC_6370", src: DSC6370 },
  { fileName: "DSC_6371", src: DSC6371 },
  { fileName: "DSC_6372", src: DSC6372 },
  { fileName: "DSC_6373", src: DSC6373 },
  { fileName: "DSC_6376", src: DSC6376 },
  { fileName: "DSC_6377", src: DSC6377 },
  { fileName: "DSC_6379", src: DSC6379 },
  { fileName: "DSC_6383", src: DSC6383 },
  { fileName: "DSC_6386", src: DSC6386 },
];

const sistersPrayerHallImages = [
  { fileName: "DSC_6405", src: DSC6405 },
  { fileName: "DSC_6406", src: DSC6406 },
  { fileName: "DSC_6407", src: DSC6407 },
  { fileName: "DSC_6409", src: DSC6409 },
  { fileName: "DSC_6411", src: DSC6411 },
  { fileName: "DSC_6412", src: DSC6412 },
  { fileName: "DSC_6416", src: DSC6416 },
  { fileName: "DSC_6417", src: DSC6417 },
  { fileName: "DSC_6419", src: DSC6419 },
  { fileName: "DSC_6420", src: DSC6420 },
  { fileName: "DSC_6421", src: DSC6421 },
  { fileName: "DSC_6422", src: DSC6422 },
  { fileName: "DSC_6424", src: DSC6424 },
  { fileName: "DSC_6426", src: DSC6426 },
  { fileName: "DSC_6428", src: DSC6428 },
  { fileName: "DSC_6429", src: DSC6429 },
  { fileName: "DSC_6430", src: DSC6430 },
  { fileName: "DSC_6432", src: DSC6432 },
  { fileName: "DSC_6434", src: DSC6434 },
  { fileName: "DSC_6435", src: DSC6435 },
  { fileName: "DSC_6436", src: DSC6436 },
  { fileName: "DSC_6437", src: DSC6437 },
  { fileName: "DSC_6439", src: DSC6439 },
  { fileName: "DSC_6443", src: DSC6443 },
  { fileName: "DSC_6444", src: DSC6444 },
  { fileName: "DSC_6446", src: DSC6446 },
];

const wudhuImages = [
  { fileName: "DSC_6399", src: DSC6399 },
  { fileName: "DSC_6400", src: DSC6400 },
  { fileName: "DSC_6402", src: DSC6402 },
  { fileName: "DSC_6403", src: DSC6403 },
];

const funeralFacilityImages = [
  { fileName: "DSC_6388", src: DSC6388 },
  { fileName: "DSC_6391", src: DSC6391 },
  { fileName: "DSC_6392", src: DSC6392 },
  { fileName: "DSC_6395", src: DSC6395 },
  { fileName: "DSC_6396", src: DSC6396 },
  { fileName: "DSC_6397", src: DSC6397 },
];

const mosqueExteriorImages = [
  { fileName: "DSC_6449", src: DSC6449 },
  { fileName: "DSC_6452", src: DSC6452 },
  { fileName: "DSC_6454", src: DSC6454 },
  { fileName: "DSC_6455", src: DSC6455 },
  { fileName: "DSC_6456", src: DSC6456 },
  { fileName: "DSC_6459", src: DSC6459 },
  { fileName: "DSC_6461", src: DSC6461 },
  { fileName: "DSC_6463", src: DSC6463 },
  { fileName: "DSC_6465", src: DSC6465 },
  { fileName: "DSC_6468", src: DSC6468 },
  { fileName: "DSC_6472", src: DSC6472 },
  { fileName: "DSC_6474", src: DSC6474 },
  { fileName: "DSC_6476", src: DSC6476 },
  { fileName: "DSC_6479", src: DSC6479 },
  { fileName: "DSC_6481", src: DSC6481 },
  { fileName: "DSC_6482", src: DSC6482 },
  { fileName: "DSC_6483", src: DSC6483 },
  { fileName: "DSC_6486", src: DSC6486 },
  { fileName: "DSC_6487", src: DSC6487 },
  { fileName: "DSC_6488", src: DSC6488 },
  { fileName: "DSC_6490", src: DSC6490 },
  { fileName: "DSC_6492", src: DSC6492 },
  { fileName: "DSC_6493", src: DSC6493 },
  { fileName: "DSC_6496", src: DSC6496 },
  { fileName: "DSC_6499", src: DSC6499 },
  { fileName: "DSC_6502", src: DSC6502 },
  { fileName: "DSC_6505", src: DSC6505 },
  { fileName: "DSC_6506", src: DSC6506 },
  { fileName: "DSC_6509", src: DSC6509 },
  { fileName: "DSC_6515", src: DSC6515 },
  { fileName: "DSC_6516", src: DSC6516 },
  { fileName: "DSC_6517", src: DSC6517 },
  { fileName: "DSC_6519", src: DSC6519 },
  { fileName: "DSC_6520", src: DSC6520 },
  { fileName: "DSC_6522", src: DSC6522 },
  { fileName: "DSC_6523", src: DSC6523 },
];


const gallerySections = [
  {
    id: "mosqueInterior",
    title: "Mosque Interior",
    images: mosqueInteriorImages,
    hasLoadMore: true,
  },
  {
    id: "sistersPrayerHall",
    title: "Sisters Prayer Hall",
    images: sistersPrayerHallImages,
    hasLoadMore: true,
  },
  {
    id: "wudhuArea",
    title: "Wudhu/ Ablution Area",
    images: wudhuImages,
    hasLoadMore: false,
    hasMobileLoadMore: true,
    mobileInitialCount: 2,
  },
  {
    id: "funeralFacility",
    title: "Funeral-Janaza Facility",
    images: funeralFacilityImages,
    hasLoadMore: false,
    hasMobileLoadMore: true,
    mobileInitialCount: 3,
  },
  {
    id: "mosqueExterior",
    title: "Mosque Exterior",
    images: mosqueExteriorImages,
    hasLoadMore: true,
  },
];

const GalleryPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggleSection = (sectionId) => {
    setExpandedSection((current) => {
      const newValue = current === sectionId ? null : sectionId;
      return newValue;
    });
  };

  return (
    <main className={styles.galleryPage}>
      <section className={styles.pageHeader}>
        <HomeTitle text="Barrie Mosque Gallery" />
        <p className={styles.subheading}>Mosque Interior</p>
        <p className={styles.pageIntro}>
          Step into the spiritual heart of Barrie Mosque through curated
          moments filled with devotion, community, and tranquility.
        </p>
      </section>

      <div className={styles.gallerySections}>
        {gallerySections.map((section) => {
          const isExpanded = expandedSection === section.id;
          
          // Determine visible images based on expansion state and device type
          let visibleImages = section.images; // Default: show all
          
          if (!isExpanded) {
            // Not expanded - limit images based on section type and device
            if (section.hasLoadMore) {
              // Sections with desktop load more: show first 10
              visibleImages = section.images.slice(0, 10);
            } else if (isMobile && section.hasMobileLoadMore) {
              // Mobile-only sections: show initial count
              const initialCount = section.mobileInitialCount || 3;
              visibleImages = section.images.slice(0, Math.min(initialCount, section.images.length));
            }
            // If neither condition is met, visibleImages remains as all images
          }
          // If expanded, visibleImages is already set to all images
          
          // Show load more button if section can be expanded
          let showLoadMore = false;
          
          if (section.hasLoadMore) {
            // Desktop load more: show button if there are more than 10 images, or if expanded
            showLoadMore = section.images.length > 10 || isExpanded;
          } else if (isMobile && section.hasMobileLoadMore) {
            // Mobile load more: show button if there are more images than initial count, or if expanded
            const initialCount = section.mobileInitialCount || 3;
            showLoadMore = section.images.length > initialCount || isExpanded;
          }

          return (
            <section key={section.id} className={styles.gallerySection}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </header>

              <div className={styles.galleryGrid}>
                {visibleImages.map((image) => (
                  <figure
                    key={`${section.id}-${image.fileName}`}
                    className={styles.galleryItem}
                    onMouseEnter={() => setHoveredImage(image)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image.src}
                        alt={`Barrie Mosque community moment ${image.fileName
                          .split("_")
                          .join(" ")}`}
                        className={styles.galleryImage}
                        placeholder="blur"
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 90vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>

              {showLoadMore && (
                <div className={styles.loadMoreWrapper}>
                  <button
                    type="button"
                    className={styles.loadMoreButton}
                    onClick={() => handleToggleSection(section.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show Less" : "Load More"}
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {hoveredImage && (
        <div className={styles.overlay} aria-hidden="true">
          <div className={styles.overlayImageWrapper}>
            <Image
              src={hoveredImage.src}
              alt=""
              fill
              className={styles.overlayImage}
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;