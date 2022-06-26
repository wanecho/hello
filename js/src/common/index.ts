import app from 'flarum/common/app';

app.initializers.add('echo/hello', () => {
  console.log('[echo/hello] Hello, forum and admin!');
});
