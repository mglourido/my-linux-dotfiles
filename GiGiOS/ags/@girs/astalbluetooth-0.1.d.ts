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

declare module 'gi://AstalBluetooth?version=0.1' {

// Module dependencies
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace AstalBluetooth {

    /**
     * AstalBluetooth-0.1
     */


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    /**
     * Gets the default singleton Bluetooth object.
     */
    function get_default(): Bluetooth;

    namespace Adapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uuids": (pspec: GObject.ParamSpec) => void;
            "notify::discovering": (pspec: GObject.ParamSpec) => void;
            "notify::modalias": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::discoverable": (pspec: GObject.ParamSpec) => void;
            "notify::pairable": (pspec: GObject.ParamSpec) => void;
            "notify::powered": (pspec: GObject.ParamSpec) => void;
            "notify::alias": (pspec: GObject.ParamSpec) => void;
            "notify::discoverable-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::pairable-timeout": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uuids: string[];
            discovering: boolean;
            modalias: string;
            name: string;
            "class": number;
            address: string;
            discoverable: boolean;
            pairable: boolean;
            powered: boolean;
            alias: string;
            discoverable_timeout: number;
            discoverableTimeout: number;
            pairable_timeout: number;
            pairableTimeout: number;
        }
    }

    /**
     * Object representing an [adapter](https://github.com/RadiusNetworks/bluez/blob/master/doc/adapter-api.txt).
     * @gir-type Class
     */
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;

        // Properties
        /**
         * List of 128-bit UUIDs that represents the available local services.
         * @read-only
         */
        get uuids(): string[];

        /**
         * Indicates that a device discovery procedure is active.
         * @read-only
         */
        get discovering(): boolean;

        /**
         * Local Device ID information in modalias format used by the kernel and udev.
         * @read-only
         */
        get modalias(): string;

        /**
         * The Bluetooth system name (pretty hostname).
         * @read-only
         */
        get name(): string;

        /**
         * The Bluetooth class of device.
         * @read-only
         */
        get "class"(): number;

        /**
         * The Bluetooth device address.
         * @read-only
         */
        get address(): string;

        /**
         * Switch an adapter to discoverable or non-discoverable to either make it visible or hide it.
         */
        get discoverable(): boolean;
        set discoverable(val: boolean);

        /**
         * Switch an adapter to pairable or non-pairable.
         */
        get pairable(): boolean;
        set pairable(val: boolean);

        /**
         * Switch an adapter on or off.
         */
        get powered(): boolean;
        set powered(val: boolean);

        /**
         * The Bluetooth friendly name.
         * In case no alias is set, it will return {@link AstalBluetooth.Adapter.name}.
         */
        get alias(): string;
        set alias(val: string);

        /**
         * The discoverable timeout in seconds. A value of zero means that the timeout is disabled and it will stay in discoverable/limited mode forever 
         * until {@link AstalBluetooth.Adapter.stop_discovery} is invoked. The default value for the discoverable timeout should be `180`.
         */
        get discoverable_timeout(): number;
        set discoverable_timeout(val: number);

        /**
         * The discoverable timeout in seconds. A value of zero means that the timeout is disabled and it will stay in discoverable/limited mode forever 
         * until {@link AstalBluetooth.Adapter.stop_discovery} is invoked. The default value for the discoverable timeout should be `180`.
         */
        get discoverableTimeout(): number;
        set discoverableTimeout(val: number);

        /**
         * The pairable timeout in seconds.
         * A value of zero means that the timeout is disabled and it will stay in pairable mode forever. The default value for pairable timeout should be 
         * disabled `0`.
         */
        get pairable_timeout(): number;
        set pairable_timeout(val: number);

        /**
         * The pairable timeout in seconds.
         * A value of zero means that the timeout is disabled and it will stay in pairable mode forever. The default value for pairable timeout should be 
         * disabled `0`.
         */
        get pairableTimeout(): number;
        set pairableTimeout(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Adapter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Adapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Adapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Adapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Adapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This removes the remote device and the pairing information.
         * Possible errors: `InvalidArguments`, `Failed`.
         * @param device 
         */
        remove_device(device: Device): void;

        /**
         * This method starts the device discovery procedure.
         * Possible errors: `NotReady`, `Failed`.
         */
        start_discovery(): void;

        /**
         * This method will cancel any previous {@link AstalBluetooth.Adapter.start_discovery} procedure.
         * Possible errors: `NotReady`, `Failed`, `NotAuthorized`.
         */
        stop_discovery(): void;

        get_uuids(): string[];

        get_discovering(): boolean;

        get_modalias(): string;

        get_name(): string;

        get_class(): number;

        get_address(): string;

        get_discoverable(): boolean;

        /**
         * @param value 
         */
        set_discoverable(value: boolean): void;

        get_pairable(): boolean;

        /**
         * @param value 
         */
        set_pairable(value: boolean): void;

        get_powered(): boolean;

        /**
         * @param value 
         */
        set_powered(value: boolean): void;

        get_alias(): string;

        /**
         * @param value 
         */
        set_alias(value: string): void;

        get_discoverable_timeout(): number;

        /**
         * @param value 
         */
        set_discoverable_timeout(value: number): void;

        get_pairable_timeout(): number;

        /**
         * @param value 
         */
        set_pairable_timeout(value: number): void;
    }


    namespace Bluetooth {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new device is registered on the `org.bluez` bus.
             * @signal
             */
            "device-added": (arg0: Device) => void;
            /**
             * Emitted when a device is unregistered on the `org.bluez` bus.
             * @signal
             */
            "device-removed": (arg0: Device) => void;
            /**
             * Emitted when an adapter is registered on the `org.bluez` bus.
             * @signal
             */
            "adapter-added": (arg0: Adapter) => void;
            /**
             * Emitted when an adapter is unregistered on the `org.bluez` bus.
             * @signal
             */
            "adapter-removed": (arg0: Adapter) => void;
            "notify::is-powered": (pspec: GObject.ParamSpec) => void;
            "notify::is-connected": (pspec: GObject.ParamSpec) => void;
            "notify::adapter": (pspec: GObject.ParamSpec) => void;
            "notify::adapters": (pspec: GObject.ParamSpec) => void;
            "notify::devices": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_powered: boolean;
            isPowered: boolean;
            is_connected: boolean;
            isConnected: boolean;
            adapter: Adapter | null;
            adapters: Adapter[];
            devices: Device[];
        }
    }

    /**
     * Manager object for `org.bluez`.
     * @gir-type Class
     */
    class Bluetooth extends GObject.Object {
        static $gtype: GObject.GType<Bluetooth>;

        // Properties
        /**
         * `true` if any of the {@link AstalBluetooth.Bluetooth.adapters} are powered.
         */
        get is_powered(): boolean;
        set is_powered(val: boolean);

        /**
         * `true` if any of the {@link AstalBluetooth.Bluetooth.adapters} are powered.
         */
        get isPowered(): boolean;
        set isPowered(val: boolean);

        /**
         * `true` if any of the {@link AstalBluetooth.Bluetooth.devices} is connected.
         */
        get is_connected(): boolean;
        set is_connected(val: boolean);

        /**
         * `true` if any of the {@link AstalBluetooth.Bluetooth.devices} is connected.
         */
        get isConnected(): boolean;
        set isConnected(val: boolean);

        /**
         * The first registered adapter which is usually the only adapter.
         * @read-only
         */
        get adapter(): Adapter | null;

        /**
         * List of adapters available on the host device.
         * @read-only
         */
        get adapters(): Adapter[];

        /**
         * List of registered devices on the `org.bluez` bus.
         * @read-only
         */
        get devices(): Device[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bluetooth.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Bluetooth.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Bluetooth;

        // Signals
        /** @signal */
        connect<K extends keyof Bluetooth.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bluetooth.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Bluetooth.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bluetooth.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Bluetooth.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bluetooth.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default singleton Bluetooth object.
         */
        static get_default(): Bluetooth;

        // Methods
        /**
         * Toggle the {@link AstalBluetooth.Adapter.powered} property of the {@link AstalBluetooth.Bluetooth.adapter}.
         */
        toggle(): void;

        get_is_powered(): boolean;

        get_is_connected(): boolean;

        get_adapter(): Adapter | null;

        get_adapters(): Adapter[];

        get_devices(): Device[];
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uuids": (pspec: GObject.ParamSpec) => void;
            "notify::connected": (pspec: GObject.ParamSpec) => void;
            "notify::legacy-pairing": (pspec: GObject.ParamSpec) => void;
            "notify::paired": (pspec: GObject.ParamSpec) => void;
            "notify::rssi": (pspec: GObject.ParamSpec) => void;
            "notify::adapter": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::modalias": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::appearance": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::connecting": (pspec: GObject.ParamSpec) => void;
            "notify::blocked": (pspec: GObject.ParamSpec) => void;
            "notify::trusted": (pspec: GObject.ParamSpec) => void;
            "notify::battery-percentage": (pspec: GObject.ParamSpec) => void;
            "notify::alias": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uuids: string[];
            connected: boolean;
            legacy_pairing: boolean;
            legacyPairing: boolean;
            paired: boolean;
            rssi: number;
            adapter: never;
            address: string;
            icon: string;
            modalias: string;
            name: string;
            appearance: number;
            "class": number;
            connecting: boolean;
            blocked: boolean;
            trusted: boolean;
            battery_percentage: number;
            batteryPercentage: number;
            alias: string;
        }
    }

    /**
     * Object representing a [device](https://github.com/luetzel/bluez/blob/master/doc/device-api.txt).
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * List of 128-bit UUIDs that represents the available remote services.
         * @read-only
         */
        get uuids(): string[];

        /**
         * Indicates if the remote device is currently connected.
         * @read-only
         */
        get connected(): boolean;

        /**
         * `true` if the device only supports the pre-2.1 pairing mechanism.
         * @read-only
         */
        get legacy_pairing(): boolean;

        /**
         * `true` if the device only supports the pre-2.1 pairing mechanism.
         * @read-only
         */
        get legacyPairing(): boolean;

        /**
         * Indicates if the remote device is paired.
         * @read-only
         */
        get paired(): boolean;

        /**
         * Received Signal Strength Indicator of the remote device (inquiry or advertising).
         * @read-only
         */
        get rssi(): number;

        /**
         * The object path of the adapter the device belongs to.
         * @read-only
         */
        get adapter(): never;

        /**
         * The Bluetooth device address of the remote device.
         * @read-only
         */
        get address(): string;

        /**
         * Proposed icon name.
         * @read-only
         */
        get icon(): string;

        /**
         * Remote Device ID information in modalias format used by the kernel and udev.
         * @read-only
         */
        get modalias(): string;

        /**
         * The Bluetooth remote name.
         * It is always better to use {@link AstalBluetooth.Device.alias}.
         * @read-only
         */
        get name(): string;

        /**
         * External appearance of device, as found on GAP service.
         * @read-only
         */
        get appearance(): number;

        /**
         * The Bluetooth class of device of the remote device.
         * @read-only
         */
        get "class"(): number;

        /**
         * Indicates if this device is currently trying to be connected.
         */
        get connecting(): boolean;
        set connecting(val: boolean);

        /**
         * If set to `true` any incoming connections from the device will be immediately rejected.
         */
        get blocked(): boolean;
        set blocked(val: boolean);

        /**
         * Indicates if the remote is seen as trusted.
         */
        get trusted(): boolean;
        set trusted(val: boolean);

        /**
         * The percentage of battery left on the device if it has one, else -1.
         * @read-only
         */
        get battery_percentage(): number;

        /**
         * The percentage of battery left on the device if it has one, else -1.
         * @read-only
         */
        get batteryPercentage(): number;

        /**
         * The name alias for the remote device.
         * In case no alias is set, it will return the remote device {@link AstalBluetooth.Device.name}.
         */
        get alias(): string;
        set alias(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This is a generic method to connect any profiles the remote device supports that can be connected to.
         * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
         */
        connect_device(): globalThis.Promise<void>;

        /**
         * This is a generic method to connect any profiles the remote device supports that can be connected to.
         * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
         * @param _callback_ 
         */
        connect_device(_callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * This is a generic method to connect any profiles the remote device supports that can be connected to.
         * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
         * @param _callback_ 
         */
        connect_device(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        connect_device_finish(_res_: Gio.AsyncResult): void;

        /**
         * This method gracefully disconnects all connected profiles.
         * Possible errors: `NotConnected`.
         */
        disconnect_device(): globalThis.Promise<void>;

        /**
         * This method gracefully disconnects all connected profiles.
         * Possible errors: `NotConnected`.
         * @param _callback_ 
         */
        disconnect_device(_callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * This method gracefully disconnects all connected profiles.
         * Possible errors: `NotConnected`.
         * @param _callback_ 
         */
        disconnect_device(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        disconnect_device_finish(_res_: Gio.AsyncResult): void;

        /**
         * This method connects a specific profile of this device. The UUID provided is the remote service UUID for the profile.
         * Possible errors: `Failed`, `InProgress`, `InvalidArguments`, `NotAvailable`, `NotReady`.
         * @param uuid the remote service UUID.
         */
        connect_profile(uuid: string): void;

        /**
         * This method disconnects a specific profile of this device.
         * Possible errors: `Failed`, `InProgress`, `InvalidArguments`, `NotSupported`.
         * @param uuid the remote service UUID.
         */
        disconnect_profile(uuid: string): void;

        /**
         * This method will connect to the remote device and initiate pairing.
         * Possible errors: `InvalidArguments`, `Failed`, `AlreadyExists`, `AuthenticationCanceled`, `AuthenticationFailed`, `AuthenticationRejected`, 
         * `AuthenticationTimeout`, `ConnectionAttemptFailed`.
         */
        pair(): void;

        /**
         * This method can be used to cancel a pairing operation initiated by {@link AstalBluetooth.Device.pair}.
         * Possible errors: `DoesNotExist`, `Failed`.
         */
        cancel_pairing(): void;

        get_uuids(): string[];

        get_connected(): boolean;

        get_legacy_pairing(): boolean;

        get_paired(): boolean;

        get_rssi(): number;

        get_adapter(): never;

        get_address(): string;

        get_icon(): string;

        get_modalias(): string;

        get_name(): string;

        get_appearance(): number;

        get_class(): number;

        get_connecting(): boolean;

        get_blocked(): boolean;

        /**
         * @param value 
         */
        set_blocked(value: boolean): void;

        get_trusted(): boolean;

        /**
         * @param value 
         */
        set_trusted(value: boolean): void;

        get_battery_percentage(): number;

        get_alias(): string;

        /**
         * @param value 
         */
        set_alias(value: string): void;
    }


    /**
     * @gir-type Alias
     */
    type AdapterClass = typeof Adapter;

    /**
     * @gir-type Struct
     */
    abstract class AdapterPrivate {
        static $gtype: GObject.GType<AdapterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type BluetoothClass = typeof Bluetooth;

    /**
     * @gir-type Struct
     */
    abstract class BluetoothPrivate {
        static $gtype: GObject.GType<BluetoothPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Struct
     */
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
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

export default AstalBluetooth;

}

declare module 'gi://AstalBluetooth' {
    import AstalBluetooth01 from 'gi://AstalBluetooth?version=0.1';
    export default AstalBluetooth01;
}
// END
