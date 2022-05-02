import React, { useEffect } from 'react';
import $ from 'jquery';

import "./index.scss"

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


function App() {
	useEffect(() => {
		$("a.scroll-to").on("click", function(e){
			// e.preventDefault();
			var anchor = $(this).attr('href').match("#[a-zA-Z]+")[0];
			if (anchor) {
				$('html, body').stop().animate({
					scrollTop: $(anchor).offset().top
				}, 800)
			}
		})
	})

	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	)
}

export default App;