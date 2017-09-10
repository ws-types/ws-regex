/**
 * Regular expression types, such as 'i', 'g', 'm'...
 *
 * @export
 * @enum {number}
 */
export declare enum RegexType {
    Default = "",
    IgnoreCase = "i",
    Glocal = "g",
    Multiline = "m",
}
/**
 * A regular expression extensions for Typescript, provides the names key value pairs supports.
 *
 * @export
 * @class Regex
 */
export declare class Regex {
    private readonly is_string;
    private readonly default_key;
    private readonly _types;
    private readonly _typeStrings;
    /**
     * Get the types string connected by ' | '
     *
     * @readonly
     * @type {string}
     * @memberof Regex
     */
    readonly Type: string;
    /**
     * Get regex types string collection
     *
     * @readonly
     * @type {string[]}
     * @memberof Regex
     */
    readonly Types: string[];
    private readonly _pattern;
    /**
     * Get the regex pattern of this Regex instance in string format
     *
     * @readonly
     * @type {string}
     * @memberof Regex
     */
    readonly Pattern: string;
    private _keys;
    /**
     * The keys for names pairs return
     *
     * @memberof Regex
     */
    Keys: string[];
    /**
     * Create a regex by string of RegExp interface value, support regex types importing.
     *
     * @static
     * @memberof Regex
     */
    static Create: (pattern: string | RegExp, ...types: RegexType[]) => Regex;
    constructor(pattern: string | RegExp, ...types: RegexType[]);
    /**
     * Set keys of names pairs return
     *
     * @memberof Regex
     */
    SetKeys: (...keys: string[]) => Regex;
    /**
     * Test the pattern if it is able to be matched.
     *
     * @memberof Regex
     */
    Test: (target: string) => boolean;
    /**
     * Return a strings collection of matched items
     *
     * @memberof Regex
     */
    Exec: (target: string) => string[];
    /**
     * Return a map of matched items in key-value pairs if you've set the names keys, or you can set them here in string[] style.
     *
     * @memberof Regex
     */
    Matches: (target: string, keys?: string[] | undefined) => {
        [key: string]: string;
    } | {
        [key: number]: string;
    };
}
