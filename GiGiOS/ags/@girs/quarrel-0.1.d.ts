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

declare module 'gi://Quarrel?version=0.1' {

// Module dependencies
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace Quarrel {

    /**
     * Quarrel-0.1
     */


    /**
     * Possible errors on {@link Command.parse}.
     * @gir-type Struct
     */
    class ParseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * An unknown command was encountered.
         */
        static UNKNOWN_COMMAND: number;

        /**
         * Number of arguments is less than expected.
         */
        static MISSING_ARGS: number;

        /**
         * Number of arguments is more than expected.
         */
        static EXTRA_ARGS: number;

        /**
         * Option value is missing.
         */
        static MISSING_OPTION_VALUE: number;

        /**
         * Failed to parse the option value.
         */
        static INVALID_OPTION: number;

        /**
         * An unknown option was encountered.
         */
        static UNKNOWN_OPTION: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * Generate formatted help text for a command and its declared interface.
     * @param command 
     */
    function help(command: Command): string;

    namespace Command {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::about-text": (pspec: GObject.ParamSpec) => void;
            "notify::args": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parent: Command | null;
            about_text: string | null;
            aboutText: string;
            args: string[];
            name: string | null;
        }
    }

    /**
     * Declarative command definition with builder-style APIs for options, arguments, subcommands, parsing, and help generation.
     * @gir-type Class
     */
    class Command extends GObject.Object {
        static $gtype: GObject.GType<Command>;

        // Properties
        /**
         * Parent Command that this Command is a subcommand of.
         */
        get parent(): Command | null;
        set parent(val: Command | null);

        /**
         * Description set via {@link Command.about}.
         */
        get about_text(): string | null;
        set about_text(val: string | null);

        /**
         * Description set via {@link Command.about}.
         */
        get aboutText(): string;
        set aboutText(val: string);

        /**
         * Parsed positional arguments.
         */
        get args(): string[];
        set args(val: string[]);

        /**
         * Name of this command. The name of the top level command should be the name of the program.
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Command.SignalSignatures;

        // Fields
        subcommand_list: Command[];

        subcommand_list_length1: number;

        opts: Opt[];

        opts_length1: number;

        examples: string[];

        examples_length1: number;

        arg_list: never[];

        arg_list_length1: number;

        rest_args_name: string | null;

        rest_args_description: string | null;

        // Constructors
        constructor(properties?: Partial<Command.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string | null): Command;

        // Signals
        /** @signal */
        connect<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Command.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Command.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * The current command that threw an error while parsing.
         */
        static throwing(): Command | null;

        // Virtual methods
        /**
         * Parse CLI arguments. Not that the first argument `argv[0]` is ignored as it is assumed to be the name of this command. Returns the command that 
         * should be invoked.
         * @param argv 
         * @virtual
         */
        vfunc_parse(argv: string[]): Command;

        // Methods
        /**
         * Append a subcommand to this command.
         * @param command 
         */
        subcommand(command: Command): Command;

        /**
         * Append an option to this command.
         * @param opt 
         */
        opt(opt: Opt): Command;

        /**
         * Set the description of this command.
         * @param about 
         */
        about(about: string): Command;

        /**
         * Define an optional positional argument.
         * @param name 
         * @param description 
         */
        arg(name: string, description: string): Command;

        /**
         * Define a required positional argument. You might want to use {@link Command.arg} instead because this method will cause the parser to 
         * throw if the argument is missing.
         * @param name 
         * @param description 
         */
        required_arg(name: string, description: string): Command;

        /**
         * Define the rest of the positional arguments.
         * @param name 
         * @param description 
         */
        rest_args(name: string, description: string): Command;

        /**
         * Append an example usage of this command.
         * @param example 
         */
        example(example: string): Command;

        /**
         * Get an option appended using {@link Command.opt} by either its long or short name.
         * @param _long_ 
         * @param _short_ 
         */
        get_opt(_long_: string | null, _short_: number): Opt | null;

