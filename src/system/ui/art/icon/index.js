import React from 'react'
import { Icon as FLUID_Icon } from 'fluid/ui'

const Icon = { ...FLUID_Icon }

Icon.Pencil = ( { size = 45, ...rest } ) => {

	// View box is intentionally larger than art to offset the art to the top and left
	return (
		<svg width={ size } height={ size } viewBox="0 0 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg" { ...rest }>
			<path d="M241.176,32.58 C212.203,3.607 165.229,3.607 136.257,32.58 C104.728,64.108 64.7505,104.086 33.2582,135.578 C4.3968,164.44 4.3968,211.233 33.2582,240.095 C74.0633,280.9 129.115,335.951 161.573,368.409 C178.953,385.789 202.525,395.5527 227.103,395.5527 C265.428,395.5527 323.836,395.5527 361.062,395.5527 C370.443,395.5527 379.44,391.8261 386.073,385.193 C392.706,378.559 396.433,369.563 396.433,360.182 C396.433,325.232 396.433,271.611 396.433,233.469 C396.433,204.251 384.826,176.229 364.165,155.569 C331.325,122.728 279.883,71.286 241.176,32.58 Z" fill="#FFAD3B"></path>
			<path d="M356.247,395.5527 C362.981,395.5527 369.052,391.4966 371.63,385.275 C374.208,379.054 372.784,371.893 368.024,367.13 C291.192,290.26 85.032,84.001 85.032,84.001 C67.7094,101.324 50.3646,118.624 32.9985,135.901 L292.65,395.5527 C292.65,395.5527 327.055,395.5527 356.247,395.5527 Z" fill="#FE8300"></path>
			<path d="M396.584,291.619 L136.932,31.967 C136.932,31.967 136.932,31.967 136.932,31.967 C150.667,18.162 169.33,10.389 188.804,10.364 C208.278,10.338 226.962,18.063 240.732,31.833 C278.866,69.968 329.542,120.643 362.599,153.701 C384.359,175.461 396.584,204.974 396.584,235.747 C396.584,262.965 396.584,291.619 396.584,291.619 Z" fill="#FDC950"></path>
			<path d="M396.232,202.759 C395.989,200.247 394.319,198.1 391.943,197.248 C389.568,196.396 386.914,196.992 385.13,198.777 C352.273,231.665 231.009,353.059 199.222,384.881 C197.563,386.541 197.001,389.005 197.777,391.2207 C198.553,393.436 200.53,395.0112 202.862,395.2735 C204.547,395.4583 206.248,395.5527 207.959,395.5527 C247.622,395.5527 338.046,395.5527 377.469,395.5527 L396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.631 396.365,204.19 396.232,202.759 Z" fill="#F8C978"></path>
			<path d="M396.244,202.896 C396.007,200.358 394.325,198.186 391.927,197.322 C389.53,196.458 386.849,197.057 385.048,198.86 C353.145,230.793 240.578,343.48 240.578,343.48 L292.65,395.5527 C325.192,395.5527 357.727,395.5527 377.469,395.5527 C382.498,395.5527 387.322,393.5548 390.878,389.9984 C394.435,386.442 396.433,381.618 396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.677 396.369,204.281 396.244,202.896 Z" fill="#FAA849"></path>
			<path d="M396.254,203.004 C396.021,200.446 394.33,198.254 391.915,197.38 C389.5,196.506 386.797,197.109 384.982,198.926 C360.753,223.176 292.467,291.536 292.467,291.536 C292.467,291.536 359.703,358.807 383.025,382.141 C385.271,384.388 388.649,385.061 391.584,383.845 C394.519,382.63 396.433,379.766 396.433,376.59 C396.433,376.589 396.433,376.589 396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.714 396.373,204.354 396.254,203.004 Z" fill="#FFCC7A"></path>
			<path d="M396.276,203.263 C396.055,200.657 394.342,198.416 391.886,197.519 C389.429,196.622 386.675,197.232 384.827,199.082 C370.799,213.119 344.456,239.491 344.456,239.491 L396.433,291.671 C396.433,259.264 396.433,226.859 396.433,207.079 C396.433,205.801 396.38,204.528 396.276,203.263 Z" fill="#FFE09D"></path>
			<path d="M46.5328,242.175 L52.9512,249.313 C53.9647,250.664 54.8775,252.126 55.2208,253.761 C55.6435,255.774 55.3689,257.989 54.2428,259.718 C53.9658,260.143 53.5981,260.501 53.2757,260.893 C53.274,260.895 53.2722,260.896 53.2722,260.896 C52.1867,261.725 52.0041,262.005 50.6898,262.447 C48.1707,263.294 45.2579,262.721 43.0585,261.237 C42.5802,260.914 42.1613,260.511 41.7126,260.148 C41.7126,260.148 26.1296,245.076 26.1296,245.076 C26.1296,245.076 25.2578,244.255 24.5604,243.563 C15.1361,234.199 8.0369,222.541 4.0988,209.605 C0.2362,196.918 -0.5051,183.315 1.9442,170.235 C4.3825,157.213 10.1396,144.798 18.4641,134.225 L18.568,134.094 C20.238,132.052 22.0092,130.092 23.8572,128.217 L39.2699,112.604 C56.93,94.959 74.5982,77.311 92.363,59.748 C98.876,53.31 105.378,46.86 111.945,40.477 C117.806,34.779 123.789,29.208 129.747,23.628 C130.042,23.351 130.308,23.103 130.308,23.103 C139.686,14.435 151.175,7.899 163.35,4.342 C169.363,2.585 175.521,1.454 181.743,1.068 C183.885,0.907 186.038,0.832 188.208,0.837 C201.73,0.91 215.282,4.826 227.186,11.48 C235.651,16.211 243.295,22.357 250.263,29.1 C258.483,37.055 266.481,45.276 274.395,53.342 C293.825,73.144 313.015,93.115 332.556,112.921 L332.558,112.923 C332.887,113.331 333.258,113.71 333.545,114.149 C334.924,116.255 335.197,119.052 334.25,121.392 C333.728,122.683 333.427,122.887 332.555,123.958 L332.552,123.961 C332.147,124.29 331.774,124.661 331.338,124.949 C328.808,126.62 325.289,126.615 322.743,124.947 C321.708,124.269 321.155,123.602 320.315,122.771 C298.977,101.675 278.191,80.62 256.807,59.542 C250.127,52.958 243.436,46.335 236.521,39.987 C231.091,35.002 225.145,30.557 218.649,27.081 C208.055,21.411 196.13,18.649 184.223,19.655 C183.826,19.688 183.436,19.725 183.339,19.736 C172.551,20.879 161.872,25.255 153.016,32 L189.346,71.345 L201.841,59.271 C203.021,58.269 204.204,57.256 205.555,56.505 C206.743,55.846 208.063,55.316 209.396,55.036 C209.996,54.91 210.613,54.891 211.221,54.818 C211.784,54.866 212.346,54.913 212.908,54.961 C214.371,55.465 214.384,55.465 215.637,56.372 L215.641,56.376 C215.94,56.788 216.304,57.161 216.538,57.614 C217.902,60.251 217.038,63.702 215.508,66.458 C214.757,67.809 213.744,68.992 212.742,70.172 L200.224,83.126 L218.713,103.15 C219.683,104.342 220.663,105.537 221.387,106.887 C222.845,109.606 223.716,113.057 222.389,115.656 C222.165,116.095 221.813,116.457 221.524,116.858 L221.521,116.861 C221.12,117.15 220.758,117.502 220.318,117.727 C217.712,119.058 214.296,118.197 211.55,116.725 C210.2,116 209.005,115.021 207.812,114.05 L188.01,95.766 L150.825,134.247 L189.144,174.99 L207.135,157.69 C208.261,156.746 209.39,155.792 210.683,155.103 C211.832,154.491 213.105,154.017 214.391,153.785 C214.975,153.679 215.574,153.679 216.166,153.626 C216.717,153.689 217.267,153.752 217.817,153.815 C219.266,154.353 219.278,154.353 220.521,155.271 L220.524,155.275 C221.366,156.414 221.646,156.555 221.981,157.979 C222.696,161.018 221.42,164.373 219.552,166.935 C219.11,167.541 218.588,168.085 218.106,168.661 L200.455,187.017 L220.269,208.084 C221.401,209.435 222.543,210.785 223.419,212.307 C225.127,215.272 226.377,219.06 225.003,221.957 C224.781,222.425 224.411,222.807 224.115,223.232 L224.112,223.235 C223.687,223.531 223.305,223.901 222.837,224.123 C221.213,224.893 219.193,224.757 217.452,224.315 C215.173,223.737 212.995,222.587 211.039,221.128 C210.315,220.588 209.656,219.968 208.964,219.389 L188.15,199.813 L151.099,238.345 L219.08,309.063 C220.266,310.466 221.465,311.872 222.354,313.477 C224.144,316.71 225.187,320.848 223.582,323.96 C223.306,324.495 222.876,324.935 222.523,325.422 L222.52,325.426 C222.032,325.779 221.592,326.209 221.057,326.484 C217.935,328.095 213.844,327.068 210.574,325.256 C208.969,324.367 207.563,323.168 206.161,321.983 L135.755,254.302 L97.265,294.33 C121.366,318.49 145.44,342.677 169.72,366.656 C173.648,370.523 178.344,373.639 183.163,376.499 C195.442,383.785 209.247,388.538 223.637,388.553 L224.923,388.673 C225.337,388.791 225.764,388.872 226.165,389.028 C229.765,390.4266 231.69,395.0788 229.893,398.6792 C228.929,400.6113 227.037,402.0394 224.909,402.4348 C223.468,402.7027 222.039,402.5495 220.603,402.4939 C201.006,401.7355 181.739,393.7103 166.235,381.987 C163.993,380.292 161.812,378.523 159.807,376.543 L159.729,376.465 L63.974,280.815 L63.1482,279.821 C62.5922,278.824 62.3733,278.594 62.1079,277.469 C61.4235,274.566 62.8519,271.232 65.5115,269.749 C66.2668,269.327 67.0937,269.05 67.9502,268.93 C68.8013,268.811 69.6653,268.929 70.52,269.047 C70.9283,269.184 71.351,269.283 71.745,269.457 C72.8032,269.924 72.9894,270.181 73.8681,270.91 C76.406,273.445 78.9427,275.981 81.478,278.518 L121.207,240.316 L83.425,203.996 L46.5328,242.175 Z M100.797,186.019 L137.725,224.433 L175.602,188.011 L135.404,150.206 L100.797,186.019 Z M32.3203,154.869 C28.3673,160.645 25.4099,167.115 23.6426,173.764 C20.4984,185.593 20.7944,197.982 24.4876,209.374 C26.1637,214.544 28.46,219.451 31.3582,224.011 L67.7073,188.886 L32.3203,154.869 Z M83.954,101.816 L82.861,102.915 C72.3568,113.466 61.813,123.978 51.2381,134.466 L86.291,170.929 L121.383,137.019 L83.954,101.816 Z M136.574,48.272 C133.845,51.159 131.121,54.051 128.351,56.9 C123.065,62.337 112.48,73.053 102.627,83 L138.173,120.795 L175.77,84.464 L136.574,48.272 Z" fill="#525252"></path>
			<path d="M389.513,316.189 C389.506,289.674 389.433,263.159 389.433,236.644 C389.381,216.281 383.785,196.321 373.365,179.165 C368.752,171.57 363.224,164.536 356.975,158.278 L344.644,145.947 C344.369,145.616 344.062,145.308 343.819,144.953 C342.114,142.465 342.243,138.891 344.208,136.525 C345.313,135.195 346.913,134.303 348.627,134.064 C349.478,133.946 350.342,134.064 351.196,134.183 C351.605,134.32 352.027,134.42 352.421,134.594 C353.479,135.061 353.665,135.318 354.543,136.047 C361.842,143.346 369.449,150.416 375.894,158.43 C387.542,172.914 395.902,190.021 400.163,208.251 C402.018,216.188 403.089,224.267 403.36,232.382 C403.403,233.675 403.429,234.962 403.432,236.251 L403.433,236.626 C403.433,278.582 403.615,320.538 403.432,362.493 C403.394,371.349 400.323,380.265 394.78,387.273 C387.318,396.7072 375.511,402.4995 363.363,402.5525 C332.687,402.6027 301.956,402.5583 271.221,402.5603 L257.638,402.5606 L256.352,402.4415 C255.938,402.3236 255.511,402.2435 255.109,402.088 C252.298,400.9988 250.384,397.9774 250.668,394.9149 C250.946,391.9076 253.369,389.2375 256.351,388.68 C256.775,388.601 257.209,388.6 257.638,388.561 C277.493,388.56 297.366,388.558 317.217,388.556 L389.513,316.189 Z" fill="#525252"></path>
		</svg>
	)
}
Icon.Pencil.displayName = 'Icon.Pencil'

