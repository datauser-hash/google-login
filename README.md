#

> Social Google SignIn React

#

![Image](https://d3l69s690g8302.cloudfront.net/wp-content/uploads/2016/09/26191011/SCJZO.png)

#

## Install

```
npm install --save google-facebook-signin-react
```

## Contribute

Create pull request. Thanks ( needed additional github, instagram, twitter)

## Usage

```tsx
import React, { Component } from "react";

import { FacebookSignIn, GoogleSignIn } from "sso-login-react";

export default class App extends Component {
  success(res) {
    return new Promise((resolve, reject) => {
      console.log(res);
      resolve();
    });
  }

  error(err) {
    console.log(err);
  }

  render() {
    return (
      <div>
        <GoogleSignIn
          client_id={"YOUR_CLIENT_ID"}
          onReject={this.error}
          onResolve={this.success}
        >
          Google
        </GoogleSignIn>
      </div>
    );
  }
}
```

## Props

#

> ### Google Button
>
> [More detail: Google Developer](https://developers.google.com)

#

| Prop                |             Type              |                           Default                            | Description                         |
| :------------------ | :---------------------------: | :----------------------------------------------------------: | :---------------------------------- |
| onResolve           | `promise function (required)` |                             `-`                              | Response when logged                |
| onReject            |     `function (required)`     |                             `-`                              | Return rrror                        |
| client_id           |      `string (require)`       |                             `-`                              | id application                      |
| className           |      `string (optional)`      |                             `-`                              | class for button                    |
| cookie_policy       |      `string (optional)`      |                     `single_host_origin`                     |                                     |
| scope               |      `string (optional)`      |                       `email profile`                        |                                     |
| fetch_basic_profile |     `boolean (optional)`      |                            `true`                            | get profile information             |
| hosted_domain       |      `string (optional)`      |                             `-`                              |                                     |
| openid_realm        |      `string (optional)`      |                             `-`                              |                                     |
| ux_mode             |      `string (optional)`      |                           `popup`                            | Text display when start touch       |
| redirect_uri        |      `string (optional)`      |                             `/`                              | only mobile                         |
| prompt              |      `string (optional)`      |                       `select_account`                       | "consent", "select_account", "none" |
| response_type       |      `string (optional)`      |                         `permission`                         | "id_token", "permission", "code"    |
| login_hint          |      `string (optional)`      |                            `true`                            |                                     |
| discoveryDocs       |      `string (optional)`      | `https://www.googleapis.com/discovery/v1/apis/drive/v3/rest` | request permision                   |
| access_type         |      `string (optional)`      |                           `online`                           | "online , "offline                  |
| isDisabled          |     `boolean (optional)`      |                            `true`                            |                                     |
