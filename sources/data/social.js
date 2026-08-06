const hiddenResumeHosts = new Set([
    'sergio-home.vercel.app',
    'sergiohomee.vercel.app',
])

const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams()
const shouldHideResume = typeof window !== 'undefined' && (
    hiddenResumeHosts.has(window.location.hostname) ||
    params.get('variant') === 'no-jd' ||
    params.get('variant') === 'no-baidu' ||
    params.get('variant') === 'no-resume'
)

const links = [
    { name: 'Email', url: 'mailto:2281830298@qq.com', align: 'right' },
    { name: 'Phone', url: 'tel:15914377398', align: 'right' },
    { name: 'WeChat', url: 'https://weixin.qq.com/', align: 'right' },
    { name: 'GitHub', url: 'https://github.com/Sergiofggtff', align: 'left' },
    { name: 'Rednote', url: 'https://www.xiaohongshu.com/search_result?keyword=11521319746', align: 'left' },
    { name: 'Resume', url: '/resume/xiongxiexi-product-manager.pdf', align: 'left' },
]

export default shouldHideResume ? links.filter((link) => link.name !== 'Resume') : links
