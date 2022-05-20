import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/christina-grannas/stina.tech.git', // Update to point to your repository
  user: {
   name: 'Christina Grannas', // update to use your name
   email: 'christina.grannas@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);