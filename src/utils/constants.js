import Person1Image from '../assets/images/illustrations/person-1.png';
import Person1NameImage from '../assets/images/illustrations/person-1-withbgname.png';
import Person2Image from '../assets/images/illustrations/person-2.png';
import Person2NameImage from '../assets/images/illustrations/person-2-withbgname.png';
import Person3Image from '../assets/images/illustrations/person-3.png';
import Person3NameImage from '../assets/images/illustrations/person-3-withbgname.png';
import Person4Image from '../assets/images/illustrations/person-4.png';
import Person4NameImage from '../assets/images/illustrations/person-4-withbgname.png';
import Person5Image from '../assets/images/illustrations/person-5.png';
import Person5NameImage from '../assets/images/illustrations/person-5-withbgname.png';
import Person6Image from '../assets/images/illustrations/person-6.png';
import Person6NameImage from '../assets/images/illustrations/person-6-withbgname.png';
import Brand1Image from '../assets/images/illustrations/brand-1.png';
import Brand2Image from '../assets/images/illustrations/brand-2.png';
import Brand3Image from '../assets/images/illustrations/brand-3.png';
import Brand4Image from '../assets/images/illustrations/brand-4.png';
import Brand5Image from '../assets/images/illustrations/brand-5.png';

const DESKTOP_MIN_WIDTH = 768;
const TOTAL_RATING = 5;
const characters = [
    {
        id: 1,
        image: Person1Image,
        imageWithName: Person1NameImage,
        name: 'Allie',
        price: 235.99,
        rating: 3,
        tags: ['popular','mostview']
    },
    {
        id: 2,
        image: Person2Image,
        imageWithName: Person2NameImage,
        name: 'Ryan',
        price: 235.99,
        rating: 3,
        tags: ['popular']
    },
    {
        id: 3,
        image: Person3Image,
        imageWithName: Person3NameImage,
        name: 'Jossie',
        price: 235.99,
        rating: 3,
        tags: ['mostview']
    },
    {
        id: 4,
        image: Person4Image,
        imageWithName: Person4NameImage,
        name: 'Josnua',
        price: 235.99,
        rating: 3,
        tags: ['popular']
    },
    {
        id: 5,
        image: Person5Image,
        imageWithName: Person5NameImage,
        name: 'Nichole',
        price: 235.99,
        rating: 3,
        tags: ['mostview']
    },
    {
        id: 6,
        image: Person6Image,
        imageWithName: Person6NameImage,
        name: 'Nichole',
        price: 235.99,
        rating: 3,
        tags: ['mostview']
    },
    {
        id: 7,
        image: Person1Image,
        imageWithName: Person1NameImage,
        name: 'Allie',
        price: 235.99,
        rating: 3,
        tags: ['popular','mostview']
    },
    {
        id: 8,
        image: Person2Image,
        imageWithName: Person2NameImage,
        name: 'Ryan',
        price: 235.99,
        rating: 3,
        tags: ['popular','mostview']
    },
    {
        id: 9,
        image: Person3Image,
        imageWithName: Person3NameImage,
        name: 'Jossie',
        price: 235.99,
        rating: 3,
        tags: ['popular']
    },
    {
        id: 10,
        image: Person4Image,
        imageWithName: Person4NameImage,
        name: 'Josnua',
        price: 235.99,
        rating: 3,
        tags: ['popular', 'mostview']
    },
    {
        id: 11,
        image: Person5Image,
        imageWithName: Person5NameImage,
        name: 'Nichole',
        price: 235.99,
        rating: 3,
        tags: ['mostview']
    },
    {
        id: 12,
        image: Person6Image,
        imageWithName: Person6NameImage,
        name: 'Nichole',
        price: 235.99,
        rating: 3,
        tags: ['popular']
    },
]

const brands = [
    {
        id: 1,
        name: 'Liva',
        image: Brand1Image,
    },
    {
        id: 2,
        name: 'Ztos',
        image: Brand2Image,
    },
    {
        id: 3,
        name: 'FoxHub',
        image: Brand3Image,
    },
    {
        id: 4,
        name: 'muzica',
        image: Brand4Image,
    },
    {
        id: 5,
        name: 'Velocity',
        image: Brand5Image,
    },
]

const mostViewCharacters = characters.filter(
    character => character.tags.includes('mostview')
)

const popularCharacters = characters.filter(
    character => character.tags.includes('popular')
)

export { DESKTOP_MIN_WIDTH, TOTAL_RATING, characters, brands, mostViewCharacters, popularCharacters}