import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { createClient } from '@/api/supabase/server';
import Container from '../common/Container';
import ShopInfoPopover from './ShopInfoPopover';

const TopBar = async () => {
  const supabase = await createClient();
  const { data: shopInfo } = await supabase.from('shop_info').select('*').single();

  return (
    <div className="bg-black text-white text-xs py-2">
      <Container>
        <div className="mx-auto flex justify-between items-center">
          {shopInfo && <ShopInfoPopover shopInfo={shopInfo} />}
          <div className="hidden items-center lg:flex">
            <span>
              Visit our showroom in {shopInfo?.address}.{' '}
              <a href="#" className="underline">
                Contact Us
              </a>
            </span>
          </div>
          <div className="flex items-center">
            <span>Call Us: {shopInfo?.phone}</span>
            <div className="hidden items-center ml-4 lg:flex">
              <a href="#" className="mr-2">
                <FaInstagram size={18} />
              </a>
              <a href="#">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