Icon.Apps = () => {
	return (
		<svg width="20px" height="14px" viewBox="0 0 21 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g fill="currentColor" fillRule="nonzero">
				<circle cx="2.5" cy="2.5" r="2.5"/>
				<circle cx="10.5" cy="2.5" r="2.5"/>
				<circle cx="18.5" cy="2.5" r="2.5"/>

				<circle cx="2.5" cy="11.5" r="2.5"/>
				<circle cx="10.5" cy="11.5" r="2.5"/>
				<circle cx="18.5" cy="11.5" r="2.5"/>
			</g>
		</svg>
	)
}
Icon.Apps.displayName = 'Icon.Apps'

Icon.DragHandle = () => {
	return (
		<svg width="7px" height="14px" viewBox="0 0 7 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M1,1 L6,1"></path>
				<path d="M1,5 L6,5"></path>
				<path d="M1,9 L6,9"></path>
				<path d="M1,13 L6,13"></path>
			</g>
		</svg>
	)
}
Icon.DragHandle.displayName = 'Icon.DragHandle'

Icon.Close = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round">
				<path d="M13,1 L1,13"></path>
				<path d="M1,1 L13,13"></path>
			</g>
		</svg>
	)
}
Icon.Close.displayName = 'Icon.Close'

Icon.CloseCompact = () => {
	return (
		<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-2.000000, -2.000000)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M11,3 L3,11"></path>
				<path d="M3,3 L11,11"></path>
			</g>
		</svg>
	)
}
Icon.CloseCompact.displayName = 'Icon.CloseCompact'

