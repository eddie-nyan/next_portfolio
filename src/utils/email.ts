export const handleResumeRequest = () => {
  const subject = "Request for Resume - Portfolio Website"
  const body = "Hello Nyan Lin Htut,\n\nI would like to request a copy of your resume.\n\nBest regards,"
  const mailtoLink = `mailto:nyanlinhtut.mm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
} 