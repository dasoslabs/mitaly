export function formatTimestampToKRDate(timestamp) {
  const date = new Date(timestamp)

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Seoul",
  }

  const formatter = new Intl.DateTimeFormat("ko-KR", options)
  const formattedDateParts = formatter.formatToParts(date)

  let year, month, day
  formattedDateParts.forEach((part) => {
    if (part.type === "year") year = part.value
    if (part.type === "month") month = part.value
    if (part.type === "day") day = part.value
  })

  return `${year}.${month}.${day}`
}