        /**
         * Parse CLI arguments. Not that the first argument `argv[0]` is ignored as it is assumed to be the name of this command. Returns the command that 
         * should be invoked.
         * @param argv 
         */
        parse(argv: string[]): Command;

        get_parent(): Command | null;

        get_about_text(): string | null;

        get_args(): string[];

        get_name(): string | null;

        /**
         * @param value 
         */
        set_name(value: string | null): void;
    }


    namespace Opt {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Parse and store a value received for this option. Returns optional parse error string.
             * @signal
             */
            parse: (arg0: string) => string | null;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string | null;
            name: string | null;
            long: string | null;
            "short": number;
        }
    }

    /**
     * Base type for command-line options parsed by {@link Command}.
     * @gir-type Class
     */
    class Opt extends GObject.Object {
        static $gtype: GObject.GType<Opt>;

        // Properties
        /**
         * Human-readable description shown in generated help output.
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * Placeholder name shown for the option value in help output.
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Long option name, used as `--name`.
         */
        get long(): string | null;
        set long(val: string | null);

        /**
         * Short option name, used as `-n`.
         */
        get "short"(): number;
        set "short"(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Opt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Opt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Opt;

        // Signals
        /** @signal */
        connect<K extends keyof Opt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Opt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Opt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Opt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Opt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Opt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_description(): string | null;

        /**
         * @param value 
         */
        set_description(value: string | null): void;

        get_name(): string | null;

        /**
         * @param value 
         */
        set_name(value: string | null): void;

        get_long(): string | null;

        /**
         * @param value 
         */
        set_long(value: string | null): void;

        get_short(): number;

        /**
         * @param value 
         */
        set_short(value: number): void;
    }


    namespace Flag {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            enabled: boolean;
        }
    }

    /**
     * Boolean flag option that becomes `enabled` when present.
     * @gir-type Class
     */
    class Flag extends Opt {
        static $gtype: GObject.GType<Flag>;

        // Properties
        /**
         * Parsed flag state.
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Flag.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Flag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): Flag;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Flag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Flag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Flag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Flag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Flag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_enabled(): boolean;

        /**
         * @param value 
         */
        set_enabled(value: boolean): void;
    }


    namespace SpecialFlag {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            enabled: boolean;
        }
    }

    /**
     * Similar to {@link Flag} which also turns of validating positional arguments. Used for flags such as `--version` and `--help`.
     * @gir-type Class
     */
    class SpecialFlag extends Opt {
        static $gtype: GObject.GType<SpecialFlag>;

        // Properties
        /**
         * Parsed flag state.
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpecialFlag.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpecialFlag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): SpecialFlag;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SpecialFlag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpecialFlag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpecialFlag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpecialFlag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpecialFlag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpecialFlag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_enabled(): boolean;

        /**
         * @param value 
         */
        set_enabled(value: boolean): void;
    }


    namespace StringOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: string | null;
        }
    }

    /**
     * Option that stores a single string value.
     * @gir-type Class
     */
    class StringOpt extends Opt {
        static $gtype: GObject.GType<StringOpt>;

        // Properties
        /**
         * Parsed string value.
         */
        get value(): string | null;
        set value(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StringOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StringOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): StringOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof StringOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StringOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StringOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StringOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): string | null;

        /**
         * @param value 
         */
        set_value(value: string | null): void;
    }


    namespace IntOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: number;
        }
    }

    /**
     * Option that stores a single integer value.
     * @gir-type Class
     */
    class IntOpt extends Opt {
        static $gtype: GObject.GType<IntOpt>;

        // Properties
        /**
         * Parsed integer value.
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IntOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<IntOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): IntOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof IntOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IntOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IntOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): number;

        /**
         * @param value 
         */
        set_value(value: number): void;
    }


    namespace DoubleOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: number;
        }
    }

    /**
     * Option that stores a double-precision floating point value.
     * @gir-type Class
     */
    class DoubleOpt extends Opt {
        static $gtype: GObject.GType<DoubleOpt>;

        // Properties
        /**
         * Parsed double-precision floating point value.
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DoubleOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DoubleOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): DoubleOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DoubleOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DoubleOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DoubleOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DoubleOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DoubleOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): number;

        /**
         * @param value 
         */
        set_value(value: number): void;
    }


    namespace FileOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: Gio.File | null;
        }
    }

    /**
     * Option that stores a single file path as a {@link Gio.File}.
     * @gir-type Class
     */
    class FileOpt extends Opt {
        static $gtype: GObject.GType<FileOpt>;

        // Properties
        /**
         * Parsed file value.
         */
        get value(): Gio.File | null;
        set value(val: Gio.File | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): FileOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FileOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): Gio.File | null;

        /**
         * @param value 
         */
        set_value(value: Gio.File | null): void;
    }


    namespace FileArrayOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: Gio.File[];
        }
    }

    /**
     * Option that collects repeated file path values.
     * @gir-type Class
     */
    class FileArrayOpt extends Opt {
        static $gtype: GObject.GType<FileArrayOpt>;

        // Properties
        /**
         * Parsed file values in the order they were provided.
         * @read-only
         */
        get value(): Gio.File[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileArrayOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileArrayOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): FileArrayOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileArrayOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileArrayOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileArrayOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileArrayOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): Gio.File[];
    }


    namespace StringArrayOpt {
        // Signal signatures
        interface SignalSignatures extends Opt.SignalSignatures {
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::long": (pspec: GObject.ParamSpec) => void;
            "notify::short": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Opt.ConstructorProps {
            value: string[];
        }
    }

    /**
     * Option that collects repeated string values.
     * @gir-type Class
     */
    class StringArrayOpt extends Opt {
        static $gtype: GObject.GType<StringArrayOpt>;

        // Properties
        /**
         * Parsed string values in the order they were provided.
         * @read-only
         */
        get value(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StringArrayOpt.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StringArrayOpt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](_long_: string | null, _short_: number, description: string | null): StringArrayOpt;

        // Conflicted with Quarrel.Opt.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringArrayOpt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringArrayOpt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StringArrayOpt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StringArrayOpt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): string[];
    }


    /**
     * @gir-type Alias
     */
    type CommandClass = typeof Command;

    /**
     * @gir-type Struct
     */
    abstract class CommandPrivate {
        static $gtype: GObject.GType<CommandPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type OptClass = typeof Opt;

    /**
     * @gir-type Struct
     */
    abstract class OptPrivate {
        static $gtype: GObject.GType<OptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FlagClass = typeof Flag;

    /**
     * @gir-type Struct
     */
    abstract class FlagPrivate {
        static $gtype: GObject.GType<FlagPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SpecialFlagClass = typeof SpecialFlag;

    /**
     * @gir-type Struct
     */
    abstract class SpecialFlagPrivate {
        static $gtype: GObject.GType<SpecialFlagPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StringOptClass = typeof StringOpt;

    /**
     * @gir-type Struct
     */
    abstract class StringOptPrivate {
        static $gtype: GObject.GType<StringOptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type IntOptClass = typeof IntOpt;

    /**
     * @gir-type Struct
     */
    abstract class IntOptPrivate {
        static $gtype: GObject.GType<IntOptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DoubleOptClass = typeof DoubleOpt;

    /**
     * @gir-type Struct
     */
    abstract class DoubleOptPrivate {
        static $gtype: GObject.GType<DoubleOptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileOptClass = typeof FileOpt;

    /**
     * @gir-type Struct
     */
    abstract class FileOptPrivate {
        static $gtype: GObject.GType<FileOptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileArrayOptClass = typeof FileArrayOpt;

    /**
     * @gir-type Struct
     */
    abstract class FileArrayOptPrivate {
        static $gtype: GObject.GType<FileArrayOptPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StringArrayOptClass = typeof StringArrayOpt;

    /**
     * @gir-type Struct
     */
    abstract class StringArrayOptPrivate {
        static $gtype: GObject.GType<StringArrayOptPrivate>;
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

export default Quarrel;

}

declare module 'gi://Quarrel' {
    import Quarrel01 from 'gi://Quarrel?version=0.1';
    export default Quarrel01;
}
// END
