self.addEventListener('beforeinstallprompt', (event) => {
       // Prevent Chrome 67 and earlier from automatically showing the prompt
       event.preventDefault();
       // Stash the event so it can be triggered later.
       deferredPrompt = event;
       // Update UI to notify the user they can add to home screen
       showInstallPromotion();
     });

     function showInstallPromotion() {
       // Your logic to display the install prompt to the user
     }
     
