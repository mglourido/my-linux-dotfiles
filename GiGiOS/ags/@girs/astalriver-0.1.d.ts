/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./astalwl-0.1.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalRiver?version=0.1' {

// Module dependencies
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type AstalWl from 'gi://AstalWl?version=0.1';

export namespace AstalRiver {

    /**
     * AstalRiver-0.1
     */


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    function is_supported(): boolean;

    /**
     * Returns the singleton River instance.
     */
    function get_default(): River;

    /**
     * @gir-type Callback
     */
    interface LayoutDemandCallback {
        (layout: Layout, namespace: string, output: Output, view_count: number, usable_width: number, usable_height: number): LayoutDemandResult;
    }

    namespace River {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signals a new Output was added, emitted after the Output was added to the lists.
             * @signal
             */
            "output-added": (arg0: Output) => void;
            /**
             * Signals an Output was removed, emitted after the Output was removed from the lists.
             * @signal
             */
            "output-removed": (arg0: Output) => void;
            "notify::outputs": (pspec: GObject.ParamSpec) => void;
            "notify::focused-output": (pspec: GObject.ParamSpec) => void;
            "notify::focused-output-name": (pspec: GObject.ParamSpec) => void;
            "notify::focused-view": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            outputs: Output[];
            focused_output: Output | null;
            focusedOutput: Output;
            focused_output_name: string | null;
            focusedOutputName: string;
            focused_view: string | null;
            focusedView: string;
            mode: string | null;
        }
    }

    /**
     * This class creates a connection to the river compositor.
     * @gir-type Class
     */
    class River extends GObject.Object {
        static $gtype: GObject.GType<River>;

        // Properties
        /**
         * A List of all known Outputs
         * @read-only
         */
        get outputs(): Output[];

        /**
         * The currently focused Output object.
         */
        get focused_output(): Output | null;
        set focused_output(val: Output | null);

        /**
         * The currently focused Output object.
         */
        get focusedOutput(): Output;
        set focusedOutput(val: Output);

        /**
         * The currently focused Output name.
         * @read-only
         */
        get focused_output_name(): string | null;

        /**
         * The currently focused Output name.
         * @read-only
         */
        get focusedOutputName(): string;

        /**
         * The currently focused view title.
         */
        get focused_view(): string | null;
        set focused_view(val: string | null);

        /**
         * The currently focused view title.
         */
        get focusedView(): string;
        set focusedView(val: string);

        /**
         * The currently active mode.
         */
        get mode(): string | null;
        set mode(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: River.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<River.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): River;

        // Signals
        /** @signal */
        connect<K extends keyof River.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, River.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof River.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, River.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof River.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<River.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the singleton River instance.
         */
        static get_default(): River;

        // Methods
        /**
         * Looks up an output based on its underlying {@link AstalWl.Output} object.
         * @param wl_output 
         */
        find_output_by_astal_wl_output(wl_output: AstalWl.Output): Output | null;

        /**
         * Looks up an output based on its underlying name.
         * @param name 
         */
        find_output_by_name(name: string): Output | null;

        /**
         * Looks up an output based on its underlying wayland id.
         * @param id 
         */
        find_output_by_id(id: number): Output | null;

        /**
         * executes a given command, similar to riverctl.
         * @param cmd 
         */
        run_command(cmd: string[]): [boolean, string];

        /**
         * executes a given command, similar to riverctl.
         * @param cmd 
         */
        run_command_async(cmd: string[]): globalThis.Promise<string>;

        /**
         * executes a given command, similar to riverctl.
         * @param cmd 
         * @param _callback_ 
         */
        run_command_async(cmd: string[], _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * executes a given command, similar to riverctl.
         * @param cmd 
         * @param _callback_ 
         */
        run_command_async(cmd: string[], _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * @param _res_ 
         */
        run_command_finish(_res_: Gio.AsyncResult): [boolean, string];

        /**
         * creates a new Layout object with a given namespace.
         * @param namespace 
         */
        new_layout(namespace: string): Layout | null;

        get_outputs(): Output[];

        get_focused_output(): Output | null;

        get_focused_output_name(): string | null;

        get_focused_view(): string | null;

        get_mode(): string | null;
    }


    namespace Output {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::output": (pspec: GObject.ParamSpec) => void;
            "notify::focused-tags": (pspec: GObject.ParamSpec) => void;
            "notify::occupied-tags": (pspec: GObject.ParamSpec) => void;
            "notify::urgent-tags": (pspec: GObject.ParamSpec) => void;
            "notify::focused-view": (pspec: GObject.ParamSpec) => void;
            "notify::layout-name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            output: AstalWl.Output;
            focused_tags: number;
            focusedTags: number;
            occupied_tags: number;
            occupiedTags: number;
            urgent_tags: number;
            urgentTags: number;
            focused_view: string | null;
            focusedView: string;
            layout_name: string | null;
            layoutName: string;
        }
    }

    /**
     * Represents a display output device.
     * @gir-type Class
     */
    class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;

        // Properties
        /**
         * The underlying {@link AstalWl.Output} object, which represents a wayland output.
         * @construct-only
         */
        get output(): AstalWl.Output;

        /**
         * The focused tags.
         */
        get focused_tags(): number;
        set focused_tags(val: number);

        /**
         * The focused tags.
         */
        get focusedTags(): number;
        set focusedTags(val: number);

        /**
         * The occupied tags.
         */
        get occupied_tags(): number;
        set occupied_tags(val: number);

        /**
         * The occupied tags.
         */
        get occupiedTags(): number;
        set occupiedTags(val: number);

        /**
         * The tags marked as urgent.
         */
        get urgent_tags(): number;
        set urgent_tags(val: number);

        /**
         * The tags marked as urgent.
         */
        get urgentTags(): number;
        set urgentTags(val: number);

        /**
         * The title of the focused view on this output.
         */
        get focused_view(): string | null;
        set focused_view(val: string | null);

        /**
         * The title of the focused view on this output.
         */
        get focusedView(): string;
        set focusedView(val: string);

        /**
         * The name of the active layout for this output.
         */
        get layout_name(): string | null;
        set layout_name(val: string | null);

        /**
         * The name of the active layout for this output.
         */
        get layoutName(): string;
        set layoutName(val: string);

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
        get_output(): AstalWl.Output;

        get_focused_tags(): number;

        /**
         * @param value 
         */
        set_focused_tags(value: number): void;

        get_occupied_tags(): number;

        get_urgent_tags(): number;

        get_focused_view(): string | null;

        get_layout_name(): string | null;
    }


    namespace LayoutDemandResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LayoutDemandResult extends GObject.Object {
        static $gtype: GObject.GType<LayoutDemandResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LayoutDemandResult.SignalSignatures;

        // Fields
        layout_name: string;

        rectangles: AstalWl.Rectangle[];

        // Constructors
        constructor(properties?: Partial<LayoutDemandResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](layout_name: string, rectangles: AstalWl.Rectangle[]): LayoutDemandResult;

        // Signals
        /** @signal */
        connect<K extends keyof LayoutDemandResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayoutDemandResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LayoutDemandResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayoutDemandResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LayoutDemandResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LayoutDemandResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Layout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a Layout with the given name is already registered for an output.
             * @signal
             */
            "namespace-in-use": (arg0: string, arg1: Output) => void;
            /**
             * Emitted when the user sent a command to this layout.
             * @signal
             */
            "user-command": (arg0: string, arg1: string, arg2: Output) => void;
            "notify::namespace": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            namespace: string;
        }
    }

    /**
     * Allows implementing a custom windows Layout generator.
     * @gir-type Class
     */
    class Layout extends GObject.Object {
        static $gtype: GObject.GType<Layout>;

        // Properties
        /**
         * The name of this layout.
         * @construct-only
         */
        get namespace(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Layout.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Layout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Layout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Layout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Layout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Layout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Layout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the Closure to be called when a new layout is requested. The Closure is of type {@link AstalRiver.LayoutDemandCallback}.
         * The Closure must return a {@link AstalRiver.LayoutDemandResult} containing exactly as many {@link AstalWl.Rectangle} objects as 
         * requested. Each rectangle represents the position and size of each window. Before the result is applied, each rectangle is croped to ensure it lies 
         * entirely within the usable area.
         * @param closure 
         */
        set_layout_demand_closure(closure: GObject.Closure): void;

        get_namespace(): string;
    }


    /**
     * @gir-type Alias
     */
    type RiverClass = typeof River;

    /**
     * @gir-type Struct
     */
    abstract class RiverPrivate {
        static $gtype: GObject.GType<RiverPrivate>;
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
    type LayoutDemandResultClass = typeof LayoutDemandResult;

    /**
     * @gir-type Struct
     */
    abstract class LayoutDemandResultPrivate {
        static $gtype: GObject.GType<LayoutDemandResultPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LayoutClass = typeof Layout;

    /**
     * @gir-type Struct
     */
    abstract class LayoutPrivate {
        static $gtype: GObject.GType<LayoutPrivate>;
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

export default AstalRiver;

}

declare module 'gi://AstalRiver' {
    import AstalRiver01 from 'gi://AstalRiver?version=0.1';
    export default AstalRiver01;
}
// END
