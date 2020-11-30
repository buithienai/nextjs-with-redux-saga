import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const logo = 'static/images/logo.svg';
// import configs from '../../configs/index';
import Root from '../common/Root';
import { updateUser as reduxUpdateUser } from '../../redux/actions/appActions';
import { i18n, withTranslation } from '../../i18n';
import Link from 'next/link';

const dataDefaults = {
  name: 'Tommy Ai',
  email: 'buithienai@gmail.com',
};

const Index = ({t}) => {
  const dispatch = useDispatch();
  const appReducer = useSelector((state) => state.appReducer);
	const { user } = appReducer;
  const updateUser = (data) => {
    dispatch(reduxUpdateUser(data));
  };

  const handleChangeLanguage = (item) => {
    i18n.changeLanguage(item);
	};

  return (
    <Root>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            URL github:{' '}
            <Link
              href={process.env.github}
              className='App-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              {process.env.github}
            </Link>
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginBottom: '20px' }}
          >
            Learn React
          </a>
          <div>{t('home')}</div>
          <div>
            <a className='link' onClick={() => handleChangeLanguage('en')}>
              EN
            </a>
            <a className='link' onClick={() => handleChangeLanguage('kr')}>
              KR
            </a>
          </div>
          <div>{user.name}</div>
          <div>{user.email}</div>
          {Object.keys(user).length === 0 ? (
            <button
              onClick={() => updateUser(dataDefaults)}
              style={{ marginTop: '20px' }}
            >
              Fetch data
            </button>
          ) : (
            <button
              onClick={() => updateUser({})}
              style={{ marginTop: '20px' }}
            >
              Reset data
            </button>
          )}
        </header>
      </div>
    </Root>
  );
};

export default withTranslation('common')(Index);
