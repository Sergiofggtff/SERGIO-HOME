import gsap from 'https://esm.sh/gsap@3.12.5'
import { ScrollTrigger } from 'https://esm.sh/gsap@3.12.5/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.timeline-card').forEach((card) =>
{
    gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 92%',
        },
    })
})

gsap.to('.timeline', {
    transformOrigin: 'bottom bottom',
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) =>
        {
            gsap.to('.timeline', {
                scaleY: 1 - self.progress,
            })
        },
    },
})

gsap.utils.toArray('.expText').forEach((text) =>
{
    gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 0.35,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: text,
            start: 'top 90%',
        },
    })
})
