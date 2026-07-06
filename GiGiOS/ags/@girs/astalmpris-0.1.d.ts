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

declare module 'gi://AstalMpris?version=0.1' {

// Module dependencies
import type GLib from 'gi://GLib?version=2.0';
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace AstalMpris {

    /**
     * AstalMpris-0.1
     */


    /**
     * @gir-type Enum
     */
    export namespace PlaybackStatus {
        export const $gtype: GObject.GType<PlaybackStatus>;
    }

    /**
     * @gir-type Enum
     */
    enum PlaybackStatus {
        PLAYING,
        PAUSED,
        STOPPED,
    }


    /**
     * @gir-type Enum
     */
    export namespace Loop {
        export const $gtype: GObject.GType<Loop>;
    }

    /**
     * @gir-type Enum
     */
    enum Loop {
        UNSUPPORTED,
        /**
         * The playback will stop when there are no more tracks to play.
         */
        NONE,
        /**
         * The current track will start again from the begining once it has finished playing.
         */
        TRACK,
        /**
         * The playback loops through a list of tracks.
         */
        PLAYLIST,
    }


    /**
     * @gir-type Enum
     */
    export namespace Shuffle {
        export const $gtype: GObject.GType<Shuffle>;
    }

    /**
     * @gir-type Enum
     */
    enum Shuffle {
        UNSUPPORTED,
        /**
         * Playback is progressing through a playlist in some other order.
         */
        ON,
        /**
         * Playback is progressing linearly through a playlist.
         */
        OFF,
    }


    const MAJOR_VERSION: number;

    const MINOR_VERSION: number;

    const MICRO_VERSION: number;

    const VERSION: string;

    /**
     * Gets the default singleton Mpris instance.
     */
    function get_default(): Mpris;

    namespace Mpris {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new mpris Player appears.
             * @signal
             */
            "player-added": (arg0: Player) => void;
            /**
             * Emitted when a Player disappears.
             * @signal
             */
            "player-closed": (arg0: Player) => void;
            "notify::players": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            players: Player[];
        }
    }

    /**
     * Manager object that monitors the session DBus for Mpris players to appear and disappear.
     * @gir-type Class
     */
    class Mpris<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Mpris>;

        // Properties
        /**
         * List of currently available players.
         * @read-only
         */
        get players(): Player[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mpris.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Mpris.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Mpris;

        // Signals
        /** @signal */
        connect<K extends keyof Mpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Mpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Mpris.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mpris.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default singleton Mpris instance.
         */
        static get_default(): Mpris;

        // Methods
        get_players(): Player[];

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


    namespace Player {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::can-quit": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::can-set-fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::can-raise": (pspec: GObject.ParamSpec) => void;
            "notify::identity": (pspec: GObject.ParamSpec) => void;
            "notify::entry": (pspec: GObject.ParamSpec) => void;
            "notify::supported-uri-schemes": (pspec: GObject.ParamSpec) => void;
            "notify::supported-mime-types": (pspec: GObject.ParamSpec) => void;
            "notify::loop-status": (pspec: GObject.ParamSpec) => void;
            "notify::shuffle-status": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::playback-status": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-rate": (pspec: GObject.ParamSpec) => void;
            "notify::maximum-rate": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-next": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-previous": (pspec: GObject.ParamSpec) => void;
            "notify::can-play": (pspec: GObject.ParamSpec) => void;
            "notify::can-pause": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek": (pspec: GObject.ParamSpec) => void;
            "notify::can-control": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::trackid": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::art-url": (pspec: GObject.ParamSpec) => void;
            "notify::album": (pspec: GObject.ParamSpec) => void;
            "notify::album-artist": (pspec: GObject.ParamSpec) => void;
            "notify::artist": (pspec: GObject.ParamSpec) => void;
            "notify::lyrics": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::composer": (pspec: GObject.ParamSpec) => void;
            "notify::comments": (pspec: GObject.ParamSpec) => void;
            "notify::cover-art": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus_name: string;
            busName: string;
            available: boolean;
            can_quit: boolean;
            canQuit: boolean;
            fullscreen: boolean;
            can_set_fullscreen: boolean;
            canSetFullscreen: boolean;
            can_raise: boolean;
            canRaise: boolean;
            identity: string;
            entry: string;
            supported_uri_schemes: string[];
            supportedUriSchemes: string[];
            supported_mime_types: string[];
            supportedMimeTypes: string[];
            loop_status: Loop;
            loopStatus: Loop;
            shuffle_status: Shuffle;
            shuffleStatus: Shuffle;
            rate: number;
            volume: number;
            position: number;
            playback_status: PlaybackStatus;
            playbackStatus: PlaybackStatus;
            minimum_rate: number;
            minimumRate: number;
            maximum_rate: number;
            maximumRate: number;
            can_go_next: boolean;
            canGoNext: boolean;
            can_go_previous: boolean;
            canGoPrevious: boolean;
            can_play: boolean;
            canPlay: boolean;
            can_pause: boolean;
            canPause: boolean;
            can_seek: boolean;
            canSeek: boolean;
            can_control: boolean;
            canControl: boolean;
            metadata: GLib.Variant;
            trackid: string;
            length: number;
            art_url: string;
            artUrl: string;
            album: string;
            album_artist: string;
            albumArtist: string;
            artist: string;
            lyrics: string;
            title: string;
            composer: string;
            comments: string;
            cover_art: string;
            coverArt: string;
        }
    }

