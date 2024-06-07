import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  srcDir: 'src',
  title: '我的学习笔记',
  description: '我的在线学习笔记',
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/node/': { base: '/node/', items: sideBarNode() },
      '/vue/': { base: '/vue/', items: sideBarVue() },
      '/database/': { base: '/database/', items: sideBarDatabase() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      next: '下一页',
      prev: '上一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    outline: {
      label: '页面导航'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '关于', link: '/about' },
    {
      text: '笔记',
      items: [
        {
          text: 'Node.js',
          link: '/node/what-is-node/',
          activeMatch: '/node/'
        },
        {
          text: 'Vue.js',
          link: '/vue/what-is-vue/',
          activeMatch: '/vue/'
        },
        {
          text: '数据库',
          link: '/database/what-is-database/',
          activeMatch: '/database/'
        }
      ]
    }
  ]
}

function sideBarNode(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Node.js',
      items: [
        { text: '什么是 Node.js ?', link: 'what-is-node' },
        { text: 'Corepack', link: 'corepack' },
        { text: 'Modules', link: 'modules' },
        { text: 'Stream', link: 'stream' }
      ]
    }
  ]
}

function sideBarVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Vue.js',
      items: [
        { text: '什么是 Vue.js ?', link: 'what-is-vue' },
        { text: 'components', link: 'components' }
      ]
    }
  ]
}

function sideBarDatabase(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '数据库',
      items: [
        { text: '什么是 数据库 ?', link: 'what-is-database' },
        { text: 'mysql', link: 'mysql' }
      ]
    }
  ]
}