Icon.Expand = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="1 5 1 1 5 1"></polyline>
				<polyline points="9 1 13 1 13 5"></polyline>
				<polyline points="13 9 13 13 9 13"></polyline>
				<polyline points="5 13 1 13 1 9"></polyline>
			</g>
		</svg>
	)
}
Icon.Expand.displayName = 'Icon.Expand'

Icon.Collapse = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="1 5 5 5 5 1"></polyline>
				<polyline points="9 1 9 5 13 5"></polyline>
				<polyline points="13 9 9 9 9 13"></polyline>
				<polyline points="5 13 5 9 1 9"></polyline>
			</g>
		</svg>
	)
}
Icon.Collapse.displayName = 'Icon.Collapse'

Icon.SmallSpinner = () => {
	return (
		<svg width="16px"  height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={ { background: 'none' } }>
			<circle cx="50" cy="50" fill="none" stroke="#8a8a8a" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(299.801 50 50)">
				<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
			</circle>
		</svg>
	)
}
Icon.SmallSpinner.displayName = 'Icon.SmallSpinner'

Icon.Spinner = () => {
	return (
		<svg width="32px"  height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={ { background: 'none' } }>
			<circle cx="50" cy="50" fill="none" stroke="#8a8a8a" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(299.801 50 50)">
				<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
			</circle>
		</svg>
	)
}
Icon.Spinner.displayName = 'Icon.Spinner'

Icon.Search = () => {
	return (
		<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinejoin="round">
				<path d="M6.5,12 C3.46243388,12 1,9.53756612 1,6.5 C1,3.46243388 3.46243388,1 6.5,1 C9.53756612,1 12,3.46243388 12,6.5 C12,9.53756612 9.53756612,12 6.5,12 Z M15.8568331,15.8587942 L10.4910728,10.4930339 L15.8568331,15.8587942 Z"></path>
			</g>
		</svg>
	)
}
Icon.Search.displayName = 'Icon.Search'

