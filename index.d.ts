type FontAwesomeV5Styles = "solid" | "regular" | "brands";

type FontAwesomeV5Keys =
    | "name"
    | "changes"
    | "label"
    | "search"
    | "styles"
    | "unicode"
    | "voted";

interface FontAwesomeV5Icon {
    name?: string;
    changes?: string[];
    label?: string;
    search?: { terms: string[] };
    styles?: FontAwesomeV5Styles[];
    unicode?: string;
    voted?: boolean;
}

/**
 * Returns a promise with a full list of actual Font Awesome v5 icons.
 */
export declare function getList(): Promise<FontAwesomeV5Icon[]>;

/**
 * Returns a promise with a full list of Font Awesome icons with needed keys only.
 * @param arrayOfNeededKeys 
 */
export declare function getListByKeys(
    arrayOfNeededKeys: FontAwesomeV5Keys[]
): Promise<FontAwesomeV5Icon[]>;
