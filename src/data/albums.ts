export type Category = "Tất cả" | "Cosplay" | "Studio" | "Gundam";
export const categories: Category[] = ["Tất cả", "Cosplay", "Studio", "Gundam"];
export type AlbumPhoto = {
  src: string;
  thumbnail?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt: string;
  position?: string;
};
export type Album = {
  id: string;
  title: string;
  category: Exclude<Category, "Tất cả">;
  character: string;
  tone: string;
  featured?: boolean;
  images: AlbumPhoto[];
};
// Các bộ Cosplay được tuyển từ thư mục chung, chưa khẳng định là cùng một buổi chụp.
export const albums: Album[] = [
  {
    id: "cosplay-highlights",
    title: "Fes moments",
    category: "Cosplay",
    character: "Cosplay",
    tone: "blue",
    featured: true,
    images: [
      {
        src: "/images/real/cosplay/cosplay-1.jpg",
        thumbnail: "/images/real/cosplay/cosplay-1-640.jpg",
        width: 2200,
        height: 1467,
        srcSet:
          "/images/real/cosplay/cosplay-1.jpg 640w, /images/real/cosplay/cosplay-1.jpg 2200w",
        alt: "Cosplay — IMG_9548.JPG",
        position: "50% 20%",
      },
      {
        src: "/images/real/hero/hero-3.jpg",
        thumbnail: "/images/real/hero/hero-3-640.jpg",
        width: 2200,
        height: 1467,
        srcSet:
          "/images/real/hero/hero-3-640.jpg 640w, /images/real/hero/hero-3.jpg 2200w",
        alt: "Cosplay — IMG_9663.JPG",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-2.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-2-640.jpg",
        width: 2200,
        height: 1466,
        srcSet:
          "/images/real/cosplay/cosplay-2.jpg 640w, /images/real/cosplay/cosplay-2.jpg 2200w",
        alt: "Cosplay — 0D1D7839-72E7-47C3-A427-31B58E19BE4C.jpeg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-3.jpg",
        thumbnail: "/images/real/cosplay/cosplay-3-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-3-640.jpg 427w, /images/real/cosplay/cosplay-3.jpg 1067w",
        alt: "Cosplay — IMG_9546.JPG",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-4.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-4-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-4-640.jpg 427w, /images/real/cosplay/cosplay-4.jpg 1067w",
        alt: "Cosplay — cf025fc6533bf610967ab4a3d826658c.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/hero/hero-1.jpg",
        thumbnail:
          "/images/real/hero/hero-1-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/hero/hero-1-640.jpg 640w, /images/real/hero/hero-1.jpg 1600w",
        alt: "Cosplay — 9e5b7ce76653a3fe377c0de6242ad3c9.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-5.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-5-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-5-640.jpg 427w, /images/real/cosplay/cosplay-5.jpg 1067w",
        alt: "Cosplay — 748e5ebfdee324b0c4eaf42c7e30fd6a.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-6.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-6-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-6-640.jpg 640w, /images/real/cosplay/cosplay-6.jpg 1600w",
        alt: "Cosplay — e404384765044c89f7f2bc602d468dec.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-7.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-7-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-7-640.jpg 427w, /images/real/cosplay/cosplay-7.jpg 1067w",
        alt: "Cosplay — 07ba7d6d45a2bc018074b96e0e09abdd.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-8.jpg",
        thumbnail: "/images/real/cosplay/cosplay-8-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-8-640.jpg 427w, /images/real/cosplay/cosplay-8.jpg 1067w",
        alt: "Cosplay — _DSC1122.jpeg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-9.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-9-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-9-640.jpg 640w, /images/real/cosplay/cosplay-9.jpg 1600w",
        alt: "Cosplay — 08159d5bd25ef52732bd4801178a8f8c.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-10.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-10-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-10-640.jpg 640w, /images/real/cosplay/cosplay-10.jpg 1600w",
        alt: "Cosplay — 83535785fefeda087cd0f296141dc385.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-11.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-11-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-11-640.jpg 427w, /images/real/cosplay/cosplay-11.jpg 1067w",
        alt: "Cosplay — 7e2061f4af10e469af942b6a0e0b1b74.jpg",
        position: "50% 30%",
      },
    ],
  },
  {
    id: "studio-portrait",
    title: "Studio & Portrait",
    category: "Studio",
    character: "Studio",
    tone: "cream",
    images: [
      {
        src: "/images/real/studio/studio-1.jpg",
        thumbnail: "/images/real/studio/studio-1-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-1-640.jpg 427w, /images/real/studio/studio-1.jpg 1067w",
        alt: "Studio — _TPT8920.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-2.jpg",
        thumbnail: "/images/real/studio/studio-2-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-2-640.jpg 427w, /images/real/studio/studio-2.jpg 1067w",
        alt: "Studio — IMG_9578.JPG",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-3.jpg",
        thumbnail:
          "/images/real/studio/studio-3-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/studio/studio-3-640.jpg 640w, /images/real/studio/studio-3.jpg 1600w",
        alt: "Studio — a20ba6862fa38f56ed8d2018de11ad1e.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-4.jpg",
        thumbnail: "/images/real/studio/studio-4-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/studio/studio-4-640.jpg 640w, /images/real/studio/studio-4.jpg 1600w",
        alt: "Studio — _TPT9080.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-5.jpg",
        thumbnail: "/images/real/studio/studio-5-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-5-640.jpg 427w, /images/real/studio/studio-5.jpg 1067w",
        alt: "Studio — _DSC6564.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-6.jpg",
        thumbnail: "/images/real/studio/studio-6-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-6-640.jpg 427w, /images/real/studio/studio-6.jpg 1067w",
        alt: "Studio — IMG_0111.JPG",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-7.jpg",
        thumbnail: "/images/real/studio/studio-7-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-7-640.jpg 427w, /images/real/studio/studio-7.jpg 1067w",
        alt: "Studio — _DSC6862.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-8.jpg",
        thumbnail: "/images/real/studio/studio-8-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-8-640.jpg 427w, /images/real/studio/studio-8.jpg 1067w",
        alt: "Studio — _DSC8134.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-9.jpg",
        thumbnail: "/images/real/studio/studio-9-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-9-640.jpg 427w, /images/real/studio/studio-9.jpg 1067w",
        alt: "Studio — _DSC3929.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-10.jpg",
        thumbnail: "/images/real/studio/studio-10-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/studio/studio-10-640.jpg 640w, /images/real/studio/studio-10.jpg 1600w",
        alt: "Studio — _DSC3982.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-11.jpg",
        thumbnail: "/images/real/studio/studio-11-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-11-640.jpg 427w, /images/real/studio/studio-11.jpg 1067w",
        alt: "Studio — _DSC4311.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-12.jpg",
        thumbnail: "/images/real/studio/studio-12-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-12-640.jpg 427w, /images/real/studio/studio-12.jpg 1067w",
        alt: "Studio — _DSC4624.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-13.jpg",
        thumbnail: "/images/real/studio/studio-13-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/studio/studio-13-640.jpg 427w, /images/real/studio/studio-13.jpg 1067w",
        alt: "Studio — _DSC4962.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/studio/studio-14.jpg",
        thumbnail: "/images/real/studio/studio-14-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/studio/studio-14-640.jpg 640w, /images/real/studio/studio-14.jpg 1600w",
        alt: "Studio — _DSC5920.jpg",
        position: "50% 30%",
      },
    ],
  },
  {
    id: "cosplay-stories",
    title: "Character stories",
    category: "Cosplay",
    character: "Cosplay",
    tone: "rose",
    images: [
      {
        src: "/images/real/cosplay/cosplay-12.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-12-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-12-640.jpg 640w, /images/real/cosplay/cosplay-12.jpg 1600w",
        alt: "Cosplay — dad0aff11b7606296e9f242ca0f05661.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-13.jpg",
        thumbnail: "/images/real/cosplay/cosplay-13-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-13-640.jpg 640w, /images/real/cosplay/cosplay-13.jpg 1600w",
        alt: "Cosplay — _DSC1064.jpeg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-14.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-14-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-14-640.jpg 427w, /images/real/cosplay/cosplay-14.jpg 1067w",
        alt: "Cosplay — 6a6507c1d001399445f252573aa7d058.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-15.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-15-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-15-640.jpg 640w, /images/real/cosplay/cosplay-15.jpg 1600w",
        alt: "Cosplay — ce694442e44fd0fef4fb620df0131a1c.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-16.jpg",
        thumbnail: "/images/real/cosplay/cosplay-16-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-16-640.jpg 427w, /images/real/cosplay/cosplay-16.jpg 1067w",
        alt: "Cosplay — IMG_9527.JPG",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-17.jpg",
        thumbnail: "/images/real/cosplay/cosplay-17-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-17-640.jpg 640w, /images/real/cosplay/cosplay-17.jpg 1600w",
        alt: "Cosplay — _DSC1095.jpeg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-18.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-18-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-18-640.jpg 640w, /images/real/cosplay/cosplay-18.jpg 1600w",
        alt: "Cosplay — d1e3808f503f01934625d53ba4aa7688.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-19.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-19-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-19-640.jpg 427w, /images/real/cosplay/cosplay-19.jpg 1067w",
        alt: "Cosplay — 7b3c2f78b8d2b9c1b5dc52a6087f05e1.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-20.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-20-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-20-640.jpg 427w, /images/real/cosplay/cosplay-20.jpg 1067w",
        alt: "Cosplay — 7783c28d9937dc0f39de29fe052019ad.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-21.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-21-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-21-640.jpg 640w, /images/real/cosplay/cosplay-21.jpg 1600w",
        alt: "Cosplay — 7e47fde82547dfdec1235088c95cdf5e.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-22.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-22-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-22-640.jpg 640w, /images/real/cosplay/cosplay-22.jpg 1600w",
        alt: "Cosplay — f82f6c66c1081e3242497f180a9143b3.jpg",
        position: "50% 30%",
      },
    ],
  },
  {
    id: "gunpla-gold",
    title: "Gold & Shadow",
    category: "Gundam",
    character: "Gundam",
    tone: "gold",
    images: [
      {
        src: "/images/real/gundam/gundam-1.jpg",
        thumbnail: "/images/real/gundam/gundam-1-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/gundam/gundam-1-640.jpg 640w, /images/real/gundam/gundam-1.jpg 1600w",
        alt: "Gundam — kaoren-4-1.jpg",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-2.jpg",
        thumbnail: "/images/real/gundam/gundam-2-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/gundam/gundam-2-640.jpg 640w, /images/real/gundam/gundam-2.jpg 1600w",
        alt: "Gundam — kaoren-6.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-3.jpg",
        thumbnail: "/images/real/gundam/gundam-3-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-3-640.jpg 427w, /images/real/gundam/gundam-3.jpg 1067w",
        alt: "Gundam — kaoren-7.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-4.jpg",
        thumbnail: "/images/real/gundam/gundam-4-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-4-640.jpg 427w, /images/real/gundam/gundam-4.jpg 1067w",
        alt: "Gundam — kaoren-12.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-5.jpg",
        thumbnail: "/images/real/gundam/gundam-5-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-5-640.jpg 427w, /images/real/gundam/gundam-5.jpg 1067w",
        alt: "Gundam — kaoren-13.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-6.jpg",
        thumbnail: "/images/real/gundam/gundam-6-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-6-640.jpg 427w, /images/real/gundam/gundam-6.jpg 1067w",
        alt: "Gundam — kaoren-8.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-7.jpg",
        thumbnail: "/images/real/gundam/gundam-7-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-7-640.jpg 427w, /images/real/gundam/gundam-7.jpg 1067w",
        alt: "Gundam — kaoren-11.JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-8.jpg",
        thumbnail: "/images/real/gundam/gundam-8-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-8-640.jpg 427w, /images/real/gundam/gundam-8.jpg 1067w",
        alt: "Gundam — kaoren-5.JPG",
        position: "50% 35%",
      },
    ],
  },
  {
    id: "cosplay-portraits",
    title: "In character",
    category: "Cosplay",
    character: "Cosplay",
    tone: "ice",
    images: [
      {
        src: "/images/real/cosplay/cosplay-23.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-23-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-23-640.jpg 427w, /images/real/cosplay/cosplay-23.jpg 1067w",
        alt: "Cosplay — aa8162bf105c853e06c8b5055d6038fd.jpg",
        position: "50% 5%",
      },
      {
        src: "/images/real/cosplay/cosplay-24.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-24-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-24-640.jpg 427w, /images/real/cosplay/cosplay-24.jpg 1067w",
        alt: "Cosplay — 06d8ad0b87cf47253443e2d6b72484d6.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-2.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-2-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-2-640.jpg 640w, /images/real/cosplay/cosplay-2.jpg 1600w",
        alt: "Cosplay — 5b14b9b4e1f6efcf541a4c83b512f14e.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-25.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-25-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-25-640.jpg 427w, /images/real/cosplay/cosplay-25.jpg 1067w",
        alt: "Cosplay — 725d4f5e59c26fc5e618fd583c21f3b2.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-26.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-26-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-26-640.jpg 640w, /images/real/cosplay/cosplay-26.jpg 1600w",
        alt: "Cosplay — 18e7ba3fa8823e611bda2d28fd039bcd.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-27.jpg",
        thumbnail: "/images/real/cosplay/cosplay-27-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-27-640.jpg 427w, /images/real/cosplay/cosplay-27.jpg 1067w",
        alt: "Cosplay — _DSC1051.jpeg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-28.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-28-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-28-640.jpg 427w, /images/real/cosplay/cosplay-28.jpg 1067w",
        alt: "Cosplay — 8d5256eb81e06ff633dcc3991504cf9e.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-29.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-29-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-29-640.jpg 427w, /images/real/cosplay/cosplay-29.jpg 1067w",
        alt: "Cosplay — 478cbc1ef62b01aaee7c3f58b742fee2.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-30.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-30-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/cosplay/cosplay-30-640.jpg 427w, /images/real/cosplay/cosplay-30.jpg 1067w",
        alt: "Cosplay — bc25a019c4ee959c1ea40b6f741ecf65.jpg",
        position: "50% 30%",
      },
      {
        src: "/images/real/cosplay/cosplay-31.jpg",
        thumbnail:
          "/images/real/cosplay/cosplay-31-640.jpg",
        width: 1600,
        height: 1067,
        srcSet:
          "/images/real/cosplay/cosplay-31-640.jpg 640w, /images/real/cosplay/cosplay-31.jpg 1600w",
        alt: "Cosplay — 86a44530ada0b1045c7698d72837579f.jpg",
        position: "50% 30%",
      },
    ],
  },
  {
    id: "gunpla-motion",
    title: "Light & Motion",
    category: "Gundam",
    character: "Gundam",
    tone: "night",
    images: [
      {
        src: "/images/real/gundam/gundam-9.jpg",
        thumbnail: "/images/real/gundam/gundam-9-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-9-640.jpg 640w, /images/real/gundam/gundam-9.jpg 1600w",
        alt: "Gundam — gungun (4 of 9).JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-10.jpg",
        thumbnail: "/images/real/gundam/gundam-10-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-10-640.jpg 640w, /images/real/gundam/gundam-10.jpg 1600w",
        alt: "Gundam — gungun (9 of 9).JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-11.jpg",
        thumbnail: "/images/real/gundam/gundam-11-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-11-640.jpg 640w, /images/real/gundam/gundam-11.jpg 1600w",
        alt: "Gundam — gungun (6 of 9).JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-12.jpg",
        thumbnail: "/images/real/gundam/gundam-12-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-12-640.jpg 640w, /images/real/gundam/gundam-12.jpg 1600w",
        alt: "Gundam — gungun (5 of 9).JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-13.jpg",
        thumbnail: "/images/real/gundam/gundam-13-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-13-640.jpg 640w, /images/real/gundam/gundam-13.jpg 1600w",
        alt: "Gundam — gungun (3 of 9).JPG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-14.jpg",
        thumbnail: "/images/real/gundam/gundam-14-640.jpg",
        width: 1600,
        height: 1200,
        srcSet:
          "/images/real/gundam/gundam-14-640.jpg 640w, /images/real/gundam/gundam-14.jpg 1600w",
        alt: "Gundam — gungun (1 of 9).JPG",
        position: "50% 35%",
      },
    ],
  },
  {
    id: "gunpla-detail",
    title: "In detail",
    category: "Gundam",
    character: "Gundam",
    tone: "blue",
    images: [
      {
        src: "/images/real/gundam/gundam-15.jpg",
        thumbnail: "/images/real/gundam/gundam-15-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-15-640.jpg 427w, /images/real/gundam/gundam-15.jpg 1067w",
        alt: "Gundam — babatos (2 of 8).PNG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-16.jpg",
        thumbnail: "/images/real/gundam/gundam-16-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-16-640.jpg 427w, /images/real/gundam/gundam-16.jpg 1067w",
        alt: "Gundam — babatos (7 of 8).PNG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-17.jpg",
        thumbnail: "/images/real/gundam/gundam-17-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-17-640.jpg 427w, /images/real/gundam/gundam-17.jpg 1067w",
        alt: "Gundam — babatos (5 of 8).PNG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-18.jpg",
        thumbnail: "/images/real/gundam/gundam-18-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-18-640.jpg 427w, /images/real/gundam/gundam-18.jpg 1067w",
        alt: "Gundam — babatos (6 of 8).PNG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-19.jpg",
        thumbnail: "/images/real/gundam/gundam-19-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-19-640.jpg 427w, /images/real/gundam/gundam-19.jpg 1067w",
        alt: "Gundam — babatos (4 of 8).PNG",
        position: "50% 35%",
      },
      {
        src: "/images/real/gundam/gundam-20.jpg",
        thumbnail: "/images/real/gundam/gundam-20-640.jpg",
        width: 1067,
        height: 1600,
        srcSet:
          "/images/real/gundam/gundam-20-640.jpg 427w, /images/real/gundam/gundam-20.jpg 1067w",
        alt: "Gundam — babatos (3 of 8).PNG",
        position: "50% 35%",
      },
    ],
  },
];
