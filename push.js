const push = require("web-push");

let vapidKeys = {
    publicKey: 'BN6bSsnsvYOD35xp2oPVUaBQxJT4CCC0CYspiZdg7GIxNzxURRzzaUuhkBVgWRBidzsug1_5mU_mTvgXl_e-mXI',  
    privateKey: '1D5OrBKK16S_w48ufCsse1F9HwY_cR0vxH8OAQMJ1Ew'
  }

push.setVapidDetails('mailto:kelxwii@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, "some random message")