    /**
     * Object which tracks players through their mpris DBus interface. The most simple way is to use {@link AstalMpris.Mpris} which tracks 
     * every player, but {@link AstalMpris.Player} can be constructed for dedicated players too.
     * @gir-type Class
     */
    class Player extends GObject.Object {
        static $gtype: GObject.GType<Player>;

        // Properties
        /**
         * Full dbus nama of this player.
         */
        get bus_name(): string;
        set bus_name(val: string);

        /**
         * Full dbus nama of this player.
         */
        get busName(): string;
        set busName(val: string);

        /**
         * Indicates if {@link AstalMpris.Player.bus_name} is available on dbus.
         */
        get available(): boolean;
        set available(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.quit} has any effect.
         */
        get can_quit(): boolean;
        set can_quit(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.quit} has any effect.
         */
        get canQuit(): boolean;
        set canQuit(val: boolean);

        /**
         * Indicates if the player is occupying the fullscreen. This is typically used for videos. Use {@link AstalMpris.Player.toggle_fullscreen} 
         * to toggle fullscreen state.
         */
        get fullscreen(): boolean;
        set fullscreen(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.toggle_fullscreen} has any effect.
         */
        get can_set_fullscreen(): boolean;
        set can_set_fullscreen(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.toggle_fullscreen} has any effect.
         */
        get canSetFullscreen(): boolean;
        set canSetFullscreen(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.raise} has any effect.
         */
        get can_raise(): boolean;
        set can_raise(val: boolean);

        /**
         * Indicates if {@link AstalMpris.Player.raise} has any effect.
         */
        get canRaise(): boolean;
        set canRaise(val: boolean);

        /**
         * A human friendly name to identify the player.
         */
        get identity(): string;
        set identity(val: string);

        /**
         * The base name of a .desktop file
         */
        get entry(): string;
        set entry(val: string);

        /**
         * The URI schemes supported by the media player. This can be viewed as protocols supported by the player in almost all cases. Almost every media 
         * player will include support for the "file" scheme. Other common schemes are "http" and "rtsp".
         */
        get supported_uri_schemes(): string[];
        set supported_uri_schemes(val: string[]);

        /**
         * The URI schemes supported by the media player. This can be viewed as protocols supported by the player in almost all cases. Almost every media 
         * player will include support for the "file" scheme. Other common schemes are "http" and "rtsp".
         */
        get supportedUriSchemes(): string[];
        set supportedUriSchemes(val: string[]);

        /**
         * The mime-types supported by the player.
         */
        get supported_mime_types(): string[];
        set supported_mime_types(val: string[]);

        /**
         * The mime-types supported by the player.
         */
        get supportedMimeTypes(): string[];
        set supportedMimeTypes(val: string[]);

        /**
         * The current loop/repeat status.
         */
        get loop_status(): Loop;
        set loop_status(val: Loop);

        /**
         * The current loop/repeat status.
         */
        get loopStatus(): Loop;
        set loopStatus(val: Loop);

        /**
         * The current shuffle status.
         */
        get shuffle_status(): Shuffle;
        set shuffle_status(val: Shuffle);

        /**
         * The current shuffle status.
         */
        get shuffleStatus(): Shuffle;
        set shuffleStatus(val: Shuffle);

        /**
         * The current playback rate.
         */
        get rate(): number;
        set rate(val: number);

        /**
         * The current volume level between 0 and 1 or -1 when it is unsupported.
         */
        get volume(): number;
        set volume(val: number);

        /**
         * The current position of the track in seconds or -1 when it is unsupported. To get a progress percentage simply divide this with [property
         * `AstalMpris`.Player:length].
         */
        get position(): number;
        set position(val: number);

