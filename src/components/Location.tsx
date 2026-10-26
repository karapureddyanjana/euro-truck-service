import map from '@/assets/map.png'
import { lorem } from '@/data'

export function Location() {
  return (
    <section className="relative h-[541px] bg-sect">
      <div className="mx-auto w-[1110px] pt-[95px]">
        <h2 className="text-[48px] font-semibold leading-[1.2] text-ink">Где мы?</h2>
        <div className="mt-[42px] w-[540px] space-y-[13px] text-[18px] leading-[22px]">
          <p>{lorem}</p>
          <p>{lorem}</p>
          <p>{lorem}</p>
        </div>
      </div>
      <img src={map} alt="Map" className="absolute right-0 top-0 h-[541px] w-[708px]" />
    </section>
  )
}
