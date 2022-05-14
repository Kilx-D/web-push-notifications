const push = require("web-push");
const mongoose = require("mongoose");

let vapidKeys = {
  publicKey:
    "BN6bSsnsvYOD35xp2oPVUaBQxJT4CCC0CYspiZdg7GIxNzxURRzzaUuhkBVgWRBidzsug1_5mU_mTvgXl_e-mXI",
  privateKey: "1D5OrBKK16S_w48ufCsse1F9HwY_cR0vxH8OAQMJ1Ew",
};

push.setVapidDetails(
  "mailto:kelxwii@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cRVSlbfhI9k:APA91bH1VuNt3DmBc_ISV2Qzez6SnXm-RvKuwQzvK2TNBXnb5CIZEm_cbElXf-8kKAB4WxqNtoztCsPxnJO-of1fBDeK3urUpzw7uFkZZAw3DHIP9-mJHAtTH_TrmyUOOYQMPblafVdh",
  expirationTime: null,
  keys: {
    p256dh:
      "BDbRxrHbqz6poiaya-tnrzOn4tNwR_bOVXoqcrqAPPBQlprCAupiWLUyfyV6T7wx9f9LiLIDlVb_yQfMroXJBQE",
    auth: "UiWUEGq22vOSzNXjgRASZg",
  },
};

push.sendNotification(sub, "some random message");
