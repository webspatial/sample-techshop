# How to debug using WebSpatial SDK source code

Step 1: clone the WebSpatial SDK source code

```bash
git clone git@github.com:webspatial/webspatial-sdk.git
```

Step 2: change XRSDKBaseDir value in file '.env' file generated in step 1

```bash
const XRSDKBaseDir = "/path/to/your/XRSDK/";

```

Step 3: run the following command to start web project

```bash
npm run dev:internal
```

now you visit http://localhost:5201/ in you browser

Step 4: open XCode project in WebSpatial SDK source code, which is located in

```bash
YOUR_XRSDK/cli/template/visionOSApp
```

Step 5: change entry page of your project in XCode project

```bash
File:
YOUR_XRSDK/cli/template/visionOSApp/web-spatial/libs/webView/manifest.swift

Line 8


Change start_url
var start_url: String = "http://localhost:5201/"
```

Step 6
run you XCode project, it will open your web project in XCode simulator

Step 7: you can change your webspatial SDK source to see the effect immediately

Note: don't run npm run dev:avp, use npm run dev:internal instead
