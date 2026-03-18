function Badge({ label }: { label: string }) {
	return (
		<div className="badge-amplified-text vf-badge">
			<div
				className="web_ui__Badge__badge web_ui__Badge__default web_ui__Badge__filled"
				data-testid="feed-item--secondary-badge"
			>
				<div className="web_ui__Badge__icon web_ui__Badge__custom-icon">
					<span className="web_ui__Icon__icon web_ui__Icon__success-default" style={{ width: "12px" }}>
						<svg
							viewBox="0 0 12 12"
							width="12"
							height="12"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth=".85"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path
								fill="currentColor"
								fillOpacity=".2"
								stroke="currentColor"
								d="M1 2.5 4.5 1 7.5 2.5 11 1v8.5L7.5 11 4.5 9.5 1 10.5V2.5Z"
							/>
							<path d="M4.5 1v8.5M7.5 2.5V11" />
							<path d="M2 5.5h1.5M2 7.5h1.5M5.5 4.5H7M5.5 6.5H7M8.5 4H10M8.5 6H10" />
						</svg>
					</span>
				</div>
				<div className="web_ui__Badge__content" data-testid="feed-item--secondary-badge--content">
					{label}
				</div>
			</div>
		</div>
	);
}

export default Badge;
