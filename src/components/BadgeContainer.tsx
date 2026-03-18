function BadgeContainer({ children }: { children: React.ReactNode }) {
	return (
		<div data-testid="feed-item--badge-container">
			<div className="web_ui__Cell__cell web_ui__Cell__narrow web_ui__Cell__transparent" role="presentation">
				<div className="web_ui__Cell__content">
					<div className="web_ui__Cell__body">
						<div className="u-flexbox u-flex-direction-row u-align-items-flex-start u-gap-small">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BadgeContainer;
