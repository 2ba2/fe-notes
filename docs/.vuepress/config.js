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
              'Array_concat',
              'Array_copyWithin',
              'Array_entries',
              'Array_every',
              'Array_fill',
              'Array_filter',
              'Array_find',
              'Array_findIndex',
              'Array_forEach',
              'Array_includes',
              'Array_indexOf'
            ]
          }  
        ]
      }
    }    
  }