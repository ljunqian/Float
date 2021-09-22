import Background_StarrySpace from '../../assets/images/starry-space.png';
import Background_Mountain from '../../assets/images/mountain1.png';
import Background_Beach from '../../assets/images/beach.png';

import Hat1 from '../../assets/images/Hat-Cowboy-Center.png';
import Hat2 from '../../assets/images/Hat-Santa-Center.png';
import Hat3 from '../../assets/images/Hat-Ushanka-Center.png';
import Hat4 from '../../assets/images/Hat-Wizard-Center.png';

import Accessory1 from '../../assets/images/Accessories-Band-Aid-Center.png';
import Accessory2 from '../../assets/images/Accessories-Eyepatch-Center.png';
import Accessory3 from '../../assets/images/Accessories-Mustache-Center.png';
import Accessory4 from '../../assets/images/Accessories-Santa-Beard-Center.png';

import Voucher1 from '../../assets/images/Voucher1.png';
import Voucher2 from '../../assets/images/Voucher2.png';
import Voucher3 from '../../assets/images/Voucher3.png';

export const BackgroundImages = [
    {   name: 'Mountain',
        source: Background_Mountain,
        value: '300',
        id: '1',
        equipped: true,
        purchased: true
    },

    {   name: 'Starry Space',
        source: Background_StarrySpace,
        value: '200',
        id: '2',
        equipped: true,
        purchased: true
    },
    
    {   name: 'Beach',
        source: Background_Beach,
        value: '150',
        id: '3',
        equipped: true,
        purchased: true
    }
]

export const HatImages = [
    {
        name: 'Cowboy',
        source: Hat1,
        value: '100',
        id: '1',
        equipped: true,
        purchased: true
    },

    {
        name: 'Santa',
        source: Hat2,
        value: '250',
        id: '2',
        equipped: true,
        purchased: true
    },

    {
        name: 'Ushanka',
        source: Hat3,
        value: '300',
        id: '3',
        equipped: true,
        purchased: true
    },

    {
        name: 'Wizard',
        source: Hat4,
        value: '400',
        id: '3',
        equipped: true,
        purchased: true
    }
]

export const AccessoryImages = [
    {
        name: 'Band Aid',
        source: Accessory1,
        value: '250',
        id: '1',
        equipped: true,
        purchased: true
    },

    {
        name: 'Eyepatch',
        source: Accessory2,
        value: '350',
        id: '2',
        equipped: true,
        purchased: true
    },

    {
        name: 'Mustache',
        source: Accessory3,
        value: '400',
        id: '3',
        equipped: true,
        purchased: true
    },

    {
        name: 'Santa Beard',
        source: Accessory4,
        value: '500',
        id: '4',
        equipped: true,
        purchased: true
    },
]

export const VoucherImages = [
    {
        name: '1-for-1 Korean BBQ',
        source: Voucher1,
        value: '200',
        id: '1',
        redeemed: true
    },

    {
        name: 'Weekday Lunch Deals',
        source: Voucher2,
        value: '200',
        id: '2',
        redeemed: false
    },

    {
        name: '50% off 2nd admission',
        source: Voucher2,
        value: '200',
        id: '3',
        redeemed: false
    },
]

