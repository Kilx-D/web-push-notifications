self.addEventListener("push", () => {
    self.registration.sendNotification('some test message', {})
});