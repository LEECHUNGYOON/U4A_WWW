# U4A_WWW
android mobile

# Android APK Sign
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore u4a_android.keystore app-release-unsigned.apk u4a_android

# APK 최적화
zipalign -v 4 app-release-unsigned.apk u4a_android.apk

# Android APK Decompile
d2j-dex2jar.bat app-release-unsigned.apk

# Android APK Decompile Viewer
jd-gui

# Android 10 higher Version
aab -> apk

java -jar bundletool-all-1.13.2.jar build-apks --bundle=./app-release.aab --output=./app-demo5.apks --ks=./u4a_android.jks --ks-pass=pass:[password] --ks-key-alias=key0 --key-pass=pass:[password]

# 관련자료
Onenote(CORDOVA) -> KeyStore 생성법 에서 확인