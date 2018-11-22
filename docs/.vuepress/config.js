module.exports = {
    title: 'FE notes',
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
        '/JavaScript/': [
          {
            title: 'Array',
            collapsable: true,
            children: [
              'Array_isArray',
              'Array_from',
              'Array_of',
              'Array_concat'
            ]
          }      
        ]
      }
    }    
  }