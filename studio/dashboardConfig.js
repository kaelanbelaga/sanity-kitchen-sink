export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecad756c16d84698050e169',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ka9p87om',
                  apiId: 'dd78399d-4da3-4314-a753-df2bd9491c3c'
                },
                {
                  buildHookId: '5ecad756566965f6fb3ccd28',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sq8pzwmw',
                  apiId: '287189cf-36dd-4a33-91f1-91f0d353926c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaelanbelaga/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sq8pzwmw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
