import { lorem, services } from '@/data'

export function Services() {
  return (
    <section className="text-center">
      <h2 className="text-[40px] font-semibold leading-[48px] text-ink">Любые услуги за ваши денишки</h2>
      <p className="mx-auto mt-[18px] w-[560px] text-[18px] leading-[22px]">{lorem}</p>
      <ul className="mx-auto mt-12 grid w-[1046px] grid-cols-2 gap-x-9 gap-y-8 text-left">
        {services.map((service) => (
          <li key={service.title} className="relative h-[287px] overflow-hidden rounded-[10px] bg-card py-[22px] pl-[27px]">
            <h3 className="whitespace-pre-line text-[22px] font-semibold leading-[30px] text-ink">{service.title}</h3>
            <p className="mt-[15px] w-[240px] text-[16px] leading-[19px]">{lorem}</p>
            <img src={service.image} alt="" className={`absolute right-0 ${service.offset}`} />
          </li>
        ))}
      </ul>
    </section>
  )
}
