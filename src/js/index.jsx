import "../../node_modules/font-awesome/scss/font-awesome.scss";
import "../../node_modules/unsemantic/assets/sass/unsemantic-grid-responsive.scss";

import "../scss/header.scss";
import "../scss/identities.scss";

import "../scss/chem-elements.scss";
import "../scss/index.scss"

import React from 'react';
import ReactDOM from 'react-dom';

import {FormattedMessage, IntlProvider, addLocaleData} from 'react-intl';
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import ja from 'react-intl/locale-data/ja'

addLocaleData([...zh, ...en, ...ja]);
import zh_Hans from '../locale/zh-Hans.yaml'
import zh_Hant from '../locale/zh-Hant.yaml'
import en_ from '../locale/en.yaml'
import ja_ from '../locale/ja.yaml'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocaleChange = this.handleLocaleChange.bind(this);
    }
    handleLocaleChange(l, e) {
        this.props.onLocaleChange(l)
    }
    render() {
        return (
            <div className="main-container">
                <div className="section header grid-container">
                    <div className="picture-container grid-30">
                        <img className="picture"
                             src="https://secure.gravatar.com/avatar/06bd7a0d2a6c1d0dc78758ecb0a99b88?r=g&s=256"/>
                    </div>
                    <div className="grid-70">
                        <h1 className="greeting en">
                            Hey, it's <span className="no-wrap"><a className="chem-element"
                                                                   href="https://en.wikipedia.org/wiki/Radionuclide">Ri</a>ko</span>
                        </h1>
                        <h1 className="greeting cn">
                            <small className="prefix">
                                <FormattedMessage
                                    id='hello'
                                />
                            </small>
                            <span className="name no-wrap">
                                <FormattedMessage
                                    id='is'
                                />
                                <span className="face">(&lt;ゝω·) ~☆</span></span>
                        </h1>
                        <div className="labels">
                            <a alt="home" className="label" href="https://rikako.moe">
                                <i aria-hidden="true" className="fa fa-map-marker"></i>
                                <span className="title">
                                    <FormattedMessage
                                        id='rikako'
                                    />
                                </span>
                                <span className="link">rikako.moe</span>
                            </a>
                            <div alt="languages" className="label">
                                <i aria-hidden="true" className="fa fa-language"></i>
                                <span className="title">
                                    <FormattedMessage
                                        id='lang'
                                    />
                                </span>
                                <span className="content">
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("zh",e)}>中文</a> / {" "}
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("en",e)}>English</a> / {" "}
                                    <a href="javascript:;" className="link" onClick={(e) => this.handleLocaleChange("ja",e)}>日本語</a></span>
                            </div>
                            <div alt="education" className="label">
                                <i aria-hidden="true" className="fa fa-university"></i>
                                <span className="title">
                                    <FormattedMessage
                                        id='currentEdu'
                                    />
                                </span>
                                <span className="content">Northeastern University(CN)</span>
                            </div>
                        </div>
                        <div className="labels">
                            <div alt="browser" className="label">
                                <i aria-hidden="true" className="fa fa-chrome"></i>
                                <span className="content">Chrome</span>
                            </div>
                            <div alt="editor" className="label">
                                <i aria-hidden="true" className="fa fa-keyboard-o"></i>
                                <span className="content">Jetbrains</span>
                            </div>
                            <div alt="spaces or tabs" className="label">
                                <i aria-hidden="true" className="fa fa-i-cursor"></i>
                                <span className="content">4 spaces</span>
                            </div>
                            <div alt="platforms" className="label">
                                <i aria-hidden="true" className="fa fa-windows"></i>
                                <span className="content">10</span>
                                <i aria-hidden="true" className="fa fa-linux"></i>
                                <span className="content">Debian</span>
                                <span className="content">Arch</span>
                                <i aria-hidden="true" className="fa fa-android"></i>
                                <span className="content">H2OS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section identity-category grid-container">
                    <h2 className="title">
                        <i aria-hidden="true" className="fa fa-chevron-right"></i>
                        <ruby>梨
                            <rp>(</rp>
                            <rt>り</rt>
                            <rp>)</rp>
                            子
                            <rp>(</rp>
                            <rt>こ</rt>
                            <rp>)</rp>
                        </ruby>
                        <span className="no-wrap">
                        <small className="tag no-wrap">
                            <i aria-hidden="true" className="fa fa-tag"></i>
                            <FormattedMessage
                                id='skills'
                            />
                        </small>
                    </span>
                    </h2>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-html5"></i>
                                <span className="where">HTML</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-css3"></i>
                                <span className="where">CSS</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-terminal"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='operation'
                                    />
                                </span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="#!">
                                <i aria-hidden="true" className="fa fa-circle-o"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='machineLearning'
                                    />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="section identity-category grid-container">
                    <h2 className="title">
                        <i aria-hidden="true" className="fa fa-chevron-right"></i>
                        <ruby>梨
                            <rp>(</rp>
                            <rt>Lí</rt>
                            <rp>)</rp>
                            子
                            <rp>(</rp>
                            <rt>zi</rt>
                            <rp>)</rp>
                        </ruby>
                        <span className="no-wrap">
                        <small className="tag">
                            <i aria-hidden="true" className="fa fa-tag"></i>
                            <FormattedMessage
                                id='contacts'
                            />
                        </small>
                    </span>
                    </h2>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="https://github.com/rikakomoe">
                                <i aria-hidden="true" className="fa fa-github"></i>
                                <span className="where">GitHub</span>
                                <span className="link">@rikakomoe</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="https://gitlab.com/rikakomoe">
                                <i aria-hidden="true" className="fa fa-gitlab"></i>
                                <span className="where">GitLab</span>
                                <span className="link">@rikakomoe</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="identities grid-50">
                        <li className="identity">
                            <a href="https://twitter.com/rikakomoe">
                                <i aria-hidden="true" className="fa fa-twitter"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='twitter'
                                    />
                                </span>
                                <span className="link">@rikakomoe</span>
                            </a>
                        </li>
                        <li className="identity">
                            <a href="https://weibo.com/u/3126581945">
                                <i aria-hidden="true" className="fa fa-weibo"></i>
                                <span className="where">
                                    <FormattedMessage
                                        id='weibo'
                                    />
                                </span>
                                <span className="link">咬一口梨子</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <div className="host">
                        <a className="hosting" href="//github.io/"><i aria-hidden="true" className="fa fa-heart-o"></i>
                            <FormattedMessage
                                id='hostBy'
                                values={{
                                    host: 'GitHub.io',
                                }}
                            />
                        </a>
                        <span className="theme">
                            <a className="link" href="https://github.com/amphineko/amphineko">
                                <FormattedMessage
                                    id='themeBy'
                                    values={{
                                        author: 'amphineko',
                                    }}
                                />
                            </a>
                        </span>
                    </div>
                    <div className="copyright">
                        <FormattedMessage
                            id='cpright'
                        />{" "}
                        © 2018 <a className="link" href="https://github.com/rikakomoe/rikakomoe.github.io">rikakomoe</a>
                    </div>
                </div>
            </div>
        );
    }
}

