import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import { ReactComponent as WindowsLogo } from '../../assets/images/windows.svg';
import { ReactComponent as LinuxLogo } from '../../assets/images/linux.svg';
import { ReactComponent as AppleLogo } from '../../assets/images/apple.svg';

const propTypes = {
	...SectionTilesProps.types
}

const defaultProps = {
	...SectionTilesProps.defaults
}
const DownloadsTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {

	const outerClasses = classNames(
		'downloads-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'downloads-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'Downloads',
		paragraph: 'Version: 1.9.3, released: 23 Feb 2026. For portable runtimes, extract everything and execute the run file'
	};

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>

						<div className="tiles-item reveal-from-bottom" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header mb-16">
									<div>
										<WindowsLogo
											alt="Windows logo"
											width={64}
											height={64}
											viewBox="14 -4 64 96" />
									</div>
								</div>
								<div className="downloads-tiles-item-content">
									<h4 className="mt-0 mb-8">Windows 64-bit</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm mb-8" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-windows-amd64.msi">Installer (amd64)</a><br/>
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-windows-amd64-portable.zip">Portable (amd64)</a>
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header">
									<div className="downloads-tiles-item-image mb-16">
										<LinuxLogo
											alt="Linux logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="downloads-tiles-item-content">
									<h4 className="mt-0 mb-8">Linux 64-bit</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm mb-8" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-linux-amd64.zip">Download (amd64)</a><br/>
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-linux-aarch64.zip">Download (aarch64)</a>
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-offset="0">
							<div className="tiles-item-inner">
								<div className="downloads-tiles-item-header mb-16">
									<div>
										<AppleLogo
											alt="Apple logo"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="apple">
									<h4 className="mt-0 mb-8">
									macOS 64-bit
										</h4>
									<p className="m-0 text-sm">
										<a className="button button-sm mb-8" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-mac-amd64.zip">Download (x64 "Intel")</a><br/>
										<a className="button button-sm" href="https://github.com/Satergo/Satergo/releases/download/v1.9.3/Satergo-v1.9.3-mac-aarch64.zip">Download (aarch64 "Apple Silicon")</a><br/>
										<a style={{textDecoration: "underline"}} target="_blank" rel="noopener" href="https://github.com/Satergo/Satergo/wiki/Running-on-Mac-OS">Instructions</a>
									</p>
								</div>
							</div>
						</div>

				 

					</div>
				</div>
			</div>
		</section>
	);
}

DownloadsTiles.propTypes = propTypes;
DownloadsTiles.defaultProps = defaultProps;

export default DownloadsTiles;