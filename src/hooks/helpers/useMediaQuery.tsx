"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
