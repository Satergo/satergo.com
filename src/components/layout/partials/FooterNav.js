import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a href="https://t.me/SatergoWallet">Telegram</a>
        </li>
        <li>
        <a href="https://github.com/Satergo/Satergo#readme">Information</a>
        </li>
        <li>
          <a href='https://github.com/Satergo'>Github</a>
        </li>
        <li>
         <a href='https://github.com/Satergo/Satergo/projects/1?fullscreen=true'>To do list</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;