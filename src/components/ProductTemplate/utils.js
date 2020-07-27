import uuid from 'react-uuid';

export const getProduct = (value) => {
    switch (value) {
        case 'Jeans':
            return Jeans
        case 'Jackets':
            return Jackets
        case 'Pants':
            return Pants
        case 'Shirts':
            return Shirts
        case 'Sneakers':
            return Sneakers
        case 'Accessories':
            return Accessories
        case 'T-Shirts':
            return tShirts
        case 'Long-Sleeve Shirts':
            return longSleeves
        default:
            return []
    }
}


export const Jeans = [
    {
        name: 'Levis',
        description: 'Slub cotton striped Jeans',
        image: require('./assets/jeans-img/jeans1.jpg'),
        id: uuid(),
        price: '150'

    },
    {
        name: 'Our Legacy',
        description: 'M-51 Jeans',
        image: require('./assets/jeans-img/jeans2.jpg'),
        id: uuid(),
        price: '400'
    },
    {
        name: 'Paul Smith',
        description: 'Denim Kaihara Jeans',
        image: require('./assets/jeans-img/jeans3.jpg'),
        id: uuid(),
        price: '300'
    },
    {
        name: 'Norse Projects',
        description: 'Dobule Pack Jeans',
        image: require('./assets/jeans-img/jeans4.jpg'),
        id: uuid(),
        price: '200'
    }, {
        name: 'Edwin',
        description: 'Outdoot F-11 Jeans',
        image: require('./assets/jeans-img/jeans5.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'Stone Island',
        description: 'MotoA1 Jeans',
        image: require('./assets/jeans-img/jeans6.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Calvin Klein',
        description: 'Ghost Jeans',
        image: require('./assets/jeans-img/jeans7.jpg'),
        id: uuid(),
        price: '300'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jeans',
        image: require('./assets/jeans-img/jeans8.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'Wood Wood',
        description: 'Ripped Jeans',
        image: require('./assets/jeans-img/jeans9.jpg'),
        id: uuid(),
        price: '150'
    }
]


export const Jackets = [
    {
        name: 'Carhart WIP',
        description: 'Slub cotton striped Jacket',
        image: require('./assets/jacket-img/jacket1.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'C.P Company',
        description: 'M-51 Jacket',
        image: require('./assets/jacket-img/jacket2.jpg'),
        id: uuid(),
        price: '400'
    },
    {
        name: 'Edwin',
        description: 'Denim Kaihara Jacket',
        image: require('./assets/jacket-img/jacket3.jpg'),
        id: uuid(),
        price: '350'
    },
    {
        name: 'Norse Projects',
        description: 'Dobule Pack Jacket',
        image: require('./assets/jacket-img/jacket4.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Patagonia',
        description: 'Outdoot F-11 Jacket',
        image: require('./assets/jacket-img/jacket5.jpg'),
        id: uuid(),
        price: '320'
    },
    {
        name: 'Stone Island',
        description: 'Membrana2L Jacket',
        image: require('./assets/jacket-img/jacket6.jpg'),
        id: uuid(),
        price: '600'
    },
    {
        name: 'Barbour',
        description: 'Ghost Rain Jacket',
        image: require('./assets/jacket-img/jacket7.jpg'),
        id: uuid(),
        price: '500'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jacket',
        image: require('./assets/jacket-img/jacket8.jpg'),
        id: uuid(),
        price: '420'
    },
    {
        name: 'J-Crew',
        description: 'Outdoor Jacket',
        image: require('./assets/jacket-img/jacket9.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'Stone Island',
        description: 'Membrana2L Jacket',
        image: require('./assets/jacket-img/jacket6.jpg'),
        id: uuid(),
        price: '600'
    },
    {
        name: 'Barbour',
        description: 'Ghost Rain Jacket',
        image: require('./assets/jacket-img/jacket7.jpg'),
        id: uuid(),
        price: '500'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jacket',
        image: require('./assets/jacket-img/jacket8.jpg'),
        id: uuid(),
        price: '420'
    },
    {
        name: 'J-Crew',
        description: 'Outdoor Jacket',
        image: require('./assets/jacket-img/jacket9.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'Stone Island',
        description: 'Membrana2L Jacket',
        image: require('./assets/jacket-img/jacket6.jpg'),
        id: uuid(),
        price: '600'
    },
    {
        name: 'Barbour',
        description: 'Ghost Rain Jacket',
        image: require('./assets/jacket-img/jacket7.jpg'),
        id: uuid(),
        price: '500'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jacket',
        image: require('./assets/jacket-img/jacket8.jpg'),
        id: uuid(),
        price: '420'
    },
    {
        name: 'J-Crew',
        description: 'Outdoor Jacket',
        image: require('./assets/jacket-img/jacket9.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'Stone Island',
        description: 'Membrana2L Jacket',
        image: require('./assets/jacket-img/jacket6.jpg'),
        id: uuid(),
        price: '600'
    },
    {
        name: 'Barbour',
        description: 'Ghost Rain Jacket',
        image: require('./assets/jacket-img/jacket7.jpg'),
        id: uuid(),
        price: '500'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jacket',
        image: require('./assets/jacket-img/jacket8.jpg'),
        id: uuid(),
        price: '420'
    },
    {
        name: 'J-Crew',
        description: 'Outdoor Jacket',
        image: require('./assets/jacket-img/jacket9.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'Stone Island',
        description: 'Membrana2L Jacket',
        image: require('./assets/jacket-img/jacket6.jpg'),
        id: uuid(),
        price: '600'
    },
    {
        name: 'Barbour',
        description: 'Ghost Rain Jacket',
        image: require('./assets/jacket-img/jacket7.jpg'),
        id: uuid(),
        price: '500'
    },
    {
        name: 'A.P.C',
        description: 'Live 14-A Jacket',
        image: require('./assets/jacket-img/jacket8.jpg'),
        id: uuid(),
        price: '420'
    },
    {
        name: 'J-Crew',
        description: 'Outdoor Jacket',
        image: require('./assets/jacket-img/jacket9.jpg'),
        id: uuid(),
        price: '220'
    }

]


export const Accessories = [
    {
        name: 'Aries',
        description: 'Slub cotton striped Bag',
        image: require('./assets/accessories-img/accessories1.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Axel Artigo',
        description: 'Black Bag',
        image: require('./assets/accessories-img/accessories2.jpg'),
        id: uuid(),
        price: '30'
    },
    {
        name: 'Battenwears',
        description: ' Kaihara Belt',
        image: require('./assets/accessories-img/accessories3.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Norse Projects',
        description: 'Dobule  Hat',
        image: require('./assets/accessories-img/accessories4.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'END',
        description: 'Outdoot  Hat',
        image: require('./assets/accessories-img/accessories6.jpg'),
        id: uuid(),
        price: '30'
    },
    {
        name: 'Coach',
        description: 'Membrana Mask',
        image: require('./assets/accessories-img/accessories6.jpg'),
        id: uuid(),
        price: '10'
    },
    {
        name: 'Barbour',
        description: 'Rain Socks',
        image: require('./assets/accessories-img/accessories7.jpg'),
        id: uuid(),
        price: '20'
    },
    {
        name: 'J-Shock',
        description: 'Live 14-A Socks',
        image: require('./assets/accessories-img/accessories8.jpg'),
        id: uuid(),
        price: '25'
    },
    {
        name: 'Futur',
        description: 'Outdoor Belt',
        image: require('./assets/accessories-img/accessories10.jpg'),
        id: uuid(),
        price: '20'
    }

]

// =====// =====// =====// =====// =====// =====

export const Pants = [
    {
        name: 'Carhart WIP',
        description: 'Slub Pants',
        image: require('./assets/pants-img/pants1.jpg'),
        id: uuid(),
        price: '250'
    },
    {
        name: 'C.P Company',
        description: 'M-51 Pants',
        image: require('./assets/pants-img/pants2.jpg'),
        id: uuid(),
        price: '300'
    },
    {
        name: 'Edwin',
        description: 'Kaihara Pants',
        image: require('./assets/pants-img/pants3.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'Levis',
        description: 'Pack Pants',
        image: require('./assets/pants-img/pants4.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'END',
        description: 'Out Pants',
        image: require('./assets/pants-img/pants5.jpg'),
        id: uuid(),
        price: '320'
    },
    {
        name: 'Stone Island',
        description: 'Me2L Pants',
        image: require('./assets/pants-img/pants6.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Barbour',
        description: 'Gho Pants',
        image: require('./assets/pants-img/pants7.jpg'),
        id: uuid(),
        price: '300'
    },
    {
        name: 'A.P.C',
        description: '14-A Pants',
        image: require('./assets/pants-img/pants8.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'J-Crew',
        description: 'C-B Pants',
        image: require('./assets/pants-img/pants9.jpg'),
        id: uuid(),
        price: '120'
    }

]

export const Sneakers = [
    {
        name: 'Carhart WIP',
        description: 'S Sneakers',
        image: require('./assets/sneakers-img/sneaker1.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'C.P Company',
        description: 'M1 Sneakers',
        image: require('./assets/sneakers-img/sneaker2.jpg'),
        id: uuid(),
        price: '400'
    },
    {
        name: 'Edwin',
        description: 'Deihara Sneakers',
        image: require('./assets/sneakers-img/sneaker3.jpg'),
        id: uuid(),
        price: '350'
    },
    {
        name: 'Nike',
        description: 'Dok Sneakers',
        image: require('./assets/sneakers-img/sneaker4.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Nike',
        description: 'Ou Sneakers',
        image: require('./assets/sneakers-img/sneaker5.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'Stone Island',
        description: 'Membra Sneakers',
        image: require('./assets/sneakers-img/sneaker6.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Undefited',
        description: 'Ghon Sneakers',
        image: require('./assets/sneakers-img/sneaker7.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'A.P.C',
        description: 'Liv Sneakers',
        image: require('./assets/sneakers-img/sneaker8.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'J-Crew',
        description: 'Our Sneakers',
        image: require('./assets/sneakers-img/sneaker9.jpg'),
        id: uuid(),
        price: '130'
    }

]

export const Shirts = [
    {
        name: 'Levis',
        description: 'Cotton striped Shirt',
        image: require('./assets/shirts-img/shirt1.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'C.P Company',
        description: '1A Shirt',
        image: require('./assets/shirts-img/shirt2.jpg'),
        id: uuid(),
        price: '400'
    },
    {
        name: 'Edwin',
        description: 'Kara Shirt',
        image: require('./assets/shirts-img/shirt3.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'Wood-Wood',
        description: 'Pack Shirt',
        image: require('./assets/shirts-img/shirt4.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'J-Crew',
        description: 'Doot Shirt',
        image: require('./assets/shirts-img/shirt5.jpg'),
        id: uuid(),
        price: '120'
    },
    {
        name: 'Stone Island',
        description: 'Mem Shirt',
        image: require('./assets/shirts-img/shirt6.jpg'),
        id: uuid(),
        price: '200'
    },
    {
        name: 'Norse-Projects',
        description: 'Style Shirt',
        image: require('./assets/shirts-img/shirt7.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'A.P.C',
        description: 'Pol Shirt',
        image: require('./assets/shirts-img/shirt8.jpg'),
        id: uuid(),
        price: '220'
    },
    {
        name: 'J-Crew',
        description: 'Slim Shirt',
        image: require('./assets/shirts-img/shirt9.jpg'),
        id: uuid(),
        price: '190'
    }

]

// 

export const tShirts = [
    {
        name: 'Pleasures',
        description: 'Drug-Helped T-Shirt',
        image: require('./assets/tshirts-img/tshirt1.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Polar Skate',
        description: 'ABX T-Shirt',
        image: require('./assets/tshirts-img/tshirt2.jpg'),
        id: uuid(),
        price: '40'
    },
    {
        name: 'Ritual',
        description: 'Colorado T-Shirt',
        image: require('./assets/tshirts-img/tshirt3.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Stussy',
        description: 'Pack T-Shirt',
        image: require('./assets/tshirts-img/tshirt4.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'J-Crew',
        description: 'DootA T-Shirt',
        image: require('./assets/tshirts-img/tshirt5.jpg'),
        id: uuid(),
        price: '120'
    },
    {
        name: 'Stone Island',
        description: 'Memo T-Shirt',
        image: require('./assets/tshirts-img/tshirt6.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Norse-Projects',
        description: 'Proactive T-Shirt',
        image: require('./assets/tshirts-img/tshirt7.jpg'),
        id: uuid(),
        price: '60'
    },
    {
        name: 'Know Wave',
        description: 'Polar T-Shirt',
        image: require('./assets/tshirts-img/tshirt8.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'J-Crew',
        description: 'Slim T-Shirt',
        image: require('./assets/tshirts-img/tshirt9.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Patagonia',
        description: 'sStriped T-Shirt',
        image: require('./assets/tshirts-img/tshirt10.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: ' Civilist',
        description: 'Mega Bobma T-Shirt',
        image: require('./assets/tshirts-img/tshirt11.jpg'),
        id: uuid(),
        price: '400'
    },
    {
        name: 'Stussy',
        description: 'Kara T-Shirt',
        image: require('./assets/tshirts-img/tshirt12.jpg'),
        id: uuid(),
        price: '80'
    },
    {
        name: 'Wood-Wood',
        description: 'Pack T-Shirt',
        image: require('./assets/tshirts-img/tshirt13.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'Carhartt WIP',
        description: 'Wide T-Shirt',
        image: require('./assets/tshirts-img/tshirt14.jpg'),
        id: uuid(),
        price: '80'
    },
    {
        name: 'Stussy ',
        description: 'Prola T-Shirt',
        image: require('./assets/tshirts-img/tshirt15.jpg'),
        id: uuid(),
        price: '60'
    },
    {
        name: 'Norse-Projects',
        description: 'AXC T-Shirt',
        image: require('./assets/tshirts-img/tshirt16.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'A.P.C',
        description: 'Polr T-Shirt',
        image: require('./assets/tshirts-img/tshirt17.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Skinny',
        description: 'Slimus T-Shirt',
        image: require('./assets/tshirts-img/tshirt18.jpg'),
        id: uuid(),
        price: '40'
    },
    {
        name: 'A.P.C',
        description: 'UU Shirt',
        image: require('./assets/tshirts-img/tshirt19.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'J-Crew',
        description: 'Assault T-Shirt',
        image: require('./assets/tshirts-img/tshirt20.jpg'),
        id: uuid(),
        price: '120'
    },
    {
        name: 'Patta',
        description: 'Aztec T-Shirt',
        image: require('./assets/tshirts-img/tshirt21.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Borek',
        description: 'Regulat T-Shirt',
        image: require('./assets/tshirts-img/tshirt22.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Carhartt',
        description: 'Mous T-Shirt',
        image: require('./assets/tshirts-img/tshirt23.jpg'),
        id: uuid(),
        price: '50'
    },
    {
        name: 'Donnie',
        description: 'Easy Be T-Shirt',
        image: require('./assets/tshirts-img/tshirt24.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'A.P.C',
        description: 'Pol T-Shirt',
        image: require('./assets/tshirts-img/tshirt25.jpg'),
        id: uuid(),
        price: '70'
    },
    {
        name: 'Mario',
        description: 'Bros T-Shirt',
        image: require('./assets/tshirts-img/tshirt26.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'A.P.C',
        description: 'Polarium T-Shirt',
        image: require('./assets/tshirts-img/tshirt27.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'J-Crew',
        description: 'Slim T-Shirt',
        image: require('./assets/tshirts-img/tshirt28.jpg'),
        id: uuid(),
        price: '70'
    },
    {
        name: 'J-Crew',
        description: 'Slimmy T-Shirt',
        image: require('./assets/tshirts-img/tshirt29.jpg'),
        id: uuid(),
        price: '70'
    },
    {
        name: 'RipnDip',
        description: 'Gross T-Shirt',
        image: require('./assets/tshirts-img/tshirt30.jpg'),
        id: uuid(),
        price: '90'
    }

]
export const longSleeves = [
    {
        name: 'Comme Des Garcons',
        description: 'Long-Sleeve Heart-Stripe Tee',
        image: require('./assets/longsleevestees-img/longsleeve1.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'Polar Skate',
        description: 'Long-Sleeve 1A Stripe Tee',
        image: require('./assets/longsleevestees-img/longsleeve2.jpg'),
        id: uuid(),
        price: '190'
    },
    {
        name: 'Edwin',
        description: 'Long-Sleeve 1A Stripe Tee',
        image: require('./assets/longsleevestees-img/longsleeve3.jpg'),
        id: uuid(),
        price: '140'
    },
    {
        name: 'Wood-Wood',
        description: 'Long-Sleeve Wood Tee',
        image: require('./assets/longsleevestees-img/longsleeve4.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Stussy',
        description: 'Long-Sleeve Stussy Tee',
        image: require('./assets/longsleevestees-img/longsleeve5.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'Added',
        description: 'Long-Sleeve Added Stripe Tee',
        image: require('./assets/longsleevestees-img/longsleeve6.jpg'),
        id: uuid(),
        price: '120'
    },
    {
        name: 'Norse-Projects',
        description: 'Long-Sleeve Projects Tee',
        image: require('./assets/longsleevestees-img/longsleeve7.jpg'),
        id: uuid(),
        price: '80'
    },
    {
        name: 'Bosse',
        description: 'Long-Sleeve Bosse Tee',
        image: require('./assets/longsleevestees-img/longsleeve8.jpg'),
        id: uuid(),
        price: '90'
    },
    {
        name: 'Gramici',
        description: 'Long-Sleeve Gomel Tee',
        image: require('./assets/longsleevestees-img/longsleeve9.jpg'),
        id: uuid(),
        price: '120'
    },
    {
        name: 'Levis',
        description: 'Long-Sleeve Le Tee',
        image: require('./assets/longsleevestees-img/longsleeve10.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'C.P Company',
        description: 'Long-Sleeve Steel Tee',
        image: require('./assets/longsleevestees-img/longsleeve11.jpg'),
        id: uuid(),
        price: '100'
    },
    {
        name: 'The Trilogy',
        description: 'Long-Sleeve Versa Tee',
        image: require('./assets/longsleevestees-img/longsleeve12.jpg'),
        id: uuid(),
        price: '150'
    },
    {
        name: 'Wood-Wood',
        description: 'Long-Sleeve Slim Tee',
        image: require('./assets/longsleevestees-img/longsleeve13.jpg'),
        id: uuid(),
        price: '100'
    }
]

