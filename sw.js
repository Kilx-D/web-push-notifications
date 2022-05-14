self.addEventListener("push", function (e) {
  var options = {
    body: "eat something you dingus!!!!!!!!",
    icon: "https://media.discordapp.net/attachments/781794429652566056/975132132986986546/unknown.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "https://media.discordapp.net/attachments/781794429652566056/973277084984160266/VRChat_1920x1080_2022-05-09_02-50-49.450.png?width=731&height=411",
      },
    ],
  };
  e.waitUntil(self.registration.showNotification("niggas be like", options));
});