Icon.Brightness = () => (
	<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" strokeWidth="2" fill="currentColor" fillRule="evenodd">
			<path d="M7.00294406,4 C8.63984298,4 10,5.35749265 10,6.9970617 C10,8.63663075 8.63984298,10 7.00294406,10 C5.36015702,10 4,8.63663075 4,6.9970617 C4,5.35749265 5.36015702,4 7.00294406,4 Z" id="Center" stroke="currentColor" fill="none" fillRule="nonzero"></path>

			<circle cx="7" cy="1" r="1"></circle>
			<circle cx="7" cy="13" r="1"></circle>
			<circle cx="1" cy="7" r="1"></circle>
			<circle cx="13" cy="7" r="1"></circle>
			<circle transform="translate(2.757359, 2.757359) rotate(-45.000000) translate(-2.757359, -2.757359) " cx="2.75735931" cy="2.75735931" r="1"></circle>
			<circle transform="translate(11.242641, 11.242641) rotate(-45.000000) translate(-11.242641, -11.242641) " cx="11.2426407" cy="11.2426407" r="1"></circle>
			<circle transform="translate(2.757359, 11.242641) rotate(-45.000000) translate(-2.757359, -11.242641) " cx="2.75735931" cy="11.2426407" r="1"></circle>
			<circle transform="translate(11.242641, 2.757359) rotate(-45.000000) translate(-11.242641, -2.757359) " cx="11.2426407" cy="2.75735931" r="1"></circle>
		</g>
	</svg>
)
Icon.Brightness.displayName = 'Icon.Brightness'

Icon.RightCaret = () => (
	<svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L8.41421356,7 L1.70710678,13.7071068 C1.31658249,14.0976311 0.683417511,14.0976311 0.292893219,13.7071068 C-0.0976310729,13.3165825 -0.0976310729,12.6834175 0.292893219,12.2928932 L5.58578644,7 L0.292893219,1.70710678 Z"></path>
	</svg>
)
Icon.RightCaret.displayName = 'Icon.RightCaret'

Icon.LeftCaret = () => (
	<svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L8.41421356,7 L1.70710678,13.7071068 C1.31658249,14.0976311 0.683417511,14.0976311 0.292893219,13.7071068 C-0.0976310729,13.3165825 -0.0976310729,12.6834175 0.292893219,12.2928932 L5.58578644,7 L0.292893219,1.70710678 Z"  transform="scale(-1, 1) translate(-9, 0)"></path>
	</svg>
)
Icon.LeftCaret.displayName = 'Icon.LeftCaret'

Icon.Plus = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" stroke="none" d="M9,9.01464844 L9,15 C9,15.5522847 8.55228475,16 8,16 L8,16 C7.44771525,16 7,15.5522847 7,15 L7,9.01464844 L0.985379923,9.00206204 C0.440836381,9.00092251 6.66874965e-17,8.55916265 0,8.01461792 L0,8.01461792 C-6.66466866e-17,7.47040642 0.441170584,7.02923584 0.98538208,7.02923584 L7,7.02923584 L7,1 C7,0.44771525 7.44771525,1.01453063e-16 8,0 L8,0 C8.55228475,-1.01453063e-16 9,0.44771525 9,1 L9,7.02923584 L15.0072937,7.02923584 C15.5555503,7.02923584 16,7.47368559 16,8.02194214 L16,8.02194214 C16,8.57019869 15.5555503,9.01464844 15.0072937,9.01464844 L9,9.01464844 Z" />
	</svg>
)

Icon.BreadcrumbArrow = () => (
	<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
			<path d="M12,7 L2,7"></path>
			<path d="M12,7 L7,2"></path>
			<path d="M12,12 L7,7" transform="translate(9.500000, 9.500000) scale(1, -1) translate(-9.500000, -9.500000) "></path>
		</g>
	</svg>
)
Icon.BreadcrumbArrow.displayName = 'Icon.BreadcrumbArrow'

Icon.Clone = () => (
	<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g fill="currentColor" fillRule="evenodd">
			<path d="M2.20391808,11.6432138 C0.754674978,11.6432138 0,10.8806173 0,9.42351339 L0,2.21970041 C0,0.755787562 0.754674978,0 2.20391808,0 L9.37666963,0 C10.8192342,0 11.5739092,0.762596459 11.5739092,2.21970041 L11.5739092,3.30231502 L12.8027605,3.30231502 C14.245325,3.30231502 15,4.06491148 15,5.52201543 L15,12.7871085 C15,14.2442124 14.245325,15 12.8027605,15 L5.6300089,15 C4.18076581,15 3.43276937,14.2442124 3.43276937,12.7802996 L3.43276937,11.6432138 L2.20391808,11.6432138 Z M2.28406055,10.2814344 L3.43276937,10.2814344 L3.43276937,5.52201543 C3.43276937,4.06491148 4.18076581,3.30231502 5.6300089,3.30231502 L10.2382012,3.30231502 L10.2382012,2.34226055 C10.2382012,1.68179755 9.89759573,1.35497049 9.28984862,1.35497049 L2.28406055,1.35497049 C1.66963491,1.35497049 1.33570793,1.68179755 1.33570793,2.34226055 L1.33570793,9.30095325 C1.33570793,9.95460735 1.66963491,10.2814344 2.28406055,10.2814344 Z M5.71682992,13.6450295 L12.7159394,13.6450295 C13.3236866,13.6450295 13.6709706,13.3182025 13.6709706,12.6645483 L13.6709706,5.64457558 C13.6709706,4.98411257 13.3236866,4.66409442 12.7159394,4.66409442 L5.71682992,4.66409442 C5.09572573,4.66409442 4.76179875,4.98411257 4.76179875,5.64457558 L4.76179875,12.6645483 C4.76179875,13.3182025 5.09572573,13.6450295 5.71682992,13.6450295 Z M9.22306322,11.9904675 C8.90917186,11.9904675 8.65538736,11.7317295 8.65538736,11.3844757 L8.65538736,9.73672265 L7.00578807,9.73672265 C6.69189671,9.73672265 6.41807658,9.46436677 6.41807658,9.14434862 C6.41807658,8.83113936 6.69189671,8.55878348 7.00578807,8.55878348 L8.65538736,8.55878348 L8.65538736,6.91103041 C8.65538736,6.56377667 8.90917186,6.31184748 9.22306322,6.31184748 C9.54363313,6.31184748 9.79741763,6.56377667 9.79741763,6.91103041 L9.79741763,8.55878348 L11.3869101,8.55878348 C11.7341941,8.55878348 12.0146928,8.82433046 12.0146928,9.14434862 C12.0146928,9.46436677 11.7341941,9.73672265 11.3869101,9.73672265 L9.79741763,9.73672265 L9.79741763,11.3844757 C9.79741763,11.7317295 9.54363313,11.9904675 9.22306322,11.9904675 Z"></path>
		</g>
	</svg>
)
Icon.Clone.displayName = 'Icon.Clone'

