Title: Create an app for MCA department using Tabs Navigation.

Objectives:
To be able to create Tabs navigation.
To be able to work with routing.
To create fab button and action on fab button.
To work with notifications.


Lab Exercise: Create an app for MCA department consisting of the following:
1.Faculty information
2.Department Vision and Mission
3.Notification of any upcoming event.
4.WebView for the MCA website
5.Feedback form. 


#how to depoly your ionic app on to emulator
first install @ionic/native by typing following command
1. npm install @ionic-native/core
2. npm install @capacitor/core
3. npm install @capacitor/android

Add native plugins
In my case i am installing LocalNotifications

    1. npm install cordova-plugin-local-notification
    2. npm install @ionic-native/local-notifications
    3. ionic cap sync

After build we get warning for dependencies install those dependencies by npm install

we need to to run following command to run local notification propely as this 
command help us to successfuly build gradle

here more details about androidX https://betterprogramming.pub/what-is-android-x-96fc5593b421
here read more about jetifier https://stackoverflow.com/questions/51680671/what-is-jetifier

    npm install jetifier
    npx jetify
    npx cap sync android

Last step to run following command

## ionic capacitor run android

to run application on emulator







