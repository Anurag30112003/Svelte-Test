var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Anurag30112003/Svelte-Test.git', // Update to point to your repository  
        user: {
            name: 'Anurag30112003', // update to use your name
            email: 'anuragsharma011011@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)