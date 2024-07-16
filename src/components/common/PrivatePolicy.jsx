import { privacyPolicy } from "@/app/(homepage)/brand/data"

export default function PrivatePolicy() {
  return (
    <>
      <p className="font-bold">
        개인정보 수집 및 이용 안내 <span className="text-red">(필수)</span>
      </p>
      <div className="text-xs text-[#999] border border-light-gray bg-bg-gray p-4 max-h-32 overflow-y-scroll leading-5">
        <p>
          ㈜트루팜은 제휴신청을 희망하실 경우 아래와 같이 개인정보를 수집하고
          있습니다.
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
    </>
  )
}