Icon.Link = () => (
	<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g fill="currentColor" fillRule="evenodd">
			<path d="M6.71224356,10.4646978 C6.22638528,10.3661237 5.74756843,10.0844834 5.33212439,9.66906393 C3.72667964,8.06371416 3.74076249,5.79650965 5.32508297,4.21932391 L8.35289543,1.19169057 C9.93721591,-0.392536184 12.1975131,-0.406618199 13.8029579,1.20577258 C15.4013612,2.80408135 15.3943198,5.06424484 13.8099993,6.64847159 L11.746862,8.71852788 C11.9017733,8.0989192 11.8384005,7.45114648 11.648282,6.91602989 L12.810117,5.76834562 C13.8522478,4.73331748 13.8522478,3.25470585 12.8030756,2.19855468 C11.7609448,1.15648553 10.2822457,1.15648553 9.2401149,2.19855468 L6.33200665,5.10649089 C5.28987585,6.14856004 5.28987585,7.62717167 6.33200665,8.66924083 C6.75449211,9.09170129 7.25443323,9.33109556 7.76141579,9.3663006 C7.70508439,9.4648747 7.59946303,9.59161284 7.49384166,9.69018695 L6.71224356,10.4646978 Z M1.19880831,13.8021355 C-0.406636439,12.1967857 -0.39255359,9.93662223 1.19880831,8.34535447 L3.26194564,6.28233919 C3.09999288,6.90194787 3.1633657,7.54972059 3.35348415,8.07779617 L2.19869056,9.23252145 C1.15655976,10.2745906 1.15655976,11.7391202 2.20573199,12.8023124 C3.24082137,13.8443815 4.7265619,13.8443815 5.7686927,12.8023124 L8.67680095,9.89437618 C9.71893175,8.85230703 9.71893175,7.37369539 8.67680095,6.33162624 C8.24727407,5.90916578 7.74733294,5.66977151 7.24739181,5.63456647 C7.29668178,5.54303337 7.40934457,5.41629523 7.50088309,5.32476213 L8.29656404,4.52912825 C8.77538089,4.63474337 9.25419774,4.90934267 9.66964178,5.33180314 C11.2750865,6.9301119 11.2680451,9.19731641 9.6766832,10.7815432 L6.66295359,13.7950945 C5.06455027,15.3934033 2.80425306,15.4074853 1.19880831,13.8021355 Z"></path>
		</g>
	</svg>
)
Icon.Link.displayName = 'Icon.Link'

Icon.Favorite = () => (
	<svg width="11px" height="15px" viewBox="0 0 11 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g transform="translate(-2.000000, 0.000000)" fill="currentColor" fillRule="nonzero">
			<path d="M2.9200492,15 C2.41266913,15 2,14.6847876 2,13.9584285 L2,2.25445409 C2,0.774326176 2.75768758,0 4.20541205,0 L10.7945879,0 C12.2423124,0 13,0.774326176 13,2.25445409 L13,13.9584285 C13,14.6847876 12.5873309,15 12.0799508,15 C11.6943419,15 11.4507995,14.7944267 11.1531365,14.506624 L7.81795818,11.2791229 C7.68265683,11.1489265 7.58794588,11.1009593 7.5,11.1009593 C7.41205412,11.1009593 7.32410824,11.142074 7.18204182,11.2791229 L4.17835178,14.1708543 C3.52890529,14.7875742 3.30565806,15 2.9200492,15 Z M3.51537515,12.9100046 L6.72201722,9.85381453 C6.97232472,9.62083143 7.21586716,9.47693011 7.5,9.47693011 C7.78413284,9.47693011 8.02767528,9.62083143 8.27798278,9.85381453 L11.4913899,12.9100046 C11.5725707,12.9922339 11.6537515,12.9579717 11.6537515,12.8414801 L11.6537515,2.34353586 C11.6537515,1.70625857 11.3290283,1.36363636 10.6728167,1.36363636 L4.32718327,1.36363636 C3.67773678,1.36363636 3.35301353,1.70625857 3.35301353,2.34353586 L3.35301353,12.8414801 C3.35301353,12.9579717 3.43419434,12.9853815 3.51537515,12.9100046 Z"></path>
		</g>
	</svg>
)
Icon.Favorite.displayName = 'Icon.Bookmark'

Icon.FavoriteSolid = () => (
	<svg width="11px" height="15px" viewBox="0 0 11 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g transform="translate(-2.000000, 0.000000)" fill="currentColor" fillRule="nonzero" stroke="none">
			<path d="M2.9200492,15 C2.41266913,15 2,14.6847876 2,13.9584285 L2,2.25445409 C2,0.774326176 2.75768758,0 4.20541205,0 L10.7945879,0 C12.2423124,0 13,0.774326176 13,2.25445409 L13,13.9584285 C13,14.6847876 12.5873309,15 12.0799508,15 C11.6943419,15 11.4507995,14.7944267 11.1531365,14.506624 L7.81795818,11.2791229 C7.68265683,11.1489265 7.58794588,11.1009593 7.5,11.1009593 C7.41205412,11.1009593 7.32410824,11.142074 7.18204182,11.2791229 L4.17835178,14.1708543 C3.52890529,14.7875742 3.30565806,15 2.9200492,15 Z"></path>
		</g>
	</svg>
)
Icon.FavoriteSolid.displayName = 'Icon.FavoriteSolid'

