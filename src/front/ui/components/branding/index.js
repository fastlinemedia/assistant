import React from 'react'

export const Branding = ( { name } ) => {
	switch ( name ) {
	case 'outline':
		return (
			<svg width="100px" height="100px" viewBox="0 0 403 402" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path d="M211.028018,398.639134 C208.118018,400.207234 204.665018,400.251234 198.929018,397.849434 C186.801018,392.771834 176.055018,388.975434 165.705018,381.149934 C163.463018,379.454934 161.282018,377.685534 159.277018,375.705434 L159.199018,375.627234 L63.443918,279.977234 L62.618118,278.984234 C62.062118,277.987234 61.843218,277.757234 61.577818,276.631234 C60.893518,273.729234 62.321818,270.394234 64.981418,268.911234 C65.736718,268.490234 66.563618,268.212234 67.420118,268.092234 C68.271218,267.973234 69.135218,268.091234 69.989918,268.210234 C70.398218,268.346234 70.820918,268.446234 71.214918,268.620234 C72.273118,269.086234 72.459318,269.343234 73.338018,270.072234 C75.875918,272.607234 78.412718,275.144234 80.948418,277.681234 L120.677018,239.479234 L82.895318,203.159234 L46.002718,241.338234 L52.421118,248.476234 C53.434618,249.826234 54.347418,251.288234 54.690718,252.923234 C55.113418,254.936234 54.838818,257.152234 53.712718,258.880234 C53.435718,259.305234 53.068018,259.663234 52.745618,260.055234 C52.743918,260.057234 52.742118,260.058234 52.742118,260.058234 C51.656718,260.887234 51.474018,261.168234 50.159718,261.609234 C47.640618,262.456234 44.727818,261.883234 42.528418,260.399234 C42.050118,260.076234 41.631218,259.673234 41.182618,259.310234 C41.182618,259.310234 25.599518,244.239234 25.599518,244.239234 C25.599518,244.239234 24.727718,243.418234 24.030318,242.725234 C14.606018,233.362234 7.50681803,221.704234 3.56871803,208.768234 C-0.293881966,196.080234 -1.03518197,182.478234 1.41411803,169.397234 C3.85241803,156.375234 9.60951803,143.961234 17.934118,133.387234 L18.037918,133.256234 C19.707918,131.214234 21.479118,129.255234 23.327218,127.379234 L38.739818,111.766234 C56.399918,94.1222342 74.068118,76.4742342 91.833218,58.9112342 C98.346018,52.4722342 104.848018,46.0232342 111.415018,39.6392342 C117.276018,33.9412342 123.259018,28.3712342 129.217018,22.7902342 C129.512018,22.5142342 129.778018,22.2652342 129.778018,22.2652342 C139.156018,13.5982342 150.645018,7.06223419 162.820018,3.50423419 C168.833018,1.74823419 174.991018,0.617234192 181.213018,0.231234192 C183.355018,0.0702341922 185.508018,-0.00476580778 187.678018,0.000234192216 C201.199018,0.0732341922 214.752018,3.98823419 226.656018,10.6432342 C235.121018,15.3742342 242.765018,21.5192342 249.733018,28.2632342 C257.953018,36.2182342 265.950018,44.4392342 273.865018,52.5052342 C293.295018,72.3072342 312.485018,92.2772342 332.026018,112.083234 L332.027018,112.085234 C332.357018,112.494234 332.728018,112.872234 333.015018,113.311234 C334.394018,115.418234 334.667018,118.214234 333.720018,120.555234 C333.198018,121.846234 332.897018,122.050234 332.025018,123.120234 L332.022018,123.124234 C331.617018,123.453234 331.244018,123.824234 330.808018,124.111234 C328.278018,125.782234 324.759018,125.778234 322.213018,124.109234 C321.178018,123.431234 320.625018,122.765234 319.784018,121.934234 C298.447018,100.837234 277.661018,79.7832342 256.277018,58.7052342 C249.597018,52.1202342 242.906018,45.4982342 235.991018,39.1492342 C230.561018,34.1652342 224.615018,29.7202342 218.119018,26.2432342 C207.525018,20.5732342 195.600018,17.8122342 183.693018,18.8172342 C183.296018,18.8512342 182.906018,18.8882342 182.809018,18.8982342 C172.021018,20.0412342 161.342018,24.4172342 152.486018,31.1632342 L188.816018,70.5082342 L201.311018,58.4332342 C202.491018,57.4322342 203.674018,56.4182342 205.025018,55.6682342 C206.213018,55.0082342 207.532018,54.4792342 208.866018,54.1992342 C209.466018,54.0732342 210.083018,54.0532342 210.691018,53.9812342 C211.254018,54.0282342 211.816018,54.0762342 212.378018,54.1232342 C213.841018,54.6282342 213.854018,54.6272342 215.107018,55.5352342 L215.111018,55.5382342 C215.410018,55.9512342 215.773018,56.3232342 216.008018,56.7762342 C217.372018,59.4142342 216.508018,62.8652342 214.978018,65.6202342 C214.227018,66.9722342 213.214018,68.1542342 212.212018,69.3342342 L199.694018,82.2892342 L218.183018,102.312234 C219.153018,103.505234 220.133018,104.699234 220.857018,106.050234 C222.315018,108.769234 223.186018,112.220234 221.859018,114.818234 C221.635018,115.258234 221.282018,115.620234 220.994018,116.021234 L220.991018,116.024234 C220.590018,116.312234 220.228018,116.665234 219.788018,116.889234 C217.182018,118.220234 213.766018,117.360234 211.020018,115.887234 C209.669018,115.163234 208.475018,114.183234 207.282018,113.213234 L187.480018,94.9282342 L150.295018,133.410234 L188.614018,174.152234 L206.605018,156.852234 C207.731018,155.909234 208.860018,154.955234 210.153018,154.266234 C211.302018,153.653234 212.575018,153.179234 213.861018,152.947234 C214.445018,152.841234 215.044018,152.841234 215.636018,152.789234 C216.186018,152.851234 216.737018,152.914234 217.287018,152.977234 C218.736018,153.515234 218.748018,153.516234 219.991018,154.434234 L219.994018,154.437234 C220.836018,155.577234 221.116018,155.718234 221.451018,157.141234 C222.166018,160.180234 220.890018,163.535234 219.022018,166.097234 C218.580018,166.704234 218.058018,167.248234 217.576018,167.823234 L199.925018,186.179234 L219.739018,207.247234 C220.871018,208.597234 222.013018,209.948234 222.889018,211.469234 C224.597018,214.435234 225.847018,218.223234 224.473018,221.119234 C224.251018,221.587234 223.881018,221.969234 223.585018,222.394234 L223.582018,222.398234 C223.157018,222.694234 222.775018,223.063234 222.307018,223.285234 C220.683018,224.056234 218.663018,223.920234 216.921018,223.478234 C214.643018,222.899234 212.465018,221.750234 210.508018,220.290234 C209.785018,219.750234 209.126018,219.131234 208.434018,218.551234 L187.620018,198.976234 L150.569018,237.508234 L218.550018,308.226034 C219.736018,309.628734 220.935018,311.034734 221.824018,312.639434 C223.614018,315.872534 224.657018,320.010834 223.052018,323.122334 C222.776018,323.657334 222.346018,324.097634 221.993018,324.585234 L221.990018,324.588634 C221.502018,324.941434 221.062018,325.371234 220.527018,325.647134 C217.405018,327.257734 213.314018,326.230334 210.044018,324.418934 C208.439018,323.530134 207.033018,322.330934 205.631018,321.145734 L135.225018,253.464234 L96.734918,293.493234 C120.836018,317.652334 144.909018,341.839734 169.190018,365.818734 C173.118018,369.685534 179.977018,375.112534 184.797018,377.972634 C191.067018,381.693334 198.522018,384.526934 205.137018,386.534434 L384.984018,206.688234 C382.275018,196.711234 378.193018,187.148234 372.835018,178.327234 C368.222018,170.732234 362.694018,163.699234 356.445018,157.441234 L344.114018,145.109234 C343.839018,144.778234 343.532018,144.471234 343.288018,144.116234 C341.584018,141.628234 341.713018,138.054234 343.678018,135.688234 C344.783018,134.357234 346.383018,133.466234 348.096018,133.227234 C348.948018,133.108234 349.812018,133.226234 350.666018,133.346234 C351.074018,133.482234 351.497018,133.582234 351.891018,133.756234 C352.949018,134.223234 353.135018,134.481234 354.013018,135.210234 C361.312018,142.509234 368.919018,149.578234 375.364018,157.592234 C387.012018,172.076234 395.372018,189.184234 399.633018,207.413234 C401.488018,215.351234 402.559018,223.429234 402.830018,231.544234 C402.873018,232.837234 402.899018,234.124234 402.902018,235.414234 L402.903018,235.789234 C402.903018,277.744234 403.085018,319.700334 402.902018,361.655334 C402.864018,370.511334 399.793018,379.427534 394.250018,386.435434 C386.788018,395.869934 374.981018,401.662134 362.833018,401.715234 C332.157018,401.765434 295.906018,401.721034 265.171018,401.722934 L251.588018,401.723334 L250.302018,401.604134 C249.888018,401.486334 249.461018,401.406234 249.059018,401.250634 C246.247018,400.161434 244.334018,397.140134 244.618018,394.077634 C244.896018,391.070234 247.318018,388.400234 250.301018,387.842534 C250.725018,387.763434 251.159018,387.763034 251.588018,387.723334 C271.443018,387.722834 296.836018,387.720534 316.687018,387.718634 L388.983018,315.351734 C388.976018,288.837234 388.903018,262.322234 388.903018,235.807234 C388.891018,231.267234 388.604018,226.747234 388.049018,222.273234 L217.377018,392.945334 C215.836018,394.617234 214.487018,396.079134 213.108018,397.214634 L213.073018,397.249734 C212.448018,397.769034 211.814018,398.292234 211.074018,398.619334 L211.028018,398.639134 Z M100.267018,185.182234 L137.195018,223.596234 L175.072018,187.174234 L134.874018,149.368234 L100.267018,185.182234 Z M31.790318,154.031234 C27.837218,159.807234 24.879918,166.278234 23.112518,172.927234 C19.968318,184.756234 20.264318,197.145234 23.957618,208.537234 C25.633618,213.707234 27.929918,218.613234 30.828118,223.174234 L67.177218,188.049234 L31.790318,154.031234 Z M83.423818,100.978234 L82.330618,102.077234 C71.826718,112.628234 61.282918,123.141234 50.708018,133.628234 L85.760518,170.092234 L120.853018,136.181234 L83.423818,100.978234 Z M136.044018,47.4342342 C133.315018,50.3212342 130.590018,53.2142342 127.821018,56.0622342 C122.535018,61.5002342 111.950018,72.2152342 102.097018,82.1632342 L137.643018,119.957234 L175.240018,83.6262342 L136.044018,47.4342342 Z" fill="currentColor"></path>
			</svg>
		)
	default:
		return (
			<svg width="100px" height="100px" viewBox="0 0 404 403" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
}