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

