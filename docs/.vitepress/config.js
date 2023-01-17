export default {
    title: 'WJS的自留地',
    description: 'Just playing around.',
    themeConfig: {
        footer: {
            message: 'Powered By <a href="https://vitepress.vuejs.org/">VitePress</a><br>Released under the MIT License.',
            copyright: 'Copyright © 2022-Present WJS'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wjsoj' }
        ],
        nav: [
            { text: 'Home', link: '/index' },
            { text: 'Wiki', link: 'https://wiki.wjsphy.top' },
            {
                text: 'Project',
                items: [
                    { text: 'Anonymous Question Box', link: 'https://box.wjsphy.top' },
                    { text: 'Personal Blog', link: 'https://blog.wjsphy.top' }
                ]
            },
            { text: 'About Me', link: '/about' }
        ]
    }
  }