import logo from '@/assets/logo-dark.png'
import { Clock, Phone, Pin } from '@/components/Icons'
import { address, navLinks } from '@/data'

export function Header() {
  return (
    <header className="relative z-10 bg-white shadow-nav">
      <div className="border-b border-[#f0f0f0]">
        <div className="mx-auto flex h-[70px] w-[1110px] items-center justify-between text-[13px] leading-5 text-mute">
          <div className="flex items-center">
            <div className="flex items-center gap-[9px]">
              <Pin className="size-5" />
              <div>
                <p>Наш адрес:</p>
                <p>{address}</p>
              </div>
            </div>
            <div className="ml-[46px] mr-[19px] h-[50px] w-px bg-[#ebebeb]" />
            <div className="flex items-center gap-[7px]">
              <Clock className="size-5" />
              <div>
                <p>График работы:</p>
                <p>С 8:00 до 22:00 без выходных</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[9px] text-[14px] leading-[18px]">
            <Phone className="size-5" />
            <div>
              <p>+7 (708) 51 51 518</p>
              <p>+7 (700) 51 51 518</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex h-20 w-[1110px] items-center">
        <img src={logo} alt="Euro Truck Service" className="-ml-4 h-[43px] w-[216px]" />
        <ul className="ml-[114px] flex gap-12 text-[15px] text-ink">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="ml-auto flex h-10 w-[179px] items-center justify-center rounded-md bg-brand text-[16px] font-medium text-white">
          Заказать звонок
        </a>
      </nav>
    </header>
  )
}
