import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capBug',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystoreAlias: 'key0',
      keystoreAliasPassword: 'key0PW',
      keystorePath: '../SingleKey.jks',
      keystorePassword: 'keyStorePW',
      releaseType: 'APK',
      signingType: 'apksigner'
    }
  }
};

export default config;
