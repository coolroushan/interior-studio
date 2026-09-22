// Centralized service data for the Services section.
//
// Images are hotlinked from Unsplash (images.unsplash.com), each photographed
// under the free Unsplash License (unsplash.com/license) — free for commercial
// and non-commercial use, no attribution legally required, though crediting
// the photographer is good practice. Swap any `image` URL for your own asset
// at any time; nothing else in the component depends on where the file lives.
//
// Photo credits:
// 01 Spl Interiors        — unsplash.com/photos/KVyxW1Gd-48
// 02 Spl Interiors        — unsplash.com/photos/Pk9dZzdNdz8
// 03 Neon Wang             — unsplash.com/photos/vEO-8ck28fY
// 04 Adam Hornyak          — unsplash.com/photos/ibfPzlaXmbw
// 05 HYEWON HWANG          — unsplash.com/photos/HrKQUwCV_go
// 06 Kyle Austin           — unsplash.com/photos/FxTakCbobWQ

const unsplash = (id) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

const services = [
  {
    number: '01',
    title: 'Residential Interiors',
    description:
      'Bespoke homes designed around lifestyle, personality, comfort and the rituals of everyday living.',
    image: unsplash('photo-1746517757473-7c88850e539b'),
    imageAlt: 'Luxury contemporary living room with warm natural materials and soft daylight',
  },
  {
    number: '02',
    title: 'Commercial Interiors',
    description:
      'Distinctive environments designed around people, purpose and brand identity.',
    image: unsplash('photo-1747992021633-762a63985d01'),
    imageAlt: 'Modern office interior with clean architectural lines and considered lighting',
  },
  {
    number: '03',
    title: 'Hospitality Design',
    description:
      'Immersive spaces designed to create memorable experiences through atmosphere, material and detail.',
    image: unsplash('photo-1759038086403-c607d67bb245'),
    imageAlt: 'High-end hotel lobby interior with curved wooden walls and layered lighting',
  },
  {
    number: '04',
    title: 'Interior Architecture',
    description:
      'Spatial planning, architectural detailing, lighting and materiality brought together into a cohesive environment.',
    image: unsplash('photo-1763313497706-56c7848860ff'),
    imageAlt: 'Sculptural spiral staircase with warm ambient lighting and geometric shadow',
  },
  {
    number: '05',
    title: 'Custom Furniture & Joinery',
    description:
      'Bespoke pieces designed specifically for the proportions, character and needs of each space.',
    image: unsplash('photo-1780639680456-8c92beca7056'),
    imageAlt: 'Minimalist custom table and chairs on a wooden floor, clean lines and joinery detail',
  },
  {
    number: '06',
    title: 'Styling & Finishing',
    description:
      'Art, objects, textiles, lighting and the final layer of detail that gives a space its personality.',
    image: unsplash('photo-1606246481694-b8d4ce67b287'),
    imageAlt: 'Styled interior vignette with a wooden table, brass candle holder and candles',
  },
];

export default services;