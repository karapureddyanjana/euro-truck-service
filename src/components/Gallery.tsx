import gallery from '@/assets/gallery.png'

export function Gallery() {
  return (
    <section className="py-14 text-center">
      <h2 className="text-[40px] font-semibold leading-[48px] text-ink">Фоточки</h2>
      <img src={gallery} alt="Truck service warehouse" className="mx-auto mt-[49px] h-[558px] w-[1110px]" />
      <div className="mt-[23px] flex items-center justify-center gap-[5px]">
        <span className="mr-2 h-2 w-[21px] rounded-full bg-brand" />
        <span className="size-2 rounded-full bg-brand-soft" />
        <span className="size-2 rounded-full bg-brand-soft" />
        <span className="size-2 rounded-full bg-brand-soft" />
      </div>
    </section>
  )
}
