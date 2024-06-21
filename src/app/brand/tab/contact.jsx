import ContactInfo from "@/components/common/ContactInfo"
import Checkbox from "@/components/form/Checkbox"

import { privacyPolicy, form } from "../data"

export default function ContactTab() {
  return (
    <div className="max-w-pc m-auto flex flex-col lg:flex-row justify-center lg:space-x-6 lg:mt-24">
      <ContactInfo
        title="가맹상담"
        subTitle={"미태리 창업에 대해\n더 궁금하신가요?"}
        subDescription={
          "하단에 버튼을 누르시면\n더욱 자세한 내용을 확인할 수 있습니다."
        }
        href="#"
        className="w-full py-10 px-6"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full shadow-form px-6 pb-10 lg:px-12 lg:pt-12 lg:pb-16 flex flex-col items-center space-y-10 z-10 text-sm lg:text-base"
      >
        <h3 className="text-3xl font-black hidden lg:block">제휴문의</h3>

        <div className="w-full flex flex-col space-y-4">
          {form.map(({ name, label, placeholder, isRequired }) => (
            <label key={label} className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center">
              <p className="font-bold lg:w-3/12">
                {label}
                {isRequired && <span className="text-red"> *</span>}
              </p>
              <input
                name={name}
                type="text"
                placeholder={placeholder}
                className="lg:w-9/12 border border-light-gray outline-none rounded py-3 px-4 focus:border-black"
                required={isRequired}
              />
            </label>
          ))}
        </div>

        <div className="w-full flex flex-col space-y-4">
          <p className="font-bold">
            개인정보 수집 및 이용 안내 <span className="text-red">(필수)</span>
          </p>
          <div className="text-xs text-[#999] border border-light-gray bg-bg-gray p-4 max-h-32 overflow-y-scroll leading-5">
            <p>
              ㈜트루팜은 제휴신청을 희망하실 경우 아래와 같이 개인정보를
              수집하고 있습니다.
            </p>
            <p>
              수집한 개인정보는 정보통신망 이용촉진 및 정보보호 등에 관한 법률과
              기타 관계 법령에 의거하여 보호합니다.
            </p>
            <ul className="list-decimal pl-4 mt-5">
              {privacyPolicy.map((text, idx) => (
                <li key={"privacy policy" + idx}>
                  {text.split("\n").map((sentence, idx) => (
                    <p key={"privacy policy sentence" + idx}>{sentence}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <Checkbox>
            <p className="text-[#999]">개인정보 수집 및 이용에 동의합니다.</p>
          </Checkbox>
        </div>
        <button className="w-full lg:w-auto rounded-lg bg-black text-white lg:text-lg py-4 px-20">
          제출하기
        </button>
      </form>
    </div>
  )
}
