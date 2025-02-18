import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Icon } from 'antd';
import Router from 'next/router';

@inject('app')
@observer
class Index extends React.Component {
  componentDidMount() {
    const { app } = this.props;
    app.initAccountsDB();
    app.readAccounts();
  }

  render() {
    const { app } = this.props;
    return (
      <div>
        <div className="main">
          <div className="header">
            {app.accounts ? (
              <button
                type="button"
                className="menuButton"
                onClick={() => {
                  Router.push('/app');
                }}
              >
                {app.accounts.length === 0 ? (
                  <div>
                    <span>Start</span>&nbsp;
                    <Icon type="user" />
                  </div>
                ) : (
                  <div>
                    <Icon type="user" />
                  </div>
                )}
              </button>
            ) : (
              <div className="loadingIcon">
                <Icon type="loading" />
              </div>
            )}
          </div>
          <div className="container">
            <div className="text">
              <h1>
                <b>Unblok.email</b>
              </h1>
              <p>
                It is the fastest way to create immutable and secure
                conversations. What makes Unblok.email unique is auditable protection
                from data leakages.
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="footerItem">
              <Icon type="github" />
              &nbsp;
              <a href="https://github.com/unblok/nolik" target="_blank">
                Github
              </a>
            </div>
            <div className="footerItem">
              <button
                type="button"
                onClick={() => {
                  Router.push('/for-business');
                }}
              >
                For business
              </button>
            </div>
            <div className="footerItem">
              <button
                type="button"
                onClick={() => {
                  Router.push('/what-is-nolik');
                }}
              >
                About
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .main {
            height: 100vh;
            background: #2196f3;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
          }

          .header {
            height: calc(32px + 2em);
            padding: 2em 2em 0 2em;
            text-align: right;
          }

          .menuButton {
            border: none;
            background: transparent;
            padding: 0;
            margin: 0;
            text-align: left;
            box-shadow: none;
            outline: 0;
            cursor: pointer;
            height: 32px;
            font-size: 32px;
            line-height: 32px;
            text-align: right;
          }

          .menuButton span {
            text-decoration: underline;
            line-height: 32px;
          }

          .container {
            height: calc(100vh - 32px - 2em - 20px - 2em);
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
          }

          .container .text {
            align-self: center;
            max-width: 600px;
            padding: 2em;
          }

          .text h1 {
            font-size: 2.4em;
            color: #000;
            margin: 0 0 1em 0;
          }
          .text p {
            font-size: 1.65em;
            line-height: 1.4em;
          }
          .text p a {
            color: #fff;
            text-decoration: none;
          }

          .footer {
            height: 20px;
            width: 100%;
            padding: 0 2em 2em 2em;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .footerItem {
            display: inline-block;
            margin-right: 20px;
          }

          .footerItem a {
            text-decoration: underline;
            color: #eee;
          }

          .footerItem button {
            border: none;
            background: transparent;
            padding: 0;
            margin: 0;
            text-align: center;
            box-shadow: none;
            outline: 0;
            cursor: pointer;
            color: #fff;
            font-weight: 400;
            text-decoration: underline;
          }

          .menu {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            z-index: 100;
            display: none;
          }

          .menu.active {
            display: block;
          }

          .loadingIcon {
            font-size: 2em;
          }
        `}</style>
      </div>
    );
  }
}

Index.propTypes = {
  app: PropTypes.object,
};

export default Index;
