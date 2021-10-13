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

import BackGroundTab from '../../assets/icons/Tab_Background.png';
import HatsTab from '../../assets/icons/Tab_Hat.png';
import AccessoriesTab from '../../assets/icons/Tab_Accessory.png';
import VouchersTab from '../../assets/icons/Tab_Voucher.png';

import BackGroundTabClicked from '../../assets/icons/Tab_Background_Clicked.png';
import HatsTabClicked from '../../assets/icons/Tab_Hat_Clicked.png';
import AccessoriesTabClicked from '../../assets/icons/Tab_Accessory_Clicked.png';
import VouchersTabClicked from '../../assets/icons/Tab_Voucher_Clicked.png';

export const rewardTabs = [
    {
        title: 'Background',
        imgClicked: BackGroundTabClicked,
        imgNotCLicked: BackGroundTab,
    },
    {
        title: 'Hats',
        imgClicked: HatsTabClicked,
        imgNotCLicked: HatsTab,
    },
    {
        title: 'Accessories',
        imgClicked: AccessoriesTabClicked,
        imgNotCLicked: AccessoriesTab,
    },
    {
        title: 'Vouchers',
        imgClicked: VouchersTabClicked,
        imgNotCLicked: VouchersTab,
    },

]

export const BackgroundImages = [
    {   name: 'Mountain',
        source: Background_Mountain,
        value: '300',
        id: 'BG Mountain',
        equipped: false,
        purchased: true
    },

    {   name: 'Starry Space',
        source: Background_StarrySpace,
        value: '200',
        id: 'BG Starry Space',
        equipped: false,
        purchased: false
    },
    
    {   name: 'Beach',
        source: Background_Beach,
        value: '150',
        id: 'BG Beach',
        equipped: false,
        purchased: false
    }
]

export const HatImages = [
    {
        name: 'Cowboy',
        source: Hat1,
        value: '100',
        id: 'Hat Cowboy',
        equipped: false,
        purchased: false
    },

    {
        name: 'Santa',
        source: Hat2,
        value: '250',
        id: 'Hat Santa',
        equipped: false,
        purchased: false
    },

    {
        name: 'Ushanka',
        source: Hat3,
        value: '300',
        id: 'Hat Ushanka',
        equipped: false,
        purchased: false
    },

    {
        name: 'Wizard',
        source: Hat4,
        value: '400',
        id: 'Hat Wizard',
        equipped: false,
        purchased: false
    }
]

export const AccessoryImages = [
    {
        name: 'Band Aid',
        source: Accessory1,
        value: '250',
        id: 'ACC Band Aid',
        equipped: false,
        purchased: false
    },

    {
        name: 'Eyepatch',
        source: Accessory2,
        value: '350',
        id: 'ACC Eyepatch',
        equipped: false,
        purchased: false
    },

    {
        name: 'Mustache',
        source: Accessory3,
        value: '400',
        id: 'ACC Mustache',
        equipped: false,
        purchased: false
    },

    {
        name: 'Santa Beard',
        source: Accessory4,
        value: '500',
        id: 'ACC Santa Beard',
        equipped: false,
        purchased: false
    },
]

export const VoucherImages = [
    {
        name: '1-for-1 Korean BBQ',
        source: Voucher1,
        value: '200',
        id: 'Voucher BBQ',
        purchased: false
    },

    {
        name: 'Weekday Lunch Deals',
        source: Voucher2,
        value: 'Voucher Lunch',
        id: '2',
        purchased: false
    },

    {
        name: '50% off 2nd admission',
        source: Voucher3,
        value: '200',
        id: 'Voucher 50%',
        purchased: false
    },
]
