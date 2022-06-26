import app from 'flarum/admin/app';

app.initializers.add('echo/hello', () => {
  console.log('[echo/hello] Hello, admin!');
});
