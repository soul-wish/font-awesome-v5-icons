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

export declare function getList(): Promise<FontAwesomeV5Icon[]>;

export declare function getListByKeys(
    arrayOfNeededKeys: FontAwesomeV5Keys[]
): Promise<FontAwesomeV5Icon[]>;
