import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Badge from "@/components/Badge";
import BadgeContainer from "@/components/BadgeContainer";

const CARD_SELECTOR = "[data-testid='feed-item']";
const OVERLAY_SELECTOR = "[data-testid='feed-item--overlay-link'] > div";
const BADGE_CONTAINER_SELECTOR = '[data-testid="feed-item--badge-container"]';
const FLEX_COLUMN_SELECTOR = ".web_ui__Cell__body > div";
const GRID_ITEM_TESTID = "grid-item";
const PROCESSED_CLASS = "vf-card";

const BADGE_LABEL = "Portugal";

function processCard(card: Element) {
	const overlay = card.querySelector(OVERLAY_SELECTOR);
	if (!overlay) {
		return;
	}

	const badgeContainer = overlay.querySelector(BADGE_CONTAINER_SELECTOR);
	if (!badgeContainer) {
		createRoot(overlay).render(
			<StrictMode>
				<BadgeContainer>
					<Badge label={BADGE_LABEL} />
				</BadgeContainer>
			</StrictMode>,
		);
		return;
	}

	const flexColumn = badgeContainer.querySelector(FLEX_COLUMN_SELECTOR);
	if (!flexColumn) {
		return;
	}
	flexColumn.classList.replace("u-flex-direction-column", "u-flex-direction-row");
	createRoot(flexColumn).render(
		<StrictMode>
			<Badge label={BADGE_LABEL} />
		</StrictMode>,
	);
}

function processAllCards() {
	for (const card of document.querySelectorAll(CARD_SELECTOR)) {
		if (!card.classList.contains(PROCESSED_CLASS)) {
			processCard(card);
			card.classList.add(PROCESSED_CLASS);
		}
	}
}

function observeNewCards(): MutationObserver {
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (!mutation.addedNodes.length) {
				continue;
			}

			for (const node of mutation.addedNodes) {
				if (node.nodeType !== Node.ELEMENT_NODE) {
					continue;
				}

				const element = node as Element;
				if (!element.classList.contains(GRID_ITEM_TESTID)) {
					continue;
				}

				const card = element.querySelector(CARD_SELECTOR);
				if (card && !card.classList.contains(PROCESSED_CLASS)) {
					processCard(card);
					card.classList.add(PROCESSED_CLASS);
				}
			}
		}
	});

	observer.observe(document.body, { childList: true, subtree: true });
	return observer;
}

function init() {
	processAllCards();
	observeNewCards();
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	setTimeout(init, 1_000);
}
