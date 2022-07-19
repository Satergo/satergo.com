import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionSplitProps.types
}

const defaultProps = {
	...SectionSplitProps.defaults
}

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {

	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: 'Why use Satergo?'
	};

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={splitClasses}>

						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
								Secure, Independent, Invaluable:
									</div>
								<h3 className="mt-0 mb-12">
								The only wallet with support for running a full node
									</h3>
									<p className="m-0">
										Either contribute to the Ergo network or use a remote node
									</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={require('./../../assets/images/node_setup.png')}
									alt="Node setup"
									width={528}
									height={396} />
							</div>
						</div>

						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
								Portable, Fully featured, Light:
									</div>
								<h3 className="mt-0 mb-12">
								Has many features but is still light and easy to use
									</h3>
								<p className="m-0">
					Usable in slow or portable environments and does not depend on any other software
					</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={require('./../../assets/images/wallet_ui.png')}
									alt="Wallet UI"
									width={528}
									height={396} />
							</div>
						</div>

						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
								Cross-platform, Reliable:
									</div>
								<h3 className="mt-0 mb-12">
								Supports all major desktop platforms
									</h3>
								<p className="m-0">
								</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={require('./../../assets/images/wallet_setup.png')}
									alt="Wallet setup"
									width={528}
									height={396} />
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;