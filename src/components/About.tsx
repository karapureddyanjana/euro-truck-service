import { brands, lorem } from '@/data'

export function About() {
  return (
    <section className="h-[612px]">
      <div className="relative mx-auto h-full w-[1110px] pt-[125px]">
        <h2 className="text-[48px] font-semibold leading-[1.2] text-ink">
          У вас вопрос кто мы а
          <br />
          кто мы блин
        </h2>
        <div className="mt-[17px] w-[570px] space-y-[13px] text-[18px] leading-[22px]">
          <p>{lorem}</p>
          <p>{lorem}</p>
          <p>{lorem}</p>
        </div>
        {brands.map((brand) => (
          <img key={brand.name} src={brand.src} alt={brand.name} className={`absolute ${brand.position}`} />
        ))}
      </div>
    </section>
  )
}
