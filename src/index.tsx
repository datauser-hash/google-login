import * as React from 'react'

import './styles.css'
import GoogleSSO from "./googleSSO";

export type PropGoogle = {
  onResolve: Function
  onReject: Function
  client_id: string,
  className?: string
  cookie_policy?: string,
  scope?: string,
  fetch_basic_profile?: boolean,
  hosted_domain?: string,
  openid_realm?: string,
  ux_mode?: string,
  redirect_uri?: string,
  prompt?: string,
  response_type?: string
  login_hint?: string,
  discoveryDocs?: string,
  access_type?: string,
  isDisabled?: boolean,
  children?: any
}


export class GoogleSignIn extends React.Component<PropGoogle> {
  static defaultProps = {
    // client_id: "142305466831-gol9khuhp2ufjh15cktevde0m8hd6vlp.apps.googleusercontent.com",
    cookie_policy: "single_host_origin",
    scope: "email profile",
    fetch_basic_profile: true,
    ux_mode: "popup",
    prompt: "select_account",
    response_type: "permission",
    login_hint: "",
    discoveryDocs: "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
    access_type: "online",
    isDisabled: false,
    redirect_uri: "/",
    hosted_domain: "",
    openid_realm: "",
    className: "",
    children: "Login Google"
  }

  render() {
    return (
      <GoogleSSO
        onResolve={this.props.onResolve}
        onReject={this.props.onReject}
        client_id={this.props.client_id}
        className={this.props.className}
        cookie_policy={this.props.cookie_policy}
        scope={this.props.scope}
        fetch_basic_profile={this.props.fetch_basic_profile}
        hosted_domain={this.props.hosted_domain}
        openid_realm={this.props.openid_realm}
        ux_mode={this.props.ux_mode}
        redirect_uri={this.props.redirect_uri}
        prompt={this.props.prompt}
        response_type={this.props.response_type}
        login_hint={this.props.login_hint}
        discoveryDocs={this.props.discoveryDocs}
        access_type={this.props.access_type}
        isDisabled={this.props.isDisabled}
      >
        {this.props.children}
      </GoogleSSO>
    )
  }
}

