import trucks from '@/assets/hero-trucks.png'

export function Hero() {
  return (
    <section className="relative h-[589px] overflow-hidden">
      <div className="mx-auto w-[1110px] pt-[75px]">
        <h1 className="w-[520px] text-[60px] font-semibold leading-[76px] text-ink">Affordable truck service</h1>
        <p className="mt-4 text-[18px] leading-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nunc odio in et, lectus sit lorem id integer.
        </p>
        <a href="#contact" className="mt-8 flex h-[52px] w-[195px] items-center justify-center rounded-md bg-brand text-[18px] font-medium text-white">
          Чета сделать
        </a>
      </div>
      <img src={trucks} alt="Fleet of trucks" className="absolute right-0 top-8 h-[529px] w-[796px] max-w-none" />
    </section>
  )
}
