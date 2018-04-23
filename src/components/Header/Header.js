/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { RaisedButton, Dialog, FlatButton } from 'material-ui';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      open: false,
    };
  }
  handleClick = () =>
    this.setState({
      open: true,
    });

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>Your Company</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>

            <p className={s.bannerDesc}>Complex web apps made easy</p>
            <RaisedButton label="Default" />
            <RaisedButton
              label="Super Secret Password"
              secondary
              onClick={this.handleClick}
            />
            <Dialog
              open={this.state.open}
              title="Super Secret Password"
              actions={
                <FlatButton
                  label="Ok"
                  primary
                  onClick={this.handleRequestClose}
                />
              }
              onRequestClose={this.handleRequestClose}
            >
              1-2-3-4-5
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
