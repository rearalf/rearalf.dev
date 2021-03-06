import React from 'react';
import './styles.scss';
import { GitHub } from '../Icons/GitHub';

export const Footer = () => {
	return (
		<footer>
			<div className="content container">
				<p>Hecho dolor y esfuerso. </p>
				<a
					className="Proyect"
					href="https://github.com/rearalf/rearalf.dev"
					target="_blank"
					rel="noopener noreferrer">
					<GitHub Width={25} Fill={'#5EBFBF'} />
					Enlace del proyecto
				</a>
			</div>
		</footer>
	);
};
