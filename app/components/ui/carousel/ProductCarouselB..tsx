// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import styles from "./carousel.module.css";
// import { BlogImage } from "@/data/mockup/MockupImage";
// import MainButton from "../buttons/MainButton";

// const mockupList = Object.entries(BlogImage);

// const mockupInfo: Record<string, { title: string; description: string }> = {
//   image001: {
//     title: "Traditional Grooming",
//     description: "Rediscover the ritual of grooming with timeless tools and organic elements for a refined start to your day.",
//   },
//   image002: {
//     title: "Skincare Essentials",
//     description: "4 face masks tailored for every skin type — made to hydrate, purify, and rejuvenate.",
//   },
//   image003: {
//     title: "Style & Detail",
//     description: "Barber-approved styles for sharp, confident finishes. Every strand matters.",
//   },
//   image004: {
//     title: "Urban Tailor",
//     description: "Modern silhouettes meet timeless design. Explore menswear built for cities and stories.",
//   },
//   image005: {
//     title: "Minimalist Hair Care",
//     description: "Functional formulas in minimalist packaging. Gentle on the scalp, powerful in performance.",
//   },
//   image006: {
//     title: "Botanical Care",
//     description: "Infused with nature — hair and skincare that nurture using roots, oils, and herbs.",
//   },
//   image007: {
//     title: "Premium Finish",
//     description: "Matte or shine, you define your finish. Styling tools for creative expression.",
//   },
//   image008: {
//     title: "Evening Routine",
//     description: "Unwind and reset with textures and tones made for the after-hours reset.",
//   },
//   image009: {
//     title: "The Full Set",
//     description: "A refined curation of modern grooming products. Simplicity, delivered beautifully.",
//   },
// };

// export default function ProductCarouselB () {
//   const [activeKey, setActiveKey] = useState("image001");
//   const [infoAnimationClass, setInfoAnimationClass] = useState(styles.previewInfo);

//   const activeImage = BlogImage[activeKey];
//   const activeInfo = mockupInfo[activeKey];

//   const handleThumbnailClick = (key: string) => {
//     setActiveKey(key);

//     // Reset and re-apply animation class to trigger it every time
//     setInfoAnimationClass(""); // remove animation
//     requestAnimationFrame(() => {
//       setInfoAnimationClass(styles.previewInfo); // re-apply animation
//     });
//   };

//   return (
//     <section className={styles.carouselContainer}>
//       <div className={styles.mainPreview}>
//         <div className={styles.imageContainer}>
//           <Image
//             key={activeKey}
//             src={activeImage}
//             alt={activeInfo.title}
//             fill
//             className={styles.previewImage}
//           />
//         </div>

//         <div className={infoAnimationClass}>
//           <h2 className={styles.previewTitle}>{activeInfo.title}</h2>
//           <p className={styles.previewDescription}>{activeInfo.description}</p>
//           <MainButton name="View Details" background="bg-[var(--accent)])" weight="font-light" />
//         </div>
//       </div>

//       <div className={styles.thumbnailList}>
//         {mockupList.map(([key, src]) => (
//           <div
//             key={key}
//             className={`${styles.thumbnailWrapper} ${key === activeKey ? styles.active : ""}`}
//             onClick={() => handleThumbnailClick(key)}
//           >
//             <Image
//               src={src}
//               alt={`Preview of ${mockupInfo[key].title}`}
//               width={100}
//               height={100}
//               className={styles.thumbnailImage}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
