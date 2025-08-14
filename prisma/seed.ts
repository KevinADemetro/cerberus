import { slugify } from "@/src/utils/formatter";
import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const categoriesData: Prisma.CategoryCreateInput[] = [
  { title: "Camisetas" },
  { title: "Shorts e bermudas" },
  { title: "Calças" },
  { title: "Moletons e Agasalhos" },
  { title: "Roupas Esportivas" },
];

const colorsData: Prisma.ColorCreateInput[] = [
  { name: "Branco" },
  { name: "Azul" },
  { name: "Verde" },
  { name: "Cinza" },
];

const productsData: Prisma.ProductCreateInput[] = [
  {
    name: "Camiseta Manga Curta",
    slug: slugify("Camiseta Manga Curta"),
    price: 70,
    description: "",
    starRating: 5,
    discountRate: 10,
    category: { connect: { id: 1 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Camiseta Manga Longa",
    slug: slugify("Camiseta Manga Longa"),
    price: 100,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 1 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Bermuda larga",
    slug: slugify("Bermuda larga"),
    price: 80,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 2 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Calça de moletom",
    slug: slugify("Calça de moletom"),
    price: 120,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 3 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Moletom com capuz",
    slug: slugify("Moletom com capuz"),
    price: 150,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 4 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Regata Masculina",
    slug: slugify("Regata Masculina"),
    price: 80,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 5 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
  {
    name: "Regata feminina",
    slug: slugify("Regata feminina"),
    price: 90,
    description: "",
    starRating: 5,
    discountRate: 5,
    category: { connect: { id: 5 } },
    variants: {
      create: [
        { color: { connect: { id: 1 } }, size: "P", stock: 50 },
        { color: { connect: { id: 1 } }, size: "M", stock: 50 },
        { color: { connect: { id: 1 } }, size: "G", stock: 50 },
        { color: { connect: { id: 1 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 1 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "P", stock: 50 },
        { color: { connect: { id: 2 } }, size: "M", stock: 50 },
        { color: { connect: { id: 2 } }, size: "G", stock: 50 },
        { color: { connect: { id: 2 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 2 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "P", stock: 50 },
        { color: { connect: { id: 3 } }, size: "M", stock: 50 },
        { color: { connect: { id: 3 } }, size: "G", stock: 50 },
        { color: { connect: { id: 3 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 3 } }, size: "XG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "P", stock: 50 },
        { color: { connect: { id: 4 } }, size: "M", stock: 50 },
        { color: { connect: { id: 4 } }, size: "G", stock: 50 },
        { color: { connect: { id: 4 } }, size: "GG", stock: 50 },
        { color: { connect: { id: 4 } }, size: "XG", stock: 50 },
      ],
    },
  },
];

const productsColorsImagesData: Prisma.ProductColorImageCreateInput[] = [
  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/17.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/21.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/18.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/22.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/19.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/23.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/20.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 1 } },
    imagePath: "https://demetrodigital.com.br/images/24.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/1.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/5.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/2.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/6.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/3.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/7.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/4.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 2 } },
    imagePath: "https://demetrodigital.com.br/images/8.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/9.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/13.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/10.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/14.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/11.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/15.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/12.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 3 } },
    imagePath: "https://demetrodigital.com.br/images/16.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/41.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/45.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/42.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/46.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/43.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/47.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/44.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 4 } },
    imagePath: "https://demetrodigital.com.br/images/48.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/25.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/29.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/26.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/30.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/27.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/31.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/28.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 5 } },
    imagePath: "https://demetrodigital.com.br/images/32.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/49.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/53.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/50.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/54.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/51.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/55.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/52.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 6 } },
    imagePath: "https://demetrodigital.com.br/images/56.png",
    color: {
      connect: { id: 4 },
    },
  },

  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/33.png",
    color: {
      connect: { id: 1 },
    },
  },
  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/37.png",
    color: {
      connect: { id: 1 },
    },
  },

  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/34.png",
    color: {
      connect: { id: 2 },
    },
  },
  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/38.png",
    color: {
      connect: { id: 2 },
    },
  },

  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/35.png",
    color: {
      connect: { id: 3 },
    },
  },
  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/39.png",
    color: {
      connect: { id: 3 },
    },
  },

  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/36.png",
    color: {
      connect: { id: 4 },
    },
  },
  {
    product: { connect: { id: 7 } },
    imagePath: "https://demetrodigital.com.br/images/40.png",
    color: {
      connect: { id: 4 },
    },
  },
];

export async function main() {
  for (const c of categoriesData) {
    await prisma.category.create({ data: c });
  }

  for (const c of colorsData) {
    await prisma.color.create({ data: c });
  }

  for (const p of productsData) {
    await prisma.product.create({ data: p });
  }
  for (const p of productsColorsImagesData) {
    await prisma.productColorImage.create({ data: p });
  }
}

main();
