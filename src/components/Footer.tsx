import logo from '@/assets/logo-light.png'
import { Facebook, Instagram, Pin, WhatsApp } from '@/components/Icons'
import { address, footerLinks, phones, socials } from '@/data'

const heading = 'text-[20px] font-semibold leading-7'
const row = 'flex items-center gap-1.5 text-[16px] leading-[27px]'

export function Footer() {
  return (
    <footer className="relative h-[391px] bg-dark text-white">
      <div className="mx-auto grid w-[1110px] grid-cols-[258px_298px_298px_1fr] pt-[47px]">
        <div>
          <img src={logo} alt="Euro Truck Service" className="-ml-[19px] mt-[3px] h-10 w-[200px]" />
        </div>
        <div>
          <h3 className={heading}>Главная</h3>
          <ul className="mt-[9px] text-[16px] leading-[27px]">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={heading}>Контакты</h3>
          <ul className="mt-[9px] text-[16px] leading-[27px]">
            {phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
          </ul>
          <p className={`${row} mt-3.5`}>
            <WhatsApp className="size-[18px]" />
            {phones[0]}
          </p>
          <p className={`${row} mt-2`}>
            <Pin className="size-[18px]" />
            {address}
          </p>
        </div>
        <div>
          <h3 className={heading}>Следите за нами</h3>
          <p className="mt-3 flex items-center gap-2 text-[16px] leading-[27px]">
            <Facebook className="size-6" />
            {socials[0]}
          </p>
          <p className="mt-2.5 flex items-center gap-2 text-[16px] leading-[27px]">
            <Instagram className="size-6" />
            {socials[1]}
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[329px]">
        <div className="mx-auto w-[1124px]">
          <div className="h-px bg-[#3b3b3b]" />
          <p className="mt-5 text-[12px] leading-[18px] text-[#d9dbe1]">Copyright © Truck Services 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
