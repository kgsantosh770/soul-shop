import Person1Image from '../../assets/images/illustrations/person-1.png';
import Person1BgImage from '../../assets/images/illustrations/person-1-withbg.png';
import Person1NameImage from '../../assets/images/illustrations/person-1-withbgname.png';
import Person2Image from '../../assets/images/illustrations/person-2.png';
import Person2BgImage from '../../assets/images/illustrations/person-2-withbg.png';
import Person2NameImage from '../../assets/images/illustrations/person-2-withbgname.png';
import Person3Image from '../../assets/images/illustrations/person-3.png';
import Person3BgImage from '../../assets/images/illustrations/person-3-withbg.png';
import Person3NameImage from '../../assets/images/illustrations/person-3-withbgname.png';
import Person4Image from '../../assets/images/illustrations/person-4.png';
import Person4BgImage from '../../assets/images/illustrations/person-4-withbg.png';
import Person4NameImage from '../../assets/images/illustrations/person-4-withbgname.png';
import Person5Image from '../../assets/images/illustrations/person-5.png';
import Person5BgImage from '../../assets/images/illustrations/person-5-withbg.png';
import Person5NameImage from '../../assets/images/illustrations/person-5-withbgname.png';
import Person6Image from '../../assets/images/illustrations/person-6.png';
import Person6BgImage from '../../assets/images/illustrations/person-6-withbg.png';
import Person6NameImage from '../../assets/images/illustrations/person-6-withbgname.png';
import Brand1Image from '../../assets/images/illustrations/brand-1.png';
import Brand2Image from '../../assets/images/illustrations/brand-2.png';
import Brand3Image from '../../assets/images/illustrations/brand-3.png';
import Brand4Image from '../../assets/images/illustrations/brand-4.png';
import Brand5Image from '../../assets/images/illustrations/brand-5.png';
import VisaIcon from '../../assets/images/icons/visa.png';
import MastercardIcon from '../../assets/images/icons/mastercard.png';
import ApplePayIcon from '../../assets/images/icons/applepay.png';
import PaypalIcon from '../../assets/images/icons/paypal.png';

const DESKTOP_MIN_WIDTH = 768;
const TOTAL_RATING = 5;
const TAX = 70;
const characters = [
    {
        id: 1,
        image: Person1Image,
        imageWithName: Person1NameImage,
        imageWithBg: Person1BgImage,
        name: 'Allie',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular', 'mostview']
    },
    {
        id: 2,
        image: Person2Image,
        imageWithName: Person2NameImage,
        imageWithBg: Person2BgImage,
        name: 'Ryan',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular']
    },
    {
        id: 3,
        image: Person3Image,
        imageWithName: Person3NameImage,
        imageWithBg: Person3BgImage,
        name: 'Jossie',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
    },
    {
        id: 4,
        image: Person4Image,
        imageWithName: Person4NameImage,
        imageWithBg: Person4BgImage,
        name: 'Josnua',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular']
    },
    {
        id: 5,
        image: Person5Image,
        imageWithName: Person5NameImage,
        imageWithBg: Person5BgImage,
        name: 'Nichole',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
    },
    {
        id: 6,
        image: Person6Image,
        imageWithName: Person6NameImage,
        imageWithBg: Person6BgImage,
        name: 'Nichole',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
    },
    {
        id: 7,
        image: Person1Image,
        imageWithName: Person1NameImage,
        imageWithBg: Person1BgImage,
        name: 'Allie',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular', 'mostview']
    },
    {
        id: 8,
        image: Person2Image,
        imageWithName: Person2NameImage,
        imageWithBg: Person2BgImage,
        name: 'Ryan',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular']
    },
    {
        id: 9,
        image: Person3Image,
        imageWithName: Person3NameImage,
        imageWithBg: Person3BgImage,
        name: 'Jossie',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
    },
    {
        id: 10,
        image: Person4Image,
        imageWithName: Person4NameImage,
        imageWithBg: Person4BgImage,
        name: 'Josnua',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['popular']
    },
    {
        id: 11,
        image: Person5Image,
        imageWithName: Person5NameImage,
        imageWithBg: Person5BgImage,
        name: 'Nichole',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
    },
    {
        id: 12,
        image: Person6Image,
        imageWithName: Person6NameImage,
        imageWithBg: Person6BgImage,
        name: 'Nichole',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 235.99,
        tax: 10,
        rating: 3,
        period: 'month',
        features: ['Financial Expert', 'Sports Person', 'Psychologist'],
        tags: ['mostview']
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

const PAYMENT_OPTIONS = [
    {
        name: 'Credit Card',
        desc: 'Unlimited users and unlimited individual data.',
        acceptedMethods: [
            {
                name: 'Visa',
                image: VisaIcon,
            },
            {
                name: 'Mastercard',
                image: MastercardIcon,
            }
        ]

    },
    {
        name: 'Apple Pay',
        desc: 'Unlimited users and unlimited individual data.',
        acceptedMethods: [
            {
                name: 'Apple Pay',
                image: ApplePayIcon,
            }
        ]

    },
    {
        name: 'Paypal',
        desc: 'Unlimited users and unlimited individual data.',
        acceptedMethods: [
            {
                name: 'Paypal',
                image: PaypalIcon,
            }
        ]

    }
]

export {
    DESKTOP_MIN_WIDTH,
    TOTAL_RATING,
    PAYMENT_OPTIONS,
    characters,
    brands,
    mostViewCharacters,
    popularCharacters,
    TAX
}