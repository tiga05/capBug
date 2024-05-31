To reproduce:
- checkout project
- npm install
- npx cap build android
--> it will use the build parameter provided in capacitor.config.ts
  
Result:
- it will build an unsigned apk, although the config is to build a signed apk.
- changing to jarsigner (in capacitor.config.ts) will build an signed apk. But due to the jarsigner is outdated, the app can not installed on Android 11 or higher.
