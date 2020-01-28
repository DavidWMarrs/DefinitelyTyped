// Type definitions for i18next-ko 3.0
// Project: https://github.com/leMaik/i18next-ko
// Definitions by: Daniel Waxweiler <https://github.com/dwaxweiler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout"/>
/// <reference types="jquery"/>

import * as i18next from 'i18next';

export const i18n: i18next.i18n;

export function init(resources: i18next.Resource, language?: string, ko?: KnockoutStatic, $?: JQueryStatic, options?:InitOptions): void;

export function setLanguage(language: string): void;

export function t(key: string | string[], options?: i18next.TOptions<i18next.StringMap>): KnockoutComputed<string>;

export function t(key: string | string[], defaultValue?: string, options?: i18next.TOptions<i18next.StringMap>): KnockoutComputed<string>;

// Taken from i18next definitions, but removed lng & resources properties.
export interface InitOptions {
    /**
     * Logs info level to console output. Helps finding issues with loading not working.
     * @default false
     */
    debug?: boolean;
  
    /**
     * Allow initializing with bundled resources while using a backend to load non bundled ones.
     * @default false
     */
    partialBundledLanguages?: boolean;
  
    /**
     * Language to use if translations in user language are not available.
     * @default 'dev'
     */
    fallbackLng?: false | i18next.FallbackLng;
  
    /**
     * Array of allowed languages
     * @default false
     */
    whitelist?: false | string[];
  
    /**
     * If true will pass eg. en-US if finding en in whitelist
     * @default false
     */
    nonExplicitWhitelist?: boolean;
  
    /**
     * Language codes to lookup, given set language is
     * 'en-US': 'all' --> ['en-US', 'en', 'dev'],
     * 'currentOnly' --> 'en-US',
     * 'languageOnly' --> 'en'
     * @default 'all'
     */
    load?: 'all' | 'currentOnly' | 'languageOnly';
  
    /**
     * Array of languages to preload. Important on server-side to assert translations are loaded before rendering views.
     * @default false
     */
    preload?: false | string[];
  
    /**
     * Language will be lowercased eg. en-US --> en-us
     * @default false
     */
    lowerCaseLng?: boolean;
  
    /**
     * Language will be lowercased EN --> en while leaving full locales like en-US
     * @default false
     */
    cleanCode?: boolean;
  
    /**
     * String or array of namespaces to load
     * @default 'translation'
     */
    ns?: string | string[];
  
    /**
     * Default namespace used if not passed to translation function
     * @default 'translation'
     */
    defaultNS?: string;
  
    /**
     * String or array of namespaces to lookup key if not found in given namespace.
     * @default false
     */
    fallbackNS?: false | string | string[];
  
    /**
     * Calls save missing key function on backend if key not found
     * @default false
     */
    saveMissing?: boolean;
  
    /**
     * Experimental: enable to update default values using the saveMissing
     * (Works only if defaultValue different from translated value.
     * Only useful on initial development or when keeping code as source of truth not changing values outside of code.
     * Only supported if backend supports it already)
     * @default false
     */
    updateMissing?: boolean;
  
    /**
     * @default 'fallback'
     */
    saveMissingTo?: 'current' | 'all' | 'fallback';
  
    /**
     * Used for custom missing key handling (needs saveMissing set to true!)
     * @default false
     */
    missingKeyHandler?:
      | false
      | ((lngs: string[], ns: string, key: string, fallbackValue: string) => void);
  
    /**
     * Receives a key that was not found in `t()` and returns a value, that will be returned by `t()`
     * @default noop
     */
    parseMissingKeyHandler?(key: string): any;
  
    /**
     * Appends namespace to missing key
     * @default false
     */
    appendNamespaceToMissingKey?: boolean;
  
    /**
     * Gets called in case a interpolation value is undefined. This method will not be called if the value is empty string or null
     * @default noop
     */
    missingInterpolationHandler?: (text: string, value: any, options: InitOptions) => any;
  
    /**
     * Will use 'plural' as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers
     * @default true
     */
    simplifyPluralSuffix?: boolean;
  
    /**
     * String or array of postProcessors to apply per default
     * @default false
     */
    postProcess?: false | string | string[];
  
    /**
     * passthrough the resolved object including 'usedNS', 'usedLang' etc into options object of postprocessors as 'i18nResolved' property
     * @default false
     */
    postProcessPassResolved?: boolean;
  
    /**
     * Allows null values as valid translation
     * @default true
     */
    returnNull?: boolean;
  
    /**
     * Allows empty string as valid translation
     * @default true
     */
    returnEmptyString?: boolean;
  
    /**
     * Allows objects as valid translation result
     * @default false
     */
    returnObjects?: boolean;
  
    /**
     * Gets called if object was passed in as key but returnObjects was set to false
     * @default noop
     */
    returnedObjectHandler?(key: string, value: string, options: any): void;
  
    /**
     * Char, eg. '\n' that arrays will be joined by
     * @default false
     */
    joinArrays?: false | string;
  