        /**
         * The current playback status.
         */
        get playback_status(): PlaybackStatus;
        set playback_status(val: PlaybackStatus);

        /**
         * The current playback status.
         */
        get playbackStatus(): PlaybackStatus;
        set playbackStatus(val: PlaybackStatus);

        /**
         * The minimum value which the {@link AstalMpris.Player.rate} can take.
         */
        get minimum_rate(): number;
        set minimum_rate(val: number);

        /**
         * The minimum value which the {@link AstalMpris.Player.rate} can take.
         */
        get minimumRate(): number;
        set minimumRate(val: number);

        /**
         * The maximum value which the {@link AstalMpris.Player.rate} can take.
         */
        get maximum_rate(): number;
        set maximum_rate(val: number);

        /**
         * The maximum value which the {@link AstalMpris.Player.rate} can take.
         */
        get maximumRate(): number;
        set maximumRate(val: number);

        /**
         * Indicates if invoking {@link AstalMpris.Player.next} has effect.
         */
        get can_go_next(): boolean;
        set can_go_next(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.next} has effect.
         */
        get canGoNext(): boolean;
        set canGoNext(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.previous} has effect.
         */
        get can_go_previous(): boolean;
        set can_go_previous(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.previous} has effect.
         */
        get canGoPrevious(): boolean;
        set canGoPrevious(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.play} has effect.
         */
        get can_play(): boolean;
        set can_play(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.play} has effect.
         */
        get canPlay(): boolean;
        set canPlay(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.pause} has effect.
         */
        get can_pause(): boolean;
        set can_pause(val: boolean);

        /**
         * Indicates if invoking {@link AstalMpris.Player.pause} has effect.
         */
        get canPause(): boolean;
        set canPause(val: boolean);

        /**
         * Indicates if setting {@link AstalMpris.Player.position} has effect.
         */
        get can_seek(): boolean;
        set can_seek(val: boolean);

        /**
         * Indicates if setting {@link AstalMpris.Player.position} has effect.
         */
        get canSeek(): boolean;
        set canSeek(val: boolean);

        /**
         * Indicates if the player can be controlled with methods such as {@link AstalMpris.Player.play_pause}.
         */
        get can_control(): boolean;
        set can_control(val: boolean);

        /**
         * Indicates if the player can be controlled with methods such as {@link AstalMpris.Player.play_pause}.
         */
        get canControl(): boolean;
        set canControl(val: boolean);

        /**
         * Metadata of this player.
         */
        get metadata(): GLib.Variant;
        set metadata(val: GLib.Variant);

        /**
         * Currently playing track's id.
         */
        get trackid(): string;
        set trackid(val: string);

        /**
         * Length of the currently playing track in seconds.
         */
        get length(): number;
        set length(val: number);

        /**
         * The location of an image representing the track or album. You might prefer using {@link AstalMpris.Player.cover_art}.
         */
        get art_url(): string;
        set art_url(val: string);

        /**
         * The location of an image representing the track or album. You might prefer using {@link AstalMpris.Player.cover_art}.
         */
        get artUrl(): string;
        set artUrl(val: string);

        /**
         * Title of the currently playing album.
         */
        get album(): string;
        set album(val: string);

        /**
         * Artists of the currently playing album.
         */
        get album_artist(): string;
        set album_artist(val: string);

        /**
         * Artists of the currently playing album.
         */
        get albumArtist(): string;
        set albumArtist(val: string);

        /**
         * Artists of the currently playing track.
         */
        get artist(): string;
        set artist(val: string);

        /**
         * Lyrics of the currently playing track.
         */
        get lyrics(): string;
        set lyrics(val: string);

        /**
         * Title of the currently playing track.
         */
        get title(): string;
        set title(val: string);

        /**
         * Composers of the currently playing track.
         */
        get composer(): string;
        set composer(val: string);

        /**
         * Comments of the currently playing track.
         */
        get comments(): string;
        set comments(val: string);

        /**
         * Path of the cached {@link AstalMpris.Player.art_url}.
         */
        get cover_art(): string;
        set cover_art(val: string);

        /**
         * Path of the cached {@link AstalMpris.Player.art_url}.
         */
        get coverArt(): string;
        set coverArt(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Player.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string): Player;

        // Signals
        /** @signal */
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Brings the player's user interface to the front using any appropriate mechanism available. The media player may be unable to control how 
         * its user interface is displayed, or it may not have a graphical user interface at all. In this case, the [property@
         * AstalMpris.Player:can_raise] is `false` and this method does nothing.
         */
        raise(): void;

