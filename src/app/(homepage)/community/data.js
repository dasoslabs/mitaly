export const menu = [
  { href: "/community/notice", text: "공지사항" },
  { href: "/community/news", text: "뉴스룸" },
  { href: "/community/contact", text: "제휴문의" },
]

export const form = [
  {
    name: "Type",
    label: "문의유형",
    placeholder: "문의유형을 입력해주세요.",
    isRequired: true,
    type: "input",
    labelClass: "lg:pb-10",
  },
  {
    name: "Name",
    label: "이름",
    placeholder: "성함을 입력해주세요.",
    isRequired: true,
    type: "input",
  },
  {
    name: "Phone",
    label: "연락처",
    placeholder: "연락처를 입력해주세요.",
    isRequired: true,
    type: "input",
    labelClass: "lg:pb-10",
  },
  {
    name: "Title",
    label: "제목",
    placeholder: "제목을 입력해주세요.",
    isRequired: true,
    type: "input",
  },
  {
    name: "Content",
    label: "내용",
    placeholder: "문의 내용을 입력해주세요.",
    isRequired: true,
    type: "textarea",
    inputClass: "min-h-[200px]",
  },
]

export const privacyPolicy = [
  "수집 개인정보 항목 : [필수] 이름, 전화번호, 이메일",
  "개인정보의 수집 및 이용목적 : 제휴신청에 따른 본인확인 및 원활한 의사소통 경로 확보",
  "개인정보의 이용기간 : 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에 해당 정보를 지체 없이 파기합니다.\n단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 일정기간 동안 개인정보를 보관할 수 있습니다.\n그 밖의 사항은 개인정보처리방침을 준수합니다.",
]
