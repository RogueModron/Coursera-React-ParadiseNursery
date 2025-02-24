import { useMemo } from "react";

export function useBaseHref() {
    const baseRef = useMemo(() => {
        const bases = document.getElementsByTagName('base');
        if (bases.length === 1) {
            const href = bases[0].getAttribute('href');
            if (typeof href === 'string' && href.length > 0) {
                return href;
            }
        }
        return '/';
    }, []);
    return baseRef;
}
