"use client"

import { useState } from "react"
import axiosInstance from "@/libs/axios"
import BrandPageLayout from "@/components/layout/BrandPageLayout"
import ContactInfo from "@/components/common/ContactInfo"
import Checkbox from "@/components/form/Checkbox"
import PrivatePolicy from "@/components/common/PrivatePolicy"

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
      } = await axiosInstance.post("/api/franchisee", formData)
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
    <BrandPageLayout>
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
          onSubmit={handleSubmitContact}
          className="w-full shadow-form px-6 pb-10 lg:px-12 lg:pt-12 lg:pb-16 flex flex-col items-center space-y-10 z-10 text-sm lg:text-base"
        >
          <h3 className="text-3xl font-black hidden lg:block">제휴문의</h3>

          <div className="w-full flex flex-col space-y-4">
            {form.map(({ name, label, placeholder, isRequired }) => (
              <label
                key={label}
                className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center"
              >
                <p className="font-bold lg:w-3/12">
                  {label}
                  {isRequired && <span className="text-red"> *</span>}
                </p>
                <input
                  value={formData[name]}
                  onChange={handleChangeFormData}
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
    </BrandPageLayout>
  )
}