Icon.More = () => (
	<svg width="6px" height="19px" viewBox="0 0 6 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M3.25,13.5 C1.83246521,13.5 0.684326172,14.61875 0.684326172,16 C0.684326172,17.38125 1.83246521,18.5 3.25,18.5 C4.66753479,18.5 5.81567383,17.38125 5.81567383,16 C5.81567383,14.61875 4.66753479,13.5 3.25,13.5 Z"></path>
		<path fill="currentColor" d="M3.25,0 C1.83246521,0 0.684326172,1.11875 0.684326172,2.5 C0.684326172,3.88125 1.83246521,5 3.25,5 C4.66753479,5 5.81567383,3.88125 5.81567383,2.5 C5.81567383,1.11875 4.66753479,0 3.25,0 Z"></path>
		<path fill="currentColor" d="M3.25,6.75 C1.83246521,6.75 0.684326172,7.86875 0.684326172,9.25 C0.684326172,10.63125 1.83246521,11.75 3.25,11.75 C4.66753479,11.75 5.81567383,10.63125 5.81567383,9.25 C5.81567383,7.86875 4.66753479,6.75 3.25,6.75 Z"></path>
	</svg>
)
Icon.More.displayName = 'Icon.More'

Icon.DefaultApp = ( { windowSize, context } ) => {
	let size = 32
	if ( 'app-list' === context ) {
		size = 'mini' === windowSize ? 34 : 42
	}
	return (
		<svg width={ size } height={ size } viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-8.000000, -8.000000)" stroke="currentColor" strokeWidth="2" fill="transparent">
				<path d="M22.5460192,9 L27.4539808,9 C31.3970976,9 33.3650237,9.38915686 35.3558274,10.4538503 C37.1597255,11.4185856 38.5814144,12.8402745 39.5461497,14.6441726 C40.6108431,16.6349763 41,18.6029024 41,22.5460192 L41,27.4539808 C41,31.3970976 40.6108431,33.3650237 39.5461497,35.3558274 C38.5814144,37.1597255 37.1597255,38.5814144 35.3558274,39.5461497 C33.3650237,40.6108431 31.3970976,41 27.4539808,41 L22.5460192,41 C18.6029024,41 16.6349763,40.6108431 14.6441726,39.5461497 C12.8402745,38.5814144 11.4185856,37.1597255 10.4538503,35.3558274 C9.38915686,33.3650237 9,31.3970976 9,27.4539808 L9,22.5460192 C9,18.6029024 9.38915686,16.6349763 10.4538503,14.6441726 C11.4185856,12.8402745 12.8402745,11.4185856 14.6441726,10.4538503 C16.6349763,9.38915686 18.6029024,9 22.5460192,9 Z"></path>
			</g>
		</svg>
	)
}
Icon.DefaultApp.displayName = 'Icon.DefaultApp'

Icon.Approve = () => {
	return (
		<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <g transform="translate(-1.000000, -1.000000)" fill="currentColor" fillRule="nonzero">
		        <path d="M12.6748656,20.1443529 L14.0042627,18.824279 C14.1267072,18.6931459 14.2491517,18.658177 14.4153264,18.658177 L16.2869777,18.658177 C17.896248,18.658177 18.6571529,17.8976047 18.6571529,16.2802956 L18.6571529,14.4094624 C18.6571529,14.2433604 18.7096292,14.1209694 18.8233276,13.9985784 L20.1439788,12.6697623 C21.2897092,11.5332749 21.2809632,10.4667251 20.1439788,9.33023766 L18.8233276,7.99267934 C18.7008831,7.87028838 18.6571529,7.75663964 18.6571529,7.59053762 L18.6571529,5.71970442 C18.6571529,4.11113756 17.904994,3.34182297 16.2869777,3.34182297 L14.4153264,3.34182297 C14.2491517,3.34182297 14.1267072,3.29811191 14.0042627,3.17572096 L12.6748656,1.85564706 C11.5291351,0.710417393 10.4708649,0.719159605 9.32513445,1.85564706 L7.99573725,3.17572096 C7.87329277,3.29811191 7.75084829,3.34182297 7.58467364,3.34182297 L5.71302232,3.34182297 C4.10375203,3.34182297 3.34284705,4.09365314 3.34284705,5.71970442 L3.34284705,7.59053762 C3.34284705,7.75663964 3.29911688,7.87028838 3.1766724,7.99267934 L1.85602124,9.33023766 C0.710290758,10.4667251 0.719036793,11.5332749 1.85602124,12.6697623 L3.1766724,13.9985784 C3.29911688,14.1209694 3.34284705,14.2433604 3.34284705,14.4094624 L3.34284705,16.2802956 C3.34284705,17.8888624 4.10375203,18.658177 5.71302232,18.658177 L7.58467364,18.658177 C7.75084829,18.658177 7.87329277,18.6931459 7.99573725,18.824279 L9.32513445,20.1443529 C10.4708649,21.2895826 11.5378811,21.2808404 12.6748656,20.1443529 Z M10.3659125,18.9204434 L8.76538826,17.3118765 C8.58172154,17.1195479 8.38930879,17.0496102 8.12692776,17.0496102 L5.84421284,17.0496102 C5.07456183,17.0496102 4.95211735,16.918477 4.95211735,16.1491624 L4.95211735,13.8761875 C4.95211735,13.6139212 4.87340304,13.4128503 4.68099029,13.2292639 L3.08046603,11.6294392 C2.52946587,11.0786799 2.52946587,10.9213201 3.08046603,10.3705608 L4.68099029,8.77073614 C4.87340304,8.57840749 4.95211735,8.38607885 4.95211735,8.12381251 L4.95211735,5.84209538 C4.95211735,5.06403858 5.06581579,4.95038984 5.84421284,4.95038984 L8.12692776,4.95038984 C8.38930879,4.95038984 8.58172154,4.87170993 8.76538826,4.67938129 L10.3659125,3.07955663 C10.9256587,2.52879733 11.0830873,2.52879733 11.6340875,3.07955663 L13.2346117,4.67938129 C13.4182785,4.87170993 13.6194372,4.95038984 13.8730722,4.95038984 L16.1557872,4.95038984 C16.9254382,4.95038984 17.0478827,5.07278079 17.0478827,5.84209538 L17.0566287,8.12381251 C17.0566287,8.38607885 17.135343,8.57840749 17.3190097,8.77073614 L18.92828,10.3705608 C19.4705341,10.9213201 19.4705341,11.0786799 18.92828,11.6294392 L17.3190097,13.2292639 C17.135343,13.4128503 17.0566287,13.6139212 17.0566287,13.8761875 L17.0478827,16.1491624 C17.0478827,16.918477 16.9254382,17.0496102 16.1557872,17.0496102 L13.8730722,17.0496102 C13.6194372,17.0496102 13.4182785,17.1195479 13.2346117,17.3118765 L11.6340875,18.9204434 C11.0830873,19.4624605 10.9256587,19.4624605 10.3659125,18.9204434 Z M9.67497582,15.1962614 C9.95484891,15.1962614 10.1822458,15.0826126 10.3309284,14.8815418 L15.0537869,8.28117231 C15.1587393,8.12381251 15.2287075,7.94022607 15.2287075,7.78286627 C15.2287075,7.34575571 14.8963582,7.01355168 14.4328184,7.01355168 C14.1179612,7.01355168 13.9342945,7.12720043 13.7506278,7.38946677 L9.64873772,13.2030372 L7.55843554,10.8950935 C7.40100692,10.711507 7.20859417,10.6328271 6.95495918,10.6328271 C6.48267333,10.6328271 6.15032403,10.9562889 6.15032403,11.4108839 C6.15032403,11.5944704 6.22029231,11.786799 6.35148282,11.9179322 L9.04526136,14.9252528 C9.20268997,15.0913549 9.41259479,15.1962614 9.67497582,15.1962614 Z"></path>
		    </g>
		</svg>
	)
}

