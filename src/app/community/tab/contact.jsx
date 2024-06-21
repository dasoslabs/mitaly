import ContactInfo from "@/components/common/ContactInfo"
import Checkbox from "@/components/form/Checkbox"

import { privacyPolicy, form } from "../data"

export default function ContactTab() {
  return (
    <div className="max-w-pc m-auto flex justify-center space-x-6 mt-24">
      <ContactInfo
        title="제휴문의"
        subTitle={"가맹상담에 대해\n궁금한 점이 있으신가요?"}
        subDescription={
          "하단에 버튼을 눌러 문의주시면\n빠른 시일 내에 연락드리겠습니다."
        }
        href="#"
        hrefText="가맹문의 바로가기"
        className="w-full"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full shadow-form px-12 pt-12 pb-16 flex flex-col items-center space-y-10 z-10"
      >
        <h3 className="text-3xl font-black">제휴문의</h3>

        <div className="w-full flex flex-col space-y-4">
          {form.map(
            ({
              name,
              label,
              placeholder,
              isRequired,
              type,
              inputClass = "",
            }) => (
              <label
                key={label}
                className={`flex ${type === "input" ? "items-center" : "items-start"}`}
              >
                <p
                  className={`font-bold w-3/12 ${type === "textarea" && "pt-2"}`}
                >
                  {label}
                  {isRequired && <span className="text-red"> *</span>}
                </p>
                {type === "input" ? (
                  <input
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className={`w-9/12 border border-light-gray outline-none rounded py-2 md:py-3 px-4 focus:border-black`}
                    required={isRequired}
                  />
                ) : (
                  <textarea
                    name={name}
                    placeholder={placeholder}
                    className={`w-9/12 resize-none outline-none border border-light-gray outline-none rounded py-2 md:py-3 px-4 focus:border-black ${inputClass}`}
                    required={isRequired}
                  />
                )}
              </label>
            ),
          )}
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
            <p>개인정보 수집 및 이용에 동의합니다.</p>
          </Checkbox>
        </div>
        <button className="rounded-lg bg-black text-white text-lg py-4 px-20">
          제출하기
        </button>
      </form>
    </div>
  )
}