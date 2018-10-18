# Contact App

Apps show list of contact

## Prerequisites

Node version : 8.3 or newer

Development using Node version 10.

## Installing

```
git clone https://github.com/merlindasumardi/Contact-Project-RN.git 
cd contact
npm install

npm install -g react-native-cli
```

Run on IOS

make sure xcode linked and using macOs, ios simulator will automatically trigger.

```
react-native run-ios
```

Run on Android

make sure android studio is installed.
```
react-native run-android
```

## Folder Structuring

Component based with folder structuring

```
src
src/components/common
src/reducers
src/actions
src/screens
```

## Build Process

### Generating signing key
```
sudo keytool -genkey -v -keystore contact-key.keystore -alias contact-alias -keyalg RSA -keysize 2048 -validity 10000
```

### Setting up gradle variables

1. Place the contact-key.keystore file under the android/app directory in your project folder.
2. Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following script,
```
MYAPP_RELEASE_STORE_FILE=contact-key.keystore
MYAPP_RELEASE_KEY_ALIAS=contact-alias
MYAPP_RELEASE_STORE_PASSWORD=linda123
MYAPP_RELEASE_KEY_PASSWORD=linda123
```

### Adding signing config to your app's gradle config
Edit the file android/app/build.gradle in your project folder, and add the signing config,

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

### Generate APK

```
cd android
./gradlew assembleRelease
```

## Supporting link

```
https://facebook.github.io/react-native/docs/getting-started
https://facebook.github.io/react-native/docs/signed-apk-android
```

## Authors

```
Merlinda Sumardi
```
