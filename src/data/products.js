import insertID from "./generateID";

import {
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20
} from "./products-imgs";

const products = [
    {
        productTitle: "Phone 1",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$100",
        productImage: {
            imagePath: Image1,
            imageAltText: "Image 1"
        }
    },
    {
        productTitle: "Phone 2",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$400",
        productImage: {
            imagePath: Image2,
            imageAltText: "Image 2"
        }
    },
    {
        productTitle: "Phone 3",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$500",
        productImage: {
            imagePath: Image3,
            imageAltText: "Image 3"
        }
    },
    {
        productTitle: "Phone 4",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$470",
        productImage: {
            imagePath: Image4,
            imageAltText: "Image 4"
        }
    },
    {
        productTitle: "Phone 5",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$6000",
        productImage: {
            imagePath: Image5,
            imageAltText: "Image 5"
        }
    },
    {
        productTitle: "Phone 6",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$220",
        productImage: {
            imagePath: Image6,
            imageAltText: "Image 6"
        }
    },
    {
        productTitle: "Phone 7",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "370",
        productImage: {
            imagePath: Image7,
            imageAltText: "Image 7"
        }
    },
    {
        productTitle: "Phone 8",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$560",
        productImage: {
            imagePath: Image8,
            imageAltText: "Image 8"
        }
    },
    {
        productTitle: "Phone 9",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$760",
        productImage: {
            imagePath: Image9,
            imageAltText: "Image 9"
        }
    },
    {
        productTitle: "Phone 10",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$140",
        productImage: {
            imagePath: Image10,
            imageAltText: "Image 10"
        }
    },
    {
        productTitle: "Phone 11",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$330",
        productImage: {
            imagePath: Image11,
            imageAltText: "Image 11"
        }
    },
    {
        productTitle: "Phone 12",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$420",
        productImage: {
            imagePath: Image12,
            imageAltText: "Image 12"
        }
    },
    {
        productTitle: "Phone 13",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$650",
        productImage: {
            imagePath: Image13,
            imageAltText: "Image 13"
        }
    },
    {
        productTitle: "Phone 14",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$320",
        productImage: {
            imagePath: Image14,
            imageAltText: "Image 14"
        }
    },
    {
        productTitle: "Phone 15",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$370",
        productImage: {
            imagePath: Image15,
            imageAltText: "Image 15"
        }
    },

    {
        productTitle: "Phone 16",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$630",
        productImage: {
            imagePath: Image16,
            imageAltText: "Image 16"
        }
    },
    {
        productTitle: "Phone 17",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$340",
        productImage: {
            imagePath: Image17,
            imageAltText: "Image 17"
        }
    },
    {
        productTitle: "Phone 18",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$500",
        productImage: {
            imagePath: Image18,
            imageAltText: "Image 18"
        }
    },
    {
        productTitle: "Phone 19",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$120",
        productImage: {
            imagePath: Image19,
            imageAltText: "Image 19"
        }
    },
    {
        productTitle: "Phone 20",
        productDescription: "Lorem ipsum dolor sit amet consectetur.",
        productDeepDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati. Aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Serferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae in obcaecati atque soluta alias suscipit est, omnis corporis veniam autem ipsum. Accusantium, fuga. Quasi. Pic voluptates magnam nostrum commodi, perferendis iste adipisci ratione nemo unde aliquid numquam error cumque delectus molestiae",
        productPrice: "$400",
        productImage: {
            imagePath: Image20,
            imageAltText: "Image 20"
        }
    },
];

(function () {
    insertID(products);
})();

export default products;