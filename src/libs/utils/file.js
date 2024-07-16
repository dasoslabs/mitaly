export const downloadFile = async ({ url = "", name = "" } = {}) => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()

    const fileUrl = window.URL.createObjectURL(new Blob([blob]))
    const a = document.createElement("a")
    a.href = fileUrl
    a.download = name // 파일명 설정
    document.body.appendChild(a)
    a.click()
    a.remove()
  } catch (error) {
    console.error("파일 다운로드 중 오류 발생:", error)
  }
}
