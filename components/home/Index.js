import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../static/images/logo.svg';
import configs from '../../configs/index';
import Root from '../common/Root';
import { updateUser } from '../../redux/actions/appActions';
import { i18n, withTranslation } from '../../i18n';

const dataDefaults = {
    name: 'Tommy Ai',
    email: 'buithienai@gmail.com'
}

class Index extends Component {

    updateUser = (data) => {
        this.props.updateUser(data);
    }

    handleChangeLanguage = (item) => {
        i18n.changeLanguage(item);
    }

    render() {
        const { user } = this.props.appReducer;

        return (
            <Root>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            URL github: <a href={configs.github} className="App-link" target="_blank" rel="noopener noreferrer">{configs.github}</a>
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginBottom: "20px" }}
                        >
                            Learn React
				        </a>
                        <div>{this.props.t("home")}</div>
                        <div>
                            <a className="link" onClick={() => this.handleChangeLanguage('en')}>EN</a>
                            <a className="link" onClick={() => this.handleChangeLanguage('kr')}>KR</a>
                        </div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        {
                            Object.keys(user).length === 0 ?
                                <button onClick={() => this.updateUser(dataDefaults)} style={{ marginTop: "20px" }}>Fetch data</button>
                                : <button onClick={() => this.updateUser({})} style={{ marginTop: "20px" }}>Reset data</button>
                        }
                    </header>
                </div>
            </Root>
        );
    }
}

const mapStateToProps = state => ({
    appReducer: state.appReducer
});

const mapDispatchToProps = dispatch => ({
    updateUser: data => dispatch(updateUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Index));