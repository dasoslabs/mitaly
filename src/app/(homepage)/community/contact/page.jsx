"use client"

import { useState } from "react"
import axiosInstance from "@/libs/axios"
import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import ContactInfo from "@/components/common/ContactInfo"
import PrivatePolicy from "@/components/common/PrivatePolicy"
import Checkbox from "@/components/form/Checkbox"

import { form } from "../data"

const initialFormData = form.reduce((acc, field) => {
  acc[field.name] = ""
  return acc
}, {})

export default function ContactPage() {
  const [formData, setFormData] = useState({ ...initialFormData })
  const [checked, setChecked] = useState(false)

  const handleChangeFormData = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmitContact = async (e) => {
    e.preventDefault()

    try {
      const {
        data: { success, message },
      } = await axiosInstance.post("/api/associate", formData)
      if (!success) {
        window.alert(message)
        return
      }

      window.alert("접수되었습니다. 빠르게 확인 후 회신드리겠습니다.")
      setFormData({ ...initialFormData })
      setChecked(false)
    } catch (e) {
      console.log("--Axios error--")
      console.log(e)
    }
  }

  return (
    <CommunityPageLayout>
      <div className="max-w-pc m-auto flex flex-col lg:flex-row justify-center lg:space-x-6 lg:mt-24">
        <ContactInfo
          title="제휴문의"
          subTitle={"가맹상담에 대해\n궁금한 점이 있으신가요?"}
          subDescription={
            "하단에 버튼을 눌러 문의주시면\n빠른 시일 내에 연락드리겠습니다."
          }
          href="#"
          hrefText="가맹문의 바로가기"
          className="w-full py-10 px-6"
        />

        <form
          onSubmit={handleSubmitContact}
          className="w-full shadow-form px-6 pb-10 lg:px-12 lg:pt-12 lg:pb-16 flex flex-col items-center space-y-10 z-10 text-sm lg:text-base"
        >
          <h3 className="text-3xl font-black hidden lg:block">제휴문의</h3>

          <div className="w-full flex flex-col space-y-4">
            {form.map(
              ({
                name,
                label,
                placeholder,
                isRequired,
                type,
                labelClass,
                inputClass = "",
              }) => (
                <label
                  key={label}
                  className={`flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center ${type === "input" ? "lg:items-center" : "lg:items-start"} ${labelClass}`}
                >
                  <p
                    className={`font-bold w-3/12 ${type === "textarea" && "pt-2"}`}
                  >
                    {label}
                    {isRequired && <span className="text-error"> *</span>}
                  </p>
                  {type === "input" ? (
                    <input
                      name={name}
                      value={formData[name]}
                      onChange={handleChangeFormData}
                      type="text"
                      placeholder={placeholder}
                      className={`lg:w-9/12 border border-light-gray outline-none rounded py-3 px-4 focus:border-black`}
                      required={isRequired}
                    />
                  ) : (
                    <textarea
                      name={name}
                      value={formData[name]}
                      onChange={handleChangeFormData}
                      placeholder={placeholder}
                      className={`lg:w-9/12 resize-none outline-none border border-light-gray outline-none rounded py-3 px-4 focus:border-black ${inputClass}`}
                      required={isRequired}
                    />
                  )}
                </label>
              ),
            )}
          </div>

          <div className="w-full flex flex-col space-y-4">
            <PrivatePolicy />
            <Checkbox checked={checked} setChecked={setChecked} required={true}>
              <p className="text-[#999]">개인정보 수집 및 이용에 동의합니다.</p>
            </Checkbox>
          </div>
          <button className="w-full lg:w-auto rounded-lg bg-black text-white lg:text-lg py-4 px-20">
            제출하기
          </button>
        </form>
      </div>
    </CommunityPageLayout>
  )
}
