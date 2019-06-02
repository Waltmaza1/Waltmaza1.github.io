const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/Waltmaza1/Waltmaza1.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)