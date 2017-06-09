# Your Plugin Name

> Disclaimer: nativescript-trialy supports only the Android platform at the moment.

nativescript-trialy is a thin wrapper around the Android `Trialy` library. Trialy makes it super easy to create a free trial for your in-app-purchases. Trialy takes care of the heavy lifting for you (using server-side checks with customizable grace periods to allow offline use, for example) so you can focus on developing an amazing app.

Check out https://www.trialy.io for more information about Trialy.

## (Optional) Prerequisites / Requirements

Register an account at https://www.trialy.io and create an entry for your desired application Id.

Configure the trial settings following the steps on the website.

## Installation

```shell
tns plugin add nativescript-trialy
```

## Usage 

**Android:**
Initialize Trialy on *ngInit* or home page's onNavigatedTo. Afterwards call `checkTrial` to check current status of trial, and `startTrial` to begin counting down the duration of the trial feature: 
* JavaScript  
    ```Javascript
        const Trialy = require("nativescript-trialy").Trialy;
        const Trialy_App_key = "12ABCDE7GS12899ZGEG";
        const Trialy_Awesome_Feature_SKU = "awesome_feature";

        onNavigatedTo: function(args) {
            ...

            Trialy.initialize(Trialy_App_key);

            Trialy.checkTrial(Trialy_Awesome_Feature_SKU, (status, timeLeft) => {

            });
        }
    ```

## License

Apache License Version 2.0, January 2004
