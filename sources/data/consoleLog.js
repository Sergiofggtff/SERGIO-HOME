import * as THREE from 'three/webgpu'

const text = `
███████╗███████╗██████╗  ██████╗ ██╗ ██████╗ 
██╔════╝██╔════╝██╔══██╗██╔════╝ ██║██╔═══██╗
███████╗█████╗  ██████╔╝██║  ███╗██║██║   ██║
╚════██║██╔══╝  ██╔══██╗██║   ██║██║██║   ██║
███████║███████╗██║  ██║╚██████╔╝██║╚██████╔╝
╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝ 

╔═ Intro ═══════════════╗
║ 欢迎来到 Sergio's Home。
║ 既然你打开了控制台，说明你也是个好奇的人。
║ 这里记录我的 AI 产品、商业化增长、创业项目和一点点折腾精神。
║ 谢谢你来翻我的控制台，隐藏入口被你发现了。
╚═══════════════════════╝

╔═ Contact ═════════════╗
║ Mail   ⇒ 2281830298@qq.com
║ GitHub ⇒ https://github.com/Sergiofggtff
╚═══════════════════════╝

╔═ Three.js ════════════╗
║ This 3D world is rendered with Three.js (release: ${THREE.REVISION})
║ https://threejs.org/
║ The original portfolio was created by Bruno Simon and the Three.js community.
╚═══════════════════════╝

╔═ Source code ═════════╗
║ Based on Bruno Simon Folio 2025, customized for Sergio's personal site.
║ Original project: https://github.com/brunosimon/folio-2025
╚═══════════════════════╝

╔═ Musics ══════════════╗
║ The original music was made for Bruno Simon Folio 2025 by Kounine.
║ https://linktr.ee/Kounine
║ The music is under CC0 license.
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
