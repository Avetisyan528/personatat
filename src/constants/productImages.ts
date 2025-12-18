import coffee1 from '../static/coffee1.png'; // mild
import coffee2 from '../static/coffee2.png'; // classic
import coffee3 from '../static/coffee3.png'; // strong
import coffee4 from '../static/coffee4.png'; // latte
import coffee5 from '../static/coffee5.png'; // hot chocolate

import tea1 from '../static/tea1.png'; // forest berries
import tea2 from '../static/tea2.png'; // lime
import tea3 from '../static/tea3.png'; // blackcurrant
import tea4 from '../static/tea4.png'; // peach

import beans from '../static/jacobs_monarch_bag_800g_front.avif';

export const PRODUCT_IMAGES: Record<string, string> = {
    // coffee sticks
    'mild-stick': coffee1,
    'classic-stick': coffee2,
    'strong-stick': coffee3,
    'latte-stick': coffee4,
    'hot-chocolate-stick': coffee5,

    // tea sticks
    'berry-tea-stick': tea1,
    'lime-tea-stick': tea2,
    'blackcurrant-tea-stick': tea3,
    'peach-tea-stick': tea4,
    'arabica-beans': beans,
};