        /**
         * Causes the media player to stop running. The media player may refuse to allow clients to shut it down. In this case, the [property@
         * AstalMpris.Player:can_quit] property is false and this method does nothing.
         */
        quit(): void;

        /**
         * Toggle {@link AstalMpris.Player.fullscreen} state.
         */
        toggle_fullscreen(): void;

        /**
         * Skips to the next track in the tracklist. If there is no next track (and endless playback and track repeat are both off), stop 
         * playback. If {@link AstalMpris.Player.can_go_next} is `false` this method has no effect.
         */
        next(): void;

        /**
         * Skips to the previous track in the tracklist. If there is no previous track (and endless playback and track repeat are both off), 
         * stop playback. If {@link AstalMpris.Player.can_go_previous} is `false` this method has no effect.
         */
        previous(): void;

        /**
         * Pauses playback. If playback is already paused, this has no effect. If {@link AstalMpris.Player.can_pause} is `false` this method has 
         * no effect.
         */
        pause(): void;

        /**
         * Pauses playback. If playback is already paused, resumes playback. If playback is stopped, starts playback.
         */
        play_pause(): void;

        /**
         * Stops playback. If playback is already stopped, this has no effect. If {@link AstalMpris.Player.can_control} is `false` this method 
         * has no effect.
         */
        stop(): void;

        /**
         * Starts or resumes playback. If already playing, this has no effect. If paused, playback resumes from the current position. If [property@
         * AstalMpris.Player:can_play] is `false` this method has no effect.
         */
        play(): void;

        /**
         * uri scheme should be an element of {@link AstalMpris.Player.supported_uri_schemes} and the mime-type should match one of the elements 
         * of {@link AstalMpris.Player.supported_mime_types}.
         * @param uri Uri of the track to load.
         */
        open_uri(uri: string): void;

        /**
         * Change {@link AstalMpris.Player.loop_status} from none to track, from track to playlist, from playlist to none.
         */
        loop(): void;

        /**
         * Toggle {@link AstalMpris.Player.shuffle_status}.
         */
        shuffle(): void;

        /**
         * Lookup a key from {@link AstalMpris.Player.metadata}. This method is useful for languages that fail to introspect hashtables.
         * @param key 
         */
        get_meta(key: string): GLib.Variant | null;

        get_bus_name(): string;

        get_available(): boolean;

        get_can_quit(): boolean;

        get_fullscreen(): boolean;

        get_can_set_fullscreen(): boolean;

        get_can_raise(): boolean;

        get_identity(): string;

        get_entry(): string;

        get_supported_uri_schemes(): string[];

        get_supported_mime_types(): string[];

        get_loop_status(): Loop;

        /**
         * @param value 
         */
        set_loop_status(value: Loop): void;

        get_shuffle_status(): Shuffle;

        /**
         * @param value 
         */
        set_shuffle_status(value: Shuffle): void;

        get_rate(): number;

        /**
         * @param value 
         */
        set_rate(value: number): void;

        get_volume(): number;

        /**
         * @param value 
         */
        set_volume(value: number): void;

        get_position(): number;

        /**
         * @param value 
         */
        set_position(value: number): void;

        get_playback_status(): PlaybackStatus;

        get_minimum_rate(): number;

        get_maximum_rate(): number;

        get_can_go_next(): boolean;

        get_can_go_previous(): boolean;

        get_can_play(): boolean;

        get_can_pause(): boolean;

        get_can_seek(): boolean;

        get_can_control(): boolean;

        get_metadata(): GLib.Variant;

        get_trackid(): string;

        get_length(): number;

        get_art_url(): string;

        get_album(): string;

        get_album_artist(): string;

        get_artist(): string;

        get_lyrics(): string;

        get_title(): string;

        get_composer(): string;

        get_comments(): string;

        get_cover_art(): string;
    }


    /**
     * @gir-type Alias
     */
    type MprisClass = typeof Mpris;

    /**
     * @gir-type Struct
     */
    abstract class MprisPrivate {
        static $gtype: GObject.GType<MprisPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PlayerClass = typeof Player;

    /**
     * @gir-type Struct
     */
    abstract class PlayerPrivate {
        static $gtype: GObject.GType<PlayerPrivate>;
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

export default AstalMpris;

}

declare module 'gi://AstalMpris' {
    import AstalMpris01 from 'gi://AstalMpris?version=0.1';
    export default AstalMpris01;
}
// END
