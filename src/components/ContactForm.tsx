import mechanic from '@/assets/mechanic.png'
import { lorem } from '@/data'

const field =
  'block h-14 w-full rounded-lg bg-field px-[22px] text-[16px] text-ink outline-none placeholder:text-[#979797] focus:ring-2 focus:ring-brand/40'

export function ContactForm() {
  return (
    <section id="contact" className="relative h-[687px] overflow-hidden">
      <img src={mechanic} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="relative mx-auto h-full w-[1110px]">
        <div className="absolute right-0 top-[70px] h-[548px] w-[611px] rounded-xl bg-white px-[71px] pt-[37px]">
          <h2 className="text-[56px] font-semibold leading-[68px] text-ink">
            Остались
            <br />
            вопросы?
          </h2>
          <p className="mt-[18px] text-[18px] leading-[22px]">{lorem}</p>
          <form className="mt-[35px]" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Имя" className={field} />
            <input type="tel" placeholder="Номер телефона" className={`${field} mt-[23px]`} />
            <button type="submit" className="mt-[37px] h-[67px] w-full rounded-lg bg-brand text-[18px] font-medium text-white">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