Icon.Reject = () => {
	return (
		<svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-1.000000, -1.000000)" fill="currentColor" fillRule="nonzero">
				<path d="M12.732303,20.2469514 L14.0682405,18.919803 C14.1912873,18.787967 14.3143342,18.7528108 14.4813264,18.7528108 L16.3621858,18.7528108 C17.9793733,18.7528108 18.7440217,17.9881623 18.7440217,16.3621858 L18.7440217,14.4813264 C18.7440217,14.3143342 18.7967561,14.1912873 18.9110139,14.0682405 L20.2381623,12.732303 C21.3895295,11.5897248 21.3807405,10.5174592 20.2381623,9.37488109 L18.9110139,8.03015452 C18.787967,7.90710765 18.7440217,7.79284984 18.7440217,7.62585765 L18.7440217,5.74499827 C18.7440217,4.12781077 17.9881623,3.35437327 16.3621858,3.35437327 L14.4813264,3.35437327 C14.3143342,3.35437327 14.1912873,3.31042796 14.0682405,3.18738109 L12.732303,1.86023265 C11.5809358,0.708865462 10.5174592,0.717654524 9.36609202,1.86023265 L8.03015452,3.18738109 C7.90710765,3.31042796 7.78406077,3.35437327 7.61706859,3.35437327 L5.73620921,3.35437327 C4.11902171,3.35437327 3.35437327,4.11023265 3.35437327,5.74499827 L3.35437327,7.62585765 C3.35437327,7.79284984 3.31042796,7.90710765 3.18738109,8.03015452 L1.86023265,9.37488109 C0.708865462,10.5174592 0.717654524,11.5897248 1.86023265,12.732303 L3.18738109,14.0682405 C3.31042796,14.1912873 3.35437327,14.3143342 3.35437327,14.4813264 L3.35437327,16.3621858 C3.35437327,17.9793733 4.11902171,18.7528108 5.73620921,18.7528108 L7.61706859,18.7528108 C7.78406077,18.7528108 7.90710765,18.787967 8.03015452,18.919803 L9.36609202,20.2469514 C10.5174592,21.3983186 11.5897248,21.3895295 12.732303,20.2469514 Z M10.4119905,19.0164826 L8.80359202,17.3992951 C8.61902171,17.2059358 8.42566234,17.1356233 8.16199046,17.1356233 L5.86804515,17.1356233 C5.09460765,17.1356233 4.97156077,17.0037873 4.97156077,16.2303498 L4.97156077,13.9451936 C4.97156077,13.6815217 4.89245921,13.4793733 4.69909984,13.294803 L3.0907014,11.6864045 C2.53699046,11.1326936 2.53699046,10.9744905 3.0907014,10.4207795 L4.69909984,8.81238109 C4.89245921,8.61902171 4.97156077,8.42566234 4.97156077,8.16199046 L4.97156077,5.86804515 C4.97156077,5.08581859 5.08581859,4.97156077 5.86804515,4.97156077 L8.16199046,4.97156077 C8.42566234,4.97156077 8.61902171,4.89245921 8.80359202,4.69909984 L10.4119905,3.0907014 C10.9744905,2.53699046 11.1326936,2.53699046 11.6864045,3.0907014 L13.294803,4.69909984 C13.4793733,4.89245921 13.6815217,4.97156077 13.9364045,4.97156077 L16.2303498,4.97156077 C17.0037873,4.97156077 17.1268342,5.09460765 17.1268342,5.86804515 L17.1356233,8.16199046 C17.1356233,8.42566234 17.2147248,8.61902171 17.3992951,8.81238109 L19.0164826,10.4207795 C19.5614045,10.9744905 19.5614045,11.1326936 19.0164826,11.6864045 L17.3992951,13.294803 C17.2147248,13.4793733 17.1356233,13.6815217 17.1356233,13.9451936 L17.1268342,16.2303498 C17.1268342,17.0037873 17.0037873,17.1356233 16.2303498,17.1356233 L13.9364045,17.1356233 C13.6815217,17.1356233 13.4793733,17.2059358 13.294803,17.3992951 L11.6864045,19.0164826 C11.1326936,19.5614045 10.9744905,19.5614045 10.4119905,19.0164826 Z M13.9539826,14.8065217 C14.4022248,14.8065217 14.7537873,14.4549592 14.7537873,14.006717 C14.7537873,13.7869905 14.6658967,13.5936311 14.5076936,13.444217 L12.1873811,11.1151155 L14.5164826,8.76843577 C14.6834748,8.60144359 14.7625764,8.42566234 14.7625764,8.21472484 C14.7625764,7.76648265 14.4022248,7.41492015 13.9539826,7.41492015 C13.7342561,7.41492015 13.5584748,7.48523265 13.3914826,7.65222484 L11.044803,9.99011546 L8.70691234,7.6610139 C8.55749827,7.50281077 8.37292796,7.42370921 8.14441234,7.42370921 C7.69617015,7.42370921 7.34460765,7.77527171 7.34460765,8.2235139 C7.34460765,8.4344514 7.43249827,8.62781077 7.58191234,8.77722484 L9.9110139,11.1151155 L7.58191234,13.444217 C7.43249827,13.5936311 7.34460765,13.7869905 7.34460765,14.006717 C7.34460765,14.4549592 7.69617015,14.8065217 8.14441234,14.8065217 C8.37292796,14.8065217 8.5750764,14.7274201 8.72449046,14.569217 L11.044803,12.2401155 L13.3739045,14.569217 C13.5233186,14.7186311 13.716678,14.8065217 13.9539826,14.8065217 Z"></path>
			</g>
		</svg>
	)
}

