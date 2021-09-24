const MarkdownIt = require('markdown-it')
const container = require('markdown-it-container')
const matter = require('gray-matter')
const anchor = require('markdown-it-anchor')
const toc = require('markdown-it-toc-done-right')

const reactMarkdownTemplate = (importSynx, content) => {
    return `
    import * as React from 'react'
    import Block from 'Block'
    import CodeExample from 'CodeExample'
    import Highlight from 'react-highlight'
    ${importSynx}
    function MdReact () {
        return <div className='happy-ui-md-container'>${content}</div>
    }
    export default MdReact
  `
}

module.exports = function mdLoader(source) {
    const md = new MarkdownIt({
        html: true,
        breaks: true,
        typographer: true,
        highlight(str, lang) {
            const template = `
            <Highlight
                lang={\`${lang}\`}>
                {\`${str}\`}
            </Highlight>
            `
            return template
        }
    })
        // 设置永久anchor
        .use(anchor, {
            level: 3,
            permalink: anchor.permalink.linkInsideHeader({
                symbol: `
            <span class="happy-ui-anchor"></span>
            <span aria-hidden="false">#</span>
          `,
                placement: 'before'
            })
        })
        // 设置目录
        .use(toc, {
            level: 2
        })
        .use(container, 'desc', {
            render(tokens, index) {
                if (tokens[index].nesting === 1) {
                    // opening tag
                    return `<Block>`
                } else {
                    // closing tag
                    return '</Block>'
                }
            }
        })
        // 设置demo代码块
        // https://www.npmjs.com/package/markdown-it-container
        .use(container, 'demo', {
            render(tokens, index) {
                const get = () => {
                    const map = new Map()
                    let startIndex = undefined

                    for (let i = 0; i < tokens.length; i++) {
                        // 标签打开
                        const start = tokens[i].nesting === 1 && tokens[i].type === 'container_demo_open'
                        // 标签闭合
                        const end = tokens[i].nesting === -1 && tokens[i].type === 'container_demo_close'

                        if (start) {
                            startIndex = i
                            map.set(i, undefined)
                        }

                        if (startIndex && end) {
                            let endIndex = i
                            for (let i = startIndex; i < endIndex; i++) {
                                if (tokens[i].type === 'fence') {
                                    map.set(startIndex, {
                                        code: tokens[i].content,
                                        lang: tokens[i].info,
                                        end: endIndex
                                    })
                                }
                            }
                        }
                    }
                    return map
                }

                if (tokens[index].nesting === 1) {
                    const m = get()
                    const desc = tokens[index + 2].content.replace(/\n/g, '<br/>')
                    const current = m.get(index)

                    return `
                            <CodeExample
                            desc={\`${desc}\`}
                            lang={\`${current?.lang}\`}
                            example={<>${current?.code}</>}
                            code={\`${current?.code}\`}
                            >
                        `
                } else {
                    return '</CodeExample>'
                }

            }
        })
    // gray-matter
    // https://github.com/jonschlinkert/gray-matter
    const { content, data } = matter(source)
    const mdToHtml = md
        .render(content)
        .replace(/<hr>/g, '<hr />')
        .replace(/<br>/g, '<br />')
        .replace(/class=/g, 'className=')

    return reactMarkdownTemplate(data.import, mdToHtml)
}