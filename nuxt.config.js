// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      title: 'Learn Nuxt3',
      meta: [
        { charset: 'utf-8' }, // 编码方式
        { name: 'robots', content: 'all' }, // 爬虫，搜索协议
        { name: 'copyright', content: 'zhang.demo.com' },  // 版权
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // 视口设置
        { name: 'keywords', content: 'nuxt,nuxt3,Nuxt初始化项目' }, // 关键字 SEO
        { name: 'description', content: 'nuxt,nuxt3,Nuxt初始化项目' } // 描述
      ]
    },
    link:[
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
})
