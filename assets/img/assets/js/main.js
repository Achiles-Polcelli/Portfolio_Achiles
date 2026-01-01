/* home */
const{ animate, stagger, text } = anime
 
const { chars: chars1 } = text.split('.home_profession-1', { chars: true })
const { chars: chars2 } = text.split('.home_profession-2', { chars: true })

animate(chars1, {
   y: [
      { to: ['100%', '0%'] },
      { to: '-100%', delay: 4000, ease: 'in(3)'}
   ],
   duration: 900,
   ease: 'out(3)',
   delay: stagger(80),
   loop: true,
})

animate(chars2, {
   y: [
      { to: ['100%', '0%'] },
      { to: '-100%', delay: 4000, ease: 'in(3)'}
   ],
   duration: 900,
   ease: 'out(3)',
   delay: stagger(80),
   loop: true,
})

/* swiper */
const swiperProjects = new Swiper('.projects_swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})

/* work */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
      const targetSelector = tab.dataset.target,
            targetContent = document.querySelector(targetSelector)
      tabContents.forEach((content) => content.classList.remove('work-active'))
      tabs.forEach((t) => t.classList.remove('work-active'))

      tab.classList.add('work-active')
      targetContent.classList.add('work-active')
   })
})

/* serviços */
const servicesButtons = document.querySelectorAll('.services_button')

servicesButtons.forEach(button => {
   const heightInfo = document.querySelector('.services_info')
         heightInfo.style.height = heightInfo.scrollHeight + 'px'

   button.addEventListener('click', () => {
      const servicesCards = document.querySelectorAll('.services_card'),
            currentCard = button.parentNode,
            currentInfo = currentCard.querySelector('.services_info'),
            isCardOpen = currentCard.classList.contains('services-open')

      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')

         const info = card.querySelector('.services_info')
               info.style.height = '0'
      })

      if(!isCardOpen){
         currentCard.classList.replace('services-close', 'services-open')
         currentInfo.style.height = currentInfo.scrollHeight + 'px'
      }
   })
})

/* email */
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
   navigator.clipboard.writeText(copyEmail).then(() => {
      copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

      setTimeout(() => {
         copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
      }, 2000)
   })
})

/* footer corrent */ 
const textYear = document.getElementById('footer-year'), 
      currentYear = new Date().getFullYear()

textYear.textContent = currentYear

/* sections ative links */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id,
            top = section.offsetTop - 50, 
            height = section.offsetHeight, 
            link = document.querySelector('.nav_menu a[href*=' + id + ']') 

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)



/* scrol animção */
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 300,
})

sr.reveal(`.home_image, .projects_container, .work_container, 
           .testimonials_container, .contact_container`)
sr.reveal(`.home_data`, {delay: 900, origin: 'bottom'})
sr.reveal(`.home_info`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home_social, .home_cv`, {delay: 1500})
sr.reveal(`.about_data`, {origin: 'left'})
sr.reveal(`.about_image`, {origin: 'right'})
sr.reveal(`.services_card`, {interval: 100})
