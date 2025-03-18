// LOADING CSS styling
function loadStyle (url) {
  if (!document.querySelector(`link[href="${url}"]`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
  }
}

loadStyle('../CSS/root.css')
loadStyle('../CSS/title.css')
loadStyle('../CSS/top.css')
loadStyle('../CSS/about_us.css')
loadStyle('../CSS/our_approach.css')
loadStyle('../CSS/ai_chat.css')
loadStyle('../CSS/scaling_business.css')
loadStyle('../CSS/business_partners.css')
loadStyle('../CSS/our_services.css')
loadStyle('../CSS/our_verticles.css')
loadStyle('../CSS/contact_us.css')
loadStyle('../CSS/end.css')
