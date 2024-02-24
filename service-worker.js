self.addEventListener('install', (event) => {
  event.waitUntil(
    self.registration.showNotification('Install this site', {
      actions: [{ action: 'install', title: 'Install' }],
      body: 'Add this site to your home screen for quick access.'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  if (event.action === 'install') {
    event.notification.close();
    // Logic to prompt the user to install the site
  }
});
