import { ConfigProvider, Slider } from 'antd';
import { BsFillBasketFill } from "react-icons/bs";
import loqo from "../assets/images/loqo.png";
import { useState } from "react";
import { Search, ChevronDown, Heart, ShoppingCart } from 'lucide-react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const [priceRange, setPriceRange] = useState([10, 60]);
    const [selectedSort, setSelectedSort] = useState('Default sorting');

    const products = [
        {
            id: 1,
            name: 'Artisan Donuts',
            description: 'Delicious artisan donuts made with love.',
            price: 12.00,
            originalPrice: null,
            image: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2022/01/Asian-dumplings.jpg',
            onSale: false,
            category: 'Bakery'
        },
        {
            id: 2,
            name: 'Premium Coffee',
            description: 'Delicious artisan donuts made with love.',
            price: 24.00,
            originalPrice: 32.00,
            image: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2022/01/black-coffe.jpg',
            onSale: true,
            category: 'Beverages'
        },
        {
            id: 3,
            name: 'Bamboo Whisk Set',
            description: 'Delicious artisan donuts made with love.',
            price: 18.00,
            originalPrice: null,
            image: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2022/01/13.jpg',
            onSale: false,
            category: 'Kitchen'
        }
    ];

    const popularItems = [
        {
            name: 'Ice Cream',
            priceRange: '$18.00 - $45.00',
            image: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2022/01/Cones-with-ice-cream-300x300.jpg'
        },
    ];

    return (
        <div className="min-h-screen bg-[#0C0C0C]" >
            <header className="flex flex-col bg-[#161616] ">
                <div className="border-b border-[#2E2E2E]">
                    <nav className="container flex justify-between py-4 items-center md:px-8">
                        <img src={loqo} alt="logo" className="h-10 md:mb-0" />

                        <div className="flex items-center">
                            <button type="button" className="btn position-relative text-white">
                                <BsFillBasketFill />
                                <span className="position-absolute top-0 start-100 translate-middle badge text-black rounded-pill bg-[#DCCA87]">
                                    0
                                    <span className="visually-hidden">Unread messages</span>
                                </span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="container flex justify-center items-center py-5 md:px-8">
                    <div className="flex items-center">
                        <p className="text-3xl text-white font-menu">Menu</p>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 ">
                <div className="flex flex-col lg:flex-row gap-8 my-5">
                    <div className="lg:w-1/4 ">
                        <div className="relative mb-8 bg-black">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border-b pl-4 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#dcca87] font-bold w-4 h-4" />
                        </div>

                        <div className="mb-8 bg-black p-3">
                            <h3 className="font-menu mb-6 text-white">Filter</h3>

                            <div className="mb-6">
                                <label className="block text-gray-300 mb-3">
                                    Price: ${priceRange[0]} — ${priceRange[1]}
                                </label>
                                <div className="relative">
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimaryBorderHover: '#dcca87',
                                            },
                                            components: {
                                                Slider: {
                                                    handleActiveColor: "white",
                                                    dotActiveBorderColor: 'white',
                                                    handleActiveOutlineColor: 'white',
                                                    handleColor: 'white',
                                                    trackBg: '#dcca87',
                                                    handleSize: 4,
                                                    handleSizeHover: 6,
                                                    railSize: 3
                                                },
                                            },
                                        }}>
                                        <Slider
                                            range
                                            min={10}
                                            max={60}
                                            value={priceRange}
                                            onChange={setPriceRange}
                                        />
                                        <p className='text-white'>${priceRange[0]} - ${priceRange[1]}</p>
                                        {priceRange[0] !== 10 || priceRange[1] !== 60 ? (
                                            <button type='button' onClick={() => {
                                                setPriceRange([10, 60]);
                                                setAppliedPrice([10, 60]);
                                            }} className='btn mx-2 text-white' style={{ border: 'none' }}> Reset <MdOutlineArrowOutward /></button>
                                        ) : null}
                                        <button type='button' onClick={() => setAppliedPrice(priceRange)} className='btn px-4 py-1 text-white' style={{ border: 'none' }}>Apply <MdOutlineArrowOutward /></button>
                                    </ConfigProvider>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[black] p-3'>
                            <h3 className="text-xl text-white font-semibold mb-6">Popular Items</h3>
                            {popularItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 hover:bg-[#161616] transition-colors">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-19 h-23 object-cover bg-[#161616]"
                                    />
                                    <div>
                                        <p className="text-[17px] mb-1 text-white">{item.name}</p>
                                        <p className="text-gray-400 text-sm">{item.priceRange}</p>
                                        <button className="bg-yellow-500 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2">
                                            <ShoppingCart className="w-4 h-4" />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-gray-400">Showing 1–{products.length} of {products.length} results</p>
                            <div className="relative">
                                <select
                                    value={selectedSort}
                                    onChange={(e) => setSelectedSort(e.target.value)}
                                    className="bg-black border border-gray-700 px-4 py-2  text-white appearance-none focus:outline-none focus:border-yellow-500"
                                >
                                    <option>Default sorting</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest First</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((item) => (
                                <MenuCard product={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu