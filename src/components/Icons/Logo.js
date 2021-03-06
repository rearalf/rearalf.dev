import React from 'react';

function Logo({ width = 290, height = 59, fill = '#ebebeb' }){
	return (
		<svg width={width} height={height} viewBox="0 0 290 59" fill="none">
			<g clipPath="url(#prefix__clip0)">
				<g filter="url(#prefix__filter0_d)">
					<path
						d="M32.487 0L0 29.5 32.487 59l7.31-6.721L15.23 29.687 40 6.908 32.487 0z"
						fill="#5EBFBF"
					/>
				</g>
				<g filter="url(#prefix__filter1_d)">
					<path
						d="M257.513 0L290 29.5 257.513 59l-7.31-6.721 24.569-22.592L250 6.908 257.513 0z"
						fill="#5EBFBF"
					/>
				</g>
				<g filter="url(#prefix__filter2_d)">
					<path
						d="M58.629 25.544c-.47.252-1.067.775-1.792 1.571-.683.754-1.301 1.885-1.856 3.393v18.66a13.82 13.82 0 012.56.502c.853.21 1.706.545 2.56 1.005v1.571H45v-1.57a11.832 11.832 0 012.175-.943 37.36 37.36 0 012.048-.566v-24.69L45 23.973V22.34a24.859 24.859 0 014.223-1.382c1.45-.377 2.837-.67 4.159-.88h1.6v6.66h.255c.384-.837.917-1.675 1.6-2.513a15.43 15.43 0 012.431-2.262c.939-.67 1.941-1.172 3.008-1.508a7.79 7.79 0 013.39-.377c.3.545.555 1.152.769 1.823.255.628.49 1.298.703 2.01v1.633h-8.51zM96.11 47.849c-.342.712-.875 1.382-1.6 2.01a11.61 11.61 0 01-2.495 1.634c-.939.46-1.963.817-3.071 1.068-1.11.293-2.24.44-3.392.44-2.517 0-4.735-.377-6.654-1.13-1.92-.797-3.52-1.907-4.799-3.33-1.28-1.467-2.26-3.205-2.943-5.215-.64-2.01-.96-4.273-.96-6.786 0-5.361 1.258-9.445 3.775-12.251 2.517-2.806 6.079-4.21 10.685-4.21 1.493 0 2.965.21 4.416.629a9.78 9.78 0 013.839 1.947c1.151.922 2.068 2.157 2.751 3.707.725 1.508 1.088 3.393 1.088 5.655 0 .712-.043 1.445-.128 2.199-.043.712-.15 1.487-.32 2.324H76.338c0 1.76.214 3.414.64 4.964.47 1.508 1.152 2.827 2.048 3.958.896 1.13 2.026 2.031 3.391 2.701 1.365.629 2.965.943 4.799.943 1.493 0 3.008-.21 4.543-.629 1.536-.418 2.687-.963 3.455-1.633l.896 1.005zM84.4 22.843c-2.43 0-4.287.817-5.566 2.45-1.28 1.592-2.048 4.419-2.303 8.482h14.076a9.68 9.68 0 00.064-1.068c.042-.377.064-.733.064-1.068 0-2.68-.511-4.817-1.535-6.409-1.024-1.591-2.624-2.387-4.8-2.387zm41.585 21.173c0 .921.021 1.717.064 2.387.043.67.085 1.382.128 2.136l4.415.628v1.32a23.44 23.44 0 01-3.583 1.445c-1.28.419-2.516.733-3.711.942h-1.6a9.46 9.46 0 01-.767-3.141 93.482 93.482 0 01-.192-3.832h-.32c-.171.837-.512 1.696-1.024 2.575-.469.838-1.109 1.592-1.919 2.262-.768.67-1.685 1.215-2.752 1.634-1.067.419-2.282.628-3.647.628-2.602 0-4.735-.775-6.398-2.325-1.621-1.55-2.432-3.58-2.432-6.094 0-1.927.384-3.497 1.152-4.712.811-1.256 1.984-2.24 3.519-2.953 1.536-.712 3.434-1.214 5.695-1.508 2.26-.335 4.884-.586 7.87-.754.171-1.8.213-3.413.128-4.837-.043-1.466-.277-2.702-.704-3.707-.384-1.047-.981-1.843-1.792-2.387-.767-.587-1.791-.88-3.071-.88-.597 0-1.28.042-2.047.126a6.833 6.833 0 00-2.176.502l-3.007 7.54h-1.664a52.273 52.273 0 01-1.151-3.896 25.954 25.954 0 01-.576-3.958c1.62-.963 3.412-1.717 5.374-2.262 2.005-.544 4.223-.817 6.655-.817 2.175 0 3.903.315 5.182.943 1.323.586 2.325 1.361 3.008 2.325a7.917 7.917 0 011.343 3.204c.213 1.172.32 2.345.32 3.518 0 2.513-.064 4.942-.192 7.288a180.829 180.829 0 00-.128 6.66zm-12.349 5.089c1.067 0 2.005-.21 2.816-.629.811-.418 1.492-.921 2.047-1.507a9.62 9.62 0 001.344-1.76c.341-.628.576-1.151.704-1.57v-6.597c-2.475 0-4.5.125-6.079.377-1.578.251-2.815.649-3.711 1.194-.896.544-1.514 1.235-1.855 2.073-.341.796-.512 1.717-.512 2.764 0 1.801.469 3.204 1.407 4.21.939.963 2.219 1.445 3.839 1.445zm34.033-23.56c-.47.25-1.067.774-1.792 1.57-.683.754-1.301 1.885-1.855 3.393v18.66a13.83 13.83 0 012.559.502c.853.21 1.706.545 2.559 1.005v1.571h-15.1v-1.57a11.827 11.827 0 012.176-.943c.682-.21 1.364-.398 2.047-.566v-24.69l-4.223-.503V22.34a24.869 24.869 0 014.223-1.382 43.77 43.77 0 014.159-.88h1.6v6.66h.256c.384-.837.916-1.675 1.599-2.513a15.421 15.421 0 012.432-2.262c.937-.67 1.94-1.172 3.007-1.508a7.79 7.79 0 013.391-.377c.298.545.554 1.152.768 1.823.256.628.49 1.298.704 2.01v1.633h-8.51zm23.148 26.701h-14.204v-1.822a24.639 24.639 0 014.606-1.508l16.188-41.403h1.856l16.188 41.403c.852.168 1.684.356 2.495.566.853.21 1.643.523 2.367.942v1.822h-16.379v-1.822a27.32 27.32 0 012.623-.88c.896-.25 1.77-.46 2.623-.628l-4.351-11.497h-15.292l-4.223 11.497c1.792.252 3.626.754 5.503 1.508v1.822zm0-18.094h12.925l-5.055-13.32-1.216-5.403h-.128l-1.599 5.53-4.927 13.193zm46.3 18.094h-14.204v-1.57a21.268 21.268 0 014.223-1.509V9.397l-4.863-.502V7.262c1.109-.503 2.495-.943 4.159-1.32A76.173 76.173 0 01211.295 5h1.599v44.167a21.29 21.29 0 014.223 1.508v1.571zM239.113 5c.384 0 .832.02 1.344.063.512.042 1.045.105 1.6.188a9.8 9.8 0 011.599.252c.512.083.96.188 1.344.314a34.198 34.198 0 01-.576 3.895 20.806 20.806 0 01-.832 3.204h-1.599l-2.816-5.403c-1.237 0-2.303.126-3.2.377-.852.251-1.577.733-2.174 1.445-.555.712-.982 1.738-1.28 3.079-.256 1.34-.384 3.1-.384 5.277v3.142h7.358v3.14h-7.358v25.194c2.218.252 4.265.755 6.143 1.508v1.571h-16.124v-1.57a12.71 12.71 0 014.223-1.509V23.974h-4.863V22.34a17.853 17.853 0 014.863-2.073v-2.199c0-2.597.32-4.733.959-6.408.64-1.718 1.536-3.058 2.688-4.021 1.152-1.005 2.495-1.697 4.031-2.074 1.577-.377 3.263-.565 5.054-.565z"
						fill={fill}
					/>
				</g>
			</g>
			<defs>
				<filter
					id="prefix__filter0_d"
					x={0}
					y={-4}
					width={48}
					height={67}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={4} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix values="0 0 0 0 0.368627 0 0 0 0 0.74902 0 0 0 0 0.74902 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
				<filter
					id="prefix__filter1_d"
					x={242}
					y={-4}
					width={48}
					height={67}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dx={-4} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix values="0 0 0 0 0.368627 0 0 0 0 0.74902 0 0 0 0 0.74902 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
				<filter
					id="prefix__filter2_d"
					x={41}
					y={5}
					width={208}
					height={56}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
				<clipPath id="prefix__clip0">
					<path fill="#fff" d="M0 0h290v59H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}

export default Logo;