Icon.Reply = () => {
	return (
		<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
	        <g transform="translate(-2.000000, -3.000000)" fill="currentColor" fillRule="nonzero">
	            <path d="M10.1826172,18.328125 C10.7714844,18.328125 11.2021484,17.8886719 11.2021484,17.3085938 L11.2021484,14.1884766 L11.4306641,14.1884766 C14.5947266,14.1884766 16.5722656,15.0322266 17.9697266,17.6601562 C18.2685547,18.2138672 18.6640625,18.3193359 19.0419922,18.3193359 C19.5341797,18.3193359 19.9560547,17.8623047 19.9560547,17.0361328 C19.9560547,10.9277344 17.328125,7.1484375 11.4306641,7.1484375 L11.2021484,7.1484375 L11.2021484,4.06347656 C11.2021484,3.48339844 10.7714844,3 10.1650391,3 C9.74316406,3 9.47949219,3.20214844 9.00488281,3.60644531 L2.43066406,9.74121094 C2.11425781,10.0576172 2,10.3740234 2,10.6640625 C2,10.9453125 2.12304688,11.2705078 2.43066406,11.578125 L9.00488281,17.7744141 C9.43554688,18.1347656 9.76074219,18.328125 10.1826172,18.328125 Z M9.68164062,16.4208984 C9.63769531,16.4208984 9.59375,16.3945312 9.54101562,16.3505859 L3.70507812,10.8222656 C3.63476562,10.7607422 3.6171875,10.7080078 3.6171875,10.6640625 C3.6171875,10.6113281 3.63476562,10.5673828 3.70507812,10.5058594 L9.54101562,4.91601562 C9.58496094,4.87207031 9.62890625,4.84570312 9.68164062,4.84570312 C9.75195312,4.84570312 9.8046875,4.8984375 9.8046875,4.96875 L9.8046875,8.21191406 C9.8046875,8.40527344 9.89257812,8.484375 10.0771484,8.484375 L11.1757812,8.484375 C16.765625,8.484375 18.5410156,12.3076172 18.6904297,16.2451172 C18.6904297,16.3066406 18.6728516,16.3330078 18.6376953,16.3330078 C18.6025391,16.3330078 18.5849609,16.3066406 18.5585938,16.2451172 C17.6005859,14.1533203 15.078125,12.84375 11.1757812,12.84375 L10.0771484,12.84375 C9.89257812,12.84375 9.8046875,12.9316406 9.8046875,13.125 L9.8046875,16.2890625 C9.8046875,16.3681641 9.76074219,16.4208984 9.68164062,16.4208984 Z"></path>
	        </g>
		</svg>
	)
}

Icon.Edit = () => {
	return (
		<svg width="17px" height="18px" viewBox="0 0 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <g transform="translate(-2.000000, -2.000000)" fill="currentColor" fillRule="nonzero">
		        <path d="M17.2609863,6.45800781 L18.4562988,5.26269531 C19.020752,4.69824219 19.0373535,4.01757812 18.4978027,3.46142578 L17.958252,2.921875 C17.4187012,2.36572266 16.7131348,2.41552734 16.1486816,2.97167969 L14.9533691,4.15869141 L17.2609863,6.45800781 Z M2.90063477,19.2993164 L5.35766602,18.3696289 L16.1320801,7.57861328 L13.8244629,5.27929687 L3.05004883,16.0703125 L2.15356445,18.5273438 C1.97094727,19.0170898 2.46899414,19.4570312 2.90063477,19.2993164 Z"></path>
		    </g>
		</svg>
	)
}

export default Icon
