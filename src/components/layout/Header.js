import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';





const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool
};

const defaultProps = {
	navPosition: '',
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false
};

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}) => {

	const [isActive, setIsactive] = useState(false);

	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(() => {
		if (isActive) openMenu();
		document.addEventListener('keydown', keyPress);
		document.addEventListener('click', clickOutside);
		return () => {
			document.removeEventListener('keydown', keyPress);
			document.removeEventListener('click', clickOutside);
			closeMenu();
		};
	});	

	const openMenu = () => {
		document.body.classList.add('off-nav-is-active');
		nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
		setIsactive(true);
	}

	const closeMenu = () => {
		document.body.classList.remove('off-nav-is-active');
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
	};

	const keyPress = (e) => {
		if (isActive && e.keyCode === 27) closeMenu();
	};

	const clickOutside = (e) => {
		if (!nav.current) return;
		if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
		closeMenu();
	};

	const classes = classNames(
		'site-header',
		bottomOuterDivider && 'has-bottom-divider',
		className
	);
	// Modal 
const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);
//copy listener 
window.addEventListener("click", function (e) {
	if (e.target.hasAttribute("data-copy")) {
	console.log(e.target.getAttribute("data-copy"));
		var textarea = document.createElement("textarea");
		textarea.value = e.target.getAttribute("data-copy");
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		e.preventDefault();
		this.alert("Copied successfully")
	}
});

	return (
		<header
			{...props}
			className={classes}
		>
			<div className="container">
				<div className={
					classNames(
						'site-header-inner',
						bottomDivider && 'has-bottom-divider'
					)}>
					<Logo />
					{!hideNav &&
						<>
							<button ref={hamburger} className="header-nav-toggle" onClick={isActive ? closeMenu : openMenu}>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav
								ref={nav}
								className={
									classNames(
										'header-nav',
										isActive && 'is-active'
									)}>
								<div className="header-nav-inner">
									<ul className="list-reset header-nav-right">
									<button className="button button-primary button-wide-mobile button-sm" onClick={onOpenModal}>Donate</button>
      <Modal open={open} onClose={onCloseModal} center>
	  <div className="title">
					<h1 className="text-color-primary">Donate</h1>
				</div>
				
				<div>
					<p>~ Ergo: 9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho</p><a href="https://explorer.ergoplatform.com/en/addresses/9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho"> Explorer </a>
					<a href={() => false} data-copy="9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho">copy</a>
				</div>

				<div>
					<p>~ Monero: 82pTXa9pXyee7Ft81sGnK8c6XK3qKf2FzWbgUFrPJGdART4krBcsXkCKeBX5TQRxBr9ryhdPyHa5wGBr37Em2SSgP4u9MmH </p><a href={() => false} data-copy="82pTXa9pXyee7Ft81sGnK8c6XK3qKf2FzWbgUFrPJGdART4krBcsXkCKeBX5TQRxBr9ryhdPyHa5wGBr37Em2SSgP4u9MmH"> copy </a>
				</div>

				<div>
					<p>~ Bitcoin: bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us</p> <a href="https://mempool.space/address/bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us"> Explorer </a><a href={() => false} data-copy="bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us">copy</a>

				</div>

      </Modal>
									</ul>
								</div>
							</nav>
						</>}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
