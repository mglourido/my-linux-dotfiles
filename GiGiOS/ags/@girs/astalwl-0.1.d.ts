/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalWl?version=0.1' {

// Module dependencies
import type GLib from 'gi://GLib?version=2.0';
import type GObject from 'gi://GObject?version=2.0';

export namespace AstalWl {

    /**
     * AstalWl-0.1
     */


    /**
     * @gir-type Enum
     */
    export namespace OutputSubpixel {
        export const $gtype: GObject.GType<OutputSubpixel>;
    }

    /**
     * This enumeration describes how the physical pixels on an output are laid out.
     * @gir-type Enum
     */
    enum OutputSubpixel {
        UNKNOWN,
        NONE,
        HORIZONTAL_RGB,
        HORIZONTAL_BGR,
        VERTICAL_RGB,
        VERTICAL_BGR,
    }


    /**
     * @gir-type Enum
     */
    export namespace OutputTransform {
        export const $gtype: GObject.GType<OutputTransform>;
    }

    /**
     * This describes transformations that clients and compositors apply to buffer contents. The flipped values correspond to an initial flip around a 
     * vertical axis followed by rotation.
     * @gir-type Enum
     */
    enum OutputTransform {
        NORMAL,
        ROTATE_90,
        ROTATE_180,
        ROTATE_270,
        FLIPPED,
        FLIPPED_90,
        FLIPPED_180,
        FLIPPED_270,
    }


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    /**
     * Convenience wrapper for {@link AstalWl.Registry.get_default}.
     * Returns the singleton {@link AstalWl.Registry} instance that tracks all known globals, outputs, and seats on the connected Wayland display.
     */
    function get_default(): Registry;

    /**
     * @gir-type Flags
     */
    export namespace SeatCapabilities {
        export const $gtype: GObject.GType<SeatCapabilities>;
    }

    /**
     * Bitfield flags describing the input capabilities of this seat.
     * @gir-type Flags
     */
    enum SeatCapabilities {
        POINTER,
        KEYBOARD,
        TOUCH,
    }


    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted whenever a new global is announced by the compositor.
             * @signal
             */
            "global-added": (arg0: Global) => void;
            /**
             * Emitted whenever a new global is removed by the compositor.
             * @signal
             */
            "global-removed": (arg0: Global) => void;
            /**
             * Emitted after a new {@link AstalWl.Output} has been created and bound.
             * @signal
             */
            "output-added": (arg0: Output) => void;
            /**
             * Emitted just before an {@link AstalWl.Output} is removed from the List.
             * @signal
             */
            "output-removed": (arg0: Output) => void;
            /**
             * Emitted after a new {@link AstalWl.Seat} has been created and bound.
             * @signal
             */
            "seat-added": (arg0: Seat) => void;
            /**
             * Emitted just before a {@link AstalWl.Seat} is removed.
             * @signal
             */
            "seat-removed": (arg0: Seat) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Wraps the Wayland `wl_registry` interface and keeps track of all announced globals, outputs and seats.
     * It exposes high-level collections and lookup helpers and emits signals when globals, outputs or seats are added or removed.
     * @gir-type Class
     */
    class Registry extends GObject.Object {
        static $gtype: GObject.GType<Registry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Registry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Registry;

        // Signals
        /** @signal */
        connect<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Registry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the singleton {@link AstalWl.Registry} instance.
         * The first call connects to the Wayland display and sets up the underlying `wl_registry` listener.
         */
        static get_default(): Registry;

        // Methods
        /**
         * Returns a list of all known globals.
         */
        get_globals(): Global[];

        /**
         * Returns a list of all known outputs.
         */
        get_outputs(): Output[];

        /**
         * Returns a list of all known seats.
         */
        get_seats(): Seat[];

        /**
         * Returns a list of globals, optionally filtered by interface name. If `null` is passed, all globals are returned.
         * @param _interface 
         */
        find_globals(_interface: string | null): Global[] | null;

        /**
         * Looks up a global by its numeric Iid.
         * @param id 
         */
        get_global_by_id(id: number): Global | null;

        /**
         * Looks up an output by its global id.
         * @param id 
         */
        get_output_by_id(id: number): Output | null;

        /**
         * Looks up an output by its compositor-assigned name.
         * @param name 
         */
        get_output_by_name(name: string): Output | null;

        /**
         * Looks up a seat by its global id.
         * @param id 
         */
        get_seat_by_id(id: number): Seat | null;

        /**
         * Looks up a seat by its compositor-assigned name.
         * @param name 
         */
        get_seat_by_name(name: string): Seat | null;
    }


