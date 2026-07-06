/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalCava?version=0.1' {

// Module dependencies
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace AstalCava {

    /**
     * AstalCava-0.1
     */


    /**
     * @gir-type Enum
     */
    export namespace Input {
        export const $gtype: GObject.GType<Input>;
    }

    /**
     * @gir-type Enum
     */
    enum Input {
        FIFO,
        PORTAUDIO,
        PIPEWIRE,
        ALSA,
        PULSE,
        SNDIO,
        SHMEM,
        WINSCAP,
    }


    /**
     * gets the default Cava object.
     */
    function get_default(): Cava | null;

    namespace Cava {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::autosens": (pspec: GObject.ParamSpec) => void;
            "notify::bars": (pspec: GObject.ParamSpec) => void;
            "notify::channels": (pspec: GObject.ParamSpec) => void;
            "notify::framerate": (pspec: GObject.ParamSpec) => void;
            "notify::high-cutoff": (pspec: GObject.ParamSpec) => void;
            "notify::input": (pspec: GObject.ParamSpec) => void;
            "notify::low-cutoff": (pspec: GObject.ParamSpec) => void;
            "notify::noise-reduction": (pspec: GObject.ParamSpec) => void;
            "notify::samplerate": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::stereo": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            autosens: boolean;
            bars: number;
            channels: number;
            framerate: number;
            high_cutoff: number;
            highCutoff: number;
            input: Input;
            low_cutoff: number;
            lowCutoff: number;
            noise_reduction: number;
            noiseReduction: number;
            samplerate: number;
            source: string;
            stereo: boolean;
            values: number[];
        }
    }

    /**
     * @gir-type Class
     */
    class Cava extends GObject.Object {
        static $gtype: GObject.GType<Cava>;

        // Properties
        /**
         * whether or not the audio capture and visualization is running. if false the values array will
         * not be updated.
         * @default true
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * When set, the sensitivity will automatically be adjusted.
         * @default true
         */
        get autosens(): boolean;
        set autosens(val: boolean);

        /**
         * the number of bars the visualizer should create.
         * @default 20
         */
        get bars(): number;
        set bars(val: number);

        /**
         * how many input channels to consider
         * @default 2
         */
        get channels(): number;
        set channels(val: number);

        /**
         * how often the values should be updated
         * @default 60
         */
        get framerate(): number;
        set framerate(val: number);

        /**
         * cut off frequencies above this value
         * @default 10000
         */
        get high_cutoff(): number;
        set high_cutoff(val: number);

        /**
         * cut off frequencies above this value
         * @default 10000
         */
        get highCutoff(): number;
        set highCutoff(val: number);

        /**
         * specifies which audio server should be used.
         * @default AstalCava.Input.PIPEWIRE
         */
        get input(): Input;
        set input(val: Input);

        /**
         * cut off frequencies below this value
         * @default 50
         */
        get low_cutoff(): number;
        set low_cutoff(val: number);

        /**
         * cut off frequencies below this value
         * @default 50
         */
        get lowCutoff(): number;
        set lowCutoff(val: number);

        /**
         * adjusts the noise-reduction filter. low values are fast and noisy, large values are slow and
         * smooth.
         * @default 0.77
         */
        get noise_reduction(): number;
        set noise_reduction(val: number);

        /**
         * adjusts the noise-reduction filter. low values are fast and noisy, large values are slow and
         * smooth.
         * @default 0.77
         */
        get noiseReduction(): number;
        set noiseReduction(val: number);

        /**
         * the samplerate of the input
         * @default 44100
         */
        get samplerate(): number;
        set samplerate(val: number);

        /**
         * specifies which audio source should be used. Refer to the cava docs on how to use this
         * property.
         * @default auto
         */
        get source(): string;
        set source(val: string);

        /**
         * @default false
         */
        get stereo(): boolean;
        set stereo(val: boolean);

        /**
         * A list of values, each represent the height of one bar. The values are generally between 0
         * and 1 but can overshoot occasionally, in which case the sensitivity will be decreased
         * automatically if {@link AstalCava.Cava.autosens} is set. The array will have
         * {@link AstalCava.Cava.bars} entries. If {@link AstalCava.Cava.stereo} is set, the first
         * half of the array will represent the left channel and the second half the right channel, so
         * there will be only bars/2 bars per channel. If the number of bars is odd, the last value will
         * be 0.
         * @read-only
         */
        get values(): number[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cava.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cava.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Cava.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cava.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cava.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cava.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cava.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cava.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * gets the default Cava object.
         */
        static get_default(): Cava | null;

        // Methods
        get_active(): boolean;

        get_autosens(): boolean;

        get_bars(): number;

        get_channels(): number;

        get_framerate(): number;

        get_high_cutoff(): number;

        get_input(): Input;

        get_low_cutoff(): number;

        get_noise_reduction(): number;

        get_samplerate(): number;

        get_source(): string;

        get_stereo(): boolean;

        /**
         * @returns a list of values
         */
        get_values(): number[];

        /**
         * @param active 
         */
        set_active(active: boolean): void;

        /**
         * @param autosens 
         */
        set_autosens(autosens: boolean): void;

        /**
         * @param bars 
         */
        set_bars(bars: number): void;

        /**
         * @param channels 
         */
        set_channels(channels: number): void;

        /**
         * @param framerate 
         */
        set_framerate(framerate: number): void;

        /**
         * @param high_cutoff 
         */
        set_high_cutoff(high_cutoff: number): void;

        /**
         * @param input 
         */
        set_input(input: Input): void;

        /**
         * @param low_cutoff 
         */
        set_low_cutoff(low_cutoff: number): void;

        /**
         * @param noise 
         */
        set_noise_reduction(noise: number): void;

        /**
         * @param samplerate 
         */
        set_samplerate(samplerate: number): void;

        /**
         * @param source 
         */
        set_source(source: string): void;

        /**
         * @param stereo 
         */
        set_stereo(stereo: boolean): void;
    }


    /**
     * @gir-type Alias
     */
    type CavaClass = typeof Cava;

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default AstalCava;

}

declare module 'gi://AstalCava' {
    import AstalCava01 from 'gi://AstalCava?version=0.1';
    export default AstalCava01;
}
// END
