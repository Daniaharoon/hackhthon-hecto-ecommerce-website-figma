
import React from 'react';
import shopLeftData from './shopleftdata';
import Link from 'next/link';

import { BsChevronDown } from 'react-icons/bs';
import { FaListUl, FaRegHeart, FaSearchPlus } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { HiCheck } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

const ShopLeft = () => {
  const leftIcon = [
    { icon: <CgShoppingCart /> },
    { icon: <FaRegHeart /> },
    { icon: <FaSearchPlus /> },
  ];

  const filterData = [
    { icon: <HiCheck />, title: 'Coaster Furniture' },
    { icon: <HiCheck />, title: 'Fusion Dot High Fashion' },
    { icon: <HiCheck />, title: 'Unique Furniture Restor' },
    { icon: <HiCheck />, title: 'Dream Furniture Flipping' },
    { icon: <HiCheck />, title: 'Young Repurposed' },
    { icon: <HiCheck />, title: 'Green DIY furniture' },
  ];

  const discountData = [
    { icon: <HiCheck />, title: '20% Cashback' },
    { icon: <HiCheck />, title: '5% Cashback Offer' },
    { icon: <HiCheck />, title: '25% Discount Offer' },
  ];

  const reviewData = [
    { pic: '/assets/images/reviews.png', count: '(2341)' },
    { pic: '/assets/images/reviews1.png', count: '(1726)' },
    { pic: '/assets/images/reviews2.png', count: '(258)' },
    { pic: '/assets/images/reviews3.png', count: '(25)' },
  ];

  const categoriesData = [
    { title: 'Prestashop' },
    { title: 'Magento' },
    { title: 'Bigcommerce' },
    { title: 'osCommerce' },
    { title: '3dcart' },
    { title: 'Bags' },
    { title: 'Jewellery' },
    { title: 'Watches' },
  ];

  const priceData = [
    { title: '$0.00 - $150.00' },
    { title: '$150.00 - $350.00' },
    { title: '$150.00 - $504.00' },
    { title: '$450.00 +' },
  ];

  const colorName = [
    { title: 'Blue', color: '/assets/images/color1.png' },
    { title: 'Orange', color: '/assets/images/color2.png' },
    { title: 'Brown', color: '/assets/images/color3.png' },
    { title: 'Green', color: '/assets/images/color4.png' },
    { title: 'Purple', color: '/assets/images/color5.png' },
    { title: 'Sky', color: '/assets/images/color6.png' },
  ];

  return (
    <>
      <div>
        <div className="bg-shade2">
          <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
            <h2 className="text-navy">Shop Left Sidebar</h2>
            <div className="flex gap-2">
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className="text-pink pb-[114px]"> . Shop Left Sidebar</h4>
            </div>
          </div>
        </div>

        <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between">
          <div>
            <h2 className="text-navy text-[28px] lg:text-[30px] 2xl:text-[34px]">
              Ecommerce Accessories & Fashion Item
            </h2>
            <h4 className="text-extralight font-lato">
              About 9,620 results (0.62 seconds)
            </h4>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-9">
              <div className="flex gap-2">
                <h3 className="text-navy font-normal">Per Page: </h3>
                <h3 className="border rounded-sm border-primary py-4 px-8"></h3>
              </div>
              <div className="flex gap-2">
                <h3 className="text-navy font-normal">Sort By: </h3>
                <h4 className="text-extralight border rounded-sm border-primary py-1 px-3 font-lato flex items-center gap-1">
                  Best Match <span>
                    <BsChevronDown />
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="md:container md:px-[1.3rem] px-[.8rem] md:flex md:mt-24 mt-6 mb-32">
          <div className="w-[350px]">
            <div>
              <h3 className="text-navy underline pb-4 text-[20px]">Product Brand</h3>
              {filterData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-secondary text-light_purple border-none" type="checkbox" />
                  <h4 className="text-tertiary font-lato font-medium">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-max">
            {shopLeftData.map((item, index) => (
              <div key={index} className="mb-8">
                <div className="md:flex gap-6 boxShadow p-6 items-center">
                  <img src={item.pic} alt="" />
                  <div>
                    <h3 className="text-navy">{item.title}</h3>
                    <div className="flex items-center gap-4 mt-3">
                      {leftIcon.map((iconItem, idx) => (
                        <Link key={idx} href="">
                          <span className="text-xl text-navy">{iconItem.icon}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLeft;