    namespace Output {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::physical-width": (pspec: GObject.ParamSpec) => void;
            "notify::physical-height": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::transform": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel": (pspec: GObject.ParamSpec) => void;
            "notify::make": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
            geometry: Rectangle | null;
            physical_width: number;
            physicalWidth: number;
            physical_height: number;
            physicalHeight: number;
            refresh_rate: number;
            refreshRate: number;
            transform: OutputTransform;
            subpixel: OutputSubpixel;
            make: string | null;
            model: string | null;
            scale: number;
            name: string | null;
            description: string | null;
        }
    }

    /**
     * Represents a display output device and tracks properties associated with it.
     * This class listens to Wayland `wl_output` and optional `zxdg_output_v1` events if supported by the compositor to maintain accurate state 
     * information.
     * @gir-type Class
     */
    class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;

        // Properties
        /**
         * The unique registry ID of this output as provided by the compositor.
         * @construct-only
         */
        get id(): number;

        /**
         * The logical geometry of the output in compositor coordinates. This reflects the visible area after applying scaling and transform.
         */
        get geometry(): Rectangle | null;
        set geometry(val: Rectangle | null);

        /**
         * The physical width of the output in millimeters.
         */
        get physical_width(): number;
        set physical_width(val: number);

        /**
         * The physical width of the output in millimeters.
         */
        get physicalWidth(): number;
        set physicalWidth(val: number);

        /**
         * The physical height of the output in millimeters.
         */
        get physical_height(): number;
        set physical_height(val: number);

        /**
         * The physical height of the output in millimeters.
         */
        get physicalHeight(): number;
        set physicalHeight(val: number);

        /**
         * The refresh rate of the current output mode in Hz.
         */
        get refresh_rate(): number;
        set refresh_rate(val: number);

        /**
         * The refresh rate of the current output mode in Hz.
         */
        get refreshRate(): number;
        set refreshRate(val: number);

        /**
         * The rotation or flip transform of the output surface.
         */
        get transform(): OutputTransform;
        set transform(val: OutputTransform);

        /**
         * The subpixel layout of the physical monitor.
         */
        get subpixel(): OutputSubpixel;
        set subpixel(val: OutputSubpixel);

        /**
         * The manufacturer name of the display device.
         */
        get make(): string | null;
        set make(val: string | null);

        /**
         * The product or model name of the display device.
         */
        get model(): string | null;
        set model(val: string | null);

        /**
         * The scaling factor of the output.
         */
        get scale(): number;
        set scale(val: number);

        /**
         * The compositor-assigned name of this output. Usually corresponds to an identifier like "HDMI-A-1".
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * A description of the output.
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Output.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Output.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Output.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Output.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Output.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Output.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): number;

        get_geometry(): Rectangle | null;

        get_physical_width(): number;

        get_physical_height(): number;

        get_refresh_rate(): number;

        get_transform(): OutputTransform;

        get_subpixel(): OutputSubpixel;

        get_make(): string | null;

        get_model(): string | null;

        get_scale(): number;

        get_name(): string | null;

        get_description(): string | null;
    }


    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
            name: string | null;
            capabilities: SeatCapabilities;
        }
    }

    /**
     * Wraps the Wayland `wl_seat` interface.
     * A seat represents a user input device group containing one or more keyboards, pointer devices, or touchscreens. It tracks the seats 
     * capabilities and compositor-assigned name.
     * @gir-type Class
     */
    class Seat extends GObject.Object {
        static $gtype: GObject.GType<Seat>;

        // Properties
        /**
         * The unique registry id of this seat.
         * @construct-only
         */
        get id(): number;

        /**
         * The compositor-assigned name for this seat.
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * The current input capabilities of this seat.
         */
        get capabilities(): SeatCapabilities;
        set capabilities(val: SeatCapabilities);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Seat.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Seat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Seat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Seat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Seat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): number;

        get_name(): string | null;

        get_capabilities(): SeatCapabilities;
    }


    /**
     * @gir-type Alias
     */
    type RegistryClass = typeof Registry;

    /**
     * @gir-type Struct
     */
    abstract class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type OutputClass = typeof Output;

    /**
     * @gir-type Struct
     */
    abstract class OutputPrivate {
        static $gtype: GObject.GType<OutputPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SeatClass = typeof Seat;

    /**
     * @gir-type Struct
     */
    abstract class SeatPrivate {
        static $gtype: GObject.GType<SeatPrivate>;
    }


    /**
     * Describes a single Wayland global announced by `wl_registry`.
     * @gir-type Struct
     */
    class Global {
        static $gtype: GObject.GType<Global>;

        // Fields
        name: number;

        "interface": string;

        version: number;

        // Constructors

        constructor(properties?: Partial<{
            name: number;
            "interface": string;
            version: number;
        }>);
    }


    /**
     * A simple 2D axis-aligned rectangle with integer coordinates.
     * Used throughout the AstalWl library to represent output geometry, window bounds, and other screen regions.
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);

        // Static methods
        /**
         * Computes the intersection of two rectangles.
         * If no intersection exists, `result` is set to a zero rectangle and `false` is returned.
         * @param a 
         * @param b 
         */
        static intersect(a: Rectangle, b: Rectangle): [boolean, Rectangle];

        // Methods
        /**
         * Creates a zero-sized rectangle at position (0,0).
         */
        init_zero(): void;

        /**
         * Creates an exact copy of this rectangle.
         */
        copy(): Rectangle;

        /**
         * Normalizes the rectangle to ensure positive width and height.
         * If width or height are negative, adjusts the origin (x,y) so the rectangle always represents a valid region with top-left origin and 
         * positive extent.
         */
        normalize(): void;
    }


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

export default AstalWl;

}

declare module 'gi://AstalWl' {
    import AstalWl01 from 'gi://AstalWl?version=0.1';
    export default AstalWl01;
}
// END