class Root extends React.Component {
    constructor() {
        super();
        this.handleLocaleChange = this.handleLocaleChange.bind(this);
        this.chooseLocale = this.chooseLocale.bind(this);
        this.state = {
            locale: navigator.language.split('-')[0],
            zhState: "zh-Hans",
            messages: this.chooseLocale(navigator.language.split('-'))
        };
    }
    chooseLocale(nl){
        switch(nl[0]){
            case 'en':
                return en_;
                break;
            case 'zh':
                if(nl.length > 1 && nl[1] !== "CN" && nl[1] !== "Hans" && nl[1] !== "cmn" && nl[1] !== "SG")
                    return zh_Hant;
                else
                    return zh_Hans;
                break;
            case 'ja':
                return ja_;
                break;
            default:
                return zh_Hans;
                break;
        }
    }
    handleLocaleChange(l) {
        switch (l) {
            case "zh":
                if (this.state.zhState === "zh-Hans")
                    this.setState({locale: 'zh', messages: zh_Hant, zhState: 'zh-Hant'});
                else
                    this.setState({locale: 'zh', messages: zh_Hans, zhState: 'zh-Hans'});
                break;
            case "en":
                this.setState({locale: 'en', messages: en_});
                break;
            case "ja":
                this.setState({locale: 'ja', messages: ja_});
                break;
        }
    }
    render() {
        return (
            <IntlProvider
                locale={this.state.locale}
                messages={this.state.messages}
            >
                <App
                    onLocaleChange={this.handleLocaleChange}
                />
            </IntlProvider>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);