    /**
     * Sets defaultValue
     * @default args => ({ defaultValue: args[1] })
     */
    overloadTranslationOptionHandler?(args: string[]): i18next.TOptions;
  
    /**
     * @see https://www.i18next.com/interpolation.html
     */
    interpolation?: i18next.InterpolationOptions;
  
    /**
     * Options for language detection - check documentation of plugin
     * @default undefined
     */
    detection?: object;
  
    /**
     * Options for backend - check documentation of plugin
     * @default undefined
     */
    backend?: object;
  
    /**
     * Options for cache layer - check documentation of plugin
     * @default undefined
     */
    cache?: object;
  
    /**
     * Options for i18n message format - check documentation of plugin
     * @default undefined
     */
    i18nFormat?: object;
  
    /**
     * Options for react - check documentation of plugin
     * @default undefined
     */
    react?: i18next.ReactOptions;
  
    /**
     * Triggers resource loading in init function inside a setTimeout (default async behaviour).
     * Set it to false if your backend loads resources sync - that way calling i18next.t after
     * init is possible without relaying on the init callback.
     * @default true
     */
    initImmediate?: boolean;
  
    /**
     * Char to separate keys
     * @default '.'
     */
    keySeparator?: false | string;
  
    /**
     * Char to split namespace from key
     * @default ':'
     */
    nsSeparator?: false | string;
  
    /**
     * Char to split plural from key
     * @default '_'
     */
    pluralSeparator?: string;
  
    /**
     * Char to split context from key
     * @default '_'
     */
    contextSeparator?: string;
  
    /**
     * Prefixes the namespace to the returned key when using `cimode`
     * @default false
     */
    appendNamespaceToCIMode?: boolean;
  
    /**
     * Compatibility JSON version
     * @default 'v3'
     */
    compatibilityJSON?: 'v1' | 'v2' | 'v3';
  
    /**
     * Options for https://github.com/locize/locize-editor
     * @default undefined
     */
    editor?: {
      /**
       * Enable on init without the need of adding querystring locize=true
       * @default false
       */
      enabled?: boolean;
      /**
       * If set to false you will need to open the editor via API
       * @default true
       */
      autoOpen?: boolean;
  
      /**
       * Enable by adding querystring locize=true; can be set to another value or turned off by setting to false
       * @default 'locize'
       */
      enableByQS?: string | false;
  
      /**
       * Turn on/off by pressing key combination. Combine this with `toggleKeyCode`
       * @default 'ctrlKey'
       */
      toggleKeyModifier?: 'ctrlKey' | 'metaKey' | 'altKey' | 'shiftKey';
      /**
       * Turn on/off by pressing key combination. Combine this with `toggleKeyModifier`
       * @default 24 (x)
       */
      toggleKeyCode?: number;
  
      /**
       * Use lng in editor taken from query string, eg. if running with lng=cimode (i18next, locize)
       * @default 'useLng'
       */
      lngOverrideQS?: string;
  
      /**
       * Use lng in editor, eg. if running with lng=cimode (i18next, locize)
       * @default null
       */
      lngOverride?: string | null;
  
      /**
       * How the editor will open.
       * Setting to window will open a new window/tab instead
       * @default 'iframe'
       */
      mode?: 'iframe' | 'window';
  
      /**
       * Styles to adapt layout in iframe mode to your website layout.
       * This will add a style to the `<iframe>`
       * @default 'z-index: 2000; position: fixed; top: 0; right: 0; bottom: 0; width: 600px; box-shadow: -3px 0 5px 0 rgba(0,0,0,0.5);'
       */
      iframeContainerStyle?: string;
      /**
       * Styles to adapt layout in iframe mode to your website layout.
       * This will add a style to the parent of `<iframe>`
       * @default 'height: 100%; width: 600px; border: none;'
       */
      iframeStyle?: string;
      /**
       * Styles to adapt layout in iframe mode to your website layout.
       * This will add a style to `<body>`
       * @default 'margin-right: 605px;'
       */
      bodyStyle?: string;
  
      /**
       * Handle when locize saved the edited translations, eg. reload website
       * @default noop
       */
      onEditorSaved?: (lng: null, ns: string | string[]) => void;
    };
  
    /**
     * Options for https://github.com/locize/locize-lastused
     * @default undefined
     */
    locizeLastUsed?: {
      /**
       * The id of your locize project
       */
      projectId: string;
  
      /**
       * An api key if you want to send missing keys
       */
      apiKey?: string;
  
      /**
       * The reference language of your project
       * @default 'en'
       */
      referenceLng?: string;
  
      /**
       * Version
       * @default 'latest'
       */
      version?: string;
  
      /**
       * Debounce interval to send data in milliseconds
       * @default 90000
       */
      debounceSubmit?: number;
  
      /**
       * Hostnames that are allowed to send last used data.
       * Please keep those to your local system, staging, test servers (not production)
       * @default ['localhost']
       */
      allowedHosts?: string[];
    };
}