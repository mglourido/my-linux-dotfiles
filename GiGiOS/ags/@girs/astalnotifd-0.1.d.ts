/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalNotifd?version=0.1' {

// Module dependencies
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace AstalNotifd {

    /**
     * AstalNotifd-0.1
     */


    /**
     * @gir-type Enum
     */
    export namespace Urgency {
        export const $gtype: GObject.GType<Urgency>;
    }

    /**
     * @gir-type Enum
     */
    enum Urgency {
        LOW,
        NORMAL,
        CRITICAL,
    }


    /**
     * @gir-type Enum
     */
    export namespace ClosedReason {
        export const $gtype: GObject.GType<ClosedReason>;
    }

    /**
     * @gir-type Enum
     */
    enum ClosedReason {
        EXPIRED,
        DISMISSED_BY_USER,
        CLOSED,
        UNDEFINED,
    }


    /**
     * @gir-type Enum
     */
    export namespace State {
        export const $gtype: GObject.GType<State>;
    }

    /**
     * @gir-type Enum
     */
    enum State {
        DRAFT,
        SENT,
        RECEIVED,
    }


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    /**
     * Get the singleton instance of {@link AstalNotifd.Notifd}.
     */
    function get_default(): Notifd;

    /**
     * Send a notification. This function does not depend on Notifd and can be used with any notification server. The [class@
     * AstalNotifd.Notification] passed to this function is never the same instance that {@link AstalNotifd.Notifd.get_notification} returns. This 
     * function will set the state of the passed notification from `DRAFT` to `SENT` after which the notification can no longer be mutated.
     * @param notification 
     */
    function send_notification(notification: Notification): globalThis.Promise<void>;
    /**
     * Send a notification. This function does not depend on Notifd and can be used with any notification server. The [class@
     * AstalNotifd.Notification] passed to this function is never the same instance that {@link AstalNotifd.Notifd.get_notification} returns. This 
     * function will set the state of the passed notification from `DRAFT` to `SENT` after which the notification can no longer be mutated.
     * @param notification 
     * @param _callback_ 
     */
    function send_notification(notification: Notification, _callback_: Gio.AsyncReadyCallback<Notification> | null): void;
    /**
     * Send a notification. This function does not depend on Notifd and can be used with any notification server. The [class@
     * AstalNotifd.Notification] passed to this function is never the same instance that {@link AstalNotifd.Notifd.get_notification} returns. This 
     * function will set the state of the passed notification from `DRAFT` to `SENT` after which the notification can no longer be mutated.
     * @param notification 
     * @param _callback_ 
     */
    function send_notification(notification: Notification, _callback_: Gio.AsyncReadyCallback<Notification> | null): globalThis.Promise<void> | void;

    /**
     * @param _res_ 
     */
    function send_notification_finish(_res_: Gio.AsyncResult): void;

    namespace Action {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the notification this action was added to invoked this action.
             * @signal
             */
            invoked: () => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            label: string;
        }
    }

    /**
     * Notification action.
     * @gir-type Class
     */
    class Action extends GObject.Object {
        static $gtype: GObject.GType<Action>;

        // Properties
        /**
         * ID of this action.
         * @construct-only
         */
        get id(): string;

        /**
         * Label displayed to the user for this action.
         * @construct-only
         */
        get label(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Action.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Action.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, label: string): Action;

        // Signals
        /** @signal */
        connect<K extends keyof Action.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Action.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Action.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Action.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Action.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Action.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Invoke this action. Note that this method only notifies the client that this action was invoked by the user. For example, if this notification 
         * persists beyond the lifetime of the sending application, this action will have no effect.
         */
        invoke(): void;

        get_id(): string;

        get_label(): string;
    }


    namespace Notifd {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the daemon receives a {@link AstalNotifd.Notification}.
             * @signal
             */
            notified: (arg0: number, arg1: boolean) => void;
            /**
             * Emitted when a {@link AstalNotifd.Notification} is resolved.
             * @signal
             */
            resolved: (arg0: number, arg1: ClosedReason) => void;
            "notify::ignore-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::dont-disturb": (pspec: GObject.ParamSpec) => void;
            "notify::default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::notifications": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            ignore_timeout: boolean;
            ignoreTimeout: boolean;
            dont_disturb: boolean;
            dontDisturb: boolean;
            default_timeout: number;
            defaultTimeout: number;
            notifications: Notification[];
        }
    }

    /**
     * The notification daemon.
     * This class queues up to become the next daemon while acting as a proxy in the meantime.
     * @gir-type Class
     */
    class Notifd<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Notifd>;

        // Properties
        /**
         * Ignore the timeout specified by incoming notifications. By default notifications can specify a timeout in milliseconds after which the daemon 
         * will resolve them even without user input.
         */
        get ignore_timeout(): boolean;
        set ignore_timeout(val: boolean);

        /**
         * Ignore the timeout specified by incoming notifications. By default notifications can specify a timeout in milliseconds after which the daemon 
         * will resolve them even without user input.
         */
        get ignoreTimeout(): boolean;
        set ignoreTimeout(val: boolean);

        /**
         * Tells frontends not to show popups to the user. This property does not have any effect on its own; it is merely a value shared between the 
         * daemon process and proxies.
         */
        get dont_disturb(): boolean;
        set dont_disturb(val: boolean);

        /**
         * Tells frontends not to show popups to the user. This property does not have any effect on its own; it is merely a value shared between the 
         * daemon process and proxies.
         */
        get dontDisturb(): boolean;
        set dontDisturb(val: boolean);

        /**
         * Timeout used for notifications that do not specify a timeout and let the server decide. Negative values result in no timeout. By default this 
         * is -1.
         */
        get default_timeout(): number;
        set default_timeout(val: number);

        /**
         * Timeout used for notifications that do not specify a timeout and let the server decide. Negative values result in no timeout. By default this 
         * is -1.
         */
        get defaultTimeout(): number;
        set defaultTimeout(val: number);

        /**
         * List of currently unresolved notifications.
         * @read-only
         */
        get notifications(): Notification[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notifd.SignalSignatures;

        // Fields
        daemon: never;

        proxy: never;

        // Constructors
        constructor(properties?: Partial<Notifd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Notifd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifd.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notifd.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifd.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notifd.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notifd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the singleton instance.
         */
        static get_default(): Notifd;

        // Methods
        /**
         * Gets the {@link AstalNotifd.Notification} with the given ID, or null if there is no such notification.
         * @param id 
         */
        get_notification(id: number): Notification | null;

        get_ignore_timeout(): boolean;

        /**
         * @param value 
         */
        set_ignore_timeout(value: boolean): void;

        get_dont_disturb(): boolean;

        /**
         * @param value 
         */
        set_dont_disturb(value: boolean): void;

        get_default_timeout(): number;

        /**
         * @param value 
         */
        set_default_timeout(value: number): void;

        get_notifications(): Notification[];

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    namespace Notification {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when this notification is resolved.
             * @signal
             */
            resolved: (arg0: ClosedReason) => void;
            /**
             * Emitted when an {@link AstalNotifd.Action} of this notification is invoked.
             * @signal
             */
            invoked: (arg0: string) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-icon": (pspec: GObject.ParamSpec) => void;
            "notify::summary": (pspec: GObject.ParamSpec) => void;
            "notify::body": (pspec: GObject.ParamSpec) => void;
            "notify::expire-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
            "notify::extra-hints": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::action-icons": (pspec: GObject.ParamSpec) => void;
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-entry": (pspec: GObject.ParamSpec) => void;
            "notify::resident": (pspec: GObject.ParamSpec) => void;
            "notify::sound-file": (pspec: GObject.ParamSpec) => void;
            "notify::sound-name": (pspec: GObject.ParamSpec) => void;
            "notify::suppress-sound": (pspec: GObject.ParamSpec) => void;
            "notify::transient": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::urgency": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: State;
            time: bigint | number;
            id: number;
            app_name: string | null;
            appName: string;
            app_icon: string | null;
            appIcon: string;
            summary: string;
            body: string;
            expire_timeout: number;
            expireTimeout: number;
            actions: Action[];
            hints: GLib.Variant;
            extra_hints: GLib.Variant;
            extraHints: GLib.Variant;
            image: string;
            action_icons: boolean;
            actionIcons: boolean;
            category: string;
            desktop_entry: string;
            desktopEntry: string;
            resident: boolean;
            sound_file: string;
            soundFile: string;
            sound_name: string;
            soundName: string;
            suppress_sound: boolean;
            suppressSound: boolean;
            "transient": boolean;
            x: number;
            y: number;
            urgency: Urgency;
        }
    }

    /**
     * Class representing a notification.
     * @gir-type Class
     */
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;

        // Properties
        /**
         * State of the notification.
         */
        get state(): State;
        set state(val: State);

        /**
         * Unix time when the notification was sent or received.
         */
        get time(): number;
        set time(val: bigint | number);

        /**
         * ID of the notification.
         */
        get id(): number;
        set id(val: number);

        /**
         * Name of the sending application.
         */
        get app_name(): string | null;
        set app_name(val: string | null);

        /**
         * Name of the sending application.
         */
        get appName(): string;
        set appName(val: string);

        /**
         * Icon name of the sending application.
         */
        get app_icon(): string | null;
        set app_icon(val: string | null);

        /**
         * Icon name of the sending application.
         */
        get appIcon(): string;
        set appIcon(val: string);

        /**
         * Single line overview of the notification.
         */
        get summary(): string;
        set summary(val: string);

        /**
         * Multi-line body of text, where each line is a paragraph. May contain markup.
         */
        get body(): string;
        set body(val: string);

        /**
         * Time in milliseconds after which the notification expires.
         */
        get expire_timeout(): number;
        set expire_timeout(val: number);

        /**
         * Time in milliseconds after which the notification expires.
         */
        get expireTimeout(): number;
        set expireTimeout(val: number);

        /**
         * List of {@link AstalNotifd.Action}s associated with the notification.
         * @read-only
         */
        get actions(): Action[];

        /**
         * Notification hints. Hints are a way to provide extra data to servers. To set hints on a `DRAFT` notification, use [method@
         * AstalNotifd.Notification.set_hint] or the dedicated property setters for standard hints.
         * @read-only
         */
        get hints(): GLib.Variant;

        /**
         * Extra hints that are merged with {@link AstalNotifd.Notification.hints}.
         * @construct-only
         */
        set extra_hints(val: GLib.Variant);

        /**
         * Extra hints that are merged with {@link AstalNotifd.Notification.hints}.
         * @construct-only
         */
        set extraHints(val: GLib.Variant);

        /**
         * Standard `image-path` hint. Path to an image.
         */
        get image(): string;
        set image(val: string);

        /**
         * Standard `action-icons` hint. Indicates whether {@link AstalNotifd.Action} identifiers should be interpreted as named icons.
         */
        get action_icons(): boolean;
        set action_icons(val: boolean);

        /**
         * Standard `action-icons` hint. Indicates whether {@link AstalNotifd.Action} identifiers should be interpreted as named icons.
         */
        get actionIcons(): boolean;
        set actionIcons(val: boolean);

        /**
         * Standard `category` hint. [](https://specifications.freedesktop.org/notification-spec/latest/categories.html)
         */
        get category(): string;
        set category(val: string);

        /**
         * Standard `desktop-entry` hint. Specifies the name of the desktop filename representing the calling program.
         */
        get desktop_entry(): string;
        set desktop_entry(val: string);

        /**
         * Standard `desktop-entry` hint. Specifies the name of the desktop filename representing the calling program.
         */
        get desktopEntry(): string;
        set desktopEntry(val: string);

        /**
         * Standard `resident` hint. Indicates whether the notification is kept after action invocation.
         */
        get resident(): boolean;
        set resident(val: boolean);

        /**
         * Standard `sound-file` hint. The path to a sound file to play when the notification pops up.
         */
        get sound_file(): string;
        set sound_file(val: string);

        /**
         * Standard `sound-file` hint. The path to a sound file to play when the notification pops up.
         */
        get soundFile(): string;
        set soundFile(val: string);

        /**
         * Standard `sound-name` hint. A themeable named sound to play when the notification pops up.
         */
        get sound_name(): string;
        set sound_name(val: string);

        /**
         * Standard `sound-name` hint. A themeable named sound to play when the notification pops up.
         */
        get soundName(): string;
        set soundName(val: string);

        /**
         * Standard `suppress-sound` hint. Indicates to suppress playing any sound.
         */
        get suppress_sound(): boolean;
        set suppress_sound(val: boolean);

        /**
         * Standard `suppress-sound` hint. Indicates to suppress playing any sound.
         */
        get suppressSound(): boolean;
        set suppressSound(val: boolean);

        /**
         * Standard `transient` hint. Indicates that the notification should be excluded from persistence.
         */
        get "transient"(): boolean;
        set "transient"(val: boolean);

        /**
         * Standard `x` hint. Specifies the X location on the screen that the notification should point to. The "y" hint must also be specified.
         */
        get x(): number;
        set x(val: number);

        /**
         * Standard `y` hint. Specifies the Y location on the screen that the notification should point to. The "x" hint must also be specified.
         */
        get y(): number;
        set y(val: number);

        /**
         * Standard `urgency` hint. {@link AstalNotifd.Urgency} level of the notification.
         */
        get urgency(): Urgency;
        set urgency(val: Urgency);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notification.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Notification;

        // Signals
        /** @signal */
        connect<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notification.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notification.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Resolve this notification with {@link AstalNotifd.ClosedReason.DISMISSED_BY_USER}.
         */
        dismiss(): void;

        /**
         * Resolve this notification with {@link AstalNotifd.ClosedReason.EXPIRED}. Note that there should be no reason to use this method because 
         * expiration should be left to the daemon.
         */
        expire(): void;

        /**
         * Invoke an {@link AstalNotifd.Action} of this notification.
         * @param action_id 
         */
        invoke(action_id: string): void;

        /**
         * @param action 
         */
        add_action(action: Action): Notification;

        /**
         * @param name 
         * @param value 
         */
        set_hint(name: string, value: GLib.Variant): Notification;

        /**
         * @param name 
         */
        get_hint(name: string): GLib.Variant | null;

        get_state(): State;

        get_time(): number;

        get_id(): number;

        /**
         * @param value 
         */
        set_id(value: number): void;

        get_app_name(): string | null;

        /**
         * @param value 
         */
        set_app_name(value: string | null): void;

        get_app_icon(): string | null;

        /**
         * @param value 
         */
        set_app_icon(value: string | null): void;

        get_summary(): string;

        /**
         * @param value 
         */
        set_summary(value: string): void;

        get_body(): string;

        /**
         * @param value 
         */
        set_body(value: string): void;

        get_expire_timeout(): number;

        /**
         * @param value 
         */
        set_expire_timeout(value: number): void;

        get_actions(): Action[];

        get_hints(): GLib.Variant;

        get_image(): string;

        /**
         * @param value 
         */
        set_image(value: string): void;

        get_action_icons(): boolean;

        /**
         * @param value 
         */
        set_action_icons(value: boolean): void;

        get_category(): string;

        /**
         * @param value 
         */
        set_category(value: string): void;

        get_desktop_entry(): string;

        /**
         * @param value 
         */
        set_desktop_entry(value: string): void;

        get_resident(): boolean;

        /**
         * @param value 
         */
        set_resident(value: boolean): void;

        get_sound_file(): string;

        /**
         * @param value 
         */
        set_sound_file(value: string): void;

        get_sound_name(): string;

        /**
         * @param value 
         */
        set_sound_name(value: string): void;

        get_suppress_sound(): boolean;

        /**
         * @param value 
         */
        set_suppress_sound(value: boolean): void;

        get_transient(): boolean;

        /**
         * @param value 
         */
        set_transient(value: boolean): void;

        get_x(): number;

        /**
         * @param value 
         */
        set_x(value: number): void;

        get_y(): number;

        /**
         * @param value 
         */
        set_y(value: number): void;

        get_urgency(): Urgency;

        /**
         * @param value 
         */
        set_urgency(value: Urgency): void;
    }


    /**
     * @gir-type Alias
     */
    type ActionClass = typeof Action;

    /**
     * @gir-type Struct
     */
    abstract class ActionPrivate {
        static $gtype: GObject.GType<ActionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NotifdClass = typeof Notifd;

    /**
     * @gir-type Struct
     */
    abstract class NotifdPrivate {
        static $gtype: GObject.GType<NotifdPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NotificationClass = typeof Notification;

    /**
     * @gir-type Struct
     */
    abstract class NotificationPrivate {
        static $gtype: GObject.GType<NotificationPrivate>;
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

export default AstalNotifd;

}

declare module 'gi://AstalNotifd' {
    import AstalNotifd01 from 'gi://AstalNotifd?version=0.1';
    export default AstalNotifd01;
}
// END
