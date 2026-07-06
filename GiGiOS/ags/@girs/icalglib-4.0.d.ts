/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://ICalGLib?version=4.0' {

// Module dependencies
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';

export namespace ICalGLib {

    /**
     * ICalGLib-4.0
     */


    /**
     * @gir-type Enum
     */
    enum ComponentKind {
        NO_COMPONENT,
        ANY_COMPONENT,
        XROOT_COMPONENT,
        XATTACH_COMPONENT,
        VEVENT_COMPONENT,
        VTODO_COMPONENT,
        VJOURNAL_COMPONENT,
        VCALENDAR_COMPONENT,
        VAGENDA_COMPONENT,
        VFREEBUSY_COMPONENT,
        VALARM_COMPONENT,
        XAUDIOALARM_COMPONENT,
        XDISPLAYALARM_COMPONENT,
        XEMAILALARM_COMPONENT,
        XPROCEDUREALARM_COMPONENT,
        VTIMEZONE_COMPONENT,
        XSTANDARD_COMPONENT,
        XDAYLIGHT_COMPONENT,
        X_COMPONENT,
        VSCHEDULE_COMPONENT,
        VQUERY_COMPONENT,
        VREPLY_COMPONENT,
        VCAR_COMPONENT,
        VCOMMAND_COMPONENT,
        XLICINVALID_COMPONENT,
        XLICMIMEPART_COMPONENT,
        VAVAILABILITY_COMPONENT,
        XAVAILABLE_COMPONENT,
        VPOLL_COMPONENT,
        VVOTER_COMPONENT,
        XVOTE_COMPONENT,
        VPATCH_COMPONENT,
        XPATCH_COMPONENT,
        PARTICIPANT_COMPONENT,
        VLOCATION_COMPONENT,
        VRESOURCE_COMPONENT,
        IANA_COMPONENT,
        NUM_COMPONENT_TYPES,
    }


    /**
     * @gir-type Enum
     */
    enum ErrorEnum {
        NO_ERROR,
        BADARG_ERROR,
        NEWFAILED_ERROR,
        ALLOCATION_ERROR,
        THREADING_ERROR,
        MALFORMEDDATA_ERROR,
        PARSE_ERROR,
        INTERNAL_ERROR,
        FILE_ERROR,
        USAGE_ERROR,
        UNIMPLEMENTED_ERROR,
        UNKNOWN_ERROR,
    }


    /**
     * @gir-type Enum
     */
    enum ErrorState {
        FATAL,
        NONFATAL,
        DEFAULT,
        UNKNOWN,
    }


    /**
     * @gir-type Enum
     */
    enum InvalidRruleHandling {
        TREAT_AS_ERROR,
        IGNORE_INVALID,
    }


    /**
     * The types of limits
     * @gir-type Enum
     */
    enum LimitsKind {
        PARSE_FAILURES,
        PARSE_SEARCH,
        PARSE_FAILURE_ERROR_MESSAGES,
        PROPERTIES,
        PARAMETERS,
        VALUE_CHARS,
        PROPERTY_VALUES,
        RECURRENCE_SEARCH,
        RECURRENCE_TIME_STANDING_STILL,
        RRULE_SEARCH,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterAction {
        X,
        ASK,
        ABORT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterCutype {
        X,
        INDIVIDUAL,
        GROUP,
        RESOURCE,
        ROOM,
        UNKNOWN,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterDerived {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterDisplay {
        X,
        BADGE,
        GRAPHIC,
        FULLSIZE,
        THUMBNAIL,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterEnable {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterEncoding {
        X,
        "8BIT",
        BASE64,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterFbtype {
        X,
        FREE,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterFeature {
        X,
        AUDIO,
        CHAT,
        FEED,
        MODERATOR,
        PHONE,
        SCREEN,
        VIDEO,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterKind {
        ANY_PARAMETER,
        ACTIONPARAM_PARAMETER,
        ALTREP_PARAMETER,
        CHARSET_PARAMETER,
        CN_PARAMETER,
        CUTYPE_PARAMETER,
        DELEGATEDFROM_PARAMETER,
        DELEGATEDTO_PARAMETER,
        DERIVED_PARAMETER,
        DIR_PARAMETER,
        DISPLAY_PARAMETER,
        EMAIL_PARAMETER,
        ENABLE_PARAMETER,
        ENCODING_PARAMETER,
        FBTYPE_PARAMETER,
        FEATURE_PARAMETER,
        FILENAME_PARAMETER,
        FMTTYPE_PARAMETER,
        GAP_PARAMETER,
        IANA_PARAMETER,
        ID_PARAMETER,
        LABEL_PARAMETER,
        LANGUAGE_PARAMETER,
        LATENCY_PARAMETER,
        LINKREL_PARAMETER,
        LOCAL_PARAMETER,
        LOCALIZE_PARAMETER,
        MANAGEDID_PARAMETER,
        MEMBER_PARAMETER,
        MODIFIED_PARAMETER,
        OPTIONS_PARAMETER,
        ORDER_PARAMETER,
        PARTSTAT_PARAMETER,
        PATCHACTION_PARAMETER,
        PUBLICCOMMENT_PARAMETER,
        RANGE_PARAMETER,
        REASON_PARAMETER,
        RELATED_PARAMETER,
        RELTYPE_PARAMETER,
        REQUIRED_PARAMETER,
        RESPONSE_PARAMETER,
        ROLE_PARAMETER,
        RSVP_PARAMETER,
        SCHEDULEAGENT_PARAMETER,
        SCHEDULEFORCESEND_PARAMETER,
        SCHEDULESTATUS_PARAMETER,
        SCHEMA_PARAMETER,
        SENTBY_PARAMETER,
        SIZE_PARAMETER,
        STAYINFORMED_PARAMETER,
        SUBSTATE_PARAMETER,
        TZID_PARAMETER,
        VALUE_PARAMETER,
        X_PARAMETER,
        XLICCOMPARETYPE_PARAMETER,
        XLICERRORTYPE_PARAMETER,
        NO_PARAMETER,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterLocal {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterPartstat {
        X,
        NEEDSACTION,
        ACCEPTED,
        DECLINED,
        TENTATIVE,
        DELEGATED,
        COMPLETED,
        INPROCESS,
        FAILED,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterPatchaction {
        X,
        CREATE,
        BYNAME,
        BYVALUE,
        BYPARAM,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterRange {
        X,
        THISANDPRIOR,
        THISANDFUTURE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterRelated {
        X,
        START,
        END,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterReltype {
        X,
        PARENT,
        CHILD,
        SIBLING,
        POLL,
        SNOOZE,
        CONCEPT,
        DEPENDSON,
        FINISHTOFINISH,
        FINISHTOSTART,
        FIRST,
        NEXT,
        REFID,
        STARTTOFINISH,
        STARTTOSTART,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterRequired {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterRole {
        X,
        CHAIR,
        REQPARTICIPANT,
        OPTPARTICIPANT,
        NONPARTICIPANT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterRsvp {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterScheduleagent {
        X,
        SERVER,
        CLIENT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterScheduleforcesend {
        X,
        REQUEST,
        REPLY,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterStayinformed {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterSubstate {
        X,
        OK,
        ERROR,
        SUSPENDED,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterValue {
        X,
        BINARY,
        BOOLEAN,
        DATE,
        DURATION,
        FLOAT,
        INTEGER,
        PERIOD,
        RECUR,
        TEXT,
        URI,
        ERROR,
        DATETIME,
        UTCOFFSET,
        CALADDRESS,
        UID,
        XMLREFERENCE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterXliccomparetype {
        X,
        EQUAL,
        NOTEQUAL,
        LESS,
        GREATER,
        LESSEQUAL,
        GREATEREQUAL,
        REGEX,
        ISNULL,
        ISNOTNULL,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParameterXlicerrortype {
        X,
        COMPONENTPARSEERROR,
        PROPERTYPARSEERROR,
        PARAMETERNAMEPARSEERROR,
        PARAMETERVALUEPARSEERROR,
        VALUEPARSEERROR,
        INVALIDITIP,
        UNKNOWNVCALPROPERROR,
        MIMEPARSEERROR,
        VCALPROPPARSEERROR,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum ParserCtrl {
        KEEP,
        OMIT,
        ERROR,
    }


    /**
     * @gir-type Enum
     */
    enum ParserState {
        ERROR,
        SUCCESS,
        BEGIN_COMP,
        END_COMP,
        IN_PROGRESS,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyAction {
        X,
        AUDIO,
        DISPLAY,
        EMAIL,
        PROCEDURE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyBusytype {
        X,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyCarlevel {
        X,
        CARNONE,
        CARMIN,
        CARFULL1,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyClassenum {
        X,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyCmd {
        X,
        ABORT,
        CONTINUE,
        CREATE,
        DELETE,
        GENERATEUID,
        GETCAPABILITY,
        IDENTIFY,
        MODIFY,
        MOVE,
        REPLY,
        SEARCH,
        SETLOCALE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyKind {
        ANY_PROPERTY,
        ACCEPTRESPONSE_PROPERTY,
        ACKNOWLEDGED_PROPERTY,
        ACTION_PROPERTY,
        ALLOWCONFLICT_PROPERTY,
        ATTACH_PROPERTY,
        ATTENDEE_PROPERTY,
        BUSYTYPE_PROPERTY,
        CALENDARADDRESS_PROPERTY,
        CALID_PROPERTY,
        CALMASTER_PROPERTY,
        CALSCALE_PROPERTY,
        CAPVERSION_PROPERTY,
        CARLEVEL_PROPERTY,
        CARID_PROPERTY,
        CATEGORIES_PROPERTY,
        CLASS_PROPERTY,
        CMD_PROPERTY,
        COLOR_PROPERTY,
        COMMENT_PROPERTY,
        COMPLETED_PROPERTY,
        COMPONENTS_PROPERTY,
        CONFERENCE_PROPERTY,
        CONCEPT_PROPERTY,
        CONTACT_PROPERTY,
        CREATED_PROPERTY,
        CSID_PROPERTY,
        DATEMAX_PROPERTY,
        DATEMIN_PROPERTY,
        DECREED_PROPERTY,
        DEFAULTCHARSET_PROPERTY,
        DEFAULTLOCALE_PROPERTY,
        DEFAULTTZID_PROPERTY,
        DEFAULTVCARS_PROPERTY,
        DENY_PROPERTY,
        DESCRIPTION_PROPERTY,
        DTEND_PROPERTY,
        DTSTAMP_PROPERTY,
        DTSTART_PROPERTY,
        DUE_PROPERTY,
        DURATION_PROPERTY,
        ESTIMATEDDURATION_PROPERTY,
        EXDATE_PROPERTY,
        EXPAND_PROPERTY,
        EXRULE_PROPERTY,
        FREEBUSY_PROPERTY,
        GEO_PROPERTY,
        GRANT_PROPERTY,
        IMAGE_PROPERTY,
        ITIPVERSION_PROPERTY,
        LASTMODIFIED_PROPERTY,
        LINK_PROPERTY,
        LOCATION_PROPERTY,
        LOCATIONTYPE_PROPERTY,
        MAXCOMPONENTSIZE_PROPERTY,
        MAXDATE_PROPERTY,
        MAXRESULTS_PROPERTY,
        MAXRESULTSSIZE_PROPERTY,
        METHOD_PROPERTY,
        MINDATE_PROPERTY,
        MULTIPART_PROPERTY,
        NAME_PROPERTY,
        ORGANIZER_PROPERTY,
        OWNER_PROPERTY,
        PARTICIPANTTYPE_PROPERTY,
        PATCHDELETE_PROPERTY,
        PATCHORDER_PROPERTY,
        PATCHPARAMETER_PROPERTY,
        PATCHTARGET_PROPERTY,
        PATCHVERSION_PROPERTY,
        PERCENTCOMPLETE_PROPERTY,
        PERMISSION_PROPERTY,
        POLLCOMPLETION_PROPERTY,
        POLLITEMID_PROPERTY,
        POLLMODE_PROPERTY,
        POLLPROPERTIES_PROPERTY,
        POLLWINNER_PROPERTY,
        PRIORITY_PROPERTY,
        PRODID_PROPERTY,
        PROXIMITY_PROPERTY,
        QUERY_PROPERTY,
        QUERYLEVEL_PROPERTY,
        QUERYID_PROPERTY,
        QUERYNAME_PROPERTY,
        RDATE_PROPERTY,
        RECURACCEPTED_PROPERTY,
        RECUREXPAND_PROPERTY,
        RECURLIMIT_PROPERTY,
        RECURRENCEID_PROPERTY,
        REFRESHINTERVAL_PROPERTY,
        REFID_PROPERTY,
        RELATEDTO_PROPERTY,
        RELCALID_PROPERTY,
        REPEAT_PROPERTY,
        REPLYURL_PROPERTY,
        REQUESTSTATUS_PROPERTY,
        RESOURCES_PROPERTY,
        RESOURCETYPE_PROPERTY,
        RESPONSE_PROPERTY,
        RESTRICTION_PROPERTY,
        RRULE_PROPERTY,
        SCOPE_PROPERTY,
        SEQUENCE_PROPERTY,
        SOURCE_PROPERTY,
        STATUS_PROPERTY,
        STORESEXPANDED_PROPERTY,
        STRUCTUREDDATA_PROPERTY,
        STYLEDDESCRIPTION_PROPERTY,
        SUMMARY_PROPERTY,
        TARGET_PROPERTY,
        TASKMODE_PROPERTY,
        TRANSP_PROPERTY,
        TRIGGER_PROPERTY,
        TZID_PROPERTY,
        TZIDALIASOF_PROPERTY,
        TZNAME_PROPERTY,
        TZOFFSETFROM_PROPERTY,
        TZOFFSETTO_PROPERTY,
        TZUNTIL_PROPERTY,
        TZURL_PROPERTY,
        UID_PROPERTY,
        URL_PROPERTY,
        VERSION_PROPERTY,
        VOTER_PROPERTY,
        X_PROPERTY,
        XLICCLASS_PROPERTY,
        XLICCLUSTERCOUNT_PROPERTY,
        XLICERROR_PROPERTY,
        XLICMIMECHARSET_PROPERTY,
        XLICMIMECID_PROPERTY,
        XLICMIMECONTENTTYPE_PROPERTY,
        XLICMIMEENCODING_PROPERTY,
        XLICMIMEFILENAME_PROPERTY,
        XLICMIMEOPTINFO_PROPERTY,
        IANA_PROPERTY,
        NO_PROPERTY,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyMethod {
        X,
        PUBLISH,
        REQUEST,
        REPLY,
        ADD,
        CANCEL,
        REFRESH,
        COUNTER,
        DECLINECOUNTER,
        CREATE,
        READ,
        RESPONSE,
        MOVE,
        MODIFY,
        GENERATEUID,
        DELETE,
        POLLSTATUS,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyParticipanttype {
        X,
        ACTIVE,
        INACTIVE,
        SPONSOR,
        CONTACT,
        BOOKINGCONTACT,
        EMERGENCYCONTACT,
        PUBLICITYCONTACT,
        PLANNERCONTACT,
        PERFORMER,
        SPEAKER,
        VOTER,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyPollcompletion {
        X,
        SERVER,
        SERVERSUBMIT,
        SERVERCHOICE,
        CLIENT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyPollmode {
        X,
        BASIC,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyProximity {
        X,
        ARRIVE,
        DEPART,
        CONNECT,
        DISCONNECT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyQuerylevel {
        X,
        CALQL1,
        CALQLNONE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyResourcetype {
        X,
        ROOM,
        PROJECTOR,
        REMOTECONFERENCEAUDIO,
        REMOTECONFERENCEVIDEO,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyStatus {
        X,
        TENTATIVE,
        CONFIRMED,
        COMPLETED,
        NEEDSACTION,
        CANCELLED,
        INPROCESS,
        DRAFT,
        FINAL,
        SUBMITTED,
        PENDING,
        FAILED,
        DELETED,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyTaskmode {
        X,
        AUTOMATICCOMPLETION,
        AUTOMATICFAILURE,
        AUTOMATICSTATUS,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyTransp {
        X,
        OPAQUE,
        OPAQUENOCONFLICT,
        TRANSPARENT,
        TRANSPARENTNOCONFLICT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum PropertyXlicclass {
        X,
        PUBLISHNEW,
        PUBLISHUPDATE,
        PUBLISHFREEBUSY,
        REQUESTNEW,
        REQUESTUPDATE,
        REQUESTRESCHEDULE,
        REQUESTDELEGATE,
        REQUESTNEWORGANIZER,
        REQUESTFORWARD,
        REQUESTSTATUS,
        REQUESTFREEBUSY,
        REPLYACCEPT,
        REPLYDECLINE,
        REPLYDELEGATE,
        REPLYCRASHERACCEPT,
        REPLYCRASHERDECLINE,
        ADDINSTANCE,
        CANCELEVENT,
        CANCELINSTANCE,
        CANCELALL,
        REFRESH,
        COUNTER,
        DECLINECOUNTER,
        MALFORMED,
        OBSOLETE,
        MISSEQUENCED,
        UNKNOWN,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum RecurrenceArraySizes {
        SECOND_SIZE,
        MINUTE_SIZE,
        HOUR_SIZE,
        MONTH_SIZE,
        MONTHDAY_SIZE,
        WEEKNO_SIZE,
        YEARDAY_SIZE,
        SETPOS_SIZE,
        DAY_SIZE,
    }


    /**
     * @gir-type Enum
     */
    enum RecurrenceByRule {
        BYRULE_NO_CONTRACTION,
        BY_MONTH,
        BY_WEEK_NO,
        BY_YEAR_DAY,
        BY_MONTH_DAY,
        BY_DAY,
        BY_HOUR,
        BY_MINUTE,
        BY_SECOND,
        BY_SET_POS,
        BY_NUM_PARTS,
    }


    /**
     * @gir-type Enum
     */
    enum RecurrenceFrequency {
        SECONDLY_RECURRENCE,
        MINUTELY_RECURRENCE,
        HOURLY_RECURRENCE,
        DAILY_RECURRENCE,
        WEEKLY_RECURRENCE,
        MONTHLY_RECURRENCE,
        YEARLY_RECURRENCE,
        NO_RECURRENCE,
    }


    /**
     * @gir-type Enum
     */
    enum RecurrenceSkip {
        BACKWARD,
        FORWARD,
        OMIT,
        UNDEFINED,
    }


    /**
     * @gir-type Enum
     */
    enum RecurrenceWeekday {
        NO_WEEKDAY,
        SUNDAY_WEEKDAY,
        MONDAY_WEEKDAY,
        TUESDAY_WEEKDAY,
        WEDNESDAY_WEEKDAY,
        THURSDAY_WEEKDAY,
        FRIDAY_WEEKDAY,
        SATURDAY_WEEKDAY,
    }


    /**
     * @gir-type Enum
     */
    enum RequestStatus {
        UNKNOWN_STATUS,
        "2_0_SUCCESS_STATUS",
        "2_1_FALLBACK_STATUS",
        "2_2_IGPROP_STATUS",
        "2_3_IGPARAM_STATUS",
        "2_4_IGXPROP_STATUS",
        "2_5_IGXPARAM_STATUS",
        "2_6_IGCOMP_STATUS",
        "2_7_FORWARD_STATUS",
        "2_8_ONEEVENT_STATUS",
        "2_9_TRUNC_STATUS",
        "2_10_ONETODO_STATUS",
        "2_11_TRUNCRRULE_STATUS",
        "3_0_INVPROPNAME_STATUS",
        "3_1_INVPROPVAL_STATUS",
        "3_2_INVPARAM_STATUS",
        "3_3_INVPARAMVAL_STATUS",
        "3_4_INVCOMP_STATUS",
        "3_5_INVTIME_STATUS",
        "3_6_INVRULE_STATUS",
        "3_7_INVCU_STATUS",
        "3_8_NOAUTH_STATUS",
        "3_9_BADVERSION_STATUS",
        "3_10_TOOBIG_STATUS",
        "3_11_MISSREQCOMP_STATUS",
        "3_12_UNKCOMP_STATUS",
        "3_13_BADCOMP_STATUS",
        "3_14_NOCAP_STATUS",
        "3_15_INVCOMMAND",
        "4_0_BUSY_STATUS",
        "4_1_STORE_ACCESS_DENIED",
        "4_2_STORE_FAILED",
        "4_3_STORE_NOT_FOUND",
        "5_0_MAYBE_STATUS",
        "5_1_UNAVAIL_STATUS",
        "5_2_NOSERVICE_STATUS",
        "5_3_NOSCHED_STATUS",
        "6_1_CONTAINER_NOT_FOUND",
        "9_0_UNRECOGNIZED_COMMAND",
    }


    /**
     * @gir-type Enum
     */
    enum RestrictionKind {
        NONE,
        ZERO,
        ONE,
        ZEROPLUS,
        ONEPLUS,
        ZEROORONE,
        ONEEXCLUSIVE,
        ONEMUTUAL,
        UNKNOWN,
    }


    /**
     * @gir-type Enum
     */
    enum Unknowntokenhandling {
        ASSUME_IANA_TOKEN,
        DISCARD_TOKEN,
        TREAT_AS_ERROR,
    }


    /**
     * @gir-type Enum
     */
    enum ValueKind {
        ANY_VALUE,
        ACTION_VALUE,
        ATTACH_VALUE,
        BINARY_VALUE,
        BOOLEAN_VALUE,
        BUSYTYPE_VALUE,
        CALADDRESS_VALUE,
        CARLEVEL_VALUE,
        COLOR_VALUE,
        CLASS_VALUE,
        CMD_VALUE,
        DATE_VALUE,
        DATETIME_VALUE,
        DATETIMEDATE_VALUE,
        DATETIMEPERIOD_VALUE,
        DURATION_VALUE,
        FLOAT_VALUE,
        GEO_VALUE,
        INTEGER_VALUE,
        LINK_VALUE,
        METHOD_VALUE,
        PARTICIPANTTYPE_VALUE,
        PERIOD_VALUE,
        POLLCOMPLETION_VALUE,
        POLLMODE_VALUE,
        PROXIMITY_VALUE,
        RESOURCETYPE_VALUE,
        QUERY_VALUE,
        QUERYLEVEL_VALUE,
        RECUR_VALUE,
        RELATEDTO_VALUE,
        REQUESTSTATUS_VALUE,
        STATUS_VALUE,
        STRING_VALUE,
        TASKMODE_VALUE,
        TEXT_VALUE,
        TRANSP_VALUE,
        TRIGGER_VALUE,
        UID_VALUE,
        URI_VALUE,
        UTCOFFSET_VALUE,
        XMLREFERENCE_VALUE,
        X_VALUE,
        XLICCLASS_VALUE,
        NO_VALUE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardAdrField {
        ADR_PO_BOX,
        ADR_EXTENDED,
        ADR_STREET,
        ADR_LOCALITY,
        ADR_REGION,
        ADR_POSTAL_CODE,
        ADR_COUNTRY,
        ADR_ROOM,
        ADR_APARTMENT,
        ADR_FLOOR,
        ADR_STREET_NUMBER,
        ADR_STREET_NAME,
        ADR_BUILDING,
        ADR_BLOCK,
        ADR_SUBDISTRICT,
        ADR_DISTRICT,
        ADR_LANDMARK,
        ADR_DIRECTION,
        NUM_ADR_FIELDS,
    }


    /**
     * @gir-type Enum
     */
    enum VcardClientpidmapField {
        CLIENTPIDMAP_ID,
        CLIENTPIDMAP_URI,
        NUM_CLIENTPIDMAP_FIELDS,
    }


    /**
     * @gir-type Enum
     */
    enum VcardComponentKind {
        NO_COMPONENT,
        ANY_COMPONENT,
        XROOT_COMPONENT,
        VCARD_COMPONENT,
        NUM_COMPONENT_TYPES,
    }


    /**
     * @gir-type Enum
     */
    enum VcardGenderField {
        GENDER_SEX,
        GENDER_TEXT,
        NUM_GENDER_FIELDS,
    }


    /**
     * @gir-type Enum
     */
    enum VcardNField {
        N_FAMILY,
        N_GIVEN,
        N_ADDITIONAL,
        N_PREFIX,
        N_SUFFIX,
        N_SECONDARY,
        N_GENERATION,
        NUM_N_FIELDS,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterCalscale {
        X,
        GREGORIAN,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterDerived {
        X,
        TRUE,
        FALSE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterEncoding {
        X,
        B,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterKind {
        ANY_PARAMETER,
        ALTID_PARAMETER,
        AUTHOR_PARAMETER,
        AUTHORNAME_PARAMETER,
        CALSCALE_PARAMETER,
        CC_PARAMETER,
        CONTEXT_PARAMETER,
        CREATED_PARAMETER,
        DERIVED_PARAMETER,
        ENCODING_PARAMETER,
        GEO_PARAMETER,
        IANA_PARAMETER,
        INDEX_PARAMETER,
        JSCOMPS_PARAMETER,
        JSPTR_PARAMETER,
        LABEL_PARAMETER,
        LANGUAGE_PARAMETER,
        LEVEL_PARAMETER,
        MEDIATYPE_PARAMETER,
        PHONETIC_PARAMETER,
        PID_PARAMETER,
        PREF_PARAMETER,
        PROPID_PARAMETER,
        SCRIPT_PARAMETER,
        SERVICETYPE_PARAMETER,
        SORTAS_PARAMETER,
        TYPE_PARAMETER,
        TZ_PARAMETER,
        USERNAME_PARAMETER,
        VALUE_PARAMETER,
        X_PARAMETER,
        XLICCOMPARETYPE_PARAMETER,
        XLICERRORTYPE_PARAMETER,
        NO_PARAMETER,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterLevel {
        X,
        BEGINNER,
        AVERAGE,
        EXPERT,
        HIGH,
        MEDIUM,
        LOW,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterPhonetic {
        X,
        IPA,
        PINY,
        JYUT,
        SCRIPT,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterType {
        X,
        WORK,
        HOME,
        TEXT,
        VOICE,
        FAX,
        CELL,
        VIDEO,
        PAGER,
        TEXTPHONE,
        CONTACT,
        ACQUAINTANCE,
        FRIEND,
        MET,
        COWORKER,
        COLLEAGUE,
        CORESIDENT,
        NEIGHBOR,
        CHILD,
        PARENT,
        SIBLING,
        SPOUSE,
        KIN,
        MUSE,
        CRUSH,
        DATE,
        SWEETHEART,
        ME,
        AGENT,
        EMERGENCY,
        PREF,
        MAINNUMBER,
        BILLING,
        DELIVERY,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterValue {
        X,
        TEXT,
        URI,
        DATE,
        TIME,
        DATETIME,
        DATEANDORTIME,
        TIMESTAMP,
        BOOLEAN,
        INTEGER,
        FLOAT,
        UTCOFFSET,
        LANGUAGETAG,
        STRUCTURED,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterXliccomparetype {
        X,
        EQUAL,
        NOTEQUAL,
        LESS,
        GREATER,
        LESSEQUAL,
        GREATEREQUAL,
        REGEX,
        ISNULL,
        ISNOTNULL,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardParameterXlicerrortype {
        X,
        COMPONENTPARSEERROR,
        PROPERTYPARSEERROR,
        PARAMETERNAMEPARSEERROR,
        PARAMETERVALUEPARSEERROR,
        VALUEPARSEERROR,
        RESTRICTIONCHECK,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardPropertyGramgender {
        X,
        ANIMATE,
        COMMON,
        FEMININE,
        INANIMATE,
        MASCULINE,
        NEUTER,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardPropertyKind {
        ANY_PROPERTY,
        ADR_PROPERTY,
        AGENT_PROPERTY,
        ANNIVERSARY_PROPERTY,
        BDAY_PROPERTY,
        BEGIN_PROPERTY,
        BIRTHPLACE_PROPERTY,
        CALADRURI_PROPERTY,
        CALURI_PROPERTY,
        CATEGORIES_PROPERTY,
        CLASS_PROPERTY,
        CLIENTPIDMAP_PROPERTY,
        CONTACTURI_PROPERTY,
        CREATED_PROPERTY,
        DEATHDATE_PROPERTY,
        DEATHPLACE_PROPERTY,
        EMAIL_PROPERTY,
        END_PROPERTY,
        EXPERTISE_PROPERTY,
        FBURL_PROPERTY,
        FN_PROPERTY,
        GENDER_PROPERTY,
        GEO_PROPERTY,
        GRAMGENDER_PROPERTY,
        HOBBY_PROPERTY,
        IMPP_PROPERTY,
        INTEREST_PROPERTY,
        JSPROP_PROPERTY,
        KEY_PROPERTY,
        KIND_PROPERTY,
        LABEL_PROPERTY,
        LANG_PROPERTY,
        LANGUAGE_PROPERTY,
        LOGO_PROPERTY,
        MAILER_PROPERTY,
        MEMBER_PROPERTY,
        N_PROPERTY,
        NAME_PROPERTY,
        NICKNAME_PROPERTY,
        NOTE_PROPERTY,
        ORG_PROPERTY,
        ORGDIRECTORY_PROPERTY,
        PHOTO_PROPERTY,
        PRODID_PROPERTY,
        PRONOUNS_PROPERTY,
        RELATED_PROPERTY,
        REV_PROPERTY,
        ROLE_PROPERTY,
        SOCIALPROFILE_PROPERTY,
        SORTSTRING_PROPERTY,
        SOUND_PROPERTY,
        SOURCE_PROPERTY,
        TEL_PROPERTY,
        TITLE_PROPERTY,
        TZ_PROPERTY,
        UID_PROPERTY,
        URL_PROPERTY,
        VERSION_PROPERTY,
        X_PROPERTY,
        XLICERROR_PROPERTY,
        XML_PROPERTY,
        NO_PROPERTY,
    }


    /**
     * @gir-type Enum
     */
    enum VcardPropertyKindenum {
        X,
        INDIVIDUAL,
        GROUP,
        ORG,
        LOCATION,
        APPLICATION,
        DEVICE,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardPropertyVersion {
        X,
        V21,
        V30,
        V40,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    enum VcardRestrictionKind {
        NONE,
        ZERO,
        ONE,
        ZEROPLUS,
        ONEPLUS,
        ZEROORONE,
        ONEEXCLUSIVE,
        ONEMUTUAL,
        UNKNOWN,
    }


    /**
     * @gir-type Enum
     */
    enum VcardTimeConvertFlags {
        BARE_TIME,
        AS_V4,
    }


    /**
     * @gir-type Enum
     */
    enum VcardValueKind {
        ANY_VALUE,
        BOOLEAN_VALUE,
        DATE_VALUE,
        DATEANDORTIME_VALUE,
        DATETIME_VALUE,
        FLOAT_VALUE,
        GEO_VALUE,
        GRAMGENDER_VALUE,
        INTEGER_VALUE,
        KIND_VALUE,
        LANGUAGETAG_VALUE,
        STRUCTURED_VALUE,
        TEXT_VALUE,
        TEXTLIST_VALUE,
        TIME_VALUE,
        TIMESTAMP_VALUE,
        TZ_VALUE,
        URI_VALUE,
        UTCOFFSET_VALUE,
        VERSION_VALUE,
        X_VALUE,
        NO_VALUE,
    }


    /**
     * Creates a deep copy of {@link ICalGLib.EnumArray} with the same properties as the `array`.
     * @param array The {@link ICalGLib.EnumArray} to be cloned
     * @returns The newly cloned {@link ICalGLib.EnumArray} with the same value as the `array`
     * @since 4.0
     */
    function enumarray_clone(array: EnumArray): EnumArray;

    /**
     * Removes the element at the `position` from the array.
     * @param array The {@link ICalGLib.EnumArray} to be modified
     * @param position The position in which the element will be removed from the array
     * @since 4.0
     */
    function enumarray_remove_element_at(array: EnumArray, position: number): void;

    /**
     * @since 1.0
     */
    function error_clear_errno(): void;

    /**
     * Reads an error from a string.
     * @param str The error name string
     * @returns An {@link ICalGLib.ErrorEnum} representation of the error `str`
     * @since 4.0
     */
    function error_error_from_string(str: string): ErrorEnum;

    /**
     * Gets the state of an error.
     * @param error The error to be checked
     * @returns The state of the `error`
     * @since 1.0
     */
    function error_get_error_state(error: ErrorEnum): ErrorState;

    /**
     * Determine whether errors are fatal.
     * @returns whether errors are fatal
     * @since 4.0
     */
    function error_get_errors_are_fatal(): boolean;

    /**
     * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
     * @returns Return the error happened
     * @since 1.0
     */
    function error_icalerrno(): ErrorEnum;

    /**
     * Gets the {@link ICalGLib.ErrorEnum} in the string representation. This method called the icalerrorno_return to get
     * the current error.
     * @returns The string representation of the current error
     * @since 1.0
     */
    function error_perror(): string;

    /**
     * Restores the error to specified state.
     * @param error The error to be restored
     * @param es The error state to be restored
     * @since 1.0
     */
    function error_restore(error: string, es: ErrorState): void;

    /**
     * Sets the errno.
     * @param x The error to be set
     * @since 1.0
     */
    function error_set_errno(x: ErrorEnum): void;

    /**
     * Sets the state to the corresponding error in the library.
     * @param error The error enum
     * @param state The error state
     * @since 1.0
     */
    function error_set_error_state(error: ErrorEnum, state: ErrorState): void;

    /**
     * Sets whether errors are fatal, that is, whether libical aborts after any processing reports an error.
     * @param value value to set
     * @since 4.0
     */
    function error_set_errors_are_fatal(value: boolean): void;

    /**
     * Translates the {@link ICalGLib.ErrorEnum} to the string representation.
     * @param e The {@link ICalGLib.ErrorEnum} to be translated
     * @returns The string representation of `e`
     * @since 1.0
     */
    function error_strerror(e: ErrorEnum): string;

    /**
     * Suppresses the error.
     * @param error The error to be suppressed
     * @returns The error state suppressed
     * @since 1.0
     */
    function error_supress(error: string): ErrorState;

    /**
     * Gets the setting of {@link ICalGLib.Unknowntokenhandling}.
     * @returns The setting of {@link ICalGLib.Unknowntokenhandling}
     * @since 1.0
     */
    function get_unknown_token_handling_setting(): Unknowntokenhandling;

    /**
     * @since 1.0
     */
    function i_calerror_backtrace(): void;

    /**
     * Gets the value for the corresponding internal library limit.
     * @param kind The kind of limit to set
     * @returns The current value of the specified {@link ICalGLib.LimitsKind}
     * @since 4.0
     */
    function limit_get(kind: LimitsKind): number;

    /**
     * Sets the value for the corresponding internal library limit.
     * @param kind The kind of limit to set
     * @param limit The limit value. Use SIZE_MAX (i.e. maximum value of size_t) to set an unlimited value.
     * @since 4.0
     */
    function limit_set(kind: LimitsKind, limit: bigint | number): void;

    /**
     * Adds an existing buffer to the buffer ring.
     * @param buf The existing buffer to be added into the ical
     * @since 1.0
     */
    function memory_add_tmp_buffer(buf: null): void;

    /**
     * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
     * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
     * has to resize a buffer on the ring, the ring will loose track of it and you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param ch The character to be allocated
     * @since 1.0
     */
    function memory_append_char(buf: number[], pos: number[], ch: number): [number[], number[]];

    /**
     * Decodes the string as TEXT value and then appends it to the buffer. Only use them on normally allocated
     * memory, or on buffers created from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer.
     * If icalmemory_append_decoded_string has to resize a buffer on the ring, the ring will loose track of
     * it and you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param str The string to be allocated
     * @since 4.0
     */
    function memory_append_decoded_string(buf: number[], pos: number[], str: string): [number[], number[]];

    /**
     * Encodes the string as TEXT value and then appends it to the buffer. Only use them on normally allocated
     * memory, or on buffers created from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer.
     * If icalmemory_append_encoded_string has to resize a buffer on the ring, the ring will loose track of
     * it and you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param str The string to be allocated
     * @since 4.0
     */
    function memory_append_encoded_string(buf: number[], pos: number[], str: string): [number[], number[]];

    /**
     * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
     * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
     * has to resize a buffer on the ring, the ring will loose track of it and you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param str The string to be allocated
     * @since 1.0
     */
    function memory_append_string(buf: number[], pos: number[], str: string): [number[], number[]];

    /**
     * Frees the buffer.
     * @param buf The buffer to be freed
     * @since 1.0
     */
    function memory_free_buffer(buf: null): void;

    /**
     * Creates a new buffer with target size. The caller should deallocate it when necessary.
     * @param size The size of the new buffer to be created
     * @returns The newly created buffer with the target size.
     * @since 1.0
     */
    function memory_new_buffer(size: bigint | number): null;

    /**
     * Resizes the buffer to the target size.
     * @param buf The buffer needs to be resized
     * @param size The target size the buffer to be resized to
     * @returns The buffer after being resized.
     * @since 1.0
     */
    function memory_resize_buffer(buf: null, size: bigint | number): null;

    /**
     * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
     * that strdup is undeclared.
     * @param s The string to be cloned
     * @returns The cloned string.
     * @since 1.0
     */
    function memory_strdup(s: string): string;

    /**
     * Creates a buffer with target size.
     * @param size The size of the buffer to be created
     * @returns The newly created buffer
     * @since 1.0
     */
    function memory_tmp_buffer(size: bigint | number): null;

    /**
     * Like strdup, but the buffer is on the ring.
     * @param str The string to be copied
     * @returns The new copy of the `str`.
     * @since 1.0
     */
    function memory_tmp_copy(str: string): string;

    /**
     * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
     * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
     * into local time before using them.
     * @param rule The rule of the recurrence
     * @param start The start seconds past the POSIX epoch
     * @param count The number of elements to be filled up in the `array`
     * @returns If successful, return the array. NULL if failed.
     * @since 1.0
     */
    function recur_expand_recurrence(rule: string, start: bigint | number, count: number): number[];

    /**
     * Returns the current behaviour what to do when an RRULE is invalid.
     * @returns The current setting
     * @since 4.0
     */
    function recur_get_invalid_rrule_handling_setting(): InvalidRruleHandling;

    /**
     * Sets what to do when an invalid RRULE is recognized.
     * @param value the setting
     * @since 4.0
     */
    function recur_set_invalid_rrule_handling_setting(value: InvalidRruleHandling): void;

    /**
     * Returns the code for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The code for a request status
     * @since 1.0
     */
    function request_status_code(stat: RequestStatus): string;

    /**
     * Returns the descriptive text for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be translated
     * @returns The description of the `stat`
     * @since 1.0
     */
    function request_status_desc(stat: RequestStatus): string;

    /**
     * Returns a request status for major/minor status numbers.
     * @param major The major number
     * @param minor The minor number
     * @returns The corresponding {@link ICalGLib.RequestStatus}
     * @since 1.0
     */
    function request_status_from_num(major: number, minor: number): RequestStatus;

    /**
     * Returns the major number for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The major number for a request status
     * @since 1.0
     */
    function request_status_major(stat: RequestStatus): number;

    /**
     * Returns the minor number for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The minor number for a request status
     * @since 1.0
     */
    function request_status_minor(stat: RequestStatus): number;

    /**
     * Checks whether the {@link ICalGLib.Component} is valid.
     * @param comp The component to be checked
     * @returns Whether the `comp` is valid.
     * @since 1.0
     */
    function restriction_check(comp: Component): number;

    /**
     * Compares the kind of restriction and the count to determine whether it is valid.
     * @param restr The restriction kind
     * @param count The number of restrictions
     * @returns Whether it is valid or not. -1 indicates invalid or more analysis. 1 indicates pass and 0 or 2+ indicates fail.
     * @since 1.0
     */
    function restriction_compare(restr: RestrictionKind, count: number): number;

    /**
     * Sets {@link ICalGLib.Unknowntokenhandling}.
     * @param newSetting A {@link ICalGLib.Unknowntokenhandling}
     * @since 1.0
     */
    function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void;

    /**
     * Converts an error code into its text representation.
     * @param err error code
     * @returns Text representation of the `err` code.
     * @since 4.0
     */
    function vcard_parser_errstr(err: number): string;

    /**
     * Parses the vCard string `str` and returns an {@link ICalGLib.VcardComponent}, or `null` when the parse failed.
     * @param str A vCard string to parse
     * @returns A newly created {@link ICalGLib.VcardComponent}, or `null` on error.
     * @since 4.0
     */
    function vcard_parser_parse_string(str: string): VcardComponent | null;

    /**
     * Checks whether the `comp` is valid.
     * @param comp The component to be checked
     * @returns Whether the `comp` is valid.
     * @since 1.0
     */
    function vcard_restriction_check(comp: VcardComponent): number;

    /**
     * Checks if the given `count` is in accordance with the given restriction, `restr`.
     * @param restr The restriction kind
     * @param count The number of restrictions
     * @returns 1 if the restriction is met, 0 if not.
     * @since 1.0
     */
    function vcard_restriction_compare(restr: VcardRestrictionKind, count: number): number;

    /**
     * @gir-type Callback
     */
    interface ComponentForeachRecurrenceFunc {
        (comp: Component, span: TimeSpan): void;
    }

    /**
     * @gir-type Callback
     */
    interface ComponentForeachTZIDFunc {
        (param: Parameter): void;
    }

    /**
     * @gir-type Callback
     */
    interface ParserLineGenFunc {
        (bytes: number[]): string;
    }

    namespace Array {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalArray instance.
     * @gir-type Class
     */
    class Array extends Object {
        static $gtype: GObject.GType<Array>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Array.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Array.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Array.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Array.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Array.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a deep copy of {@link ICalGLib.Array} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.Array} with the same value as the `array`
         */
        copy(): Array;

        /**
         * Removes the element at the `position` from the array.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: number): void;

        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }


    namespace Attach {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalAttach instance.
     * @gir-type Class
     */
    class Attach extends Object {
        static $gtype: GObject.GType<Attach>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attach.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Attach.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Attach;

        static new_from_data(data: string, free_fn: GLib.Func | null): Attach;

        static new_from_url(url: string): Attach;

        // Signals
        /** @signal */
        connect<K extends keyof Attach.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Attach.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Attach.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Attach.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the data, if the {@link ICalGLib.Attach} is built from the data.
         * @returns The data component of the `attach`. `null` if it is built from url or there is an error.
         */
        get_data(): string | null;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;

        /**
         * Checks whether the {@link ICalGLib.Attach} is built from url.
         * @returns true if the attachment is a url; false otherwise
         */
        get_is_url(): boolean;

        /**
         * Gets the url, if the {@link ICalGLib.Attach} is built from the url.
         * @returns The url component of the `attach`. `null` if it is built from data or there is an error.
         */
        get_url(): string | null;
    }


    namespace CompIter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalCompIter instance.
     * @gir-type Class
     */
    class CompIter extends Object {
        static $gtype: GObject.GType<CompIter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompIter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompIter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the current {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.Component}
         */
        deref(): Component;

        /**
         * @returns true if a valid iterator; false otherwise.
         */
        is_valid(): boolean;

        /**
         * Gets the next {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.Component}
         */
        next(): Component;

        /**
         * Gets the prior {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.Component}
         */
        prior(): Component;
    }


    namespace Component {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalComponent instance.
     * @gir-type Class
     */
    class Component extends Object {
        static $gtype: GObject.GType<Component>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Component.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: ComponentKind): Component;

        static new_from_string(str: string): Component;

        static new_iana(iana_name: string): Component;

        static new_participant(): Component;

        static new_vagenda(): Component;

        static new_valarm(): Component;

        static new_vavailability(): Component;

        static new_vcalendar(): Component;

        static new_vevent(): Component;

        static new_vfreebusy(): Component;

        static new_vjournal(): Component;

        static new_vlocation(): Component;

        static new_vpatch(): Component;

        static new_vpoll(): Component;

        static new_vquery(): Component;

        static new_vreply(): Component;

        static new_vresource(): Component;

        static new_vtimezone(): Component;

        static new_vtodo(): Component;

        static new_vvoter(): Component;

        static new_x(x_name: string): Component;

        static new_xavailable(): Component;

        static new_xdaylight(): Component;

        static new_xpatch(): Component;

        static new_xstandard(): Component;

        static new_xvote(): Component;

        // Signals
        /** @signal */
        connect<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Component.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to a {@link ICalGLib.ComponentKind}.
         * @param string A string
         */
        static kind_from_string(string: string): ComponentKind;

        /**
         * Checks if a {@link ICalGLib.ComponentKind} is valid.
         * @param kind A {@link ICalGLib.ComponentKind}
         */
        static kind_is_valid(kind: ComponentKind): boolean;

        /**
         * Converts a {@link ICalGLib.ComponentKind} to a string.
         * @param kind A {@link ICalGLib.ComponentKind}
         */
        static kind_to_string(kind: ComponentKind): string;

        // Methods
        /**
         * Adds a {@link ICalGLib.Component} into another {@link ICalGLib.Component} as a child component.
         * @param child A child {@link ICalGLib.Component}
         */
        add_component(child: Component): void;

        /**
         * Adds an {@link ICalGLib.Property} into {@link ICalGLib.Component}.
         * @param property An {@link ICalGLib.Property}
         */
        add_property(property: Property): void;

        /**
         * Converts a {@link ICalGLib.Component} to a string.
         * @returns The string representation of {@link ICalGLib.Component}.
         */
        as_ical_string(): string;

        /**
         * Gets the {@link ICalGLib.CompIter} pointing to the first child {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns A {@link ICalGLib.CompIter}
         */
        begin_component(kind: ComponentKind): CompIter;

        /**
         * Gets the {@link ICalGLib.PropIter} pointing to the first property of type `kind` in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns A {@link ICalGLib.PropIter}
         */
        begin_property(kind: PropertyKind): PropIter;

        /**
         * Checks if the {@link ICalGLib.Component} has restrictions.
         * @returns If `comp` has restrictions
         */
        check_restrictions(): boolean;

        /**
         * Deeply clone a {@link ICalGLib.Component}.
         * @returns The newly deeply cloned {@link ICalGLib.Component}.
         */
        clone(): Component;

        /**
         * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
         */
        convert_errors(): void;

        /**
         * Counts the child {@link ICalGLib.Component} with the target kind in the parent one.
         * @param kind The target {@link ICalGLib.ComponentKind}
         * @returns The count of child {@link ICalGLib.Component} in the parent one.
         */
        count_components(kind: ComponentKind): number;

        /**
         * Counts the number of errors in {@link ICalGLib.Component}.
         * @returns The count of errors.
         */
        count_errors(): number;

        /**
         * Counts the number of {@link ICalGLib.Property} in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The number of {@link ICalGLib.Property}.
         */
        count_properties(kind: PropertyKind): number;

        /**
         * Gets the {@link ICalGLib.CompIter} pointing to the end child {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns A {@link ICalGLib.CompIter}
         */
        end_component(kind: ComponentKind): CompIter;

        /**
         * Cycles through all recurrences of an event. This function will call the specified callback function for
         * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
         * that are specified as an EXDATE or an EXRULE.
         * @param start Ignore timespans before this
         * @param end Ignore timespans after this
         * @param callback Function called for each timespan within the range
         */
        foreach_recurrence(start: Time, end: Time, callback: ComponentForeachRecurrenceFunc): void;

        /**
         * Applies the same manipulation on every tzid in {@link ICalGLib.Component}.
         * @param callback The callback function
         */
        foreach_tzid(callback: ComponentForeachTZIDFunc): void;

        /**
         * Gets the comment of the {@link ICalGLib.Component}.
         * @returns The comment of `comp`.
         */
        get_comment(): string;

        /**
         * Returns the name of the `component` as string.
         * @returns name of the `component`
         */
        get_component_name(): string;

        /**
         * Gets the current {@link ICalGLib.Component} in {@link ICalGLib.Component}.
         * @returns The current {@link ICalGLib.Component}.
         */
        get_current_component(): Component;

        /**
         * Gets the current {@link ICalGLib.Property} in {@link ICalGLib.Component}.
         * @returns The current {@link ICalGLib.Property}.
         */
        get_current_property(): Property;

        /**
         * Gets the description of the {@link ICalGLib.Component}.
         * @returns The description of `comp`.
         */
        get_description(): string;

        /**
         * Gets the dtend of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtend(): Time;

        /**
         * Gets the dtstamp of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtstamp(): Time;

        /**
         * Gets the dtstart of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtstart(): Time;

        /**
         * Gets the due of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_due(): Time;

        /**
         * Gets the duration of the {@link ICalGLib.Component}.
         * @returns An {@link ICalGLib.Duration}.
         */
        get_duration(): Duration;

        /**
         * Gets the first {@link ICalGLib.Component} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns The first {@link ICalGLib.Component}.
         */
        get_first_component(kind: ComponentKind): Component | null;

        /**
         * Gets the first {@link ICalGLib.Property} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The first {@link ICalGLib.Property}.
         */
        get_first_property(kind: PropertyKind): Property | null;

        /**
         * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
         * @returns A reference to the first VEVENT, VTODO or VJOURNAL
         */
        get_first_real_component(): Component;

        /**
         * Returns the IANA name of the `component` as string, or `null`.
         * @returns IANA name of the `component`, or `null`, when it's not an IANA component
         */
        get_iana_name(): string | null;

        /**
         * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
         * @returns The first VEVENT, VTODO or VJOURNAL sub-component.
         */
        get_inner(): Component | null;

        /**
         * Gets the location of the {@link ICalGLib.Component}.
         * @returns The location of `comp`.
         */
        get_location(): string;

        /**
         * Gets the method of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.PropertyMethod}.
         */
        get_method(): PropertyMethod;

        /**
         * Gets the next {@link ICalGLib.Component} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns The next {@link ICalGLib.Component}.
         */
        get_next_component(kind: ComponentKind): Component | null;

        /**
         * Gets the next {@link ICalGLib.Property} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The next {@link ICalGLib.Property}.
         */
        get_next_property(kind: PropertyKind): Property | null;

        /**
         * Gets the parent component of the `component`.
         * @returns The parent {@link ICalGLib.Component} of the `component`.
         */
        get_parent(): Component | null;

        /**
         * Gets the recurrenceid of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_recurrenceid(): Time;

        /**
         * Gets the relcalid of the {@link ICalGLib.Component}.
         * @returns The relcalid of `comp`.
         */
        get_relcalid(): string;

        /**
         * Gets the sequence of the {@link ICalGLib.Component}.
         * @returns The sequence of `comp`.
         */
        get_sequence(): number;

        /**
         * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
         * @returns A {@link ICalGLib.TimeSpan}.
         */
        get_span(): TimeSpan;

        /**
         * Returns the property status of the {@link ICalGLib.Component}. ICAL_STATUS_NONE is returned if a problem parsing
         * the component was detected.
         * @returns A {@link ICalGLib.PropertyStatus}.
         */
        get_status(): PropertyStatus;

        /**
         * Gets the summary of the {@link ICalGLib.Component}.
         * @returns The summary of `comp`.
         */
        get_summary(): string;

        /**
         * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
         * @param tzid A string representing timezone
         * @returns A {@link ICalGLib.Timezone}.
         */
        get_timezone(tzid: string): Timezone | null;

        /**
         * Gets the uid of the {@link ICalGLib.Component}.
         * @returns The uid of `comp`.
         */
        get_uid(): string;

        /**
         * Returns the X (custom) name of the `component` as string, or `null`.
         * @returns X (custom) name of the `component`, or `null`, when it's not a X component
         */
        get_x_name(): string | null;

        /**
         * Checks whether {@link ICalGLib.Component} is valid.
         * @returns true if yes, false if not.
         */
        is_valid(): boolean;

        /**
         * Gets the type of {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.ComponentKind}.
         */
        isa(): ComponentKind;

        /**
         * Checks whether the native part of {@link ICalGLib.Component} is icalcomponent.
         * @returns true if yes, false if not.
         */
        isa_component(): boolean;

        /**
         * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
         * TZIDs. comp_to_merge will no longer exist after calling this function.
         * @param comp_to_merge A {@link ICalGLib.Component}. After merged it will not exist any more.
         */
        merge_component(comp_to_merge: Component): void;

        /**
         * Normalizes (reorders and sorts the properties) the `component`.
         */
        normalize(): void;

        /**
         * Removes a child {@link ICalGLib.Component} from another {@link ICalGLib.Component}.
         * @param child A child {@link ICalGLib.Component}
         */
        remove_component(child: Component): void;

        /**
         * Removes {@link ICalGLib.Property} from {@link ICalGLib.Component}. Caution: The compare is based on address. So you must use
         * the original {@link ICalGLib.Property} as the target.
         * @param property A {@link ICalGLib.Property}
         */
        remove_property(property: Property): void;

        /**
         * Removes all properties of that kind in the {@link ICalGLib.Component}.
         * @param kind The {@link ICalGLib.PropertyKind} to be removed
         */
        remove_property_by_kind(kind: PropertyKind): void;

        /**
         * Sets the comment of the {@link ICalGLib.Component}.
         * @param v A string representing comment
         */
        set_comment(v: string): void;

        /**
         * Sets the description of the {@link ICalGLib.Component}.
         * @param v A string representing description
         */
        set_description(v: string): void;

        /**
         * Sets the dtend of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtend(v: Time): void;

        /**
         * Sets the dtstamp of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtstamp(v: Time): void;

        /**
         * Sets the dtstart of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtstart(v: Time): void;

        /**
         * Sets the due of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_due(v: Time): void;

        /**
         * Sets the duration of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Duration}
         */
        set_duration(v: Duration): void;

        /**
         * Sets the IANA name of the `component`.
         * @param iana_name an IANA name for the `component`
         */
        set_iana_name(iana_name: string): void;

        /**
         * Sets the location of the {@link ICalGLib.Component}.
         * @param v A string representing location
         */
        set_location(v: string): void;

        /**
         * Sets the method of the {@link ICalGLib.Component}.
         * @param method A {@link ICalGLib.PropertyMethod}
         */
        set_method(method: PropertyMethod): void;

        /**
         * Sets the `parent` {@link ICalGLib.Component} of the specified `component`.
         * @param parent An {@link ICalGLib.Component}, a new parent
         */
        set_parent(parent: Component | null): void;

        /**
         * Sets the recurrenceid of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_recurrenceid(v: Time): void;

        /**
         * Sets the relcalid of the {@link ICalGLib.Component}.
         * @param v A string representing relcalid
         */
        set_relcalid(v: string): void;

        /**
         * Sets the sequence of the {@link ICalGLib.Component}.
         * @param v The sequence number
         */
        set_sequence(v: number): void;

        /**
         * Sets the status of the {@link ICalGLib.Component}.
         * @param status A {@link ICalGLib.PropertyStatus}
         */
        set_status(status: PropertyStatus): void;

        /**
         * Sets the summary of the {@link ICalGLib.Component}.
         * @param v A string representing summary
         */
        set_summary(v: string): void;

        /**
         * Sets the uid of the {@link ICalGLib.Component}.
         * @param v A string representing uid
         */
        set_uid(v: string): void;

        /**
         * Sets an X (custom) name of the `component`.
         * @param xname an X (custom) name for the `component`
         */
        set_x_name(xname: string): void;

        /**
         * Removes all X-LIC-ERROR properties.
         */
        strip_errors(): void;
    }


    namespace Datetimeperiod {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalDatetimeperiod instance.
     * @gir-type Class
     */
    class Datetimeperiod extends Object {
        static $gtype: GObject.GType<Datetimeperiod>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Datetimeperiod.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Datetimeperiod.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Datetimeperiod;

        // Signals
        /** @signal */
        connect<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Datetimeperiod.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Datetimeperiod.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the period attribute of {@link ICalGLib.Datetimeperiod}.
         * @returns The period attribute of `dtp`.
         */
        get_period(): Period;

        /**
         * Gets the time attribute of {@link ICalGLib.Datetimeperiod}.
         * @returns The time attribute of `dtp`.
         */
        get_time(): Time;

        /**
         * Sets the period attribute of {@link ICalGLib.Datetimeperiod}.
         * @param period The period attribute of `dtp`
         */
        set_period(period: Period): void;

        /**
         * Sets the time attribute of {@link ICalGLib.Datetimeperiod}.
         * @param time The time attribute of `dtp`
         */
        set_time(time: Time): void;
    }


    namespace Duration {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalDuration instance.
     * @gir-type Class
     */
    class Duration extends Object {
        static $gtype: GObject.GType<Duration>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Duration.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Duration.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_bad_duration(): Duration;

        static new_from_seconds(t: number): Duration;

        static new_from_string(str: string): Duration;

        static new_null_duration(): Duration;

        // Signals
        /** @signal */
        connect<K extends keyof Duration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Duration.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Duration.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Duration.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Extends a time duration.
         * @param t A {@link ICalGLib.Time} to be operated on
         * @param d A {@link ICalGLib.Duration} as the difference
         */
        static extend(t: Time, d: Duration): Time;

        /**
         * Creates a duration between two time endpoints.
         * @param t1 The subtracted {@link ICalGLib.Time}
         * @param t2 The subtracting {@link ICalGLib.Time}
         */
        static from_times(t1: Time, t2: Time): Duration;

        // Methods
        /**
         * Converts the {@link ICalGLib.Duration} to the representation in string
         * @returns The duration in string
         */
        as_ical_string(): string;

        /**
         * Extracts the duration in seconds from an {@link ICalGLib.Duration}. Does not consider negative durations. Does not
         * support days and weeks.
         * @returns The duration in second
         */
        as_seconds(): number;

        /**
         * Extracts the duration in seconds from an {@link ICalGLib.Duration} on a continuous timeline with 24-hour days. Supports
         * days, weeks, and negative durations.
         * @returns The duration in seconds
         */
        as_utc_seconds(): number;

        /**
         * Gets the days of {@link ICalGLib.Duration}.
         * @returns The days.
         */
        get_days(): number;

        /**
         * Gets the hours of {@link ICalGLib.Duration}.
         * @returns The hours.
         */
        get_hours(): number;

        /**
         * Gets the minutes of {@link ICalGLib.Duration}.
         * @returns The minutes.
         */
        get_minutes(): number;

        /**
         * Gets the seconds of {@link ICalGLib.Duration}.
         * @returns The seconds.
         */
        get_seconds(): number;

        /**
         * Gets the weeks of {@link ICalGLib.Duration}.
         * @returns The weeks.
         */
        get_weeks(): number;

        /**
         * Checks whether the {@link ICalGLib.Duration} is the bad_duration.
         * @returns true if `duration` is the bad_duration, false if not.
         */
        is_bad_duration(): boolean;

        /**
         * Gets the is_neg of {@link ICalGLib.Duration}.
         * @returns The is_neg.
         */
        is_neg(): boolean;

        /**
         * Checks whether the {@link ICalGLib.Duration} is the null_duration.
         * @returns true if `duration` is the null_duration, false if not.
         */
        is_null_duration(): boolean;

        /**
         * Create a normalized duration from another duration.
         * @returns A normalized {@link ICalGLib.Duration}.
         */
        normalize(): Duration;

        /**
         * Sets the days of {@link ICalGLib.Duration}.
         * @param days The days
         */
        set_days(days: number): void;

        /**
         * Sets the hours of {@link ICalGLib.Duration}.
         * @param hours The hours
         */
        set_hours(hours: number): void;

        /**
         * Sets the is_neg of {@link ICalGLib.Duration}.
         * @param is_neg The is_neg
         */
        set_is_neg(is_neg: boolean): void;

        /**
         * Sets the minutes of {@link ICalGLib.Duration}.
         * @param minutes The minutes
         */
        set_minutes(minutes: number): void;

        /**
         * Sets the seconds of {@link ICalGLib.Duration}.
         * @param seconds The seconds
         */
        set_seconds(seconds: number): void;

        /**
         * Sets the weeks of {@link ICalGLib.Duration}.
         * @param weeks The weeks
         */
        set_weeks(weeks: number): void;
    }


    namespace EnumArray {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalEnumArray instance.
     * @gir-type Class
     */
    class EnumArray extends Object {
        static $gtype: GObject.GType<EnumArray>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnumArray.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnumArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](increment_size: number): EnumArray;

        // Signals
        /** @signal */
        connect<K extends keyof EnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnumArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a deep copy of {@link ICalGLib.EnumArray} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.EnumArray} with the same value as the `array`
         */
        clone(): EnumArray;

        /**
         * Removes the element at the `position` from the array.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: bigint | number): void;

        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }


    namespace Geo {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalGeo instance.
     * @gir-type Class
     */
    class Geo extends Object {
        static $gtype: GObject.GType<Geo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Geo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Geo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](lat: number, lon: number): Geo;

        // Signals
        /** @signal */
        connect<K extends keyof Geo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Geo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Geo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Geo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a new {@link ICalGLib.Geo}, copy of `geo`.
         * @returns The newly created {@link ICalGLib.Geo}, copy of `geo`.
         */
        clone(): Geo;

        /**
         * Gets the latitude of {@link ICalGLib.Geo}.
         * @returns The latitude.
         */
        get_lat(): number;

        /**
         * Gets the longitude of {@link ICalGLib.Geo}.
         * @returns The longitude.
         */
        get_lon(): number;

        /**
         * Sets the latitude of {@link ICalGLib.Geo}.
         * @param lat The latitude
         */
        set_lat(lat: number): void;

        /**
         * Sets the longitude of {@link ICalGLib.Geo}.
         * @param lon The longitude
         */
        set_lon(lon: number): void;
    }


    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            always_destroy: boolean;
            alwaysDestroy: boolean;
            is_global_memory: boolean;
            isGlobalMemory: boolean;
            "native": never;
            native_destroy_func: never;
            nativeDestroyFunc: never;
            owner: GObject.Object;
        }
    }

    /**
     * This is an ICalObject instance struct.
     * @gir-type Class
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties
        /**
         * Whether free the native libical structure on {@link ICalGLib.Object}'s finalize even
         * if the object has set an owner.
         * @since 3.0.11
         * @default false
         */
        get always_destroy(): boolean;
        set always_destroy(val: boolean);

        /**
         * Whether free the native libical structure on {@link ICalGLib.Object}'s finalize even
         * if the object has set an owner.
         * @since 3.0.11
         * @default false
         */
        get alwaysDestroy(): boolean;
        set alwaysDestroy(val: boolean);

        /**
         * Whether the native libical structure is from a global shared memory.
         * If TRUE, then it is not freed on {@link ICalGLib.Object}'s finalize.
         * @construct-only
         * @default false
         */
        get is_global_memory(): boolean;

        /**
         * Whether the native libical structure is from a global shared memory.
         * If TRUE, then it is not freed on {@link ICalGLib.Object}'s finalize.
         * @construct-only
         * @default false
         */
        get isGlobalMemory(): boolean;

        /**
         * The native libical structure for this ICalObject.
         * @construct-only
         */
        get "native"(): null;

        /**
         * GDestroyNotify function to use to destroy the native libical pointer.
         */
        get native_destroy_func(): null;
        set native_destroy_func(val: never);

        /**
         * GDestroyNotify function to use to destroy the native libical pointer.
         */
        get nativeDestroyFunc(): null;
        set nativeDestroyFunc(val: never);

        /**
         * Owner of the native libical structure. If set, then it is
         * responsible for a free of the native libical structure.
         */
        get owner(): GObject.Object;
        set owner(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Frees all global objects. Any references to them are invalidated
         * by this call, unless they had been `g_object_ref()`-ed manually.
         */
        static free_global_objects(): void;

        // Methods
        /**
         * Adds a `depender` into the list of objects which should not be destroyed before
         * this `iobject`. It's usually used for cases where the `iobject` uses native libical
         * structure from the `depender`. The `depender` is referenced. It's illegal to try
         * to add one `depender` multiple times.
         * @param depender a {@link GObject.Object} depender
         */
        add_depender(depender: GObject.Object): void;

        /**
         * Obtain the `ICalObject`::always-destroy property value.
         * @returns Whether the native libical structure is freed even when an owner is set.
         */
        get_always_destroy(): boolean;

        /**
         * Obtains whether the native libical structure is a global shared memory,
         * thus should not be destroyed. This can be set only during construction time.
         * @returns Whether the native libical structure is a global shared memory.
         */
        get_is_global_memory(): boolean;

        /**
         * Obtain current owner of the native libical structure. The returned pointer,
         * if not NULL, is referenced for thread safety. Unref it with g_object_unref
         * when done with it.
         * @returns Current owner of the libical    native structure. Returns `null` when there is no owner.
         */
        ref_owner<T = GObject.Object>(): T;

        /**
         * Removes a `depender` from the list of objects which should not be destroyed before
         * this `iobject`, previously added with `i_cal_object_add_depender()`. It's illegal to try
         * to remove the `depender` which is not in the internal list.
         * @param depender a {@link GObject.Object} depender
         */
        remove_depender(depender: GObject.Object): void;

        /**
         * Unref and remove the owner.
         */
        remove_owner(): void;

        /**
         * Sets the `ICalObject`::always-destroy property value. When `true`, the native
         * libical structure is always freed, even when an owner of the `iobject` is set.
         * @param value value to set
         */
        set_always_destroy(value: boolean): void;

        /**
         * Sets a function to be used to destroy the native libical structure.
         */
        set_native_destroy_func(): void;

        /**
         * Sets an owner of the native libical structure, that is an object responsible
         * for a destroy of the native libical structure.
         * @param owner Owner of the native libical structure
         */
        set_owner(owner: GObject.Object): void;

        /**
         * Obtain native libical structure pointer associated with this `iobject` and sets the one
         * at `iobject` to NULL, thus it's invalid since now on.
         * @returns Native libical structure pointer associated with this `iobject`.
         */
        steal_native(): null;
    }


    namespace ParamIter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalParamIter instance.
     * @gir-type Class
     */
    class ParamIter extends Object {
        static $gtype: GObject.GType<ParamIter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ParamIter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ParamIter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ParamIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ParamIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ParamIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ParamIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ParamIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ParamIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the current {@link ICalGLib.Parameter} pointed by {@link ICalGLib.ParamIter}.
         * @returns A {@link ICalGLib.Parameter}
         */
        deref(): Parameter;

        /**
         * Gets the next {@link ICalGLib.Parameter} pointed by {@link ICalGLib.ParamIter}.
         * @returns A {@link ICalGLib.Parameter}
         */
        next(): Parameter;
    }


    namespace Parameter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalParameter instance.
     * @gir-type Class
     */
    class Parameter extends Object {
        static $gtype: GObject.GType<Parameter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parameter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Parameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](v: ParameterKind): Parameter;

        static new_actionparam(value: ParameterAction): Parameter;

        static new_altrep(value: string): Parameter;

        static new_charset(value: string): Parameter;

        static new_cn(value: string): Parameter;

        static new_cutype(value: ParameterCutype): Parameter;

        static new_delegatedfrom(value: string): Parameter;

        static new_delegatedfrom_list(value: StrArray): Parameter;

        static new_delegatedto(value: string): Parameter;

        static new_delegatedto_list(value: StrArray): Parameter;

        static new_derived(value: ParameterDerived): Parameter;

        static new_dir(value: string): Parameter;

        static new_display(value: ParameterDisplay): Parameter;

        static new_display_list(value: EnumArray): Parameter;

        static new_email(value: string): Parameter;

        static new_enable(value: ParameterEnable): Parameter;

        static new_encoding(value: ParameterEncoding): Parameter;

        static new_fbtype(value: ParameterFbtype): Parameter;

        static new_feature(value: ParameterFeature): Parameter;

        static new_feature_list(value: EnumArray): Parameter;

        static new_filename(value: string): Parameter;

        static new_fmttype(value: string): Parameter;

        static new_from_string(value: string): Parameter;

        static new_from_value_string(kind: ParameterKind, value: string): Parameter;

        static new_gap(value: Duration): Parameter;

        static new_iana(value: string): Parameter;

        static new_id(value: string): Parameter;

        static new_label(value: string): Parameter;

        static new_language(value: string): Parameter;

        static new_latency(value: string): Parameter;

        static new_linkrel(value: string): Parameter;

        static new_local(value: ParameterLocal): Parameter;

        static new_localize(value: string): Parameter;

        static new_managedid(value: string): Parameter;

        static new_member(value: string): Parameter;

        static new_member_list(value: StrArray): Parameter;

        static new_modified(value: string): Parameter;

        static new_options(value: string): Parameter;

        static new_order(value: number): Parameter;

        static new_partstat(value: ParameterPartstat): Parameter;

        static new_patchaction(value: ParameterPatchaction): Parameter;

        static new_publiccomment(value: string): Parameter;

        static new_range(value: ParameterRange): Parameter;

        static new_reason(value: string): Parameter;

        static new_related(value: ParameterRelated): Parameter;

        static new_reltype(value: ParameterReltype): Parameter;

        static new_required(value: ParameterRequired): Parameter;

        static new_response(value: number): Parameter;

        static new_role(value: ParameterRole): Parameter;

        static new_rsvp(value: ParameterRsvp): Parameter;

        static new_scheduleagent(value: ParameterScheduleagent): Parameter;

        static new_scheduleforcesend(value: ParameterScheduleforcesend): Parameter;

        static new_schedulestatus(value: string): Parameter;

        static new_schema(value: string): Parameter;

        static new_sentby(value: string): Parameter;

        static new_size(value: string): Parameter;

        static new_stayinformed(value: ParameterStayinformed): Parameter;

        static new_substate(value: ParameterSubstate): Parameter;

        static new_tzid(value: string): Parameter;

        static new_value(value: ParameterValue): Parameter;

        static new_x(value: string): Parameter;

        static new_xliccomparetype(value: ParameterXliccomparetype): Parameter;

        static new_xlicerrortype(value: ParameterXlicerrortype): Parameter;

        // Signals
        /** @signal */
        connect<K extends keyof Parameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Parameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Parameter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the `value` according to RFC 6868, changing the `value` itself.
         * @param value an {@link ICalGLib.Parameter}
         */
        static decode_value(value: string): string;

        /**
         * Converts a string representation of a parameter enum to a its numeric value.
         * @param str a string enum value
         */
        static enum_from_string(str: string): number;

        /**
         * Converts an integer representation of a parameter enum to a string.
         * @param e an enum numeric value
         */
        static enum_to_string(e: number): string;

        /**
         * Converts a string to the {@link ICalGLib.ParameterKind}.
         * @param string The string representation of the {@link ICalGLib.Parameter}
         */
        static kind_from_string(string: string): ParameterKind;

        /**
         * Checks whether {@link ICalGLib.ParameterKind} is valid.
         * @param kind The {@link ICalGLib.ParameterKind}
         */
        static kind_is_valid(kind: ParameterKind): boolean;

        /**
         * Converts the {@link ICalGLib.Parameter} to the string representation.
         * @param kind The {@link ICalGLib.ParameterKind} to be converted
         */
        static kind_to_string(kind: ParameterKind): string;

        /**
         * Converts the `kind` into an {@link ICalGLib.ValueKind} and optionally returns whether the `kind` is a multivalued parameter.
         * @param kind The {@link ICalGLib.ParameterKind}
         */
        static kind_value_kind(kind: ParameterKind): [ValueKind, boolean];

        /**
         * Converts the {@link ICalGLib.ParameterValue} to {@link ICalGLib.ValueKind}.
         * @param value A {@link ICalGLib.ParameterValue}
         */
        static value_to_value_kind(value: ParameterValue): ValueKind;

        // Methods
        /**
         * Adds a string into the `self` of DELEGATEDFROM.
         * @param value the string to add into the `self`
         */
        add_delegatedfrom(value: string): void;

        /**
         * Adds a string into the `self` of DELEGATEDTO.
         * @param value the string to add into the `self`
         */
        add_delegatedto(value: string): void;

        /**
         * Adds an element.
         * @param value the {@link ICalGLib.ParameterDisplay}
         * @param x_value an X name, or `null`; when set, the `value` should a corresponding X value
         */
        add_display(value: ParameterDisplay, x_value: string | null): void;

        /**
         * Adds an element.
         * @param value the {@link ICalGLib.ParameterFeature}
         * @param x_value an X name, or `null`; when set, the `value` should a corresponding X value
         */
        add_feature(value: ParameterFeature, x_value: string | null): void;

        /**
         * Adds a string into the `self` of MEMBER.
         * @param value the string to add into the `self`
         */
        add_member(value: string): void;

        /**
         * Converts an {@link ICalGLib.Parameter} to the string representation.
         * @returns The string representation of the `parameter`.
         */
        as_ical_string(): string;

        /**
         * Deep clone a {@link ICalGLib.Parameter}.
         * @returns The newly created {@link ICalGLib.Parameter} with the same properties as the `p`.
         */
        clone(): Parameter;

        /**
         * Returns value of the ACTIONPARAM `self`
         * @returns the ACTIONPARAM value
         */
        get_actionparam(): ParameterAction;

        /**
         * Returns value of the ALTREP `self`
         * @returns the ALTREP value
         */
        get_altrep(): string;

        /**
         * Returns value of the CHARSET `self`
         * @returns the CHARSET value
         */
        get_charset(): string;

        /**
         * Returns value of the CN `self`
         * @returns the CN value
         */
        get_cn(): string;

        /**
         * Returns value of the CUTYPE `self`
         * @returns the CUTYPE value
         */
        get_cutype(): ParameterCutype;

        /**
         * Gets the value of the `self` of DELEGATEDFROM.
         * 
         * Note: this returns copy of the string array, not
         * the one stored in the `self`
         * @returns the {@link ICalGLib.StrArray} value of the `self`
         */
        get_delegatedfrom(): StrArray;

        /**
         * Returns the n-th element of the `self` of DELEGATEDFROM
         * @param position Position of the DELEGATEDFROM item to get
         * @returns n-th element of the DELEGATEDFROM `self`
         */
        get_delegatedfrom_nth(position: bigint | number): string | null;

        /**
         * Returns number of elements in the `self` of DELEGATEDFROM
         * @returns number of elements
         */
        get_delegatedfrom_size(): number;

        /**
         * Gets the value of the `self` of DELEGATEDTO.
         * 
         * Note: this returns copy of the string array, not the
         * one stored in the `self`
         * @returns the {@link ICalGLib.StrArray} value of the `self`
         */
        get_delegatedto(): StrArray;

        /**
         * Returns the n-th element of the `self` of DELEGATEDTO
         * @param position Position of the DELEGATEDTO item to get
         * @returns n-th element of the DELEGATEDTO `self`
         */
        get_delegatedto_nth(position: bigint | number): string | null;

        /**
         * Returns number of elements in the `self` of DELEGATEDTO
         * @returns number of elements
         */
        get_delegatedto_size(): number;

        /**
         * Returns value of the DERIVED `self`
         * @returns the DERIVED value
         */
        get_derived(): ParameterDerived;

        /**
         * Returns value of the DIR `self`
         * @returns the DIR value
         */
        get_dir(): string;

        /**
         * Gets the value of the `self` of DISPLAY.
         * 
         * Note: this returns copy of the array, not the one stored
         * in the `self`
         * @returns the {@link ICalGLib.EnumArray} value of the `self`
         */
        get_display(): EnumArray;

        /**
         * Returns the n-th element of the `self` of DISPLAY
         * @param position the position of the element
         * @returns the n-th element
         */
        get_display_nth(position: bigint | number): ParameterDisplay;

        /**
         * Returns number of elements in the `self` of DISPLAY
         * @returns number of elements
         */
        get_display_size(): number;

        /**
         * Returns value of the EMAIL `self`
         * @returns the EMAIL value
         */
        get_email(): string;

        /**
         * Returns value of the ENABLE `self`
         * @returns the ENABLE value
         */
        get_enable(): ParameterEnable;

        /**
         * Returns value of the ENCODING `self`
         * @returns the ENCODING value
         */
        get_encoding(): ParameterEncoding;

        /**
         * Returns value of the FBTYPE `self`
         * @returns the FBTYPE value
         */
        get_fbtype(): ParameterFbtype;

        /**
         * Gets the value of the `self` of FEATURE.
         * 
         * Note: this returns copy of the array, not the one stored
         * in the `self`
         * @returns the {@link ICalGLib.EnumArray} value of the `self`
         */
        get_feature(): EnumArray;

        /**
         * Returns the n-th element of the `self` of FEATURE
         * @param position the position of the element
         * @returns the n-th element
         */
        get_feature_nth(position: bigint | number): ParameterFeature;

        /**
         * Returns number of elements in the `self` of FEATURE
         * @returns number of elements
         */
        get_feature_size(): number;

        /**
         * Returns value of the FILENAME `self`
         * @returns the FILENAME value
         */
        get_filename(): string;

        /**
         * Returns value of the FMTTYPE `self`
         * @returns the FMTTYPE value
         */
        get_fmttype(): string;

        /**
         * Returns value of the GAP `self`
         * @returns the GAP value
         */
        get_gap(): Duration | null;

        /**
         * Returns value of the IANA `self`
         * @returns the IANA value
         */
        get_iana(): string;

        /**
         * Gets the iana_name property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_iana_name(): string | null;

        /**
         * Gets the iana_value property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_iana_value(): string | null;

        /**
         * Returns value of the ID `self`
         * @returns the ID value
         */
        get_id(): string;

        /**
         * Returns value of the LABEL `self`
         * @returns the LABEL value
         */
        get_label(): string;

        /**
         * Returns value of the LANGUAGE `self`
         * @returns the LANGUAGE value
         */
        get_language(): string;

        /**
         * Returns value of the LATENCY `self`
         * @returns the LATENCY value
         */
        get_latency(): string;

        /**
         * Returns value of the LINKREL `self`
         * @returns the LINKREL value
         */
        get_linkrel(): string;

        /**
         * Returns value of the LOCAL `self`
         * @returns the LOCAL value
         */
        get_local(): ParameterLocal;

        /**
         * Returns value of the LOCALIZE `self`
         * @returns the LOCALIZE value
         */
        get_localize(): string;

        /**
         * Returns value of the MANAGEDID `self`
         * @returns the MANAGEDID value
         */
        get_managedid(): string;

        /**
         * Gets the value of the `self` of MEMBER.
         * 
         * Note: this returns copy of the string array, not the one
         * stored in the `self`
         * @returns the {@link ICalGLib.StrArray} value of the `self`
         */
        get_member(): StrArray;

        /**
         * Returns the n-th element of the `self` of MEMBER
         * @param position Position of the MEMBER item to get
         * @returns n-th element of the MEMBER `self`
         */
        get_member_nth(position: bigint | number): string | null;

        /**
         * Returns number of elements in the `self` of MEMBER
         * @returns number of elements
         */
        get_member_size(): number;

        /**
         * Returns value of the MODIFIED `self`
         * @returns the MODIFIED value
         */
        get_modified(): string;

        /**
         * Returns value of the OPTIONS `self`
         * @returns the OPTIONS value
         */
        get_options(): string;

        /**
         * Returns value of the ORDER `self`
         * @returns the ORDER value
         */
        get_order(): number;

        /**
         * Gets the parent {@link ICalGLib.Property} of the specified {@link ICalGLib.Parameter}.
         * @returns The parent {@link ICalGLib.Property}
         */
        get_parent(): Property | null;

        /**
         * Returns value of the PARTSTAT `self`
         * @returns the PARTSTAT value
         */
        get_partstat(): ParameterPartstat;

        /**
         * Returns value of the PATCHACTION `self`
         * @returns the PATCHACTION value
         */
        get_patchaction(): ParameterPatchaction;

        /**
         * Returns value of the PUBLICCOMMENT `self`
         * @returns the PUBLICCOMMENT value
         */
        get_publiccomment(): string;

        /**
         * Returns value of the RANGE `self`
         * @returns the RANGE value
         */
        get_range(): ParameterRange;

        /**
         * Returns value of the REASON `self`
         * @returns the REASON value
         */
        get_reason(): string;

        /**
         * Returns value of the RELATED `self`
         * @returns the RELATED value
         */
        get_related(): ParameterRelated;

        /**
         * Returns value of the RELTYPE `self`
         * @returns the RELTYPE value
         */
        get_reltype(): ParameterReltype;

        /**
         * Returns value of the REQUIRED `self`
         * @returns the REQUIRED value
         */
        get_required(): ParameterRequired;

        /**
         * Returns value of the RESPONSE `self`
         * @returns the RESPONSE value
         */
        get_response(): number;

        /**
         * Returns value of the ROLE `self`
         * @returns the ROLE value
         */
        get_role(): ParameterRole;

        /**
         * Returns value of the RSVP `self`
         * @returns the RSVP value
         */
        get_rsvp(): ParameterRsvp;

        /**
         * Returns value of the SCHEDULEAGENT `self`
         * @returns the SCHEDULEAGENT value
         */
        get_scheduleagent(): ParameterScheduleagent;

        /**
         * Returns value of the SCHEDULEFORCESEND `self`
         * @returns the SCHEDULEFORCESEND value
         */
        get_scheduleforcesend(): ParameterScheduleforcesend;

        /**
         * Returns value of the SCHEDULESTATUS `self`
         * @returns the SCHEDULESTATUS value
         */
        get_schedulestatus(): string;

        /**
         * Returns value of the SCHEMA `self`
         * @returns the SCHEMA value
         */
        get_schema(): string;

        /**
         * Returns value of the SENTBY `self`
         * @returns the SENTBY value
         */
        get_sentby(): string;

        /**
         * Returns value of the SIZE `self`
         * @returns the SIZE value
         */
        get_size(): string;

        /**
         * Returns value of the STAYINFORMED `self`
         * @returns the STAYINFORMED value
         */
        get_stayinformed(): ParameterStayinformed;

        /**
         * Returns value of the SUBSTATE `self`
         * @returns the SUBSTATE value
         */
        get_substate(): ParameterSubstate;

        /**
         * Returns value of the TZID `self`
         * @returns the TZID value
         */
        get_tzid(): string;

        /**
         * Returns value of the VALUE `self`
         * @returns the VALUE value
         */
        get_value(): ParameterValue;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Returns value of the XLICCOMPARETYPE `self`
         * @returns the XLICCOMPARETYPE value
         */
        get_xliccomparetype(): ParameterXliccomparetype;

        /**
         * Returns value of the XLICERRORTYPE `self`
         * @returns the XLICERRORTYPE value
         */
        get_xlicerrortype(): ParameterXlicerrortype;

        /**
         * Gets the xname property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_xname(): string | null;

        /**
         * Gets the xvalue property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_xvalue(): string | null;

        /**
         * Checks whether native parts of two `ICalParameters` have the same name.
         * @param param2 The {@link ICalGLib.Parameter} to be checked
         * @returns true if the parameters have the same name, false or not.
         */
        has_same_name(param2: Parameter): boolean;

        /**
         * Returns whether the `param` is a multivalued parameter.
         * @returns whether the@param is a multivalued parameter
         */
        is_multivalued(): boolean;

        /**
         * Checks the type of a {@link ICalGLib.Parameter}.
         * @returns The type of the `parameter`.
         */
        isa(): ParameterKind;

        /**
         * Checks whether the native part of the {@link ICalGLib.Parameter} is of type icalparameter.
         * @returns true if the native part is of type icalparameter, false if not.
         */
        isa_parameter(): boolean;

        /**
         * Removes a string from the `self` of DELEGATEDFROM.
         * @param value the string to remove from the `self`
         */
        remove_delegatedfrom(value: string): void;

        /**
         * Removes a string from the `self` of DELEGATEDTO.
         * @param value the string to remove from the `self`
         */
        remove_delegatedto(value: string): void;

        /**
         * Removes an element with the provided value.
         * @param value the {@link ICalGLib.ParameterDisplay}
         * @param x_value an X name, or `null`; when set, the `value` should be a corresponding X value
         */
        remove_display(value: ParameterDisplay, x_value: string | null): void;

        /**
         * Removes an element with the provided value.
         * @param value the {@link ICalGLib.ParameterFeature}
         * @param x_value an X name, or `null`; when set, the `value` should be a corresponding X value
         */
        remove_feature(value: ParameterFeature, x_value: string | null): void;

        /**
         * Removes a string from the `self` of MEMBER.
         * @param value the string to remove from the `self`
         */
        remove_member(value: string): void;

        /**
         * Sets value to the ACTIONPARAM `self`
         * @param value the ACTIONPARAM value
         */
        set_actionparam(value: ParameterAction): void;

        /**
         * Sets value to the ALTREP `self`
         * @param value the ALTREP value
         */
        set_altrep(value: string): void;

        /**
         * Sets value to the CHARSET `self`
         * @param value the CHARSET value
         */
        set_charset(value: string): void;

        /**
         * Sets value to the CN `self`
         * @param value the CN value
         */
        set_cn(value: string): void;

        /**
         * Sets value to the CUTYPE `self`
         * @param value the CUTYPE value
         */
        set_cutype(value: ParameterCutype): void;

        /**
         * Sets the value of the `self` of DELEGATEDFROM.
         * 
         * Note: this uses a copy of the string array, not the
         * one stored in the `value`
         * @param value the string array value
         */
        set_delegatedfrom(value: StrArray): void;

        /**
         * Sets the value of the `self` of DELEGATEDTO.
         * 
         * Note: this uses a copy of the string array, not the
         * one stored in the `value`
         * @param value the string array value
         */
        set_delegatedto(value: StrArray): void;

        /**
         * Sets value to the DERIVED `self`
         * @param value the DERIVED value
         */
        set_derived(value: ParameterDerived): void;

        /**
         * Sets value to the DIR `self`
         * @param value the DIR value
         */
        set_dir(value: string): void;

        /**
         * Sets the value of the `self` of DISPLAY.
         * 
         * Note: this uses a copy of the array, not the one stored
         * in the `value`
         * @param value the array value
         */
        set_display(value: EnumArray): void;

        /**
         * Sets value to the EMAIL `self`
         * @param value the EMAIL value
         */
        set_email(value: string): void;

        /**
         * Sets value to the ENABLE `self`
         * @param value the ENABLE value
         */
        set_enable(value: ParameterEnable): void;

        /**
         * Sets value to the ENCODING `self`
         * @param value the ENCODING value
         */
        set_encoding(value: ParameterEncoding): void;

        /**
         * Sets value to the FBTYPE `self`
         * @param value the FBTYPE value
         */
        set_fbtype(value: ParameterFbtype): void;

        /**
         * Sets the value of the `self` of FEATURE.
         * 
         * Note: this uses a copy of the array, not the one stored
         * in the `value`
         * @param value the array value
         */
        set_feature(value: EnumArray): void;

        /**
         * Sets value to the FILENAME `self`
         * @param value the FILENAME value
         */
        set_filename(value: string): void;

        /**
         * Sets value to the FMTTYPE `self`
         * @param value the FMTTYPE value
         */
        set_fmttype(value: string): void;

        /**
         * Sets value to the GAP `self`
         * @param value the GAP value
         */
        set_gap(value: Duration): void;

        /**
         * Sets value to the IANA `self`
         * @param value the IANA value
         */
        set_iana(value: string): void;

        /**
         * Sets the iana_name property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The name to be set into the `param`
         */
        set_iana_name(v: string): void;

        /**
         * Sets the iana_value property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The value to be set into the `param`
         */
        set_iana_value(v: string): void;

        /**
         * Sets value to the ID `self`
         * @param value the ID value
         */
        set_id(value: string): void;

        /**
         * Sets value to the LABEL `self`
         * @param value the LABEL value
         */
        set_label(value: string): void;

        /**
         * Sets value to the LANGUAGE `self`
         * @param value the LANGUAGE value
         */
        set_language(value: string): void;

        /**
         * Sets value to the LATENCY `self`
         * @param value the LATENCY value
         */
        set_latency(value: string): void;

        /**
         * Sets value to the LINKREL `self`
         * @param value the LINKREL value
         */
        set_linkrel(value: string): void;

        /**
         * Sets value to the LOCAL `self`
         * @param value the LOCAL value
         */
        set_local(value: ParameterLocal): void;

        /**
         * Sets value to the LOCALIZE `self`
         * @param value the LOCALIZE value
         */
        set_localize(value: string): void;

        /**
         * Sets value to the MANAGEDID `self`
         * @param value the MANAGEDID value
         */
        set_managedid(value: string): void;

        /**
         * Sets the value of the `self` of MEMBER.
         * 
         * Note: this uses a copy of the string array, not the one
         * stored in the `value`
         * @param value the string array value
         */
        set_member(value: StrArray): void;

        /**
         * Sets value to the MODIFIED `self`
         * @param value the MODIFIED value
         */
        set_modified(value: string): void;

        /**
         * Sets value to the OPTIONS `self`
         * @param value the OPTIONS value
         */
        set_options(value: string): void;

        /**
         * Sets value to the ORDER `self`
         * @param value the ORDER value
         */
        set_order(value: number): void;

        /**
         * Sets the parent {@link ICalGLib.Property} of an {@link ICalGLib.Parameter}.
         * @param property The parent {@link ICalGLib.Property}
         */
        set_parent(property: Property | null): void;

        /**
         * Sets value to the PARTSTAT `self`
         * @param value the PARTSTAT value
         */
        set_partstat(value: ParameterPartstat): void;

        /**
         * Sets value to the PATCHACTION `self`
         * @param value the PATCHACTION value
         */
        set_patchaction(value: ParameterPatchaction): void;

        /**
         * Sets value to the PUBLICCOMMENT `self`
         * @param value the PUBLICCOMMENT value
         */
        set_publiccomment(value: string): void;

        /**
         * Sets value to the RANGE `self`
         * @param value the RANGE value
         */
        set_range(value: ParameterRange): void;

        /**
         * Sets value to the REASON `self`
         * @param value the REASON value
         */
        set_reason(value: string): void;

        /**
         * Sets value to the RELATED `self`
         * @param value the RELATED value
         */
        set_related(value: ParameterRelated): void;

        /**
         * Sets value to the RELTYPE `self`
         * @param value the RELTYPE value
         */
        set_reltype(value: ParameterReltype): void;

        /**
         * Sets value to the REQUIRED `self`
         * @param value the REQUIRED value
         */
        set_required(value: ParameterRequired): void;

        /**
         * Sets value to the RESPONSE `self`
         * @param value the RESPONSE value
         */
        set_response(value: number): void;

        /**
         * Sets value to the ROLE `self`
         * @param value the ROLE value
         */
        set_role(value: ParameterRole): void;

        /**
         * Sets value to the RSVP `self`
         * @param value the RSVP value
         */
        set_rsvp(value: ParameterRsvp): void;

        /**
         * Sets value to the SCHEDULEAGENT `self`
         * @param value the SCHEDULEAGENT value
         */
        set_scheduleagent(value: ParameterScheduleagent): void;

        /**
         * Sets value to the SCHEDULEFORCESEND `self`
         * @param value the SCHEDULEFORCESEND value
         */
        set_scheduleforcesend(value: ParameterScheduleforcesend): void;

        /**
         * Sets value to the SCHEDULESTATUS `self`
         * @param value the SCHEDULESTATUS value
         */
        set_schedulestatus(value: string): void;

        /**
         * Sets value to the SCHEMA `self`
         * @param value the SCHEMA value
         */
        set_schema(value: string): void;

        /**
         * Sets value to the SENTBY `self`
         * @param value the SENTBY value
         */
        set_sentby(value: string): void;

        /**
         * Sets value to the SIZE `self`
         * @param value the SIZE value
         */
        set_size(value: string): void;

        /**
         * Sets value to the STAYINFORMED `self`
         * @param value the STAYINFORMED value
         */
        set_stayinformed(value: ParameterStayinformed): void;

        /**
         * Sets value to the SUBSTATE `self`
         * @param value the SUBSTATE value
         */
        set_substate(value: ParameterSubstate): void;

        /**
         * Sets value to the TZID `self`
         * @param value the TZID value
         */
        set_tzid(value: string): void;

        /**
         * Sets value to the VALUE `self`
         * @param value the VALUE value
         */
        set_value(value: ParameterValue): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;

        /**
         * Sets value to the XLICCOMPARETYPE `self`
         * @param value the XLICCOMPARETYPE value
         */
        set_xliccomparetype(value: ParameterXliccomparetype): void;

        /**
         * Sets value to the XLICERRORTYPE `self`
         * @param value the XLICERRORTYPE value
         */
        set_xlicerrortype(value: ParameterXlicerrortype): void;

        /**
         * Sets the xname property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The name to be set into the `param`
         */
        set_xname(v: string): void;

        /**
         * Sets the xvalue property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The value to be set into the `param`
         */
        set_xvalue(v: string): void;
    }


    namespace Parser {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalParser instance.
     * @gir-type Class
     */
    class Parser extends Object {
        static $gtype: GObject.GType<Parser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Parser;

        // Signals
        /** @signal */
        connect<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Parser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the current parser setting how to handle CONTROL characters. `I_CAL_PARSER_CTRL_KEEP` keeps CONTROL
         * characters in content-line, `I_CAL_PARSER_CTRL_OMIT` omits CONTROL characters from content-line and `I_CAL_PARSER_CTRL_ERROR`
         * inserts an X-LIC-ERROR instead of content-line
         */
        static get_ctrl(): ParserCtrl;

        /**
         * Parses the string into a {@link ICalGLib.Component}.
         * @param str The string to be parsed
         */
        static parse_string(str: string): Component;

        /**
         * Sets the parser setting how to handle CONTROL characters. `I_CAL_PARSER_CTRL_KEEP` keeps CONTROL characters
         * in content-line, `I_CAL_PARSER_CTRL_OMIT` omits CONTROL characters from content-line and `I_CAL_PARSER_CTRL_ERROR`
         * inserts an X-LIC-ERROR instead of content-line
         * @param value an {@link ICalGLib.ParserCtrl}
         */
        static set_ctrl(value: ParserCtrl): void;

        // Methods
        /**
         * Add a line at one time into the {@link ICalGLib.Parser} until the parsing is complete and {@link ICalGLib.Component} will be
         * returned.
         * @param str A line of string representation of the {@link ICalGLib.Component}
         * @returns The complete {@link ICalGLib.Component}.
         */
        add_line(str: string | null): Component | null;

        /**
         * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
         * may be left in the list.
         * @returns The root {@link ICalGLib.Component} in `parser`.
         */
        clean(): Component | null;

        /**
         * Frees a {@link ICalGLib.Parser}.
         */
        free(): void;

        /**
         * Given a line generator function, returns a single iCal content line.
         * @param func A line generator function
         * @returns A single iCal content line.
         */
        get_line(func: ParserLineGenFunc): string;

        /**
         * Gets the state of the target parser.
         * @returns The parser state stored in the {@link ICalGLib.Parser}.
         */
        get_state(): ParserState;

        /**
         * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
         * {@link ICalGLib.Component}. The caller owns the memory. `func` is a pointer to a function that returns one content
         * line per invocation.
         * @param func The function used to parse
         * @returns The component output by the parser.
         */
        parse(func: ParserLineGenFunc): Component;
    }


    namespace Period {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalPeriod instance.
     * @gir-type Class
     */
    class Period extends Object {
        static $gtype: GObject.GType<Period>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Period.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Period.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(str: string): Period;

        static new_null_period(): Period;

        // Signals
        /** @signal */
        connect<K extends keyof Period.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Period.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Period.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Period.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Translates {@link ICalGLib.Period} to string.
         * @returns The string representation of {@link ICalGLib.Period}.
         */
        as_ical_string(): string;

        /**
         * Gets the duration from an {@link ICalGLib.Period}.
         * @returns The duration of `period`.
         */
        get_duration(): Duration;

        /**
         * Gets the end time from an {@link ICalGLib.Period}.
         * @returns The end of `period`.
         */
        get_end(): Time;

        /**
         * Gets the start time from an {@link ICalGLib.Period}.
         * @returns The start of `period`.
         */
        get_start(): Time;

        /**
         * Checks the {@link ICalGLib.Period} is null_period.
         * @returns true if yes, false if not.
         */
        is_null_period(): boolean;

        /**
         * Checks the {@link ICalGLib.Period} is valid_period.
         * @returns true if yes, false if not.
         */
        is_valid_period(): boolean;

        /**
         * Sets the duration of an {@link ICalGLib.Period}.
         * @param duration The duration of `period`
         */
        set_duration(duration: Duration): void;

        /**
         * Sets the end time of an {@link ICalGLib.Period}.
         * @param end The end of `period`
         */
        set_end(end: Time): void;

        /**
         * Sets the start time of an {@link ICalGLib.Period}.
         * @param start The start of `period`
         */
        set_start(start: Time): void;
    }


    namespace PropIter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalPropIter instance.
     * @gir-type Class
     */
    class PropIter extends Object {
        static $gtype: GObject.GType<PropIter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropIter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PropIter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PropIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropIter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PropIter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropIter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PropIter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the current {@link ICalGLib.Property} pointed by {@link ICalGLib.PropIter}.
         * @returns A {@link ICalGLib.Property}
         */
        deref(): Property;

        /**
         * @returns true if a valid iterator; false otherwise.
         */
        is_valid(): boolean;

        /**
         * Gets the next {@link ICalGLib.Property} pointed by {@link ICalGLib.PropIter}.
         * @returns A {@link ICalGLib.Property}
         */
        next(): Property;
    }


    namespace Property {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalProperty instance.
     * @gir-type Class
     */
    class Property extends Object {
        static $gtype: GObject.GType<Property>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Property.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: PropertyKind): Property;

        static new_acceptresponse(value: string): Property;

        static new_acknowledged(value: Time): Property;

        static new_action(value: PropertyAction): Property;

        static new_allowconflict(value: string): Property;

        static new_attach(value: Attach): Property;

        static new_attendee(value: string): Property;

        static new_busytype(value: PropertyBusytype): Property;

        static new_calendaraddress(value: string): Property;

        static new_calid(value: string): Property;

        static new_calmaster(value: string): Property;

        static new_calscale(value: string): Property;

        static new_capversion(value: string): Property;

        static new_carid(value: string): Property;

        static new_carlevel(value: PropertyCarlevel): Property;

        static new_categories(value: string): Property;

        static new_class(value: PropertyClassenum): Property;

        static new_cmd(value: PropertyCmd): Property;

        static new_color(value: string): Property;

        static new_comment(value: string): Property;

        static new_completed(value: Time): Property;

        static new_components(value: string): Property;

        static new_concept(value: string): Property;

        static new_conference(value: string): Property;

        static new_contact(value: string): Property;

        static new_created(value: Time): Property;

        static new_csid(value: string): Property;

        static new_datemax(value: Time): Property;

        static new_datemin(value: Time): Property;

        static new_decreed(value: string): Property;

        static new_defaultcharset(value: string): Property;

        static new_defaultlocale(value: string): Property;

        static new_defaulttzid(value: string): Property;

        static new_defaultvcars(value: string): Property;

        static new_deny(value: string): Property;

        static new_description(value: string): Property;

        static new_dtend(value: Time): Property;

        static new_dtstamp(value: Time): Property;

        static new_dtstart(value: Time): Property;

        static new_due(value: Time): Property;

        static new_duration(value: Duration): Property;

        static new_estimatedduration(value: Duration): Property;

        static new_exdate(value: Time): Property;

        static new_expand(value: number): Property;

        static new_exrule(value: Recurrence): Property;

        static new_freebusy(value: Period): Property;

        static new_from_string(str: string): Property;

        static new_geo(value: Geo): Property;

        static new_grant(value: string): Property;

        static new_iana(value: string): Property;

        static new_image(value: Attach): Property;

        static new_itipversion(value: string): Property;

        static new_lastmodified(value: Time): Property;

        static new_link(value: string): Property;

        static new_location(value: string): Property;

        static new_locationtype(value: string): Property;

        static new_maxcomponentsize(value: number): Property;

        static new_maxdate(value: Time): Property;

        static new_maxresults(value: number): Property;

        static new_maxresultssize(value: number): Property;

        static new_method(value: PropertyMethod): Property;

        static new_mindate(value: Time): Property;

        static new_multipart(value: string): Property;

        static new_name(value: string): Property;

        static new_organizer(value: string): Property;

        static new_owner(value: string): Property;

        static new_participanttype(value: PropertyParticipanttype): Property;

        static new_patchdelete(value: string): Property;

        static new_patchorder(value: number): Property;

        static new_patchparameter(value: string): Property;

        static new_patchtarget(value: string): Property;

        static new_patchversion(value: string): Property;

        static new_percentcomplete(value: number): Property;

        static new_permission(value: string): Property;

        static new_pollcompletion(value: PropertyPollcompletion): Property;

        static new_pollitemid(value: number): Property;

        static new_pollmode(value: PropertyPollmode): Property;

        static new_pollproperties(value: string): Property;

        static new_pollwinner(value: number): Property;

        static new_priority(value: number): Property;

        static new_prodid(value: string): Property;

        static new_proximity(value: PropertyProximity): Property;

        static new_query(value: string): Property;

        static new_queryid(value: string): Property;

        static new_querylevel(value: PropertyQuerylevel): Property;

        static new_queryname(value: string): Property;

        static new_rdate(value: Datetimeperiod): Property;

        static new_recuraccepted(value: string): Property;

        static new_recurexpand(value: string): Property;

        static new_recurlimit(value: string): Property;

        static new_recurrenceid(value: Time): Property;

        static new_refid(value: string): Property;

        static new_refreshinterval(value: Duration): Property;

        static new_relatedto(value: string): Property;

        static new_relcalid(value: string): Property;

        static new_repeat(value: number): Property;

        static new_replyurl(value: string): Property;

        static new_requeststatus(value: Reqstat): Property;

        static new_resources(value: string): Property;

        static new_resourcetype(value: PropertyResourcetype): Property;

        static new_response(value: number): Property;

        static new_restriction(value: string): Property;

        static new_rrule(value: Recurrence): Property;

        static new_scope(value: string): Property;

        static new_sequence(value: number): Property;

        static new_source(value: string): Property;

        static new_status(value: PropertyStatus): Property;

        static new_storesexpanded(value: string): Property;

        static new_structureddata(value: Attach): Property;

        static new_styleddescription(value: string): Property;

        static new_summary(value: string): Property;

        static new_target(value: string): Property;

        static new_taskmode(value: PropertyTaskmode): Property;

        static new_transp(value: PropertyTransp): Property;

        static new_trigger(value: Trigger): Property;

        static new_tzid(value: string): Property;

        static new_tzidaliasof(value: string): Property;

        static new_tzname(value: string): Property;

        static new_tzoffsetfrom(value: number): Property;

        static new_tzoffsetto(value: number): Property;

        static new_tzuntil(value: Time): Property;

        static new_tzurl(value: string): Property;

        static new_uid(value: string): Property;

        static new_url(value: string): Property;

        static new_version(value: string): Property;

        static new_voter(value: string): Property;

        static new_x(value: string): Property;

        static new_xlicclass(value: PropertyXlicclass): Property;

        static new_xlicclustercount(value: string): Property;

        static new_xlicerror(value: string): Property;

        static new_xlicmimecharset(value: string): Property;

        static new_xlicmimecid(value: string): Property;

        static new_xlicmimecontenttype(value: string): Property;

        static new_xlicmimeencoding(value: string): Property;

        static new_xlicmimefilename(value: string): Property;

        static new_xlicmimeoptinfo(value: string): Property;

        // Signals
        /** @signal */
        connect<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Property.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Property.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts the string to {@link ICalGLib.PropertyAction}.
         * @param str A string
         */
        static action_from_string(str: string): PropertyAction;

        /**
         * Converts the {@link ICalGLib.PropertyAction} to string.
         * @param value The {@link ICalGLib.PropertyAction}
         */
        static action_to_string(value: PropertyAction): string;

        /**
         * Converts the string to {@link ICalGLib.PropertyClassenum}.
         * @param str A string
         */
        static classenum_from_string(str: string): PropertyClassenum;

        /**
         * Converts the {@link ICalGLib.PropertyClassenum} to string.
         * @param value The {@link ICalGLib.PropertyClassenum}
         */
        static classenum_to_string(value: PropertyClassenum): string;

        /**
         * Converts the enum to string.
         * @param e The enum to be converted
         */
        static enum_to_string(e: number): string;

        /**
         * Returns true if empty properties are allowed.
         */
        static get_allow_empty_properties(): boolean;

        /**
         * Converts an integer and string into an enum.
         * @param kind The kind
         * @param str A string
         */
        static kind_and_string_to_enum(kind: number, str: string): number;

        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param string A string representing {@link ICalGLib.PropertyKind}
         */
        static kind_from_string(string: string): PropertyKind;

        /**
         * Checks whether the enum belongs to the {@link ICalGLib.PropertyKind}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @param e The enum to be checked
         */
        static kind_has_property(kind: PropertyKind, e: number): boolean;

        /**
         * Checks whether {@link ICalGLib.PropertyKind} is valid.
         * @param kind The {@link ICalGLib.PropertyKind}
         */
        static kind_is_valid(kind: PropertyKind): boolean;

        /**
         * Converts the {@link ICalGLib.PropertyKind} to a string.
         * @param kind A {@link ICalGLib.PropertyKind}
         */
        static kind_to_string(kind: PropertyKind): string;

        /**
         * Converts the {@link ICalGLib.PropertyKind} to {@link ICalGLib.ValueKind}.
         * @param kind A {@link ICalGLib.PropertyKind}
         */
        static kind_to_value_kind(kind: PropertyKind): ValueKind;

        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param str A string
         */
        static method_from_string(str: string): PropertyMethod;

        /**
         * Converts the {@link ICalGLib.PropertyMethod} to string.
         * @param method The {@link ICalGLib.PropertyMethod}
         */
        static method_to_string(method: PropertyMethod): string;

        /**
         * Converts the string to {@link ICalGLib.PropertyParticipanttype}.
         * @param str A string
         */
        static participanttype_from_string(str: string): PropertyParticipanttype;

        /**
         * Converts the {@link ICalGLib.PropertyParticipanttype} to string.
         * @param value The {@link ICalGLib.PropertyParticipanttype}
         */
        static participanttype_to_string(value: PropertyParticipanttype): string;

        /**
         * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
         * by EXRULE or EXDATE properties.
         * @param comp A {@link ICalGLib.Component}
         * @param dtstart The base dtstart value for this component
         * @param recurtime The time to test against
         */
        static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;

        /**
         * Converts the string to {@link ICalGLib.PropertyResourcetype}.
         * @param str A string
         */
        static resourcetype_from_string(str: string): PropertyResourcetype;

        /**
         * Converts the {@link ICalGLib.PropertyResourcetype} to string.
         * @param value The {@link ICalGLib.PropertyResourcetype}
         */
        static resourcetype_to_string(value: PropertyResourcetype): string;

        /**
         * Sets if empty properties are allowed.
         * @param value value to set
         */
        static set_allow_empty_properties(value: boolean): void;

        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param str A string
         */
        static status_from_string(str: string): PropertyStatus;

        /**
         * Converts the {@link ICalGLib.PropertyStatus} to string.
         * @param method The {@link ICalGLib.PropertyStatus}
         */
        static status_to_string(method: PropertyStatus): string;

        /**
         * Converts the string to {@link ICalGLib.PropertyTransp}.
         * @param str A string
         */
        static transp_from_string(str: string): PropertyTransp;

        /**
         * Converts the {@link ICalGLib.PropertyTransp} to string.
         * @param value The {@link ICalGLib.PropertyTransp}
         */
        static transp_to_string(value: PropertyTransp): string;

        // Methods
        /**
         * Adds a {@link ICalGLib.Parameter} into the {@link ICalGLib.Property}. It behaves like set the copy of the {@link ICalGLib.Parameter}. Upon
         * completion the native part of {@link ICalGLib.Parameter} will be set to NULL.
         * @param parameter The parameter to be added into `prop`
         */
        add_parameter(parameter: Parameter): void;

        /**
         * Converts a {@link ICalGLib.Property} to a string representation.
         * @returns The string representation of `prop`.
         */
        as_ical_string(): string;

        /**
         * Gets the {@link ICalGLib.ParamIter} pointing to the first parameter of type `kind` in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ParameterKind}
         * @returns A {@link ICalGLib.ParamIter}
         */
        begin_parameter(kind: ParameterKind): ParamIter;

        /**
         * Deeply clone a {@link ICalGLib.Property}.
         * @returns The newly created {@link ICalGLib.Property} deeply cloned from `prop`.
         */
        clone(): Property;

        /**
         * Counts the parameters in the {@link ICalGLib.Property}.
         * @returns The count of the parameters in the {@link ICalGLib.Property}.
         */
        count_parameters(): number;

        /**
         * Returns value of the ACCEPTRESPONSE `self`
         * @returns the ACCEPTRESPONSE value
         */
        get_acceptresponse(): string;

        /**
         * Returns value of the ACKNOWLEDGED `self`
         * @returns the ACKNOWLEDGED value
         */
        get_acknowledged(): Time;

        /**
         * Returns value of the ACTION `self`
         * @returns the ACTION value
         */
        get_action(): PropertyAction;

        /**
         * Returns value of the ALLOWCONFLICT `self`
         * @returns the ALLOWCONFLICT value
         */
        get_allowconflict(): string;

        /**
         * Returns value of the ATTACH `self`
         * @returns the ATTACH value
         */
        get_attach(): Attach;

        /**
         * Returns value of the ATTENDEE `self`
         * @returns the ATTENDEE value
         */
        get_attendee(): string;

        /**
         * Returns value of the BUSYTYPE `self`
         * @returns the BUSYTYPE value
         */
        get_busytype(): PropertyBusytype;

        /**
         * Returns value of the CALENDARADDRESS `self`
         * @returns the CALENDARADDRESS value
         */
        get_calendaraddress(): string;

        /**
         * Returns value of the CALID `self`
         * @returns the CALID value
         */
        get_calid(): string;

        /**
         * Returns value of the CALMASTER `self`
         * @returns the CALMASTER value
         */
        get_calmaster(): string;

        /**
         * Returns value of the CALSCALE `self`
         * @returns the CALSCALE value
         */
        get_calscale(): string;

        /**
         * Returns value of the CAPVERSION `self`
         * @returns the CAPVERSION value
         */
        get_capversion(): string;

        /**
         * Returns value of the CARID `self`
         * @returns the CARID value
         */
        get_carid(): string;

        /**
         * Returns value of the CARLEVEL `self`
         * @returns the CARLEVEL value
         */
        get_carlevel(): PropertyCarlevel;

        /**
         * Returns value of the CATEGORIES `self`
         * @returns the CATEGORIES value
         */
        get_categories(): string;

        /**
         * Returns value of the CLASS `self`
         * @returns the CLASS value
         */
        get_class(): PropertyClassenum;

        /**
         * Returns value of the CMD `self`
         * @returns the CMD value
         */
        get_cmd(): PropertyCmd;

        /**
         * Returns value of the COLOR `self`
         * @returns the COLOR value
         */
        get_color(): string;

        /**
         * Returns value of the COMMENT `self`
         * @returns the COMMENT value
         */
        get_comment(): string;

        /**
         * Returns value of the COMPLETED `self`
         * @returns the COMPLETED value
         */
        get_completed(): Time;

        /**
         * Returns value of the COMPONENTS `self`
         * @returns the COMPONENTS value
         */
        get_components(): string;

        /**
         * Returns value of the CONCEPT `self`
         * @returns the CONCEPT value
         */
        get_concept(): string;

        /**
         * Returns value of the CONFERENCE `self`
         * @returns the CONFERENCE value
         */
        get_conference(): string;

        /**
         * Returns value of the CONTACT `self`
         * @returns the CONTACT value
         */
        get_contact(): string;

        /**
         * Returns value of the CREATED `self`
         * @returns the CREATED value
         */
        get_created(): Time;

        /**
         * Returns value of the CSID `self`
         * @returns the CSID value
         */
        get_csid(): string;

        /**
         * Returns value of the DATEMAX `self`
         * @returns the DATEMAX value
         */
        get_datemax(): Time;

        /**
         * Returns value of the DATEMIN `self`
         * @returns the DATEMIN value
         */
        get_datemin(): Time;

        /**
         * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
         * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
         * for converting it.
         * 
         * The `comp` can be NULL, in which case the parent of the `prop` is used to find
         * the corresponding time zone.
         * @param comp An {@link ICalGLib.Component}
         * @returns Get a DATE or DATE-TIME property as an {@link ICalGLib.Time}.
         */
        get_datetime_with_component(comp: Component | null): Time;

        /**
         * Returns value of the DECREED `self`
         * @returns the DECREED value
         */
        get_decreed(): string;

        /**
         * Returns value of the DEFAULTCHARSET `self`
         * @returns the DEFAULTCHARSET value
         */
        get_defaultcharset(): string;

        /**
         * Returns value of the DEFAULTLOCALE `self`
         * @returns the DEFAULTLOCALE value
         */
        get_defaultlocale(): string;

        /**
         * Returns value of the DEFAULTTZID `self`
         * @returns the DEFAULTTZID value
         */
        get_defaulttzid(): string;

        /**
         * Returns value of the DEFAULTVCARS `self`
         * @returns the DEFAULTVCARS value
         */
        get_defaultvcars(): string;

        /**
         * Returns value of the deny `self`
         * @returns the deny value
         */
        get_deny(): string;

        /**
         * Returns value of the description `self`
         * @returns the description value
         */
        get_description(): string;

        /**
         * Returns value of the DTEND `self`
         * @returns the DTEND value
         */
        get_dtend(): Time;

        /**
         * Returns value of the DTSTAMP `self`
         * @returns the DTSTAMP value
         */
        get_dtstamp(): Time;

        /**
         * Returns value of the DTSTART `self`
         * @returns the DTSTART value
         */
        get_dtstart(): Time;

        /**
         * Returns value of the DUE `self`
         * @returns the DUE value
         */
        get_due(): Time;

        /**
         * Returns value of the DURATION `self`
         * @returns the DURATION value
         */
        get_duration(): Duration;

        /**
         * Returns value of the ESTIMATEDDURATION `self`
         * @returns the ESTIMATEDDURATION value
         */
        get_estimatedduration(): Duration;

        /**
         * Returns value of the EXDATE `self`
         * @returns the EXDATE value
         */
        get_exdate(): Time;

        /**
         * Returns value of the EXPAND `self`
         * @returns the EXPAND value
         */
        get_expand(): number;

        /**
         * Returns value of the EXRULE `self`
         * @returns the EXRULE value
         */
        get_exrule(): Recurrence;

        /**
         * Gets the first {@link ICalGLib.Parameter} from the parent {@link ICalGLib.Property}.
         * @param kind The target kind of {@link ICalGLib.Parameter} to be retrieved
         * @returns The first {@link ICalGLib.Parameter} of `prop`.
         */
        get_first_parameter(kind: ParameterKind): Parameter;

        /**
         * Returns value of the FREEBUSY `self`
         * @returns the FREEBUSY value
         */
        get_freebusy(): Period;

        /**
         * Returns value of the GEO `self`
         * @returns the GEO value
         */
        get_geo(): Geo;

        /**
         * Returns value of the GRANT `self`
         * @returns the GRANT value
         */
        get_grant(): string;

        /**
         * Returns value of the IANA `self`
         * @returns the IANA value
         */
        get_iana(): string;

        /**
         * Gets the IANA name of the {@link ICalGLib.Property}.
         * @returns The IANA property name.
         */
        get_iana_name(): string | null;

        /**
         * Returns value of the IMAGE `self`
         * @returns the IMAGE value
         */
        get_image(): Attach;

        /**
         * Returns value of the ITIPVERSION `self`
         * @returns the ITIPVERSION value
         */
        get_itipversion(): string;

        /**
         * Returns value of the LASTMODIFIED `self`
         * @returns the LASTMODIFIED value
         */
        get_lastmodified(): Time;

        /**
         * Returns value of the LINK `self`
         * @returns the LINK value
         */
        get_link(): string;

        /**
         * Returns value of the LOCATION `self`
         * @returns the LOCATION value
         */
        get_location(): string;

        /**
         * Returns value of the LOCATIONTYPE `self`
         * @returns the LOCATIONTYPE value
         */
        get_locationtype(): string;

        /**
         * Returns value of the MAXCOMPONENTSIZE `self`
         * @returns the MAXCOMPONENTSIZE value
         */
        get_maxcomponentsize(): number;

        /**
         * Returns value of the MAXDATE `self`
         * @returns the MAXDATE value
         */
        get_maxdate(): Time;

        /**
         * Returns value of the MAXRESULTS `self`
         * @returns the MAXRESULTS value
         */
        get_maxresults(): number;

        /**
         * Returns value of the MAXRESULTSSIZE `self`
         * @returns the MAXRESULTSSIZE value
         */
        get_maxresultssize(): number;

        /**
         * Returns value of the METHOD `self`
         * @returns the METHOD value
         */
        get_method(): PropertyMethod;

        /**
         * Returns value of the MINDATE `self`
         * @returns the MINDATE value
         */
        get_mindate(): Time;

        /**
         * Returns value of the MULTIPART `self`
         * @returns the MULTIPART value
         */
        get_multipart(): string;

        /**
         * Returns value of the NAME `self`
         * @returns the NAME value
         */
        get_name(): string;

        /**
         * Gets the next {@link ICalGLib.Parameter} from the parent {@link ICalGLib.Property}.
         * @param kind The target kind of {@link ICalGLib.Parameter} to be retrieved
         * @returns The next {@link ICalGLib.Parameter} of `prop`.
         */
        get_next_parameter(kind: ParameterKind): Parameter;

        /**
         * Returns value of the ORGANIZER `self`
         * @returns the ORGANIZER value
         */
        get_organizer(): string;

        /**
         * Returns value of the OWNER `self`
         * @returns the OWNER value
         */
        get_owner(): string;

        /**
         * Gets the string representation of the target parameter in the {@link ICalGLib.Property}.
         * @param name The name of the target parameter
         * @returns The string representation of the parameter.
         */
        get_parameter_as_string(name: string): string;

        /**
         * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
         * deallocate its parent. However the {@link ICalGLib.Component} object created using this method will be deallocated
         * (if no reference in other places). So You need to make sure there is another reference except the one
         * in {@link ICalGLib.Property}.
         * @returns The parent {@link ICalGLib.Component} of {@link ICalGLib.Property}.
         */
        get_parent(): Component | null;

        /**
         * Returns value of the PARTICIPANTTYPE `self`
         * @returns the PARTICIPANTTYPE value
         */
        get_participanttype(): PropertyParticipanttype;

        /**
         * Returns value of the PATCHDELETE `self`
         * @returns the PATCHDELETE value
         */
        get_patchdelete(): string;

        /**
         * Returns value of the PATCHORDER `self`
         * @returns the PATCHORDER value
         */
        get_patchorder(): number;

        /**
         * Returns value of the PATCHPARAMETER `self`
         * @returns the PATCHPARAMETER value
         */
        get_patchparameter(): string;

        /**
         * Returns value of the PATCHTARGET `self`
         * @returns the PATCHTARGET value
         */
        get_patchtarget(): string;

        /**
         * Returns value of the PATCHVERSION `self`
         * @returns the PATCHVERSION value
         */
        get_patchversion(): string;

        /**
         * Returns value of the PERCENTCOMPLETE `self`
         * @returns the PERCENTCOMPLETE value
         */
        get_percentcomplete(): number;

        /**
         * Returns value of the PERMISSION `self`
         * @returns the PERMISSION value
         */
        get_permission(): string;

        /**
         * Returns value of the POLLCOMPLETION `self`
         * @returns the POLLCOMPLETION value
         */
        get_pollcompletion(): PropertyPollcompletion;

        /**
         * Returns value of the POLLITEMID `self`
         * @returns the POLLITEMID value
         */
        get_pollitemid(): number;

        /**
         * Returns value of the POLLMODE `self`
         * @returns the POLLMODE value
         */
        get_pollmode(): PropertyPollmode;

        /**
         * Returns value of the POLLPROPERTIES `self`
         * @returns the POLLPROPERTIES value
         */
        get_pollproperties(): string;

        /**
         * Returns value of the POLLWINNER `self`
         * @returns the POLLWINNER value
         */
        get_pollwinner(): number;

        /**
         * Returns value of the PRIORITY `self`
         * @returns the PRIORITY value
         */
        get_priority(): number;

        /**
         * Returns value of the PRODID `self`
         * @returns the PRODID value
         */
        get_prodid(): string;

        /**
         * Gets the property name of {@link ICalGLib.Property}.
         * @returns Property name of {@link ICalGLib.Property}.
         */
        get_property_name(): string;

        /**
         * Returns value of the PROXIMITY `self`
         * @returns the PROXIMITY value
         */
        get_proximity(): PropertyProximity;

        /**
         * Returns value of the QUERY `self`
         * @returns the QUERY value
         */
        get_query(): string;

        /**
         * Returns value of the QUERYID `self`
         * @returns the QUERYID value
         */
        get_queryid(): string;

        /**
         * Returns value of the QUERYLEVEL `self`
         * @returns the QUERYLEVEL value
         */
        get_querylevel(): PropertyQuerylevel;

        /**
         * Returns value of the QUERYNAME `self`
         * @returns the QUERYNAME value
         */
        get_queryname(): string;

        /**
         * Returns value of the RDATE `self`
         * @returns the RDATE value
         */
        get_rdate(): Datetimeperiod;

        /**
         * Returns value of the RECURACCEPTED `self`
         * @returns the RECURACCEPTED value
         */
        get_recuraccepted(): string;

        /**
         * Returns value of the RECUREXPAND `self`
         * @returns the RECUREXPAND value
         */
        get_recurexpand(): string;

        /**
         * Returns value of the RECURLIMIT `self`
         * @returns the RECURLIMIT value
         */
        get_recurlimit(): string;

        /**
         * Returns value of the RECURRENCEID `self`
         * @returns the RECURRENCEID value
         */
        get_recurrenceid(): Time;

        /**
         * Returns value of the REFID `self`
         * @returns the REFID value
         */
        get_refid(): string;

        /**
         * Returns value of the REFRESHINTERVAL `self`
         * @returns the REFRESHINTERVAL value
         */
        get_refreshinterval(): Duration;

        /**
         * Returns value of the RELATEDTO `self`
         * @returns the RELATEDTO value
         */
        get_relatedto(): string;

        /**
         * Returns value of the RELCALID `self`
         * @returns the RELCALID value
         */
        get_relcalid(): string;

        /**
         * Returns value of the REPEAT `self`
         * @returns the REPEAT value
         */
        get_repeat(): number;

        /**
         * Returns value of the REPLYURL `self`
         * @returns the REPLYURL value
         */
        get_replyurl(): string;

        /**
         * Returns value of the REQUESTSTATUS `self`
         * @returns the REQUESTSTATUS value
         */
        get_requeststatus(): Reqstat;

        /**
         * Returns value of the RESOURCES `self`
         * @returns the RESOURCES value
         */
        get_resources(): string;

        /**
         * Returns value of the RESOURCETYPE `self`
         * @returns the RESOURCETYPE value
         */
        get_resourcetype(): PropertyResourcetype;

        /**
         * Returns value of the RESPONSE `self`
         * @returns the RESPONSE value
         */
        get_response(): number;

        /**
         * Returns value of the RESTRICTION `self`
         * @returns the RESTRICTION value
         */
        get_restriction(): string;

        /**
         * Returns value of the RRULE `self`
         * @returns the RRULE value
         */
        get_rrule(): Recurrence;

        /**
         * Returns value of the SCOPE `self`
         * @returns the SCOPE value
         */
        get_scope(): string;

        /**
         * Returns value of the SEQUENCE `self`
         * @returns the SEQUENCE value
         */
        get_sequence(): number;

        /**
         * Returns value of the SOURCE `self`
         * @returns the SOURCE value
         */
        get_source(): string;

        /**
         * Returns value of the STATUS `self`
         * @returns the STATUS value
         */
        get_status(): PropertyStatus;

        /**
         * Returns value of the STORESEXPANDED `self`
         * @returns the STORESEXPANDED value
         */
        get_storesexpanded(): string;

        /**
         * Returns value of the STRUCTUREDDATA `self`
         * @returns the STRUCTUREDDATA value
         */
        get_structureddata(): Attach;

        /**
         * Returns value of the STYLEDDESCRIPTION `self`
         * @returns the STYLEDDESCRIPTION value
         */
        get_styleddescription(): string;

        /**
         * Returns value of the SUMMARY `self`
         * @returns the SUMMARY value
         */
        get_summary(): string;

        /**
         * Returns value of the TARGET `self`
         * @returns the TARGET value
         */
        get_target(): string;

        /**
         * Returns value of the TASKMODE `self`
         * @returns the TASKMODE value
         */
        get_taskmode(): PropertyTaskmode;

        /**
         * Returns value of the TRANSP `self`
         * @returns the TRANSP value
         */
        get_transp(): PropertyTransp;

        /**
         * Returns value of the TRIGGER `self`
         * @returns the TRIGGER value
         */
        get_trigger(): Trigger;

        /**
         * Returns value of the TZID `self`
         * @returns the TZID value
         */
        get_tzid(): string;

        /**
         * Returns value of the TZIDALIASOF `self`
         * @returns the TZIDALIASOF value
         */
        get_tzidaliasof(): string;

        /**
         * Returns value of the TZNAME `self`
         * @returns the TZNAME value
         */
        get_tzname(): string;

        /**
         * Returns value of the TZOFFSETFROM `self`
         * @returns the TZOFFSETFROM value
         */
        get_tzoffsetfrom(): number;

        /**
         * Returns value of the TZOFFSETTO `self`
         * @returns the TZOFFSETTO value
         */
        get_tzoffsetto(): number;

        /**
         * Returns value of the TZUNTIL `self`
         * @returns the TZUNTIL value
         */
        get_tzuntil(): Time;

        /**
         * Returns value of the TZURL `self`
         * @returns the TZURL value
         */
        get_tzurl(): string;

        /**
         * Returns value of the UID `self`
         * @returns the UID value
         */
        get_uid(): string;

        /**
         * Returns value of the URL `self`
         * @returns the URL value
         */
        get_url(): string;

        /**
         * Gets the {@link ICalGLib.Value} of {@link ICalGLib.Property}.
         * @returns The {@link ICalGLib.Value} of `prop`.
         */
        get_value(): Value;

        /**
         * Gets the string representation of the value in {@link ICalGLib.Property}.
         * @returns The string representation of the value of the {@link ICalGLib.Property}.
         */
        get_value_as_string(): string;

        /**
         * Returns value of the VERSION `self`
         * @returns the VERSION value
         */
        get_version(): string;

        /**
         * Returns value of the VOTER `self`
         * @returns the VOTER value
         */
        get_voter(): string;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Gets the name of x property.
         * @returns The name of x property.
         */
        get_x_name(): string | null;

        /**
         * Returns value of the XLICCLASS `self`
         * @returns the XLICCLASS value
         */
        get_xlicclass(): PropertyXlicclass;

        /**
         * Returns value of the XLICCLUSTERCOUNT `self`
         * @returns the XLICCLUSTERCOUNT value
         */
        get_xlicclustercount(): string;

        /**
         * Returns value of the XLICERROR `self`
         * @returns the XLICERROR value
         */
        get_xlicerror(): string;

        /**
         * Returns value of the XLICMIMECHARSET `self`
         * @returns the XLICMIMECHARSET value
         */
        get_xlicmimecharset(): string;

        /**
         * Returns value of the XLICMIMECID `self`
         * @returns the XLICMIMECID value
         */
        get_xlicmimecid(): string;

        /**
         * Returns value of the XLICMIMECONTENTTYPE `self`
         * @returns the XLICMIMECONTENTTYPE value
         */
        get_xlicmimecontenttype(): string;

        /**
         * Returns value of the XLICMIMEENCODING `self`
         * @returns the XLICMIMEENCODING value
         */
        get_xlicmimeencoding(): string;

        /**
         * Returns value of the XLICMIMEFILENAME `self`
         * @returns the XLICMIMEFILENAME value
         */
        get_xlicmimefilename(): string;

        /**
         * Returns value of the XLICMIMEOPTINFO `self`
         * @returns the XLICMIMEOPTINFO value
         */
        get_xlicmimeoptinfo(): string;

        /**
         * Gets the kind of {@link ICalGLib.Property}.
         * @returns The type of {@link ICalGLib.Property}.
         */
        isa(): PropertyKind;

        /**
         * Checks whether the native part of {@link ICalGLib.Property} is of the type icalproperty.
         * @returns true if the native part of `property` is of the type icalproperty, false if not.
         */
        isa_property(): boolean;

        /**
         * Normalizes (reorders and sorts the parameters) the specified `prop`.
         */
        normalize(): void;

        /**
         * Removes the target kind of the parameters in the {@link ICalGLib.Property}.
         * @param kind The {@link ICalGLib.ParameterKind} to be removed
         */
        remove_parameter_by_kind(kind: ParameterKind): void;

        /**
         * Removes parameter in the {@link ICalGLib.Property} by name.
         * @param name The name of the parameter to be removed
         */
        remove_parameter_by_name(name: string): void;

        /**
         * Removes the parameter in the {@link ICalGLib.Property} by ref.
         * @param param The {@link ICalGLib.Parameter} to be removed
         */
        remove_parameter_by_ref(param: Parameter): void;

        /**
         * Sets value to the ACCEPTRESPONSE `self`
         * @param value the ACCEPTRESPONSE value
         */
        set_acceptresponse(value: string): void;

        /**
         * Sets value to the ACKNOWLEDGED `self`
         * @param value the ACKNOWLEDGED value
         */
        set_acknowledged(value: Time): void;

        /**
         * Sets value to the ACTION `self`
         * @param value the ACTION value
         */
        set_action(value: PropertyAction): void;

        /**
         * Sets value to the ALLOWCONFLICT `self`
         * @param value the ALLOWCONFLICT value
         */
        set_allowconflict(value: string): void;

        /**
         * Sets value to the ATTACH `self`
         * @param value the ATTACH value
         */
        set_attach(value: Attach): void;

        /**
         * Sets value to the ATTENDEE `self`
         * @param value the ATTENDEE value
         */
        set_attendee(value: string): void;

        /**
         * Sets value to the BUSYTYPE `self`
         * @param value the BUSYTYPE value
         */
        set_busytype(value: PropertyBusytype): void;

        /**
         * Sets value to the CALENDARADDRESS `self`
         * @param value the CALENDARADDRESS value
         */
        set_calendaraddress(value: string): void;

        /**
         * Sets value to the CALID `self`
         * @param value the CALID value
         */
        set_calid(value: string): void;

        /**
         * Sets value to the CALMASTER `self`
         * @param value the CALMASTER value
         */
        set_calmaster(value: string): void;

        /**
         * Sets value to the CALSCALE `self`
         * @param value the CALSCALE value
         */
        set_calscale(value: string): void;

        /**
         * Sets value to the CAPVERSION `self`
         * @param value the CAPVERSION value
         */
        set_capversion(value: string): void;

        /**
         * Sets value to the CARID `self`
         * @param value the CARID value
         */
        set_carid(value: string): void;

        /**
         * Sets value to the CARLEVEL `self`
         * @param value the CARLEVEL value
         */
        set_carlevel(value: PropertyCarlevel): void;

        /**
         * Sets value to the CATEGORIES `self`
         * @param value the CATEGORIES value
         */
        set_categories(value: string): void;

        /**
         * Sets value to the CLASS `self`
         * @param value the CLASS value
         */
        set_class(value: PropertyClassenum): void;

        /**
         * Sets value to the CMD `self`
         * @param value the CMD value
         */
        set_cmd(value: PropertyCmd): void;

        /**
         * Sets value to the COLOR `self`
         * @param value the COLOR value
         */
        set_color(value: string): void;

        /**
         * Sets value to the COMMENT `self`
         * @param value the COMMENT value
         */
        set_comment(value: string): void;

        /**
         * Sets value to the COMPLETED `self`
         * @param value the COMPLETED value
         */
        set_completed(value: Time): void;

        /**
         * Sets value to the COMPONENTS `self`
         * @param value the COMPONENTS value
         */
        set_components(value: string): void;

        /**
         * Sets value to the CONCEPT `self`
         * @param value the CONCEPT value
         */
        set_concept(value: string): void;

        /**
         * Sets value to the CONFERENCE `self`
         * @param value the CONFERENCE value
         */
        set_conference(value: string): void;

        /**
         * Sets value to the CONTACT `self`
         * @param value the CONTACT value
         */
        set_contact(value: string): void;

        /**
         * Sets value to the CREATED `self`
         * @param value the CREATED value
         */
        set_created(value: Time): void;

        /**
         * Sets value to the CSID `self`
         * @param value the CSID value
         */
        set_csid(value: string): void;

        /**
         * Sets value to the DATEMAX `self`
         * @param value the DATEMAX value
         */
        set_datemax(value: Time): void;

        /**
         * Sets value to the DATEMIN `self`
         * @param value the DATEMIN value
         */
        set_datemin(value: Time): void;

        /**
         * Sets value to the DECREED `self`
         * @param value the DECREED value
         */
        set_decreed(value: string): void;

        /**
         * Sets value to the DEFAULTCHARSET `self`
         * @param value the DEFAULTCHARSET value
         */
        set_defaultcharset(value: string): void;

        /**
         * Sets value to the DEFAULTLOCALE `self`
         * @param value the DEFAULTLOCALE value
         */
        set_defaultlocale(value: string): void;

        /**
         * Sets value to the DEFAULTTZID `self`
         * @param value the DEFAULTTZID value
         */
        set_defaulttzid(value: string): void;

        /**
         * Sets value to the DEFAULTVCARS `self`
         * @param value the DEFAULTVCARS value
         */
        set_defaultvcars(value: string): void;

        /**
         * Sets value to the deny `self`
         * @param value the deny value
         */
        set_deny(value: string): void;

        /**
         * Sets value to the description `self`
         * @param value the description value
         */
        set_description(value: string): void;

        /**
         * Sets value to the DTEND `self`
         * @param value the DTEND value
         */
        set_dtend(value: Time): void;

        /**
         * Sets value to the DTSTAMP `self`
         * @param value the DTSTAMP value
         */
        set_dtstamp(value: Time): void;

        /**
         * Sets value to the DTSTART `self`
         * @param value the DTSTART value
         */
        set_dtstart(value: Time): void;

        /**
         * Sets value to the DUE `self`
         * @param value the DUE value
         */
        set_due(value: Time): void;

        /**
         * Sets value to the DURATION `self`
         * @param value the DURATION value
         */
        set_duration(value: Duration): void;

        /**
         * Sets value to the ESTIMATEDDURATION `self`
         * @param value the ESTIMATEDDURATION value
         */
        set_estimatedduration(value: Duration): void;

        /**
         * Sets value to the EXDATE `self`
         * @param value the EXDATE value
         */
        set_exdate(value: Time): void;

        /**
         * Sets value to the EXPAND `self`
         * @param value the EXPAND value
         */
        set_expand(value: number): void;

        /**
         * Sets value to the EXRULE `self`
         * @param value the EXRULE value
         */
        set_exrule(value: Recurrence): void;

        /**
         * Sets value to the FREEBUSY `self`
         * @param value the FREEBUSY value
         */
        set_freebusy(value: Period): void;

        /**
         * Sets value to the GEO `self`
         * @param value the GEO value
         */
        set_geo(value: Geo): void;

        /**
         * Sets value to the GRANT `self`
         * @param value the GRANT value
         */
        set_grant(value: string): void;

        /**
         * Sets value to the IANA `self`
         * @param value the IANA value
         */
        set_iana(value: string): void;

        /**
         * Sets the IANA name for the {@link ICalGLib.Property}.
         * @param name The IANA property name
         */
        set_iana_name(name: string): void;

        /**
         * Sets value to the IMAGE `self`
         * @param value the IMAGE value
         */
        set_image(value: Attach): void;

        /**
         * Sets value to the ITIPVERSION `self`
         * @param value the ITIPVERSION value
         */
        set_itipversion(value: string): void;

        /**
         * Sets value to the LASTMODIFIED `self`
         * @param value the LASTMODIFIED value
         */
        set_lastmodified(value: Time): void;

        /**
         * Sets value to the LINK `self`
         * @param value the LINK value
         */
        set_link(value: string): void;

        /**
         * Sets value to the LOCATION `self`
         * @param value the LOCATION value
         */
        set_location(value: string): void;

        /**
         * Sets value to the LOCATIONTYPE `self`
         * @param value the LOCATIONTYPE value
         */
        set_locationtype(value: string): void;

        /**
         * Sets value to the MAXCOMPONENTSIZE `self`
         * @param value the MAXCOMPONENTSIZE value
         */
        set_maxcomponentsize(value: number): void;

        /**
         * Sets value to the MAXDATE `self`
         * @param value the MAXDATE value
         */
        set_maxdate(value: Time): void;

        /**
         * Sets value to the MAXRESULTS `self`
         * @param value the MAXRESULTS value
         */
        set_maxresults(value: number): void;

        /**
         * Sets value to the MAXRESULTSSIZE `self`
         * @param value the MAXRESULTSSIZE value
         */
        set_maxresultssize(value: number): void;

        /**
         * Sets value to the METHOD `self`
         * @param value the METHOD value
         */
        set_method(value: PropertyMethod): void;

        /**
         * Sets value to the MINDATE `self`
         * @param value the MINDATE value
         */
        set_mindate(value: Time): void;

        /**
         * Sets value to the MULTIPART `self`
         * @param value the MULTIPART value
         */
        set_multipart(value: string): void;

        /**
         * Sets value to the NAME `self`
         * @param value the NAME value
         */
        set_name(value: string): void;

        /**
         * Sets value to the ORGANIZER `self`
         * @param value the ORGANIZER value
         */
        set_organizer(value: string): void;

        /**
         * Sets value to the OWNER `self`
         * @param value the OWNER value
         */
        set_owner(value: string): void;

        /**
         * @param args 
         */
    // Conflicted with ICalGLib.Object.set_owner
        set_owner(...args: never[]): any;

        /**
         * Sets a {@link ICalGLib.Parameter} into the {@link ICalGLib.Property}. It behaves like set the copy of the {@link ICalGLib.Parameter}. Upon
         * completion the native part of {@link ICalGLib.Parameter} will be set to NULL.
         * @param parameter The parameter to be set into `prop`
         */
        set_parameter(parameter: Parameter): void;

        /**
         * Sets the {@link ICalGLib.Property} with the parameter defined by the name and value.
         * @param name The name of the parameter
         * @param value The value of the parameter
         */
        set_parameter_from_string(name: string, value: string): void;

        /**
         * Sets the parent {@link ICalGLib.Component} of the specified {@link ICalGLib.Property}.
         * @param component An {@link ICalGLib.Component}
         */
        set_parent(component: Component | null): void;

        /**
         * Sets value to the PARTICIPANTTYPE `self`
         * @param value the PARTICIPANTTYPE value
         */
        set_participanttype(value: PropertyParticipanttype): void;

        /**
         * Sets value to the PATCHDELETE `self`
         * @param value the PATCHDELETE value
         */
        set_patchdelete(value: string): void;

        /**
         * Sets value to the PATCHORDER `self`
         * @param value the PATCHORDER value
         */
        set_patchorder(value: number): void;

        /**
         * Sets value to the PATCHPARAMETER `self`
         * @param value the PATCHPARAMETER value
         */
        set_patchparameter(value: string): void;

        /**
         * Sets value to the PATCHTARGET `self`
         * @param value the PATCHTARGET value
         */
        set_patchtarget(value: string): void;

        /**
         * Sets value to the PATCHVERSION `self`
         * @param value the PATCHVERSION value
         */
        set_patchversion(value: string): void;

        /**
         * Sets value to the PERCENTCOMPLETE `self`
         * @param value the PERCENTCOMPLETE value
         */
        set_percentcomplete(value: number): void;

        /**
         * Sets value to the PERMISSION `self`
         * @param value the PERMISSION value
         */
        set_permission(value: string): void;

        /**
         * Sets value to the POLLCOMPLETION `self`
         * @param value the POLLCOMPLETION value
         */
        set_pollcompletion(value: PropertyPollcompletion): void;

        /**
         * Sets value to the POLLITEMID `self`
         * @param value the POLLITEMID value
         */
        set_pollitemid(value: number): void;

        /**
         * Sets value to the POLLMODE `self`
         * @param value the POLLMODE value
         */
        set_pollmode(value: PropertyPollmode): void;

        /**
         * Sets value to the POLLPROPERTIES `self`
         * @param value the POLLPROPERTIES value
         */
        set_pollproperties(value: string): void;

        /**
         * Sets value to the POLLWINNER `self`
         * @param value the POLLWINNER value
         */
        set_pollwinner(value: number): void;

        /**
         * Sets value to the PRIORITY `self`
         * @param value the PRIORITY value
         */
        set_priority(value: number): void;

        /**
         * Sets value to the PRODID `self`
         * @param value the PRODID value
         */
        set_prodid(value: string): void;

        /**
         * Sets value to the PROXIMITY `self`
         * @param value the PROXIMITY value
         */
        set_proximity(value: PropertyProximity): void;

        /**
         * Sets value to the QUERY `self`
         * @param value the QUERY value
         */
        set_query(value: string): void;

        /**
         * Sets value to the QUERYID `self`
         * @param value the QUERYID value
         */
        set_queryid(value: string): void;

        /**
         * Sets value to the QUERYLEVEL `self`
         * @param value the QUERYLEVEL value
         */
        set_querylevel(value: PropertyQuerylevel): void;

        /**
         * Sets value to the QUERYNAME `self`
         * @param value the QUERYNAME value
         */
        set_queryname(value: string): void;

        /**
         * Sets value to the RDATE `self`
         * @param value the RDATE value
         */
        set_rdate(value: Datetimeperiod): void;

        /**
         * Sets value to the RECURACCEPTED `self`
         * @param value the RECURACCEPTED value
         */
        set_recuraccepted(value: string): void;

        /**
         * Sets value to the RECUREXPAND `self`
         * @param value the RECUREXPAND value
         */
        set_recurexpand(value: string): void;

        /**
         * Sets value to the RECURLIMIT `self`
         * @param value the RECURLIMIT value
         */
        set_recurlimit(value: string): void;

        /**
         * Sets value to the RECURRENCEID `self`
         * @param value the RECURRENCEID value
         */
        set_recurrenceid(value: Time): void;

        /**
         * Sets value to the REFID `self`
         * @param value the REFID value
         */
        set_refid(value: string): void;

        /**
         * Sets value to the REFRESHINTERVAL `self`
         * @param value the REFRESHINTERVAL value
         */
        set_refreshinterval(value: Duration): void;

        /**
         * Sets value to the RELATEDTO `self`
         * @param value the RELATEDTO value
         */
        set_relatedto(value: string): void;

        /**
         * Sets value to the RELCALID `self`
         * @param value the RELCALID value
         */
        set_relcalid(value: string): void;

        /**
         * Sets value to the REPEAT `self`
         * @param value the REPEAT value
         */
        set_repeat(value: number): void;

        /**
         * Sets value to the REPLYURL `self`
         * @param value the REPLYURL value
         */
        set_replyurl(value: string): void;

        /**
         * Sets value to the REQUESTSTATUS `self`
         * @param value the REQUESTSTATUS value
         */
        set_requeststatus(value: Reqstat): void;

        /**
         * Sets value to the RESOURCES `self`
         * @param value the RESOURCES value
         */
        set_resources(value: string): void;

        /**
         * Sets value to the RESOURCETYPE `self`
         * @param value the RESOURCETYPE value
         */
        set_resourcetype(value: PropertyResourcetype): void;

        /**
         * Sets value to the RESPONSE `self`
         * @param value the RESPONSE value
         */
        set_response(value: number): void;

        /**
         * Sets value to the RESTRICTION `self`
         * @param value the RESTRICTION value
         */
        set_restriction(value: string): void;

        /**
         * Sets value to the RRULE `self`
         * @param value the RRULE value
         */
        set_rrule(value: Recurrence): void;

        /**
         * Sets value to the SCOPE `self`
         * @param value the SCOPE value
         */
        set_scope(value: string): void;

        /**
         * Sets value to the SEQUENCE `self`
         * @param value the SEQUENCE value
         */
        set_sequence(value: number): void;

        /**
         * Sets value to the SOURCE `self`
         * @param value the SOURCE value
         */
        set_source(value: string): void;

        /**
         * Sets value to the STATUS `self`
         * @param value the STATUS value
         */
        set_status(value: PropertyStatus): void;

        /**
         * Sets value to the STORESEXPANDED `self`
         * @param value the STORESEXPANDED value
         */
        set_storesexpanded(value: string): void;

        /**
         * Sets value to the STRUCTUREDDATA `self`
         * @param value the STRUCTUREDDATA value
         */
        set_structureddata(value: Attach): void;

        /**
         * Sets value to the STYLEDDESCRIPTION `self`
         * @param value the STYLEDDESCRIPTION value
         */
        set_styleddescription(value: string): void;

        /**
         * Sets value to the SUMMARY `self`
         * @param value the SUMMARY value
         */
        set_summary(value: string): void;

        /**
         * Sets value to the TARGET `self`
         * @param value the TARGET value
         */
        set_target(value: string): void;

        /**
         * Sets value to the TASKMODE `self`
         * @param value the TASKMODE value
         */
        set_taskmode(value: PropertyTaskmode): void;

        /**
         * Sets value to the TRANSP `self`
         * @param value the TRANSP value
         */
        set_transp(value: PropertyTransp): void;

        /**
         * Sets value to the TRIGGER `self`
         * @param value the TRIGGER value
         */
        set_trigger(value: Trigger): void;

        /**
         * Sets value to the TZID `self`
         * @param value the TZID value
         */
        set_tzid(value: string): void;

        /**
         * Sets value to the TZIDALIASOF `self`
         * @param value the TZIDALIASOF value
         */
        set_tzidaliasof(value: string): void;

        /**
         * Sets value to the TZNAME `self`
         * @param value the TZNAME value
         */
        set_tzname(value: string): void;

        /**
         * Sets value to the TZOFFSETFROM `self`
         * @param value the TZOFFSETFROM value
         */
        set_tzoffsetfrom(value: number): void;

        /**
         * Sets value to the TZOFFSETTO `self`
         * @param value the TZOFFSETTO value
         */
        set_tzoffsetto(value: number): void;

        /**
         * Sets value to the TZUNTIL `self`
         * @param value the TZUNTIL value
         */
        set_tzuntil(value: Time): void;

        /**
         * Sets value to the TZURL `self`
         * @param value the TZURL value
         */
        set_tzurl(value: string): void;

        /**
         * Sets value to the UID `self`
         * @param value the UID value
         */
        set_uid(value: string): void;

        /**
         * Sets value to the URL `self`
         * @param value the URL value
         */
        set_url(value: string): void;

        /**
         * Sets the {@link ICalGLib.Property} with the {@link ICalGLib.Value}.
         * @param value The {@link ICalGLib.Value} will be set as the property of `prop`
         */
        set_value(value: Value): void;

        /**
         * Sets the {@link ICalGLib.Property} with the {@link ICalGLib.Value} constructed from string.
         * @param value The value used to construct the {@link ICalGLib.Value}
         * @param kind The kind used to construct the {@link ICalGLib.Value}
         */
        set_value_from_string(value: string, kind: string): void;

        /**
         * Sets value to the VERSION `self`
         * @param value the VERSION value
         */
        set_version(value: string): void;

        /**
         * Sets value to the VOTER `self`
         * @param value the VOTER value
         */
        set_voter(value: string): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;

        /**
         * Sets the name of x property for the {@link ICalGLib.Property}.
         * @param name The name string
         */
        set_x_name(name: string): void;

        /**
         * Sets value to the XLICCLASS `self`
         * @param value the XLICCLASS value
         */
        set_xlicclass(value: PropertyXlicclass): void;

        /**
         * Sets value to the XLICCLUSTERCOUNT `self`
         * @param value the XLICCLUSTERCOUNT value
         */
        set_xlicclustercount(value: string): void;

        /**
         * Sets value to the XLICERROR `self`
         * @param value the XLICERROR value
         */
        set_xlicerror(value: string): void;

        /**
         * Sets value to the XLICMIMECHARSET `self`
         * @param value the XLICMIMECHARSET value
         */
        set_xlicmimecharset(value: string): void;

        /**
         * Sets value to the XLICMIMECID `self`
         * @param value the XLICMIMECID value
         */
        set_xlicmimecid(value: string): void;

        /**
         * Sets value to the XLICMIMECONTENTTYPE `self`
         * @param value the XLICMIMECONTENTTYPE value
         */
        set_xlicmimecontenttype(value: string): void;

        /**
         * Sets value to the XLICMIMEENCODING `self`
         * @param value the XLICMIMEENCODING value
         */
        set_xlicmimeencoding(value: string): void;

        /**
         * Sets value to the XLICMIMEFILENAME `self`
         * @param value the XLICMIMEFILENAME value
         */
        set_xlicmimefilename(value: string): void;

        /**
         * Sets value to the XLICMIMEOPTINFO `self`
         * @param value the XLICMIMEOPTINFO value
         */
        set_xlicmimeoptinfo(value: string): void;
    }


    namespace RecurIterator {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalRecurIterator instance.
     * @gir-type Class
     */
    class RecurIterator extends Object {
        static $gtype: GObject.GType<RecurIterator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecurIterator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RecurIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](rule: Recurrence, dtstart: Time): RecurIterator;

        // Signals
        /** @signal */
        connect<K extends keyof RecurIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RecurIterator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RecurIterator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RecurIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the next occurrence from an iterator.
         * @returns The next occurrence according to this recurrence rule.
         */
        next(): Time;

        /**
         * Gets the previous occurrence from an iterator.
         * @returns The previous occurrence according to this recurrence rule.
         */
        prev(): Time;

        /**
         * Sets the date-time at which the iterator will stop at the latest. Values equal to or greater than end
         * will not be returned by the iterator.
         * @param end The date-time at which the iterator will stop
         * @returns true if succeeded, false if failed
         */
        set_end(end: Time): boolean;

        /**
         * Sets the date-times over which the iterator will run,
         * where `from` is a value between DTSTART and UNTIL.
         * 
         * If
         * `to` is a null time, the forward iterator will return values
         * up to and including UNTIL (if present), otherwise
         * up to the year 2582.
         * 
         * If `to` is non-null time and later than `from`,
         * the forward iterator will return
         * values up to and including `to`.
         * 
         * If `to` is non-null time and earlier than `from`,
         * the reverse iterator
         * will be set to start at `from`
         * and will return values down to and including `to`.
         * 
         * Note: CAN NOT be used
         * with RRULEs that contain COUNT.
         * @param from The start date-time for the iterator
         * @param to The end date-time for the iterator
         * @returns `true` if succeeded, `false` failed, like when the recurrence type is unsupported.
         */
        set_range(from: Time, to: Time): boolean;

        /**
         * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
         * Note:
         * CAN NOT be used with RRULEs that contain COUNT.
         * @param start The date-time to move the iterator to
         * @returns true if succeeded, false failed, like when the recurrence type is unsupported.
         */
        set_start(start: Time): boolean;
    }


    namespace Recurrence {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalRecurrence instance.
     * @gir-type Class
     */
    class Recurrence extends Object {
        static $gtype: GObject.GType<Recurrence>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Recurrence.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Recurrence.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Recurrence;

        static new_from_string(str: string): Recurrence;

        // Signals
        /** @signal */
        connect<K extends keyof Recurrence.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Recurrence.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Recurrence.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Recurrence.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Decodes a day to a weekday in a week.
         * @param day The encoded day which represents the day of the week and Nth day of the week
         */
        static day_day_of_week(day: number): RecurrenceWeekday;

        /**
         * Decodes a day to a position of the weekday.
         * @param day The encoded day which represents the day of the week and Nth day of the week
         */
        static day_position(day: number): number;

        /**
         * Encodes the `weekday` and `position` into a single value, which can by split by `i_cal_recurrence_day_day_of_week()`
         * and `i_cal_recurrence_day_position()`.
         * @param weekday The {@link ICalGLib.RecurrenceWeekday} to use.
         * @param position The position to use. 0 == any of day of week. 1 == first, 2 = second, -2 == second to last, etc
         */
        static encode_day(weekday: RecurrenceWeekday, position: number): number;

        /**
         * Encodes the `month` and the `is_leap` flag into a single value, which can be split by `i_cal_recurrence_month_is_leap()`
         * and `i_cal_recurrence_month_month()`.
         * @param month The month to be encoded
         * @param is_leap `true`, when the month is leap, `false` otherwise
         */
        static encode_month(month: number, is_leap: boolean): number;

        /**
         * Converts a string representation to an enum representation for the frequency.
         * @param str The string representation of the frequency
         */
        static frequency_from_string(str: string): RecurrenceFrequency;

        /**
         * Converts an enum representation to a string representation for the frequency.
         * @param kind The frequency enum
         */
        static frequency_to_string(kind: RecurrenceFrequency): string;

        /**
         * Decodes a month and check whether it is a leap month.
         * @param month The month to be decoded
         */
        static month_is_leap(month: number): boolean;

        /**
         * Decode a month from an encoded value by `i_cal_recurrence_encode_month()`.
         * @param month The month to be decoded
         */
        static month_month(month: number): number;

        /**
         * Gets an array of calendars supporting rscale (currently always return NULL).
         */
        static rscale_supported_calendars(): Array;

        /**
         * Converts a string representation to an enum representation for the skip.
         * @param str The string representation of the skip
         */
        static skip_from_string(str: string): RecurrenceSkip;

        /**
         * Converts an enum representation to a string representation for the skip.
         * @param kind The frequency enum
         */
        static skip_to_string(kind: RecurrenceSkip): string;

        /**
         * Converts a string representation to an enum representation for the weekday.
         * @param str The string representation of the weekday
         */
        static weekday_from_string(str: string): RecurrenceWeekday;

        /**
         * Converts an enum representation to a string representation for the weekday.
         * @param kind The frequency enum
         */
        static weekday_to_string(kind: RecurrenceWeekday): string;

        // Methods
        /**
         * Creates a copy of the `src`.
         * @returns The newly created {@link ICalGLib.Recurrence}.
         */
        clone(): Recurrence;

        /**
         * Returns the element at the specified index of the 'by' array if it exists, 0 otherwise.
         * @param byrule The 'by' part to use.
         * @param index The index in the by[byrule] array of {@link ICalGLib.Recurrence}.
         * @returns The 'by' part at the given position.
         */
        get_by(byrule: RecurrenceByRule, index: number): number;

        /**
         * Gets the by[byrule] array from {@link ICalGLib.Recurrence}.
         * @param byrule The 'by' part to use.
         * @returns The by[byrule] of {@link ICalGLib.Recurrence}.
         */
        get_by_array(byrule: RecurrenceByRule): number[];

        /**
         * Returns the size of given 'by' array from {@link ICalGLib.Recurrence}.
         * @param byrule The 'by' part to use.
         * @returns The current size of the given 'by' array.
         */
        get_by_array_size(byrule: RecurrenceByRule): number;

        /**
         * Gets the count from {@link ICalGLib.Recurrence}.
         * @returns The count of {@link ICalGLib.Recurrence}.
         */
        get_count(): number;

        /**
         * Gets the freq from {@link ICalGLib.Recurrence}.
         * @returns The freq of {@link ICalGLib.Recurrence}.
         */
        get_freq(): RecurrenceFrequency;

        /**
         * Gets the interval from {@link ICalGLib.Recurrence}.
         * @returns The interval of {@link ICalGLib.Recurrence}.
         */
        get_interval(): number;

        /**
         * Gets the until from {@link ICalGLib.Recurrence}.
         * @returns The until of {@link ICalGLib.Recurrence}.
         */
        get_until(): Time;

        /**
         * Gets the week_start from {@link ICalGLib.Recurrence}.
         * @returns The week_start of {@link ICalGLib.Recurrence}.
         */
        get_week_start(): RecurrenceWeekday;

        /**
         * Resizes the 'by' array to the given size.
         * @param byrule The 'by' part to use.
         * @param size The new size of the 'by' array
         */
        resize_by_array(byrule: RecurrenceByRule, size: number): void;

        /**
         * Sets the by array at the given index. Resizes the array to have a size of at least index+1 elements if
         * necessary.
         * @param byrule The 'by' part to use.
         * @param index The index in the 'by' array
         * @param value The value to be set
         */
        set_by(byrule: RecurrenceByRule, index: number, value: number): void;

        /**
         * Sets the given 'by' array.
         * @param byrule The 'by' part to use.
         * @param values The array of values
         */
        set_by_array(byrule: RecurrenceByRule, values: number[]): void;

        /**
         * Sets the count from {@link ICalGLib.Recurrence}.
         * @param count The count of {@link ICalGLib.Recurrence}
         */
        set_count(count: number): void;

        /**
         * Sets the freq from {@link ICalGLib.Recurrence}.
         * @param freq The freq of {@link ICalGLib.Recurrence}
         */
        set_freq(freq: RecurrenceFrequency): void;

        /**
         * Sets the interval from {@link ICalGLib.Recurrence}.
         * @param interval The interval of {@link ICalGLib.Recurrence}
         */
        set_interval(interval: number): void;

        /**
         * Sets the until from {@link ICalGLib.Recurrence}.
         * @param until The until of {@link ICalGLib.Recurrence}
         */
        set_until(until: Time): void;

        /**
         * Sets the week_start from {@link ICalGLib.Recurrence}.
         * @param week_start The week_start of {@link ICalGLib.Recurrence}
         */
        set_week_start(week_start: RecurrenceWeekday): void;

        /**
         * Converts a {@link ICalGLib.Recurrence} to a string.
         * @returns The string representation of `recur`.
         */
        to_string(): string;
    }


    namespace Reqstat {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalReqstat instance.
     * @gir-type Class
     */
    class Reqstat extends Object {
        static $gtype: GObject.GType<Reqstat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Reqstat.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Reqstat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(str: string): Reqstat;

        // Signals
        /** @signal */
        connect<K extends keyof Reqstat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Reqstat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Reqstat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Reqstat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the code of {@link ICalGLib.Reqstat}.
         * @returns The code of `reqstat`.
         */
        get_code(): RequestStatus;

        /**
         * Gets the debug of {@link ICalGLib.Reqstat}.
         * @returns The debug of `reqstat`.
         */
        get_debug(): string;

        /**
         * Gets the desc of {@link ICalGLib.Reqstat}.
         * @returns The desc of `reqstat`.
         */
        get_desc(): string;

        /**
         * Sets the code of {@link ICalGLib.Reqstat}.
         * @param code The code of `reqstat`
         */
        set_code(code: RequestStatus): void;

        /**
         * Converts {@link ICalGLib.Reqstat} to a string representation.
         * @returns A string.
         */
        to_string(): string;
    }


    namespace StrArray {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalStrArray instance.
     * @gir-type Class
     */
    class StrArray extends Object {
        static $gtype: GObject.GType<StrArray>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StrArray.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StrArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](increment_size: number): StrArray;

        // Signals
        /** @signal */
        connect<K extends keyof StrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StrArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StrArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StrArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a deep copy of {@link ICalGLib.StrArray} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.StrArray} with the same value as the `array`
         */
        clone(): StrArray;

        /**
         * Removes all the occurrences of the `value` in the `array`.
         * @param value The value to remove.
         */
        remove(value: string): void;

        /**
         * Removes the element at the `position` from the `array`.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: bigint | number): void;

        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }


    namespace Time {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTime instance.
     * @gir-type Class
     */
    class Time extends Object {
        static $gtype: GObject.GType<Time>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Time.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Time;

        static new_current_with_zone(zone: Timezone | null): Time;

        static new_from_day_of_year(day: number, year: number): Time;

        static new_from_string(str: string): Time;

        static new_from_timet_with_zone(v: bigint | number, is_date: boolean, zone: Timezone | null): Time;

        static new_null_date(): Time;

        static new_null_time(): Time;

        static new_today(): Time;

        // Signals
        /** @signal */
        connect<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Time.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Time.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Time.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the number of days in the target month in the target year.
         * @param month The target month
         * @param year The target year
         */
        static days_in_month(month: number, year: number): number;

        /**
         * Returns the number of days in this year.
         * @param year The target year
         */
        static days_in_year(year: number): number;

        /**
         * Checks whether a year is a leap year.
         * @param year The target year
         */
        static days_is_leap_year(year: number): boolean;

        /**
         * Applies a list of timezone changes on the array of components until the end year.
         * @param comp The {@link ICalGLib.Component}
         * @param end_year The end year
         * @param changes The changes to be applies
         */
        static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;

        // Methods
        /**
         * Adds or subtracts a number of days, hours, minutes and seconds from `tt`.
         * @param days Difference of days adjusted
         * @param hours Difference of hours adjusted
         * @param minutes Difference of minutes adjusted
         * @param seconds Difference of seconds adjusted
         */
        adjust(days: number, hours: number, minutes: number, seconds: number): void;

        /**
         * Returns a string representation of the time, in RFC2445 format.
         * @returns The string representation
         */
        as_ical_string(): string;

        /**
         * Returns the time as seconds past the UNIX epoch.
         * @returns The time as seconds past the UNIX epoch
         */
        as_timet(): number;

        /**
         * Returns the time as seconds past the UNIX epoch, using timezones.
         * @param zone The timezone
         * @returns The time as seconds past the UNIX epoch
         */
        as_timet_with_zone(zone: Timezone | null): number;

        /**
         * Creates a new {@link ICalGLib.Time}, copy of `timetype`.
         * @returns The newly created {@link ICalGLib.Time}, copy of `timetype`.
         */
        clone(): Time;

        /**
         * i_cal_time_compare returns an integer indicating the result of the comparison, as follow:
         * @param b The {@link ICalGLib.Time} to be compared
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare(b: Time): number;

        /**
         * Like `i_cal_time_compare()`, but only use the date parts.
         * @param b The {@link ICalGLib.Time} to be compared
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare_date_only(b: Time): number;

        /**
         * Like `i_cal_time_compare_tz()`, but only use the date parts; accepts timezone.
         * @param b The {@link ICalGLib.Time} to be compared
         * @param zone The target timezone
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare_date_only_tz(b: Time, zone: Timezone | null): number;

        /**
         * Convert time from one timezone to another.
         * @param from_zone From timezone
         * @param to_zone To timezone
         */
        convert_timezone(from_zone: Timezone | null, to_zone: Timezone | null): void;

        /**
         * Converts `tt` to `zone` and return new {@link ICalGLib.Time} object.
         * @param zone The target timezone
         * @returns The converted {@link ICalGLib.Time}
         */
        convert_to_zone(zone: Timezone | null): Time;

        /**
         * Converts `tt` to `zone` and store the result into `tt`.
         * @param zone The target timezone
         */
        convert_to_zone_inplace(zone: Timezone | null): void;

        /**
         * Returns the day of the week of the given time. Sunday is 1.
         * @returns The day of the week of the given time. Sunday is 1.
         */
        day_of_week(): number;

        /**
         * Returns the day of the year of the given time.
         * @returns The day of the year of the given time
         */
        day_of_year(): number;

        /**
         * Gets the year/month/date parts of the `timetype` in one call.
         */
        get_date(): [number, number, number];

        /**
         * Gets the day of {@link ICalGLib.Time}.
         * @returns The day.
         */
        get_day(): number;

        /**
         * Gets the hour of {@link ICalGLib.Time}.
         * @returns The hour.
         */
        get_hour(): number;

        /**
         * Gets the minute of {@link ICalGLib.Time}.
         * @returns The minute.
         */
        get_minute(): number;

        /**
         * Gets the month of {@link ICalGLib.Time}.
         * @returns The month.
         */
        get_month(): number;

        /**
         * Gets the second of {@link ICalGLib.Time}.
         * @returns The second.
         */
        get_second(): number;

        /**
         * Gets the hour/minute/second parts of the `timetype` in one call.
         */
        get_time(): [number, number, number];

        /**
         * Returns the timezone, the {@link ICalGLib.Timezone} object is cached and can be either unreferenced once the last
         * instance is used or can be kept until `i_cal_object_free_global_objects()` is called (usually at the very
         * end of the program).
         * @returns The timezone information
         */
        get_timezone(): Timezone;

        /**
         * Returns the tzid, or NULL for a floating time.
         * @returns The tzid of {@link ICalGLib.Time}, or NULL if floating type
         */
        get_tzid(): string | null;

        /**
         * Gets the year of {@link ICalGLib.Time}.
         * @returns The year.
         */
        get_year(): number;

        /**
         * Returns true if time is of DATE type, false if DATE-TIME.
         * @returns True if time is of DATE type, false if DATE-TIME.
         */
        is_date(): boolean;

        /**
         * Gets the is_daylight of {@link ICalGLib.Time}.
         * @returns The is_daylight.
         */
        is_daylight(): boolean;

        /**
         * Returns true if the time is null.
         * @returns Whether `tt` is null_time. true if yes, false if not.
         */
        is_null_time(): boolean;

        /**
         * Returns true if time is relative to UTC zone.
         * @returns True if time is relative to UTC zone.
         */
        is_utc(): boolean;

        /**
         * Returns true if the time is null.
         * @returns Whether `tt` is null_time. true if yes, false if not.
         */
        is_valid_time(): boolean;

        /**
         * Normalizes the icaltime, so that all fields are within the normal range.
         * @returns The {@link ICalGLib.Time} normalized
         */
        normalize(): Time;

        /**
         * Normalizes the `tt`, so that all fields are within the normal range.
         */
        normalize_inplace(): void;

        /**
         * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
         * date.
         * @param year The 'year' part of the date
         * @param month The 'month' part of the date
         * @param day The 'day' part of the date
         */
        set_date(year: number, month: number, day: number): void;

        /**
         * Sets the day of {@link ICalGLib.Time}.
         * @param day The day
         */
        set_day(day: number): void;

        /**
         * Sets the hour of {@link ICalGLib.Time}.
         * @param hour The hour
         */
        set_hour(hour: number): void;

        /**
         * Sets the is_date of {@link ICalGLib.Time}.
         * @param is_date The is_date
         */
        set_is_date(is_date: boolean): void;

        /**
         * Sets the is_daylight of {@link ICalGLib.Time}.
         * @param is_daylight The is_daylight
         */
        set_is_daylight(is_daylight: boolean): void;

        /**
         * Sets the minute of {@link ICalGLib.Time}.
         * @param minute The minute
         */
        set_minute(minute: number): void;

        /**
         * Sets the month of {@link ICalGLib.Time}.
         * @param month The month
         */
        set_month(month: number): void;

        /**
         * Sets the second of {@link ICalGLib.Time}.
         * @param second The second
         */
        set_second(second: number): void;

        /**
         * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
         * time.
         * @param hour The 'hour' part of the time
         * @param minute The 'minute' part of the time
         * @param second The 'second' part of the time
         */
        set_time(hour: number, minute: number, second: number): void;

        /**
         * Sets the timezone of the `tt`.
         * @param zone The timezone
         */
        set_timezone(zone: Timezone | null): void;

        /**
         * Sets the year of {@link ICalGLib.Time}.
         * @param year The year
         */
        set_year(year: number): void;

        /**
         * Returns the day of the year for the first day of the week that the given time is within.
         * @param fdow The first day of the week
         * @returns The day of the year for the Sunday of the week that the given time is within.
         */
        start_doy_week(fdow: number): number;
    }


    namespace TimeSpan {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTimeSpan instance.
     * @gir-type Class
     */
    class TimeSpan extends Object {
        static $gtype: GObject.GType<TimeSpan>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TimeSpan.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TimeSpan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dtstart: Time, dtend: Time, is_busy: number): TimeSpan;

        static new_timet(start: bigint | number, end: bigint | number, is_busy: boolean): TimeSpan;

        // Signals
        /** @signal */
        connect<K extends keyof TimeSpan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TimeSpan.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TimeSpan.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimeSpan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a new {@link ICalGLib.TimeSpan}, clone of `src`. Free it with `g_object_unref()`, when no longer needed.
         * @returns The newly created {@link ICalGLib.TimeSpan}, clone of `src`.
         */
        clone(): TimeSpan;

        /**
         * Checks whether one {@link ICalGLib.TimeSpan} is contained in another {@link ICalGLib.TimeSpan}.
         * @param container The target container of {@link ICalGLib.TimeSpan}
         * @returns Whether one {@link ICalGLib.TimeSpan} is contained in another {@link ICalGLib.TimeSpan}.
         */
        contains(container: TimeSpan): number;

        /**
         * Gets the end of {@link ICalGLib.TimeSpan}.
         * @returns The end.
         */
        get_end(): number;

        /**
         * Gets the is_busy of {@link ICalGLib.TimeSpan}.
         * @returns The is_busy.
         */
        get_is_busy(): boolean;

        /**
         * Gets the start of {@link ICalGLib.TimeSpan}.
         * @returns The start.
         */
        get_start(): number;

        /**
         * Checks whether two spans overlap.
         * @param s2 The second {@link ICalGLib.TimeSpan}
         * @returns Whether these two span are overlapped.
         */
        overlaps(s2: TimeSpan): number;

        /**
         * Sets the end of {@link ICalGLib.TimeSpan}.
         * @param end The end
         */
        set_end(end: bigint | number): void;

        /**
         * Sets the is_busy of {@link ICalGLib.TimeSpan}.
         * @param is_busy The is_busy
         */
        set_is_busy(is_busy: boolean): void;

        /**
         * Sets the start of {@link ICalGLib.TimeSpan}.
         * @param start The start
         */
        set_start(start: bigint | number): void;
    }


    namespace Timezone {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTimezone instance.
     * @gir-type Class
     */
    class Timezone extends Object {
        static $gtype: GObject.GType<Timezone>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Timezone.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Timezone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Timezone;

        // Signals
        /** @signal */
        connect<K extends keyof Timezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Timezone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Timezone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Timezone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the {@link ICalGLib.Timezone} at specified position in array.
         * @param timezones The array to be visited
         * @param index The index
         */
        static array_element_at(timezones: Array, index: number): Timezone;

        /**
         * Frees any builtin timezone information.
         */
        static free_builtin_timezones(): void;

        /**
         * Frees memory dedicated to the zonefile directory.
         */
        static free_zone_directory(): void;

        /**
         * Returns a single builtin timezone, given its Olson city name.
         * @param location The location representing the timezone
         */
        static get_builtin_timezone(location: string | null): Timezone | null;

        /**
         * Returns a single builtin timezone, given its offset.
         * @param offset The offset used to get the {@link ICalGLib.Timezone}
         * @param tzname The reference {@link ICalGLib.Timezone} name
         */
        static get_builtin_timezone_from_offset(offset: number, tzname: string | null): Timezone;

        /**
         * Returns a single builtin timezone, given its TZID.
         * @param tzid The tzid name
         */
        static get_builtin_timezone_from_tzid(tzid: string | null): Timezone;

        /**
         * Returns a list of builtin timezones.
         */
        static get_builtin_timezones(): Array;

        /**
         * Gets whether to use builtin timezones files.
         */
        static get_builtin_tzdata(): boolean;

        /**
         * Gets the location of the vtimezone in component.
         * @param component The {@link ICalGLib.Component} to be queried
         */
        static get_location_from_vtimezone(component: Component): string | null;

        /**
         * Returns the full path to the system zoneinfo directory (where zone.tab lives).
         */
        static get_system_zone_directory(): string;

        /**
         * Returns the current timezone ID prefix used by the libical. See `i_cal_timezone_set_tzid_prefix()`.
         */
        static get_tzid_prefix(): string;

        /**
         * Gets the name of the vtimezone in component.
         * @param component The {@link ICalGLib.Component} to be queried
         */
        static get_tznames_from_vtimezone(component: Component): string | null;

        /**
         * Returns the UTC timezone.
         */
        static get_utc_timezone(): Timezone;

        /**
         * Gets the directory to look for the zonefiles.
         */
        static get_zone_directory(): string;

        /**
         * Sets whether to use builtin timezones files.
         * @param set Whether to use builtin timezones files
         */
        static set_builtin_tzdata(set: boolean): void;

        /**
         * Sets the full path to the system zoneinfo directory (where zone.tab lives).
         * @param path The path to look for the zonefiles
         */
        static set_system_zone_directory(path: string): void;

        /**
         * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
         * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
         * Do not change or de-allocate the string buffer after calling this.
         * @param new_prefix The {@link ICalGLib.Timezone} to be set
         */
        static set_tzid_prefix(new_prefix: string): void;

        /**
         * Sets the directory to look for the zonefiles.
         * @param path The path to look for the zonefiles
         */
        static set_zone_directory(path: string): void;

        /**
         * Truncate a VTIMEZONE component to the given start and end times.
         * If either time is null, then no truncation
         * will occur at that point.
         * If either time is non-null, then it MUST be specified as UTC.
         * If the start
         * time is non-null and ms_compatible is zero,
         * then the DTSTART of RRULEs will be adjusted to occur after
         * the start time.
         * @param comp an {@link ICalGLib.Component}
         * @param start a start {@link ICalGLib.Time}
         * @param end an end {@link ICalGLib.Time}
         * @param ms_compatible whether to truncate the timezone in a Microsoft-compatible way
         */
        static truncate_vtimezone(comp: Component, start: Time, end: Time, ms_compatible: boolean): void;

        // Methods
        /**
         * The clone method for {@link ICalGLib.Timezone}.
         * @returns The newly created {@link ICalGLib.Timezone} with the same values as `zone`
         */
        copy(): Timezone;

        /**
         * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
         * @param max_year Max year
         * @param fp The file handle
         * @returns true if success.
         */
        dump_changes(max_year: number, fp: null): boolean;

        /**
         * Returns the VTIMEZONE component of a timezone.
         * @returns The VTIMEZONE component of the `zone`.
         */
        get_component(): Component;

        /**
         * Gets the display name of the `zone`.
         * @returns The display name of `zone`
         */
        get_display_name(): string;

        /**
         * Returns the latitude of a builtin timezone.
         * @returns The latitude of the {@link ICalGLib.Timezone}
         */
        get_latitude(): number;

        /**
         * Returns the city name of a timezone, or `null`, when none is set or when `zone` is also `null`.
         * @returns The location of the {@link ICalGLib.Timezone}, or `null`
         */
        get_location(): string | null;

        /**
         * Returns the longitude of a builtin timezone.
         * @returns The longitude of the {@link ICalGLib.Timezone}.
         */
        get_longitude(): number;

        /**
         * Returns the TZID of a timezone, or `null`, when none is set or when `zone` is also `null`.
         * @returns The timezone id, or `null`
         */
        get_tzid(): string | null;

        /**
         * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
         * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
         * this may also return NULL.
         * @returns The timezone name
         */
        get_tznames(): string | null;

        /**
         * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
         * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
         * @param tt The local time
         * @returns UTC offset of the `zone`
         */
        get_utc_offset(tt: Time | null): [number, number];

        /**
         * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
         * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
         * @param tt The local time
         * @returns UTC offset of the `zone`
         */
        get_utc_offset_of_utc_time(tt: Time): [number, number];

        /**
         * Sets the VTIMEZONE component of {@link ICalGLib.Timezone}, initializing the tzid, location and tzname fields. It
         * returns 1 on success or 0 on failure, i.e. no TZID was found.
         * 
         * `note` The `zone` assumes ownership
         * of the `comp`, thus make sure you pass an unowned {@link ICalGLib.Component}.
         * @param comp The VTIMEZONE component of an {@link ICalGLib.Timezone}, initializing the tzid, location and tzname fields
         * @returns Whether the action is successful. 1 for success, 0 for failure.
         */
        set_component(comp: Component): number;
    }


    namespace Trigger {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTrigger instance.
     * @gir-type Class
     */
    class Trigger extends Object {
        static $gtype: GObject.GType<Trigger>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Trigger.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Trigger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_seconds(reltime: number): Trigger;

        static new_from_string(str: string): Trigger;

        // Signals
        /** @signal */
        connect<K extends keyof Trigger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Trigger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Trigger.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Trigger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the duration from {@link ICalGLib.Trigger}.
         * @returns The duration of {@link ICalGLib.Trigger}.
         */
        get_duration(): Duration;

        /**
         * Gets the time from {@link ICalGLib.Trigger}.
         * @returns The time of {@link ICalGLib.Trigger}.
         */
        get_time(): Time;

        /**
         * Checks if a {@link ICalGLib.Trigger} is a bad trigger.
         * @returns true if yes, false if not.
         */
        is_bad_trigger(): boolean;

        /**
         * Checks if a {@link ICalGLib.Trigger} is a null trigger.
         * @returns true if yes, false if not.
         */
        is_null_trigger(): boolean;

        /**
         * Sets the duration from {@link ICalGLib.Trigger}.
         * @param duration The duration of {@link ICalGLib.Trigger}
         */
        set_duration(duration: Duration): void;

        /**
         * Sets the time from {@link ICalGLib.Trigger}.
         * @param time The time of {@link ICalGLib.Trigger}
         */
        set_time(time: Time): void;
    }


    namespace Value {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalValue instance.
     * @gir-type Class
     */
    class Value extends Object {
        static $gtype: GObject.GType<Value>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Value.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: ValueKind): Value;

        static new_action(value: PropertyAction): Value;

        static new_attach(value: Attach): Value;

        static new_binary(value: string): Value;

        static new_boolean(value: boolean): Value;

        static new_busytype(value: PropertyBusytype): Value;

        static new_caladdress(value: string): Value;

        static new_carlevel(value: PropertyCarlevel): Value;

        static new_class(value: PropertyClassenum): Value;

        static new_cmd(value: PropertyCmd): Value;

        static new_color(value: string): Value;

        static new_date(value: Time): Value;

        static new_datetime(value: Time): Value;

        static new_datetimedate(value: Time): Value;

        static new_datetimeperiod(value: Datetimeperiod): Value;

        static new_duration(value: Duration): Value;

        static new_float(value: number): Value;

        static new_from_string(kind: ValueKind, str: string): Value;

        static new_geo(value: Geo): Value;

        static new_integer(value: number): Value;

        static new_method(value: PropertyMethod): Value;

        static new_participanttype(value: PropertyParticipanttype): Value;

        static new_period(value: Period): Value;

        static new_pollcompletion(value: PropertyPollcompletion): Value;

        static new_pollmode(value: PropertyPollmode): Value;

        static new_proximity(value: PropertyProximity): Value;

        static new_query(value: string): Value;

        static new_querylevel(value: PropertyQuerylevel): Value;

        static new_recur(value: Recurrence): Value;

        static new_requeststatus(value: Reqstat): Value;

        static new_resourcetype(value: PropertyResourcetype): Value;

        static new_status(value: PropertyStatus): Value;

        static new_string(value: string): Value;

        static new_taskmode(value: PropertyTaskmode): Value;

        static new_text(value: string): Value;

        static new_transp(value: PropertyTransp): Value;

        static new_trigger(value: Trigger): Value;

        static new_uid(value: string): Value;

        static new_uri(value: string): Value;

        static new_utcoffset(value: number): Value;

        static new_x(value: string): Value;

        static new_xlicclass(value: PropertyXlicclass): Value;

        static new_xmlreference(value: string): Value;

        // Signals
        /** @signal */
        connect<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Value.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Value.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Value.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Extracts the original character string encoded by the above function.
         * @param szText A string
         */
        static decode_ical_string(szText: string): string | null;

        /**
         * Encodes a character string in ical format, escape certain characters, etc.
         * @param szText A string
         */
        static encode_ical_string(szText: string): string | null;

        /**
         * Converts a string to {@link ICalGLib.ValueKind}.
         * @param str A string
         */
        static kind_from_string(str: string): ValueKind;

        /**
         * Checks whether the {@link ICalGLib.ValueKind} is valid.
         * @param kind The {@link ICalGLib.ValueKind} to be checked
         */
        static kind_is_valid(kind: ValueKind): boolean;

        /**
         * Converts a {@link ICalGLib.ValueKind} to a {@link ICalGLib.PropertyKind}.
         * @param kind A {@link ICalGLib.ValueKind}
         */
        static kind_to_property_kind(kind: ValueKind): PropertyKind;

        /**
         * Converts the {@link ICalGLib.ValueKind} to a string.
         * @param kind A {@link ICalGLib.ValueKind}
         */
        static kind_to_string(kind: ValueKind): string;

        // Methods
        /**
         * Converts the {@link ICalGLib.Value} to a string.
         * @returns The string representation.
         */
        as_ical_string(): string;

        /**
         * Deeply clone a {@link ICalGLib.Value}.
         * @returns The newly created {@link ICalGLib.Value} with the same property as `value`.
         */
        clone(): Value;

        /**
         * Compares two {@link ICalGLib.Value}. If the values do not have the same type ICAL_XLICCOMPARETYPE_NOTEQUAL is returned.
         * ICAL_XLICCOMPARETYPE_NONE is returned if the values type is unknown or one of the values is null.
         * @param b A {@link ICalGLib.Value}
         * @returns The compare result.
         */
        compare(b: Value): ParameterXliccomparetype;

        /**
         * Returns value of the ACTION `self`
         * @returns the ACTION value
         */
        get_action(): PropertyAction;

        /**
         * Returns value of the ATTACH `self`
         * @returns the ATTACH value
         */
        get_attach(): Attach;

        /**
         * Returns value of the BINARY `self`
         * @returns the BINARY value
         */
        get_binary(): string;

        /**
         * Returns value of the BOOLEAN `self`
         * @returns the BOOLEAN value
         */
        get_boolean(): boolean;

        /**
         * Returns value of the BUSYTYPE `self`
         * @returns the BUSYTYPE value
         */
        get_busytype(): PropertyBusytype;

        /**
         * Returns value of the CALADDRESS `self`
         * @returns the CALADDRESS value
         */
        get_caladdress(): string;

        /**
         * Returns value of the CARLEVEL `self`
         * @returns the CARLEVEL value
         */
        get_carlevel(): PropertyCarlevel;

        /**
         * Returns value of the CLASS `self`
         * @returns the CLASS value
         */
        get_class(): PropertyClassenum;

        /**
         * Returns value of the CMD `self`
         * @returns the CMD value
         */
        get_cmd(): PropertyCmd;

        /**
         * Returns value of the COLOR `self`
         * @returns the COLOR value
         */
        get_color(): string;

        /**
         * Returns value of the DATE `self`
         * @returns the DATE value
         */
        get_date(): Time;

        /**
         * Returns value of the DATETIME `self`
         * @returns the DATETIME value
         */
        get_datetime(): Time;

        /**
         * Returns value of the DATETIMEDATE `self`
         * @returns the DATETIMEDATE value
         */
        get_datetimedate(): Time;

        /**
         * Returns value of the DATETIMEPERIOD `self`
         * @returns the DATETIMEPERIOD value
         */
        get_datetimeperiod(): Datetimeperiod;

        /**
         * Returns value of the DURATION `self`
         * @returns the DURATION value
         */
        get_duration(): Duration;

        /**
         * Returns value of the FLOAT `self`
         * @returns the FLOAT value
         */
        get_float(): number;

        /**
         * Returns value of the GEO `self`
         * @returns the GEO value
         */
        get_geo(): Geo;

        /**
         * Returns value of the INTEGER `self`
         * @returns the INTEGER value
         */
        get_integer(): number;

        /**
         * Returns value of the METHOD `self`
         * @returns the METHOD value
         */
        get_method(): PropertyMethod;

        /**
         * Gets the parent {@link ICalGLib.Property} of the specified {@link ICalGLib.Value}.
         * @returns The parent {@link ICalGLib.Property}
         */
        get_parent(): Property | null;

        /**
         * Returns value of the PARTICIPANTTYPE `self`
         * @returns the PARTICIPANTTYPE value
         */
        get_participanttype(): PropertyParticipanttype;

        /**
         * Returns value of the PERIOD `self`
         * @returns the PERIOD value
         */
        get_period(): Period;

        /**
         * Returns value of the POLLCOMPLETION `self`
         * @returns the POLLCOMPLETION value
         */
        get_pollcompletion(): PropertyPollcompletion;

        /**
         * Returns value of the POLLMODE `self`
         * @returns the POLLMODE value
         */
        get_pollmode(): PropertyPollmode;

        /**
         * Returns value of the PROXIMITY `self`
         * @returns the PROXIMITY value
         */
        get_proximity(): PropertyProximity;

        /**
         * Returns value of the QUERY `self`
         * @returns the QUERY value
         */
        get_query(): string;

        /**
         * Returns value of the QUERYLEVEL `self`
         * @returns the QUERYLEVEL value
         */
        get_querylevel(): PropertyQuerylevel;

        /**
         * Returns value of the RECUR `self`
         * @returns the RECUR value
         */
        get_recur(): Recurrence;

        /**
         * Returns value of the REQUESTSTATUS `self`
         * @returns the REQUESTSTATUS value
         */
        get_requeststatus(): Reqstat;

        /**
         * Returns value of the RESOURCETYPE `self`
         * @returns the RESOURCETYPE value
         */
        get_resourcetype(): PropertyResourcetype;

        /**
         * Returns value of the STATUS `self`
         * @returns the STATUS value
         */
        get_status(): PropertyStatus;

        /**
         * Returns value of the STRING `self`
         * @returns the STRING value
         */
        get_string(): string;

        /**
         * Returns value of the TASKMODE `self`
         * @returns the TASKMODE value
         */
        get_taskmode(): PropertyTaskmode;

        /**
         * Returns value of the TEXT `self`
         * @returns the TEXT value
         */
        get_text(): string;

        /**
         * Returns value of the TRANSP `self`
         * @returns the TRANSP value
         */
        get_transp(): PropertyTransp;

        /**
         * Returns value of the TRIGGER `self`
         * @returns the TRIGGER value
         */
        get_trigger(): Trigger;

        /**
         * Returns value of the UID `self`
         * @returns the UID value
         */
        get_uid(): string;

        /**
         * Returns value of the URI `self`
         * @returns the URI value
         */
        get_uri(): string;

        /**
         * Returns value of the UTCOFFSET `self`
         * @returns the UTCOFFSET value
         */
        get_utcoffset(): number;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Returns value of the XLICCLASS `self`
         * @returns the XLICCLASS value
         */
        get_xlicclass(): PropertyXlicclass;

        /**
         * Returns value of the XMLREFERENCE `self`
         * @returns the XMLREFERENCE value
         */
        get_xmlreference(): string;

        /**
         * Checks if {@link ICalGLib.Value} is valid.
         * @returns true if valid, false if not.
         */
        is_valid(): boolean;

        /**
         * Gets the kind of {@link ICalGLib.Value}.
         * @returns The kind of `value`.
         */
        isa(): ValueKind;

        /**
         * Checks whether the native part of {@link ICalGLib.Value} is an icalvalue.
         * @returns true if yes, false if not.
         */
        isa_value(): boolean;

        /**
         * Resets the kind of {@link ICalGLib.Value}.
         */
        reset_kind(): void;

        /**
         * Sets value to the ACTION `self`
         * @param value the ACTION value
         */
        set_action(value: PropertyAction): void;

        /**
         * Sets value to the ATTACH `self`
         * @param value the ATTACH value
         */
        set_attach(value: Attach): void;

        /**
         * Sets value to the BINARY `self`
         * @param value the BINARY value
         */
        set_binary(value: string): void;

        /**
         * Sets value to the BOOLEAN `self`
         * @param value the BOOLEAN value
         */
        set_boolean(value: boolean): void;

        /**
         * Sets value to the BUSYTYPE `self`
         * @param value the BUSYTYPE value
         */
        set_busytype(value: PropertyBusytype): void;

        /**
         * Sets value to the CALADDRESS `self`
         * @param value the CALADDRESS value
         */
        set_caladdress(value: string): void;

        /**
         * Sets value to the CARLEVEL `self`
         * @param value the CARLEVEL value
         */
        set_carlevel(value: PropertyCarlevel): void;

        /**
         * Sets value to the CLASS `self`
         * @param value the CLASS value
         */
        set_class(value: PropertyClassenum): void;

        /**
         * Sets value to the CMD `self`
         * @param value the CMD value
         */
        set_cmd(value: PropertyCmd): void;

        /**
         * Sets value to the COLOR `self`
         * @param value the COLOR value
         */
        set_color(value: string): void;

        /**
         * Sets value to the DATE `self`
         * @param value the DATE value
         */
        set_date(value: Time): void;

        /**
         * Sets value to the DATETIME `self`
         * @param value the DATETIME value
         */
        set_datetime(value: Time): void;

        /**
         * Sets value to the DATETIMEDATE `self`
         * @param value the DATETIMEDATE value
         */
        set_datetimedate(value: Time): void;

        /**
         * Sets value to the DATETIMEPERIOD `self`
         * @param value the DATETIMEPERIOD value
         */
        set_datetimeperiod(value: Datetimeperiod): void;

        /**
         * Sets value to the DURATION `self`
         * @param value the DURATION value
         */
        set_duration(value: Duration): void;

        /**
         * Sets value to the FLOAT `self`
         * @param value the FLOAT value
         */
        set_float(value: number): void;

        /**
         * Sets value to the GEO `self`
         * @param value the GEO value
         */
        set_geo(value: Geo): void;

        /**
         * Sets value to the INTEGER `self`
         * @param value the INTEGER value
         */
        set_integer(value: number): void;

        /**
         * Sets value to the METHOD `self`
         * @param value the METHOD value
         */
        set_method(value: PropertyMethod): void;

        /**
         * Sets the parent property of a value.
         * @param property The parent {@link ICalGLib.Property}
         */
        set_parent(property: Property | null): void;

        /**
         * Sets value to the PARTICIPANTTYPE `self`
         * @param value the PARTICIPANTTYPE value
         */
        set_participanttype(value: PropertyParticipanttype): void;

        /**
         * Sets value to the PERIOD `self`
         * @param value the PERIOD value
         */
        set_period(value: Period): void;

        /**
         * Sets value to the POLLCOMPLETION `self`
         * @param value the POLLCOMPLETION value
         */
        set_pollcompletion(value: PropertyPollcompletion): void;

        /**
         * Sets value to the POLLMODE `self`
         * @param value the POLLMODE value
         */
        set_pollmode(value: PropertyPollmode): void;

        /**
         * Sets value to the PROXIMITY `self`
         * @param value the PROXIMITY value
         */
        set_proximity(value: PropertyProximity): void;

        /**
         * Sets value to the QUERY `self`
         * @param value the QUERY value
         */
        set_query(value: string): void;

        /**
         * Sets value to the QUERYLEVEL `self`
         * @param value the QUERYLEVEL value
         */
        set_querylevel(value: PropertyQuerylevel): void;

        /**
         * Sets value to the RECUR `self`
         * @param value the RECUR value
         */
        set_recur(value: Recurrence): void;

        /**
         * Sets value to the REQUESTSTATUS `self`
         * @param value the REQUESTSTATUS value
         */
        set_requeststatus(value: Reqstat): void;

        /**
         * Sets value to the RESOURCETYPE `self`
         * @param value the RESOURCETYPE value
         */
        set_resourcetype(value: PropertyResourcetype): void;

        /**
         * Sets value to the STATUS `self`
         * @param value the STATUS value
         */
        set_status(value: PropertyStatus): void;

        /**
         * Sets value to the STRING `self`
         * @param value the STRING value
         */
        set_string(value: string): void;

        /**
         * Sets value to the TASKMODE `self`
         * @param value the TASKMODE value
         */
        set_taskmode(value: PropertyTaskmode): void;

        /**
         * Sets value to the TEXT `self`
         * @param value the TEXT value
         */
        set_text(value: string): void;

        /**
         * Sets value to the TRANSP `self`
         * @param value the TRANSP value
         */
        set_transp(value: PropertyTransp): void;

        /**
         * Sets value to the TRIGGER `self`
         * @param value the TRIGGER value
         */
        set_trigger(value: Trigger): void;

        /**
         * Sets value to the UID `self`
         * @param value the UID value
         */
        set_uid(value: string): void;

        /**
         * Sets value to the URI `self`
         * @param value the URI value
         */
        set_uri(value: string): void;

        /**
         * Sets value to the UTCOFFSET `self`
         * @param value the UTCOFFSET value
         */
        set_utcoffset(value: number): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;

        /**
         * Sets value to the XLICCLASS `self`
         * @param value the XLICCLASS value
         */
        set_xlicclass(value: PropertyXlicclass): void;

        /**
         * Sets value to the XMLREFERENCE `self`
         * @param value the XMLREFERENCE value
         */
        set_xmlreference(value: string): void;
    }


    namespace VcardComponent {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardComponent instance.
     * @gir-type Class
     */
    class VcardComponent extends Object {
        static $gtype: GObject.GType<VcardComponent>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardComponent.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardComponent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: VcardComponentKind): VcardComponent;

        static new_from_string(str: string): VcardComponent;

        // Signals
        /** @signal */
        connect<K extends keyof VcardComponent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardComponent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardComponent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardComponent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardComponent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardComponent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an {@link ICalGLib.VcardComponentKind}.
         * @param string A string
         */
        static kind_from_string(string: string): VcardComponentKind;

        /**
         * Checks if an {@link ICalGLib.VcardComponentKind} is valid.
         * @param kind An {@link ICalGLib.VcardComponentKind}
         */
        static kind_is_valid(kind: VcardComponentKind): boolean;

        /**
         * Converts an {@link ICalGLib.VcardComponentKind} to a string.
         * @param kind An {@link ICalGLib.VcardComponentKind}
         */
        static kind_to_string(kind: VcardComponentKind): string;

        // Methods
        /**
         * Adds an {@link ICalGLib.VcardComponent} into another {@link ICalGLib.VcardComponent} as a child component.
         * @param child A child {@link ICalGLib.VcardComponent}
         */
        add_component(child: VcardComponent): void;

        /**
         * Adds an {@link ICalGLib.VcardProperty} into {@link ICalGLib.VcardComponent}.
         * @param property An {@link ICalGLib.VcardProperty}
         */
        add_property(property: VcardProperty): void;

        /**
         * Converts an {@link ICalGLib.VcardComponent} to a string.
         * @returns The string representation of {@link ICalGLib.VcardComponent}.
         */
        as_vcard_string(): string;

        /**
         * Checks the number of restrictions in {@link ICalGLib.VcardComponent}.
         * @returns The number of restrictions in `comp`
         */
        check_restrictions(): number;

        /**
         * Deeply clone `component`.
         * @returns The newly deeply cloned {@link ICalGLib.VcardComponent}.
         */
        clone(): VcardComponent;

        /**
         * Counts the child {@link ICalGLib.VcardComponent} with the target kind in the parent one.
         * @param kind The target {@link ICalGLib.VcardComponentKind}
         * @returns The count of child {@link ICalGLib.VcardComponent} in the parent one.
         */
        count_components(kind: VcardComponentKind): number;

        /**
         * Counts the number of errors in {@link ICalGLib.VcardComponent}.
         * @returns The count of errors.
         */
        count_errors(): number;

        /**
         * Counts the number of {@link ICalGLib.VcardProperty} in {@link ICalGLib.VcardComponent}.
         * @param kind An {@link ICalGLib.VcardPropertyKind}
         * @param ignore_alts whether to ignore alternatives
         * @returns The number of {@link ICalGLib.VcardProperty}.
         */
        count_properties(kind: VcardPropertyKind, ignore_alts: boolean): number;

        /**
         * Gets the current {@link ICalGLib.VcardComponent} in {@link ICalGLib.VcardComponent}.
         * @returns The current {@link ICalGLib.VcardComponent}.
         */
        get_current_component(): VcardComponent;

        /**
         * Gets the current {@link ICalGLib.VcardProperty} in {@link ICalGLib.VcardComponent}.
         * @returns The current {@link ICalGLib.VcardProperty}.
         */
        get_current_property(): VcardProperty;

        /**
         * Gets the first {@link ICalGLib.VcardComponent} with specific kind in {@link ICalGLib.VcardComponent}.
         * @param kind An {@link ICalGLib.VcardComponentKind}
         * @returns The first {@link ICalGLib.VcardComponent}.
         */
        get_first_component(kind: VcardComponentKind): VcardComponent | null;

        /**
         * Gets the first {@link ICalGLib.VcardProperty} with specific kind in {@link ICalGLib.VcardComponent}.
         * @param kind An {@link ICalGLib.VcardPropertyKind}
         * @returns The first {@link ICalGLib.VcardProperty}.
         */
        get_first_property(kind: VcardPropertyKind): VcardProperty | null;

        /**
         * Gets the FN property value of the `comp`.
         * @returns The FN property value of the `comp`.
         */
        get_fn(): string;

        /**
         * Gets the next {@link ICalGLib.VcardComponent} with specific kind in {@link ICalGLib.VcardComponent}.
         * @param kind An {@link ICalGLib.VcardComponentKind}
         * @returns The next {@link ICalGLib.VcardComponent}.
         */
        get_next_component(kind: VcardComponentKind): VcardComponent | null;

        /**
         * Gets the next {@link ICalGLib.VcardProperty} with specific kind in {@link ICalGLib.VcardComponent}.
         * @param kind An {@link ICalGLib.VcardPropertyKind}
         * @returns The next {@link ICalGLib.VcardProperty}.
         */
        get_next_property(kind: VcardPropertyKind): VcardProperty | null;

        /**
         * Gets the UID of the `comp`.
         * @returns The UID of the `comp`.
         */
        get_uid(): string;

        /**
         * Returns the current vCard version of th `comp` as {@link ICalGLib.VcardPropertyVersion}.
         * @returns Current vCard version of the `comp`. VCARD_VERSION_NONE is returned if the version property is empty or `comp` is null.
         */
        get_version(): VcardPropertyVersion;

        /**
         * Checks whether {@link ICalGLib.VcardComponent} is valid.
         * @returns true if yes, false if not.
         */
        is_valid(): boolean;

        /**
         * Gets the type of {@link ICalGLib.VcardComponent}.
         * @returns An {@link ICalGLib.VcardComponentKind}.
         */
        isa(): VcardComponentKind;

        /**
         * Checks whether the native part of {@link ICalGLib.VcardComponent} is {@link ICalGLib.VcardComponent}.
         * @returns true if yes, false if not.
         */
        isa_component(): boolean;

        /**
         * Normalizes (reorders and sorts the properties) the specified vCard `comp`.
         */
        normalize(): void;

        /**
         * Removes a child {@link ICalGLib.VcardComponent} from another {@link ICalGLib.VcardComponent}.
         * @param child A child {@link ICalGLib.VcardComponent}
         */
        remove_component(child: VcardComponent): void;

        /**
         * Removes {@link ICalGLib.VcardProperty} from {@link ICalGLib.VcardComponent}. Caution: The compare is based on address. So you
         * must use the original {@link ICalGLib.VcardProperty} as the target.
         * @param property An {@link ICalGLib.VcardProperty}
         */
        remove_property(property: VcardProperty): void;

        /**
         * Removes all X-LIC-ERROR properties.
         */
        strip_errors(): void;

        /**
         * Transforms (converts) the `comp` properties to specified vCard `version`.
         * @param version An {@link ICalGLib.VcardPropertyVersion}
         */
        transform(version: VcardPropertyVersion): void;
    }


    namespace VcardEnumArray {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardEnumArray instance.
     * @gir-type Class
     */
    class VcardEnumArray extends Object {
        static $gtype: GObject.GType<VcardEnumArray>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardEnumArray.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardEnumArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](increment_size: number): VcardEnumArray;

        // Signals
        /** @signal */
        connect<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardEnumArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardEnumArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardEnumArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardEnumArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a deep copy of {@link ICalGLib.VcardEnumArray} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.VcardEnumArray} with the same value as the `array`
         */
        clone(): VcardEnumArray;

        /**
         * Removes the element at the `position` from the array.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: bigint | number): void;

        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }


    namespace VcardGeo {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardGeo instance.
     * @gir-type Class
     */
    class VcardGeo extends Object {
        static $gtype: GObject.GType<VcardGeo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardGeo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardGeo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_coords(lat: string, lon: string): VcardGeo;

        static new_uri(uri: string): VcardGeo;

        // Signals
        /** @signal */
        connect<K extends keyof VcardGeo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardGeo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardGeo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardGeo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardGeo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardGeo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a new {@link ICalGLib.VcardGeo}, copy of `self`.
         * @returns The newly created {@link ICalGLib.VcardGeo}, copy of `self`.
         */
        clone(): VcardGeo;

        /**
         * Gets the latitude coordinate of the `self`. It can return `null` when not set or when the `self` is not
         * of type coordinate.
         * @returns a latitude coordinate
         */
        get_coord_lat(): string | null;

        /**
         * Gets the longitude coordinate of the `self`. It can return `null` when not set or when the `self` is not
         * of type coordinate.
         * @returns a longitude coordinate
         */
        get_coord_lon(): string | null;

        /**
         * Gets the coordinates value of the `self`. It can return `null` when not set or when the `self` is not of
         * coordinates type. The returned strings are valid as long as the `self` is not freed nor modified.
         */
        get_coords(): [string, string];

        /**
         * Gets the URI value of the `self`. It can return `null` when not set or when the `self` is not of type URI.
         * @returns a URI
         */
        get_uri(): string | null;

        /**
         * Sets the coordinate value of the `self`.
         * @param lat a latitude
         * @param lon a longitude
         */
        set_coords(lat: string, lon: string): void;

        /**
         * Sets the URI value of the `self`.
         * @param uri a URI
         */
        set_uri(uri: string): void;
    }


    namespace VcardParameter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardParameter instance.
     * @gir-type Class
     */
    class VcardParameter extends Object {
        static $gtype: GObject.GType<VcardParameter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardParameter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardParameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: VcardParameterKind): VcardParameter;

        static new_altid(value: string): VcardParameter;

        static new_author(value: string): VcardParameter;

        static new_authorname(value: string): VcardParameter;

        static new_calscale(value: VcardParameterCalscale): VcardParameter;

        static new_cc(value: string): VcardParameter;

        static new_context(value: string): VcardParameter;

        static new_created(value: VcardTime): VcardParameter;

        static new_derived(value: VcardParameterDerived): VcardParameter;

        static new_encoding(value: VcardParameterEncoding): VcardParameter;

        static new_from_string(value: string): VcardParameter;

        static new_from_value_string(kind: VcardParameterKind, value: string): VcardParameter;

        static new_geo(value: string): VcardParameter;

        static new_iana(value: string): VcardParameter;

        static new_index(value: number): VcardParameter;

        static new_jscomps(value: VcardStructured): VcardParameter;

        static new_jsptr(value: string): VcardParameter;

        static new_label(value: string): VcardParameter;

        static new_language(value: string): VcardParameter;

        static new_level(value: VcardParameterLevel): VcardParameter;

        static new_mediatype(value: string): VcardParameter;

        static new_phonetic(value: VcardParameterPhonetic): VcardParameter;

        static new_pid(value: string): VcardParameter;

        static new_pid_list(value: VcardStrArray): VcardParameter;

        static new_pref(value: number): VcardParameter;

        static new_propid(value: string): VcardParameter;

        static new_script(value: string): VcardParameter;

        static new_servicetype(value: string): VcardParameter;

        static new_sortas(value: string): VcardParameter;

        static new_sortas_list(value: VcardStrArray): VcardParameter;

        static new_type(value: VcardParameterType): VcardParameter;

        static new_type_list(value: VcardEnumArray): VcardParameter;

        static new_tz(value: string): VcardParameter;

        static new_username(value: string): VcardParameter;

        static new_value(value: VcardParameterValue): VcardParameter;

        static new_x(value: string): VcardParameter;

        static new_xliccomparetype(value: VcardParameterXliccomparetype): VcardParameter;

        static new_xlicerrortype(value: VcardParameterXlicerrortype): VcardParameter;

        // Signals
        /** @signal */
        connect<K extends keyof VcardParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardParameter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardParameter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardParameter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardParameter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardParameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string representation of a parameter enum to a its numeric value.
         * @param str a string enum value
         */
        static enum_from_string(str: string): number;

        /**
         * Converts an integer representation of a parameter enum to a string.
         * @param e an enum numeric value
         */
        static enum_to_string(e: number): string;

        /**
         * Checks whether {@link ICalGLib.VcardParameterKind} is valid.
         * @param kind The {@link ICalGLib.VcardPropertyKind}
         */
        static kind_is_valid(kind: VcardParameterKind): boolean;

        /**
         * Converts the `kind` to the string representation.
         * @param kind The {@link ICalGLib.VcardParameterKind} to be converted
         */
        static kind_to_string(kind: VcardParameterKind): string;

        /**
         * Returns corresponding {@link ICalGLib.VcardValueKind} for the given `kind` and sets whether the `kind` is a multivalued
         * parameter.
         * @param kind The {@link ICalGLib.VcardPropertyKind}
         */
        static kind_value_kind(kind: VcardParameterKind): [VcardValueKind, boolean];

        /**
         * Converts a string to the {@link ICalGLib.VcardParameterKind}.
         * @param string The string representation of the {@link ICalGLib.VcardParameterKind}
         */
        static string_to_kind(string: string): VcardParameterKind;

        /**
         * Converts the {@link ICalGLib.VcardParameterValue} to {@link ICalGLib.VcardValueKind}.
         * @param value An {@link ICalGLib.VcardParameterValue}
         */
        static value_to_value_kind(value: VcardParameterValue): VcardValueKind;

        // Methods
        /**
         * Adds a string into the `self` of PID.
         * @param value the string to add into the `self`
         */
        add_pid(value: string): void;

        /**
         * Adds a string into the `self` of SORTAS.
         * @param value the string to add into the `self`
         */
        add_sortas(value: string): void;

        /**
         * Adds an element.
         * @param value the {@link ICalGLib.VcardParameterType}
         * @param x_value an X name, or `null`; when set, the `value` should a corresponding X value
         */
        add_type(value: VcardParameterType, x_value: string | null): void;

        /**
         * Adds a `param` value from string `value`. This can be used for parameters which can hold multiple values.
         * @param value The string value to add
         */
        add_value_from_string(value: string): void;

        /**
         * Converts an {@link ICalGLib.VcardParameter} to the string representation.
         * @returns The string representation of the `parameter`.
         */
        as_vcard_string(): string;

        /**
         * Deep clones the `param`.
         * @returns The newly created {@link ICalGLib.VcardParameter} as a clone of the `param`.
         */
        clone(): VcardParameter;

        /**
         * Returns value of the ALTID `self`
         * @returns the ALTID value
         */
        get_altid(): string;

        /**
         * Returns value of the AUTHOR `self`
         * @returns the AUTHOR value
         */
        get_author(): string;

        /**
         * Returns value of the AUTHORNAME `self`
         * @returns the AUTHORNAME value
         */
        get_authorname(): string;

        /**
         * Returns value of the CALSCALE `self`
         * @returns the CALSCALE value
         */
        get_calscale(): VcardParameterCalscale;

        /**
         * Returns value of the CC `self`
         * @returns the CC value
         */
        get_cc(): string;

        /**
         * Returns value of the CONTEXT `self`
         * @returns the CONTEXT value
         */
        get_context(): string;

        /**
         * Returns value of the CREATED `self`
         * @returns the CREATED value
         */
        get_created(): VcardTime;

        /**
         * Returns value of the DERIVED `self`
         * @returns the DERIVED value
         */
        get_derived(): VcardParameterDerived;

        /**
         * Returns value of the ENCODING `self`
         * @returns the ENCODING value
         */
        get_encoding(): VcardParameterEncoding;

        /**
         * Returns value of the GEO `self`
         * @returns the GEO value
         */
        get_geo(): string;

        /**
         * Returns value of the IANA `self`
         * @returns the IANA value
         */
        get_iana(): string;

        /**
         * Gets the iana_name property of the native part of the {@link ICalGLib.VcardParameter}.
         * @returns The property of the `value`
         */
        get_iana_name(): string | null;

        /**
         * Gets the iana_value property of the native part of the {@link ICalGLib.VcardParameter}.
         * @returns The property of the `value`
         */
        get_iana_value(): string | null;

        /**
         * Returns value of the INDEX `self`
         * @returns the INDEX value
         */
        get_index(): number;

        /**
         * Returns value of the JSCOMPS `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored
         * in the `self`
         * @returns the JSCOMPS value
         */
        get_jscomps(): VcardStructured;

        /**
         * Returns value of the JSPTR `self`
         * @returns the JSPTR value
         */
        get_jsptr(): string;

        /**
         * Returns value of the LABEL `self`
         * @returns the LABEL value
         */
        get_label(): string;

        /**
         * Returns value of the LANGUAGE `self`
         * @returns the LANGUAGE value
         */
        get_language(): string;

        /**
         * Returns value of the LEVEL `self`
         * @returns the LEVEL value
         */
        get_level(): VcardParameterLevel;

        /**
         * Returns value of the MEDIATYPE `self`
         * @returns the MEDIATYPE value
         */
        get_mediatype(): string;

        /**
         * Gets the parent {@link ICalGLib.VcardProperty} of the specified {@link ICalGLib.VcardParameter}.
         * @returns The parent {@link ICalGLib.VcardProperty}
         */
        get_parent(): VcardProperty | null;

        /**
         * Returns value of the PHONETIC `self`
         * @returns the PHONETIC value
         */
        get_phonetic(): VcardParameterPhonetic;

        /**
         * Gets the value of the `self` of PID.
         * 
         * Note: this returns copy of the string array, not the one stored
         * in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_pid(): VcardStrArray;

        /**
         * Returns the n-th element of the `self` of PID
         * @param position Position of the PID item to get
         * @returns n-th element of the PID `self`
         */
        get_pid_nth(position: bigint | number): string | null;

        /**
         * Returns number of elements in the `self` of PID
         * @returns number of elements
         */
        get_pid_size(): number;

        /**
         * Returns value of the PREF `self`
         * @returns the PREF value
         */
        get_pref(): number;

        /**
         * Returns value of the PROPID `self`
         * @returns the PROPID value
         */
        get_propid(): string;

        /**
         * Returns value of the SCRIPT `self`
         * @returns the SCRIPT value
         */
        get_script(): string;

        /**
         * Returns value of the SERVICETYPE `self`
         * @returns the SERVICETYPE value
         */
        get_servicetype(): string;

        /**
         * Gets the value of the `self` of SORTAS.
         * 
         * Note: this returns copy of the string array, not the one
         * stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_sortas(): VcardStrArray;

        /**
         * Returns the n-th element of the `self` of SORTAS
         * @param position Position of the SORTAS item to get
         * @returns n-th element of the SORTAS `self`
         */
        get_sortas_nth(position: bigint | number): string | null;

        /**
         * Returns number of elements in the `self` of SORTAS
         * @returns number of elements
         */
        get_sortas_size(): number;

        /**
         * Returns the n-th element of the `self` of TYPE
         * @param position the position of the element
         * @returns the n-th element
         */
        get_type_nth(position: bigint | number): VcardParameterType;

        /**
         * Returns number of elements in the `self` of TYPE
         * @returns number of elements
         */
        get_type_size(): number;

        /**
         * Gets the value of the `self` of TYPE.
         * 
         * Note: this returns copy of the array, not the one stored in
         * the `self`
         * @returns the {@link ICalGLib.VcardEnumArray} value of the `self`
         */
        get_type_value(): VcardEnumArray;

        /**
         * Returns value of the TZ `self`
         * @returns the TZ value
         */
        get_tz(): string;

        /**
         * Returns value of the USERNAME `self`
         * @returns the USERNAME value
         */
        get_username(): string;

        /**
         * Returns value of the VALUE `self`
         * @returns the VALUE value
         */
        get_value(): VcardParameterValue;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Returns value of the XLICCOMPARETYPE `self`
         * @returns the XLICCOMPARETYPE value
         */
        get_xliccomparetype(): VcardParameterXliccomparetype;

        /**
         * Returns value of the XLICERRORTYPE `self`
         * @returns the XLICERRORTYPE value
         */
        get_xlicerrortype(): VcardParameterXlicerrortype;

        /**
         * Gets the xname property of the native part of the {@link ICalGLib.VcardParameter}.
         * @returns The property of the `value`
         */
        get_xname(): string | null;

        /**
         * Gets the xvalue property of the native part of the {@link ICalGLib.VcardParameter}.
         * @returns The property of the `value`
         */
        get_xvalue(): string | null;

        /**
         * Checks whether native parts of two `ICalVcardParameters` have the same name.
         * @param param2 The {@link ICalGLib.VcardParameter} to be checked
         * @returns true if the parameters have the same name, false or not.
         */
        has_same_name(param2: VcardParameter): boolean;

        /**
         * Returns whether `param` is a multivalued parameter. Multivalued parameters can hold more than one value.
         * @returns true if the `param` is a multivalued parameter.
         */
        is_multivalued(): boolean;

        /**
         * Returns whether `param` is a structured parameter. Structured parameters have their value encoded in a
         * specific format.
         * @returns true if the `param` is a structured parameter.
         */
        is_structured(): boolean;

        /**
         * Returns the kind of an {@link ICalGLib.VcardParameter}.
         * @returns The kind of the `parameter`.
         */
        isa(): VcardParameterKind;

        /**
         * Checks whether the native part of the {@link ICalGLib.VcardParameter} is of type {@link ICalGLib.VcardParameter}.
         * @returns true if the native part is of type {@link ICalGLib.VcardParameter}, false if not.
         */
        isa_parameter(): boolean;

        /**
         * Removes a string from the `self` of PID.
         * @param value the string to remove from the `self`
         */
        remove_pid(value: string): void;

        /**
         * Removes a string from the `self` of SORTAS.
         * @param value the string to remove from the `self`
         */
        remove_sortas(value: string): void;

        /**
         * Removes an element with the provided value.
         * @param value the {@link ICalGLib.VcardParameterType}
         * @param x_value an X name, or `null`; when set, the `value` should be a corresponding X value
         */
        remove_type(value: VcardParameterType, x_value: string | null): void;

        /**
         * Sets value to the ALTID `self`
         * @param value the ALTID value
         */
        set_altid(value: string): void;

        /**
         * Sets value to the AUTHOR `self`
         * @param value the AUTHOR value
         */
        set_author(value: string): void;

        /**
         * Sets value to the AUTHORNAME `self`
         * @param value the AUTHORNAME value
         */
        set_authorname(value: string): void;

        /**
         * Sets value to the CALSCALE `self`
         * @param value the CALSCALE value
         */
        set_calscale(value: VcardParameterCalscale): void;

        /**
         * Sets value to the CC `self`
         * @param value the CC value
         */
        set_cc(value: string): void;

        /**
         * Sets value to the CONTEXT `self`
         * @param value the CONTEXT value
         */
        set_context(value: string): void;

        /**
         * Sets value to the CREATED `self`
         * @param value the CREATED value
         */
        set_created(value: VcardTime): void;

        /**
         * Sets value to the DERIVED `self`
         * @param value the DERIVED value
         */
        set_derived(value: VcardParameterDerived): void;

        /**
         * Sets value to the ENCODING `self`
         * @param value the ENCODING value
         */
        set_encoding(value: VcardParameterEncoding): void;

        /**
         * Sets value to the GEO `self`
         * @param value the GEO value
         */
        set_geo(value: string): void;

        /**
         * Sets value to the IANA `self`
         * @param value the IANA value
         */
        set_iana(value: string): void;

        /**
         * Sets the iana_name property of the native part of the {@link ICalGLib.VcardParameter}.
         * @param v The name to be set into the `param`
         */
        set_iana_name(v: string): void;

        /**
         * Sets the iana_value property of the native part of the {@link ICalGLib.VcardParameter}.
         * @param v The value to be set into the `param`
         */
        set_iana_value(v: string): void;

        /**
         * Sets value to the INDEX `self`
         * @param value the INDEX value
         */
        set_index(value: number): void;

        /**
         * Sets value to the JSCOMPS `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored
         * in the `self`
         * @param value the JSCOMPS value
         */
        set_jscomps(value: VcardStructured): void;

        /**
         * Sets value to the JSPTR `self`
         * @param value the JSPTR value
         */
        set_jsptr(value: string): void;

        /**
         * Sets value to the LABEL `self`
         * @param value the LABEL value
         */
        set_label(value: string): void;

        /**
         * Sets value to the LANGUAGE `self`
         * @param value the LANGUAGE value
         */
        set_language(value: string): void;

        /**
         * Sets value to the LEVEL `self`
         * @param value the LEVEL value
         */
        set_level(value: VcardParameterLevel): void;

        /**
         * Sets value to the MEDIATYPE `self`
         * @param value the MEDIATYPE value
         */
        set_mediatype(value: string): void;

        /**
         * Sets the parent {@link ICalGLib.VcardProperty} of an {@link ICalGLib.VcardParameter}.
         * @param property The parent {@link ICalGLib.VcardProperty}
         */
        set_parent(property: VcardProperty | null): void;

        /**
         * Sets value to the PHONETIC `self`
         * @param value the PHONETIC value
         */
        set_phonetic(value: VcardParameterPhonetic): void;

        /**
         * Sets the value of the `self` of PID.
         * 
         * Note: this uses a copy of the string array, not the one stored
         * in the `value`
         * @param value the string array value
         */
        set_pid(value: VcardStrArray): void;

        /**
         * Sets value to the PREF `self`
         * @param value the PREF value
         */
        set_pref(value: number): void;

        /**
         * Sets value to the PROPID `self`
         * @param value the PROPID value
         */
        set_propid(value: string): void;

        /**
         * Sets value to the SCRIPT `self`
         * @param value the SCRIPT value
         */
        set_script(value: string): void;

        /**
         * Sets value to the SERVICETYPE `self`
         * @param value the SERVICETYPE value
         */
        set_servicetype(value: string): void;

        /**
         * Sets the value of the `self` of SORTAS.
         * 
         * Note: this uses a copy of the string array, not the one
         * stored in the `value`
         * @param value the string array value
         */
        set_sortas(value: VcardStrArray): void;

        /**
         * Sets the value of the `self` of TYPE.
         * 
         * Note: this uses a copy of the array, not the one stored in
         * the `value`
         * @param value the array value
         */
        set_type_value(value: VcardEnumArray): void;

        /**
         * Sets value to the TZ `self`
         * @param value the TZ value
         */
        set_tz(value: string): void;

        /**
         * Sets value to the USERNAME `self`
         * @param value the USERNAME value
         */
        set_username(value: string): void;

        /**
         * Sets value to the VALUE `self`
         * @param value the VALUE value
         */
        set_value(value: VcardParameterValue): void;

        /**
         * Sets a `param` value from string `value`.
         * @param value The string value to set
         */
        set_value_from_string(value: string): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;

        /**
         * Sets value to the XLICCOMPARETYPE `self`
         * @param value the XLICCOMPARETYPE value
         */
        set_xliccomparetype(value: VcardParameterXliccomparetype): void;

        /**
         * Sets value to the XLICERRORTYPE `self`
         * @param value the XLICERRORTYPE value
         */
        set_xlicerrortype(value: VcardParameterXlicerrortype): void;

        /**
         * Sets the xname property of the native part of the {@link ICalGLib.VcardParameter}.
         * @param v The name to be set into the `param`
         */
        set_xname(v: string): void;

        /**
         * Sets the xvalue property of the native part of the {@link ICalGLib.VcardParameter}.
         * @param v The value to be set into the `param`
         */
        set_xvalue(v: string): void;
    }


    namespace VcardProperty {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardProperty instance.
     * @gir-type Class
     */
    class VcardProperty extends Object {
        static $gtype: GObject.GType<VcardProperty>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardProperty.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardProperty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: VcardPropertyKind): VcardProperty;

        static new_adr(value: VcardStructured): VcardProperty;

        static new_agent(value: string): VcardProperty;

        static new_anniversary(value: VcardTime): VcardProperty;

        static new_bday(value: VcardTime): VcardProperty;

        static new_birthplace(value: string): VcardProperty;

        static new_caladruri(value: string): VcardProperty;

        static new_caluri(value: string): VcardProperty;

        static new_categories(value: VcardStrArray): VcardProperty;

        static new_class(value: string): VcardProperty;

        static new_clientpidmap(value: VcardStrArray): VcardProperty;

        static new_contacturi(value: string): VcardProperty;

        static new_created(value: VcardTime): VcardProperty;

        static new_deathdate(value: VcardTime): VcardProperty;

        static new_deathplace(value: string): VcardProperty;

        static new_email(value: string): VcardProperty;

        static new_expertise(value: string): VcardProperty;

        static new_fburl(value: string): VcardProperty;

        static new_fn(value: string): VcardProperty;

        static new_from_string(str: string): VcardProperty;

        static new_gender(value: VcardStrArray): VcardProperty;

        static new_geo(value: VcardGeo): VcardProperty;

        static new_gramgender(value: VcardPropertyGramgender): VcardProperty;

        static new_hobby(value: string): VcardProperty;

        static new_impp(value: string): VcardProperty;

        static new_interest(value: string): VcardProperty;

        static new_jsprop(value: string): VcardProperty;

        static new_key(value: string): VcardProperty;

        static new_kind(value: VcardPropertyKindenum): VcardProperty;

        static new_label(value: string): VcardProperty;

        static new_lang(value: string): VcardProperty;

        static new_language(value: string): VcardProperty;

        static new_logo(value: string): VcardProperty;

        static new_mailer(value: string): VcardProperty;

        static new_member(value: string): VcardProperty;

        static new_n(value: VcardStructured): VcardProperty;

        static new_name(value: string): VcardProperty;

        static new_nickname(value: VcardStrArray): VcardProperty;

        static new_note(value: string): VcardProperty;

        static new_org(value: VcardStrArray): VcardProperty;

        static new_orgdirectory(value: string): VcardProperty;

        static new_photo(value: string): VcardProperty;

        static new_prodid(value: string): VcardProperty;

        static new_pronouns(value: string): VcardProperty;

        static new_related(value: string): VcardProperty;

        static new_rev(value: VcardTime): VcardProperty;

        static new_role(value: string): VcardProperty;

        static new_socialprofile(value: string): VcardProperty;

        static new_sortstring(value: string): VcardProperty;

        static new_sound(value: string): VcardProperty;

        static new_source(value: string): VcardProperty;

        static new_tel(value: string): VcardProperty;

        static new_title(value: string): VcardProperty;

        static new_tz(value: VcardTz): VcardProperty;

        static new_uid(value: string): VcardProperty;

        static new_url(value: string): VcardProperty;

        static new_version(value: VcardPropertyVersion): VcardProperty;

        static new_x(value: string): VcardProperty;

        static new_xlicerror(value: string): VcardProperty;

        static new_xml(value: string): VcardProperty;

        // Signals
        /** @signal */
        connect<K extends keyof VcardProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardProperty.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardProperty.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardProperty.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardProperty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Checks whether the `kind` can hold `e`.
         * @param kind an {@link ICalGLib.VcardPropertyKind}
         * @param e an enum value
         */
        static enum_belongs_to_property(kind: VcardPropertyKind, e: number): boolean;

        /**
         * Gets string representation of the `e`.
         * @param e An enum value
         */
        static enum_to_string(e: number): string | null;

        /**
         * Returns enum value for the provided `kind` and `str`, or 0 for unknown kind.
         * @param kind An {@link ICalGLib.VcardValueKind} as integer
         * @param str A string
         */
        static kind_and_string_to_enum(kind: number, str: string): number;

        /**
         * Converts the string to {@link ICalGLib.VcardPropertyKind}.
         * @param string A string representing {@link ICalGLib.VcardPropertyKind}
         */
        static kind_from_string(string: string): VcardPropertyKind;

        /**
         * Returns whether the `kind` is a multivalued property. Multivalued properties can hold more than one value.
         * @param kind an {@link ICalGLib.VcardPropertyKind}
         */
        static kind_is_multivalued(kind: VcardPropertyKind): boolean;

        /**
         * Returns whether the `kind` is a structured property. Structured properties have their value encoded in
         * a specific format.
         * @param kind an {@link ICalGLib.VcardPropertyKind}
         */
        static kind_is_structured(kind: VcardPropertyKind): boolean;

        /**
         * Checks whether {@link ICalGLib.VcardPropertyKind} is valid.
         * @param kind The {@link ICalGLib.VcardPropertyKind}
         */
        static kind_is_valid(kind: VcardPropertyKind): boolean;

        /**
         * Converts the {@link ICalGLib.VcardPropertyKind} to a string.
         * @param kind An {@link ICalGLib.VcardPropertyKind}
         */
        static kind_to_string(kind: VcardPropertyKind): string;

        /**
         * Converts the {@link ICalGLib.VcardPropertyKind} to {@link ICalGLib.VcardValueKind}.
         * @param kind An {@link ICalGLib.VcardPropertyKind}
         */
        static kind_to_value_kind(kind: VcardPropertyKind): VcardValueKind;

        // Methods
        /**
         * Adds an {@link ICalGLib.VcardParameter} into the {@link ICalGLib.VcardProperty}. It behaves like set the copy of the {@link ICalGLib.VcardParameter}.
         * Upon completion the native part of {@link ICalGLib.VcardParameter} will be set to `null`.
         * @param parameter The parameter to be added into `prop`
         */
        add_parameter(parameter: VcardParameter): void;

        /**
         * Adds an {@link ICalGLib.VcardParameterType} TYPE parameter into the `prop`. See also `i_cal_vcard_property_add_type_x_parameter()`
         * @param type_param a TYPE parameter as {@link ICalGLib.VcardParameterType}
         */
        add_type_parameter(type_param: VcardParameterType): void;

        /**
         * Adds an X (custom) TYPE parameter into the `prop`. See also `i_cal_vcard_property_add_type_parameter()`
         * @param type_param an X value of a TYPE parameter
         */
        add_type_x_parameter(type_param: string): void;

        /**
         * Converts an {@link ICalGLib.VcardProperty} to a string representation.
         * @returns The string representation of `prop`.
         */
        as_vcard_string(): string;

        /**
         * Deeply clones the `prop`.
         * @returns The newly created {@link ICalGLib.VcardProperty} deeply cloned from `prop`.
         */
        clone(): VcardProperty;

        /**
         * Counts the parameters in the {@link ICalGLib.VcardProperty}.
         * @returns The count of the parameters in the {@link ICalGLib.VcardProperty}.
         */
        count_parameters(): number;

        /**
         * Returns value of the ADR `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored
         * in the `self`
         * @returns the ADR value
         */
        get_adr(): VcardStructured;

        /**
         * Returns value of the AGENT `self`
         * @returns the AGENT value
         */
        get_agent(): string;

        /**
         * Returns value of the ANNIVERSARY `self`
         * @returns the ANNIVERSARY value
         */
        get_anniversary(): VcardTime;

        /**
         * Returns value of the BDAY `self`
         * @returns the BDAY value
         */
        get_bday(): VcardTime;

        /**
         * Returns value of the BIRTHPLACE `self`
         * @returns the BIRTHPLACE value
         */
        get_birthplace(): string;

        /**
         * Returns value of the CALADRURI `self`
         * @returns the CALADRURI value
         */
        get_caladruri(): string;

        /**
         * Returns value of the CALURI `self`
         * @returns the CALURI value
         */
        get_caluri(): string;

        /**
         * Gets the value of the `self` of CATEGORIES.
         * 
         * Note: this returns copy of the string array, not the
         * one stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_categories(): VcardStrArray;

        /**
         * Returns value of the CLASS `self`
         * @returns the CLASS value
         */
        get_class(): string;

        /**
         * Gets the value of the `self` of CLIENTPIDMAP.
         * 
         * Note: this returns copy of the string array, not the
         * one stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_clientpidmap(): VcardStrArray;

        /**
         * Returns value of the CONTACTURI `self`
         * @returns the CONTACTURI value
         */
        get_contacturi(): string;

        /**
         * Returns value of the CREATED `self`
         * @returns the CREATED value
         */
        get_created(): VcardTime;

        /**
         * Returns value of the DEATHDATE `self`
         * @returns the DEATHDATE value
         */
        get_deathdate(): VcardTime;

        /**
         * Returns value of the DEATHPLACE `self`
         * @returns the DEATHPLACE value
         */
        get_deathplace(): string;

        /**
         * Returns value of the EMAIL `self`
         * @returns the EMAIL value
         */
        get_email(): string;

        /**
         * Returns value of the EXPERTISE `self`
         * @returns the EXPERTISE value
         */
        get_expertise(): string;

        /**
         * Returns value of the FBURL `self`
         * @returns the FBURL value
         */
        get_fburl(): string;

        /**
         * Gets the first {@link ICalGLib.VcardParameter} from the parent {@link ICalGLib.VcardProperty}.
         * @param kind The target kind of {@link ICalGLib.VcardParameter} to be retrieved
         * @returns The first {@link ICalGLib.VcardParameter} of `prop`.
         */
        get_first_parameter(kind: VcardParameterKind): VcardParameter;

        /**
         * Returns value of the FN `self`
         * @returns the FN value
         */
        get_fn(): string;

        /**
         * Gets the value of the `self` of GENDER.
         * 
         * Note: this returns copy of the string array, not the one
         * stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_gender(): VcardStrArray;

        /**
         * Returns value of the GEO `self`
         * @returns the GEO value
         */
        get_geo(): VcardGeo;

        /**
         * Returns value of the GRAMGENDER `self`
         * @returns the GRAMGENDER value
         */
        get_gramgender(): VcardPropertyGramgender;

        /**
         * Gets the group name of the `prop`.
         * @returns The group name of the `prop`.
         */
        get_group(): string | null;

        /**
         * Returns value of the HOBBY `self`
         * @returns the HOBBY value
         */
        get_hobby(): string;

        /**
         * Returns value of the IMPP `self`
         * @returns the IMPP value
         */
        get_impp(): string;

        /**
         * Returns value of the INTEREST `self`
         * @returns the INTEREST value
         */
        get_interest(): string;

        /**
         * Returns value of the JSPROP `self`
         * @returns the JSPROP value
         */
        get_jsprop(): string;

        /**
         * Returns value of the KEY `self`
         * @returns the KEY value
         */
        get_key(): string;

        /**
         * Returns value of the KIND `self`
         * @returns the KIND value
         */
        get_kind(): VcardPropertyKindenum;

        /**
         * Returns value of the LABEL `self`
         * @returns the LABEL value
         */
        get_label(): string;

        /**
         * Returns value of the LANG `self`
         * @returns the LANG value
         */
        get_lang(): string;

        /**
         * Returns value of the LANGUAGE `self`
         * @returns the LANGUAGE value
         */
        get_language(): string;

        /**
         * Returns value of the LOGO `self`
         * @returns the LOGO value
         */
        get_logo(): string;

        /**
         * Returns value of the MAILER `self`
         * @returns the MAILER value
         */
        get_mailer(): string;

        /**
         * Returns value of the MEMBER `self`
         * @returns the MEMBER value
         */
        get_member(): string;

        /**
         * Returns value of the N `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored
         * in the `self`
         * @returns the N value
         */
        get_n(): VcardStructured;

        /**
         * Returns value of the NAME `self`
         * @returns the NAME value
         */
        get_name(): string;

        /**
         * Gets the next {@link ICalGLib.VcardParameter} from the parent {@link ICalGLib.VcardProperty}.
         * @param kind The target kind of {@link ICalGLib.VcardParameter} to be retrieved
         * @returns The next {@link ICalGLib.VcardParameter} of `prop`.
         */
        get_next_parameter(kind: VcardParameterKind): VcardParameter;

        /**
         * Gets the value of the `self` of NICKNAME.
         * 
         * Note: this returns copy of the string array, not the one
         * stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_nickname(): VcardStrArray;

        /**
         * Returns value of the NOTE `self`
         * @returns the NOTE value
         */
        get_note(): string;

        /**
         * Gets the value of the `self` of ORG.
         * 
         * Note: this returns copy of the string array, not the one stored
         * in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_org(): VcardStrArray;

        /**
         * Returns value of the ORGDIRECTORY `self`
         * @returns the ORGDIRECTORY value
         */
        get_orgdirectory(): string;

        /**
         * Gets the string representation of the target parameter in the {@link ICalGLib.VcardProperty}.
         * @param name The name of the target parameter
         * @returns The string representation of the parameter.
         */
        get_parameter_as_string(name: string): string;

        /**
         * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
         * deallocate its parent. However the {@link ICalGLib.VcardComponent} object created using this method will be deallocated
         * (if no reference in other places). So You need to make sure there is another reference except the one
         * in {@link ICalGLib.VcardProperty}.
         * @returns The parent {@link ICalGLib.VcardComponent} of {@link ICalGLib.VcardProperty}.
         */
        get_parent(): VcardComponent | null;

        /**
         * Returns value of the PHOTO `self`
         * @returns the PHOTO value
         */
        get_photo(): string;

        /**
         * Returns value of the PRODID `self`
         * @returns the PRODID value
         */
        get_prodid(): string;

        /**
         * Returns value of the PRONOUNS `self`
         * @returns the PRONOUNS value
         */
        get_pronouns(): string;

        /**
         * Gets the property name of {@link ICalGLib.VcardProperty}.
         * @returns Property name of {@link ICalGLib.VcardProperty}.
         */
        get_property_name(): string;

        /**
         * Returns value of the RELATED `self`
         * @returns the RELATED value
         */
        get_related(): string;

        /**
         * Returns value of the REV `self`
         * @returns the REV value
         */
        get_rev(): VcardTime;

        /**
         * Returns value of the ROLE `self`
         * @returns the ROLE value
         */
        get_role(): string;

        /**
         * Returns value of the SOCIALPROFILE `self`
         * @returns the SOCIALPROFILE value
         */
        get_socialprofile(): string;

        /**
         * Returns value of the SORTSTRING `self`
         * @returns the SORTSTRING value
         */
        get_sortstring(): string;

        /**
         * Returns value of the SOUND `self`
         * @returns the SOUND value
         */
        get_sound(): string;

        /**
         * Returns value of the SOURCE `self`
         * @returns the SOURCE value
         */
        get_source(): string;

        /**
         * Returns value of the TEL `self`
         * @returns the TEL value
         */
        get_tel(): string;

        /**
         * Returns value of the TITLE `self`
         * @returns the TITLE value
         */
        get_title(): string;

        /**
         * Returns value of the TZ `self`
         * @returns the TZ value
         */
        get_tz(): VcardTz;

        /**
         * Returns value of the UID `self`
         * @returns the UID value
         */
        get_uid(): string;

        /**
         * Returns value of the URL `self`
         * @returns the URL value
         */
        get_url(): string;

        /**
         * Gets the {@link ICalGLib.VcardValue} of {@link ICalGLib.VcardProperty}.
         * @returns The {@link ICalGLib.VcardValue} of `prop`.
         */
        get_value(): VcardValue;

        /**
         * Gets the string representation of the value in {@link ICalGLib.VcardProperty}.
         * @returns The string representation of the value of the {@link ICalGLib.VcardProperty}.
         */
        get_value_as_string(): string;

        /**
         * Returns value of the VERSION `self`
         * @returns the VERSION value
         */
        get_version(): VcardPropertyVersion;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Gets the name of X property.
         * @returns The name of x property.
         */
        get_x_name(): string | null;

        /**
         * Returns value of the XLICERROR `self`
         * @returns the XLICERROR value
         */
        get_xlicerror(): string;

        /**
         * Returns value of the XML `self`
         * @returns the XML value
         */
        get_xml(): string;

        /**
         * Gets the kind of the `property`.
         * @returns The type of {@link ICalGLib.VcardProperty}.
         */
        isa(): VcardPropertyKind;

        /**
         * Checks whether the native part of {@link ICalGLib.VcardProperty} is valid vCard property.
         * @returns true if the native part of `property` is of the type icalproperty, false if not.
         */
        isa_property(): boolean;

        /**
         * Normalizes (reorder and sorts) the parameters of the `prop`.
         */
        normalize(): void;

        /**
         * Removes all parameters of kind `kind` from the `prop`.
         * @param kind The {@link ICalGLib.VcardParameterKind} to be removed
         */
        remove_parameter_by_kind(kind: VcardParameterKind): void;

        /**
         * Removes all parameters of name `name` from the `prop`.
         * @param name The name of the parameter to be removed
         */
        remove_parameter_by_name(name: string): void;

        /**
         * Removes the parameter in the {@link ICalGLib.VcardProperty} by ref.
         * @param param The {@link ICalGLib.VcardParameter} to be removed
         */
        remove_parameter_by_ref(param: VcardParameter): void;

        /**
         * Sets value to the ADR `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored in
         * the `self`
         * @param value the ADR value
         */
        set_adr(value: VcardStructured): void;

        /**
         * Sets value to the AGENT `self`
         * @param value the AGENT value
         */
        set_agent(value: string): void;

        /**
         * Sets value to the ANNIVERSARY `self`
         * @param value the ANNIVERSARY value
         */
        set_anniversary(value: VcardTime): void;

        /**
         * Sets value to the BDAY `self`
         * @param value the BDAY value
         */
        set_bday(value: VcardTime): void;

        /**
         * Sets value to the BIRTHPLACE `self`
         * @param value the BIRTHPLACE value
         */
        set_birthplace(value: string): void;

        /**
         * Sets value to the CALADRURI `self`
         * @param value the CALADRURI value
         */
        set_caladruri(value: string): void;

        /**
         * Sets value to the CALURI `self`
         * @param value the CALURI value
         */
        set_caluri(value: string): void;

        /**
         * Sets the value of the `self` of CATEGORIES.
         * 
         * Note: this uses a copy of the string array, not the
         * one stored in the `value`
         * @param value the string array value
         */
        set_categories(value: VcardStrArray): void;

        /**
         * Sets value to the CLASS `self`
         * @param value the CLASS value
         */
        set_class(value: string): void;

        /**
         * Sets the value of the `self` of CLIENTPIDMAP.
         * 
         * Note: this uses a copy of the string array, not the
         * one stored in the `value`
         * @param value the string array value
         */
        set_clientpidmap(value: VcardStrArray): void;

        /**
         * Sets value to the CONTACTURI `self`
         * @param value the CONTACTURI value
         */
        set_contacturi(value: string): void;

        /**
         * Sets value to the CREATED `self`
         * @param value the CREATED value
         */
        set_created(value: VcardTime): void;

        /**
         * Sets value to the DEATHDATE `self`
         * @param value the DEATHDATE value
         */
        set_deathdate(value: VcardTime): void;

        /**
         * Sets value to the DEATHPLACE `self`
         * @param value the DEATHPLACE value
         */
        set_deathplace(value: string): void;

        /**
         * Sets value to the EMAIL `self`
         * @param value the EMAIL value
         */
        set_email(value: string): void;

        /**
         * Sets value to the EXPERTISE `self`
         * @param value the EXPERTISE value
         */
        set_expertise(value: string): void;

        /**
         * Sets value to the FBURL `self`
         * @param value the FBURL value
         */
        set_fburl(value: string): void;

        /**
         * Sets value to the FN `self`
         * @param value the FN value
         */
        set_fn(value: string): void;

        /**
         * Sets the value of the `self` of GENDER.
         * 
         * Note: this uses a copy of the string array, not the one
         * stored in the `value`
         * @param value the string array value
         */
        set_gender(value: VcardStrArray): void;

        /**
         * Sets value to the GEO `self`
         * @param value the GEO value
         */
        set_geo(value: VcardGeo): void;

        /**
         * Sets value to the GRAMGENDER `self`
         * @param value the GRAMGENDER value
         */
        set_gramgender(value: VcardPropertyGramgender): void;

        /**
         * Sets the group name of the `prop`.
         * @param group A group name
         */
        set_group(group: string): void;

        /**
         * Sets value to the HOBBY `self`
         * @param value the HOBBY value
         */
        set_hobby(value: string): void;

        /**
         * Sets value to the IMPP `self`
         * @param value the IMPP value
         */
        set_impp(value: string): void;

        /**
         * Sets value to the INTEREST `self`
         * @param value the INTEREST value
         */
        set_interest(value: string): void;

        /**
         * Sets value to the JSPROP `self`
         * @param value the JSPROP value
         */
        set_jsprop(value: string): void;

        /**
         * Sets value to the KEY `self`
         * @param value the KEY value
         */
        set_key(value: string): void;

        /**
         * Sets value to the KIND `self`
         * @param value the KIND value
         */
        set_kind(value: VcardPropertyKindenum): void;

        /**
         * Sets value to the LABEL `self`
         * @param value the LABEL value
         */
        set_label(value: string): void;

        /**
         * Sets value to the LANG `self`
         * @param value the LANG value
         */
        set_lang(value: string): void;

        /**
         * Sets value to the LANGUAGE `self`
         * @param value the LANGUAGE value
         */
        set_language(value: string): void;

        /**
         * Sets value to the LOGO `self`
         * @param value the LOGO value
         */
        set_logo(value: string): void;

        /**
         * Sets value to the MAILER `self`
         * @param value the MAILER value
         */
        set_mailer(value: string): void;

        /**
         * Sets value to the MEMBER `self`
         * @param value the MEMBER value
         */
        set_member(value: string): void;

        /**
         * Sets value to the N `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored in
         * the `self`
         * @param value the N value
         */
        set_n(value: VcardStructured): void;

        /**
         * Sets value to the NAME `self`
         * @param value the NAME value
         */
        set_name(value: string): void;

        /**
         * Sets the value of the `self` of NICKNAME.
         * 
         * Note: this uses a copy of the string array, not the one
         * stored in the `value`
         * @param value the string array value
         */
        set_nickname(value: VcardStrArray): void;

        /**
         * Sets value to the NOTE `self`
         * @param value the NOTE value
         */
        set_note(value: string): void;

        /**
         * Sets the value of the `self` of ORG.
         * 
         * Note: this uses a copy of the string array, not the one stored
         * in the `value`
         * @param value the string array value
         */
        set_org(value: VcardStrArray): void;

        /**
         * Sets value to the ORGDIRECTORY `self`
         * @param value the ORGDIRECTORY value
         */
        set_orgdirectory(value: string): void;

        /**
         * Sets an {@link ICalGLib.VcardParameter} into the {@link ICalGLib.VcardProperty}. It behaves like set the copy of the {@link ICalGLib.VcardParameter}.
         * Upon completion the native part of {@link ICalGLib.VcardParameter} will be set to NULL.
         * @param parameter The parameter to be set into `prop`
         */
        set_parameter(parameter: VcardParameter): void;

        /**
         * Sets the {@link ICalGLib.VcardProperty} with the parameter defined by the name and value.
         * @param name The name of the parameter
         * @param value The value of the parameter
         */
        set_parameter_from_string(name: string, value: string): void;

        /**
         * Sets the parent {@link ICalGLib.VcardComponent} of the specified {@link ICalGLib.VcardProperty}.
         * @param component An {@link ICalGLib.VcardComponent}
         */
        set_parent(component: VcardComponent | null): void;

        /**
         * Sets value to the PHOTO `self`
         * @param value the PHOTO value
         */
        set_photo(value: string): void;

        /**
         * Sets value to the PRODID `self`
         * @param value the PRODID value
         */
        set_prodid(value: string): void;

        /**
         * Sets value to the PRONOUNS `self`
         * @param value the PRONOUNS value
         */
        set_pronouns(value: string): void;

        /**
         * Sets value to the RELATED `self`
         * @param value the RELATED value
         */
        set_related(value: string): void;

        /**
         * Sets value to the REV `self`
         * @param value the REV value
         */
        set_rev(value: VcardTime): void;

        /**
         * Sets value to the ROLE `self`
         * @param value the ROLE value
         */
        set_role(value: string): void;

        /**
         * Sets value to the SOCIALPROFILE `self`
         * @param value the SOCIALPROFILE value
         */
        set_socialprofile(value: string): void;

        /**
         * Sets value to the SORTSTRING `self`
         * @param value the SORTSTRING value
         */
        set_sortstring(value: string): void;

        /**
         * Sets value to the SOUND `self`
         * @param value the SOUND value
         */
        set_sound(value: string): void;

        /**
         * Sets value to the SOURCE `self`
         * @param value the SOURCE value
         */
        set_source(value: string): void;

        /**
         * Sets value to the TEL `self`
         * @param value the TEL value
         */
        set_tel(value: string): void;

        /**
         * Sets value to the TITLE `self`
         * @param value the TITLE value
         */
        set_title(value: string): void;

        /**
         * Sets value to the TZ `self`
         * @param value the TZ value
         */
        set_tz(value: VcardTz): void;

        /**
         * Sets value to the UID `self`
         * @param value the UID value
         */
        set_uid(value: string): void;

        /**
         * Sets value to the URL `self`
         * @param value the URL value
         */
        set_url(value: string): void;

        /**
         * Sets the {@link ICalGLib.VcardProperty} with the {@link ICalGLib.VcardValue}.
         * @param value The {@link ICalGLib.VcardValue} will be set as the property of `prop`
         */
        set_value(value: VcardValue): void;

        /**
         * Sets the {@link ICalGLib.VcardProperty} with the {@link ICalGLib.VcardValue} constructed from string.
         * @param value The value used to construct the {@link ICalGLib.VcardValue}
         * @param kind The kind used to construct the {@link ICalGLib.VcardValue}
         */
        set_value_from_string(value: string, kind: string): void;

        /**
         * Sets value to the VERSION `self`
         * @param value the VERSION value
         */
        set_version(value: VcardPropertyVersion): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;

        /**
         * Sets the name of X property for the {@link ICalGLib.VcardProperty}.
         * @param name The name string
         */
        set_x_name(name: string): void;

        /**
         * Sets value to the XLICERROR `self`
         * @param value the XLICERROR value
         */
        set_xlicerror(value: string): void;

        /**
         * Sets value to the XML `self`
         * @param value the XML value
         */
        set_xml(value: string): void;
    }


    namespace VcardStrArray {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardStrArray instance.
     * @gir-type Class
     */
    class VcardStrArray extends Object {
        static $gtype: GObject.GType<VcardStrArray>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardStrArray.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardStrArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](increment_size: number): VcardStrArray;

        // Signals
        /** @signal */
        connect<K extends keyof VcardStrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStrArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardStrArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStrArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardStrArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardStrArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a deep copy of {@link ICalGLib.VcardStrArray} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.VcardStrArray} with the same value as the `array`
         */
        clone(): VcardStrArray;

        /**
         * Removes all the occurrences of the `value` in the `array`.
         * @param value The value to remove.
         */
        remove(value: string): void;

        /**
         * Removes the element at the `position` from the array.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: bigint | number): void;

        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }


    namespace VcardStructured {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardStructured instance.
     * @gir-type Class
     */
    class VcardStructured extends Object {
        static $gtype: GObject.GType<VcardStructured>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardStructured.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardStructured.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](num_fields: number): VcardStructured;

        static new_from_string(str: string): VcardStructured;

        // Signals
        /** @signal */
        connect<K extends keyof VcardStructured.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStructured.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardStructured.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardStructured.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardStructured.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardStructured.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Converts the `self` into its string representation.
         * @param is_param whether the `self` corresponds to a parameter
         * @returns The string representation of the `self`.
         */
        as_vcard_string(is_param: boolean): string;

        /**
         * Clones the `self`.
         * @returns A deep copy of `self`.
         */
        clone(): VcardStructured;

        /**
         * Gets the `self` `position` field. Returns `null` when the item is not set or when the `position` is out of
         * bounds.
         * @param position the zero-based index of the field to retrieve
         * @returns a new {@link ICalGLib.VcardStrArray} at `position`
         */
        get_field_at(position: number): VcardStrArray | null;

        /**
         * Gets the number of fields used by `self`.
         * @returns number of fields
         */
        get_num_fields(): number;

        /**
         * Increments the reference count of `self`.
         */
        ref(): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.ref
        ref(...args: never[]): any;

        /**
         * Sets the `self` `position` field to `field`. If `position` is beyond the current number of fields, the number
         * of fields is extended to accommodate it. Any existing field at `position` is freed before being replaced.
         * @param position the zero-based index of the field to set
         * @param field an {@link ICalGLib.VcardStrArray}
         */
        set_field_at(position: number, field: VcardStrArray): void;

        /**
         * Sets how many fields the `self` will hold. If `num_fields` is smaller than the current number of fields,
         * the excess fields are freed.
         * @param num_fields number of fields
         */
        set_num_fields(num_fields: number): void;
    }


    namespace VcardTime {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardTime instance.
     * @gir-type Class
     */
    class VcardTime extends Object {
        static $gtype: GObject.GType<VcardTime>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardTime.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardTime.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): VcardTime;

        static new_current_utc_time(): VcardTime;

        static new_from_string(str: string, is_bare_time: boolean): VcardTime;

        static new_null_date(): VcardTime;

        static new_null_datetime(): VcardTime;

        static new_null_time(): VcardTime;

        static new_null_timestamp(): VcardTime;

        // Signals
        /** @signal */
        connect<K extends keyof VcardTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTime.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTime.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardTime.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardTime.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns whether the `year` is a leap year.
         * @param year a year
         */
        static is_leap_year(year: number): boolean;

        // Methods
        /**
         * Returns a string representation of the `self`.
         * @param flags bit-or of {@link ICalGLib.VcardTimeConvertFlags}
         * @returns The string representation
         */
        as_vcard_string(flags: number): string;

        /**
         * Creates a new {@link ICalGLib.VcardTime}, copy of `self`.
         * @returns The newly created {@link ICalGLib.VcardTime}, copy of `self`.
         */
        clone(): VcardTime;

        /**
         * Gets the year/month/date parts of the `timetype` in one call.
         */
        get_date(): [number, number, number];

        /**
         * Gets the day of {@link ICalGLib.VcardTime}.
         * @returns The day.
         */
        get_day(): number;

        /**
         * Gets the hour of {@link ICalGLib.VcardTime}.
         * @returns The hour.
         */
        get_hour(): number;

        /**
         * Gets the minute of {@link ICalGLib.VcardTime}.
         * @returns The minute.
         */
        get_minute(): number;

        /**
         * Gets the month of {@link ICalGLib.VcardTime}.
         * @returns The month.
         */
        get_month(): number;

        /**
         * Gets the second of {@link ICalGLib.VcardTime}.
         * @returns The second.
         */
        get_second(): number;

        /**
         * Gets the hour/minute/second parts of the `timetype` in one call.
         */
        get_time(): [number, number, number];

        /**
         * Gets the UTC offset of {@link ICalGLib.VcardTime}.
         * @returns The UTC offset
         */
        get_utc_offset(): number;

        /**
         * Gets the year of {@link ICalGLib.VcardTime}.
         * @returns The year.
         */
        get_year(): number;

        /**
         * Returns whether `self` represents a date.
         * @returns Whether `self` represents a date.
         */
        is_date(): boolean;

        /**
         * Returns whether `self` represents a datetime.
         * @returns Whether `self` represents a datetime.
         */
        is_datetime(): boolean;

        /**
         * Returns true if the datetime is null.
         * @returns Whether `self` is null datetime.
         */
        is_null_datetime(): boolean;

        /**
         * Returns whether `self` represents a time.
         * @returns Whether `self` represents a time.
         */
        is_time(): boolean;

        /**
         * Returns whether `self` represents a timestamp.
         * @returns Whether `self` represents a timestamp.
         */
        is_timestamp(): boolean;

        /**
         * Returns whether `self` is in UTC zone.
         * @returns Whether `self` is in UTC zone.
         */
        is_utc(): boolean;

        /**
         * Returns whether `self` represents a valid time.
         * @returns Whether `self` represents a valid time.
         */
        is_valid_time(): boolean;

        /**
         * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
         * date.
         * @param year The 'year' part of the date
         * @param month The 'month' part of the date
         * @param day The 'day' part of the date
         */
        set_date(year: number, month: number, day: number): void;

        /**
         * Sets the day of {@link ICalGLib.VcardTime}.
         * @param day The day
         */
        set_day(day: number): void;

        /**
         * Sets the hour of {@link ICalGLib.VcardTime}.
         * @param hour The hour
         */
        set_hour(hour: number): void;

        /**
         * Sets the minute of {@link ICalGLib.VcardTime}.
         * @param minute The minute
         */
        set_minute(minute: number): void;

        /**
         * Sets the month of {@link ICalGLib.VcardTime}.
         * @param month The month
         */
        set_month(month: number): void;

        /**
         * Sets the second of {@link ICalGLib.VcardTime}.
         * @param second The second
         */
        set_second(second: number): void;

        /**
         * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
         * time.
         * @param hour The 'hour' part of the time
         * @param minute The 'minute' part of the time
         * @param second The 'second' part of the time
         */
        set_time(hour: number, minute: number, second: number): void;

        /**
         * Sets the UTC offset of {@link ICalGLib.VcardTime}.
         * @param utc_offset The UTC offset
         */
        set_utc_offset(utc_offset: number): void;

        /**
         * Sets the year of {@link ICalGLib.VcardTime}.
         * @param year The year
         */
        set_year(year: number): void;
    }


    namespace VcardTz {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardTz instance.
     * @gir-type Class
     */
    class VcardTz extends Object {
        static $gtype: GObject.GType<VcardTz>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardTz.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardTz.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_tzid(tzid: string): VcardTz;

        static new_uri(uri: string): VcardTz;

        static new_utc_offset(utc_offset: number): VcardTz;

        // Signals
        /** @signal */
        connect<K extends keyof VcardTz.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTz.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardTz.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardTz.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardTz.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardTz.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a new {@link ICalGLib.VcardTz}, copy of `self`.
         * @returns The newly created {@link ICalGLib.VcardTz}, copy of `self`.
         */
        clone(): VcardTz;

        /**
         * Gets the timezone ID value of the `self`. It can return `null` when not set or when the `self` is not of
         * type timezone ID.
         * @returns a URI
         */
        get_tzid(): string | null;

        /**
         * Gets the URI value of the `self`. It can return `null` when not set or when the `self` is not of type URI.
         * @returns a URI
         */
        get_uri(): string | null;

        /**
         * Gets the UTC offset value of the `self`. It can return 0 when not set or when the `self` is not of UTC
         * offset type.
         * @returns a UTC offset
         */
        get_utc_offset(): number;

        /**
         * Sets the URI value of the `self`.
         * @param tzid a URI
         */
        set_tzid(tzid: string): void;

        /**
         * Sets the URI value of the `self`.
         * @param uri a URI
         */
        set_uri(uri: string): void;

        /**
         * Sets the UTC offset value of the `self`.
         * @param utc_offset a UTC offset
         */
        set_utc_offset(utc_offset: number): void;
    }


    namespace VcardValue {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::always-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::is-global-memory": (pspec: GObject.ParamSpec) => void;
            "notify::native": (pspec: GObject.ParamSpec) => void;
            "notify::native-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalVcardValue instance.
     * @gir-type Class
     */
    class VcardValue extends Object {
        static $gtype: GObject.GType<VcardValue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VcardValue.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VcardValue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: VcardValueKind): VcardValue;

        static new_boolean(value: boolean): VcardValue;

        static new_date(value: VcardTime): VcardValue;

        static new_dateandortime(value: VcardTime): VcardValue;

        static new_datetime(value: VcardTime): VcardValue;

        static new_float(value: number): VcardValue;

        static new_from_string(kind: VcardValueKind, str: string): VcardValue;

        static new_geo(value: VcardGeo): VcardValue;

        static new_gramgender(value: VcardPropertyGramgender): VcardValue;

        static new_integer(value: number): VcardValue;

        static new_kind(value: VcardPropertyKindenum): VcardValue;

        static new_languagetag(value: string): VcardValue;

        static new_structured(value: VcardStructured): VcardValue;

        static new_text(value: string): VcardValue;

        static new_textlist(value: VcardStrArray): VcardValue;

        static new_time(value: VcardTime): VcardValue;

        static new_timestamp(value: VcardTime): VcardValue;

        static new_tz(value: VcardTz): VcardValue;

        static new_uri(value: string): VcardValue;

        static new_utcoffset(value: number): VcardValue;

        static new_version(value: VcardPropertyVersion): VcardValue;

        static new_x(value: string): VcardValue;

        // Signals
        /** @signal */
        connect<K extends keyof VcardValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardValue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VcardValue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VcardValue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VcardValue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VcardValue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to {@link ICalGLib.VcardValueKind}.
         * @param str A string
         */
        static kind_from_string(str: string): VcardValueKind;

        /**
         * Checks whether the `kind` is a valid {@link ICalGLib.VcardValueKind}.
         * @param kind The {@link ICalGLib.VcardValueKind} to be checked
         */
        static kind_is_valid(kind: VcardValueKind): boolean;

        /**
         * Converts an {@link ICalGLib.VcardValueKind} to an {@link ICalGLib.VcardPropertyKind}.
         * @param kind An {@link ICalGLib.VcardValueKind}
         */
        static kind_to_property_kind(kind: VcardValueKind): VcardPropertyKind;

        /**
         * Converts the {@link ICalGLib.VcardValueKind} to a string.
         * @param kind A {@link ICalGLib.VcardValueKind}
         */
        static kind_to_string(kind: VcardValueKind): string;

        // Methods
        /**
         * Converts the {@link ICalGLib.VcardValue} to a string.
         * @returns The string representation.
         */
        as_vcard_string(): string;

        /**
         * Deeply clones an {@link ICalGLib.VcardValue}.
         * @returns The newly created {@link ICalGLib.VcardValue} with the same property as `value`.
         */
        clone(): VcardValue;

        /**
         * Returns value of the BOOLEAN `self`
         * @returns the BOOLEAN value
         */
        get_boolean(): boolean;

        /**
         * Returns value of the DATE `self`
         * @returns the DATE value
         */
        get_date(): VcardTime;

        /**
         * Returns value of the DATEANDORTIME `self`
         * @returns the DATEANDORTIME value
         */
        get_dateandortime(): VcardTime;

        /**
         * Returns value of the DATETIME `self`
         * @returns the DATETIME value
         */
        get_datetime(): VcardTime;

        /**
         * Returns value of the FLOAT `self`
         * @returns the FLOAT value
         */
        get_float(): number;

        /**
         * Returns value of the GEO `self`
         * @returns the GEO value
         */
        get_geo(): VcardGeo;

        /**
         * Returns value of the GRAMGENDER `self`
         * @returns the GRAMGENDER value
         */
        get_gramgender(): VcardPropertyGramgender;

        /**
         * Returns value of the INTEGER `self`
         * @returns the INTEGER value
         */
        get_integer(): number;

        /**
         * Returns value of the KIND `self`
         * @returns the KIND value
         */
        get_kind(): VcardPropertyKindenum;

        /**
         * Returns value of the LANGUAGETAG `self`
         * @returns the LANGUAGETAG value
         */
        get_languagetag(): string;

        /**
         * Gets the parent {@link ICalGLib.VcardProperty} of the specified {@link ICalGLib.VcardValue}.
         * @returns The parent {@link ICalGLib.VcardProperty}
         */
        get_parent(): VcardProperty | null;

        /**
         * Returns value of the STRUCTURED `self`
         * 
         * Note: this uses a copy of the structured type, not the one
         * stored in the `self`
         * @returns the STRUCTURED value
         */
        get_structured(): VcardStructured;

        /**
         * Returns value of the TEXT `self`
         * @returns the TEXT value
         */
        get_text(): string;

        /**
         * Gets the value of the `self` of TEXTLIST.
         * 
         * Note: this returns copy of the string array, not the one
         * stored in the `self`
         * @returns the {@link ICalGLib.VcardStrArray} value of the `self`
         */
        get_textlist(): VcardStrArray;

        /**
         * Returns value of the TIME `self`
         * @returns the TIME value
         */
        get_time(): VcardTime;

        /**
         * Returns value of the TIMESTAMP `self`
         * @returns the TIMESTAMP value
         */
        get_timestamp(): VcardTime;

        /**
         * Returns value of the TZ `self`
         * @returns the TZ value
         */
        get_tz(): VcardTz;

        /**
         * Returns value of the URI `self`
         * @returns the URI value
         */
        get_uri(): string;

        /**
         * Returns value of the UTCOFFSET `self`
         * @returns the UTCOFFSET value
         */
        get_utcoffset(): number;

        /**
         * Returns value of the VERSION `self`
         * @returns the VERSION value
         */
        get_version(): VcardPropertyVersion;

        /**
         * Returns value of the X `self`
         * @returns the X value
         */
        get_x(): string;

        /**
         * Checks if {@link ICalGLib.VcardValue} is valid.
         * @returns true if valid, false if not.
         */
        is_valid(): boolean;

        /**
         * Gets the kind of {@link ICalGLib.VcardValue}.
         * @returns The kind of `value`.
         */
        isa(): VcardValueKind;

        /**
         * Checks whether the native part of {@link ICalGLib.VcardValue} is an ical;s vcardvalue.
         * @returns true if yes, false if not.
         */
        isa_value(): boolean;

        /**
         * Reset's the value's kind.
         */
        reset_kind(): void;

        /**
         * Sets value to the BOOLEAN `self`
         * @param value the BOOLEAN value
         */
        set_boolean(value: boolean): void;

        /**
         * Sets value to the DATE `self`
         * @param value the DATE value
         */
        set_date(value: VcardTime): void;

        /**
         * Sets value to the DATEANDORTIME `self`
         * @param value the DATEANDORTIME value
         */
        set_dateandortime(value: VcardTime): void;

        /**
         * Sets value to the DATETIME `self`
         * @param value the DATETIME value
         */
        set_datetime(value: VcardTime): void;

        /**
         * Sets value to the FLOAT `self`
         * @param value the FLOAT value
         */
        set_float(value: number): void;

        /**
         * Sets value to the GEO `self`
         * @param value the GEO value
         */
        set_geo(value: VcardGeo): void;

        /**
         * Sets value to the GRAMGENDER `self`
         * @param value the GRAMGENDER value
         */
        set_gramgender(value: VcardPropertyGramgender): void;

        /**
         * Sets value to the INTEGER `self`
         * @param value the INTEGER value
         */
        set_integer(value: number): void;

        /**
         * Sets value to the KIND `self`
         * @param value the KIND value
         */
        set_kind(value: VcardPropertyKindenum): void;

        /**
         * Sets value to the LANGUAGETAG `self`
         * @param value the LANGUAGETAG value
         */
        set_languagetag(value: string): void;

        /**
         * Sets the parent property of a value.
         * @param property The parent {@link ICalGLib.VcardProperty}
         */
        set_parent(property: VcardProperty | null): void;

        /**
         * Sets value to the STRUCTURED `self`
         * 
         * Note: this uses a copy of the structured type, not the one stored
         * in the `self`
         * @param value the STRUCTURED value
         */
        set_structured(value: VcardStructured): void;

        /**
         * Sets value to the TEXT `self`
         * @param value the TEXT value
         */
        set_text(value: string): void;

        /**
         * Sets the value of the `self` of TEXTLIST.
         * 
         * Note: this uses a copy of the string array, not the one
         * stored in the `value`
         * @param value the string array value
         */
        set_textlist(value: VcardStrArray): void;

        /**
         * Sets value to the TIME `self`
         * @param value the TIME value
         */
        set_time(value: VcardTime): void;

        /**
         * Sets value to the TIMESTAMP `self`
         * @param value the TIMESTAMP value
         */
        set_timestamp(value: VcardTime): void;

        /**
         * Sets value to the TZ `self`
         * @param value the TZ value
         */
        set_tz(value: VcardTz): void;

        /**
         * Sets value to the URI `self`
         * @param value the URI value
         */
        set_uri(value: string): void;

        /**
         * Sets value to the UTCOFFSET `self`
         * @param value the UTCOFFSET value
         */
        set_utcoffset(value: number): void;

        /**
         * Sets value to the VERSION `self`
         * @param value the VERSION value
         */
        set_version(value: VcardPropertyVersion): void;

        /**
         * Sets value to the X `self`
         * @param value the X value
         */
        set_x(value: string): void;
    }


    /**
     * @gir-type Alias
     */
    type ArrayClass = typeof Array;

    /**
     * @gir-type Alias
     */
    type AttachClass = typeof Attach;

    /**
     * @gir-type Alias
     */
    type CompIterClass = typeof CompIter;

    /**
     * @gir-type Alias
     */
    type ComponentClass = typeof Component;

    /**
     * @gir-type Alias
     */
    type DatetimeperiodClass = typeof Datetimeperiod;

    /**
     * @gir-type Alias
     */
    type DurationClass = typeof Duration;

    /**
     * @gir-type Alias
     */
    type EnumArrayClass = typeof EnumArray;

    /**
     * @gir-type Alias
     */
    type GeoClass = typeof Geo;

    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;

    /**
     * @gir-type Alias
     */
    type ParamIterClass = typeof ParamIter;

    /**
     * @gir-type Alias
     */
    type ParameterClass = typeof Parameter;

    /**
     * @gir-type Alias
     */
    type ParserClass = typeof Parser;

    /**
     * @gir-type Alias
     */
    type PeriodClass = typeof Period;

    /**
     * @gir-type Alias
     */
    type PropIterClass = typeof PropIter;

    /**
     * @gir-type Alias
     */
    type PropertyClass = typeof Property;

    /**
     * @gir-type Alias
     */
    type RecurIteratorClass = typeof RecurIterator;

    /**
     * @gir-type Alias
     */
    type RecurrenceClass = typeof Recurrence;

    /**
     * @gir-type Alias
     */
    type ReqstatClass = typeof Reqstat;

    /**
     * @gir-type Alias
     */
    type StrArrayClass = typeof StrArray;

    /**
     * @gir-type Alias
     */
    type TimeClass = typeof Time;

    /**
     * @gir-type Alias
     */
    type TimeSpanClass = typeof TimeSpan;

    /**
     * @gir-type Alias
     */
    type TimezoneClass = typeof Timezone;

    /**
     * @gir-type Alias
     */
    type TriggerClass = typeof Trigger;

    /**
     * @gir-type Alias
     */
    type ValueClass = typeof Value;

    /**
     * @gir-type Alias
     */
    type VcardComponentClass = typeof VcardComponent;

    /**
     * @gir-type Alias
     */
    type VcardEnumArrayClass = typeof VcardEnumArray;

    /**
     * @gir-type Alias
     */
    type VcardGeoClass = typeof VcardGeo;

    /**
     * @gir-type Alias
     */
    type VcardParameterClass = typeof VcardParameter;

    /**
     * @gir-type Alias
     */
    type VcardPropertyClass = typeof VcardProperty;

    /**
     * @gir-type Alias
     */
    type VcardStrArrayClass = typeof VcardStrArray;

    /**
     * @gir-type Alias
     */
    type VcardStructuredClass = typeof VcardStructured;

    /**
     * @gir-type Alias
     */
    type VcardTimeClass = typeof VcardTime;

    /**
     * @gir-type Alias
     */
    type VcardTzClass = typeof VcardTz;

    /**
     * @gir-type Alias
     */
    type VcardValueClass = typeof VcardValue;

    /**
     * @gir-type Struct
     */
    abstract class _Array {
        static $gtype: GObject.GType<_Array>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Attach {
        static $gtype: GObject.GType<_Attach>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _CompIter {
        static $gtype: GObject.GType<_CompIter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Component {
        static $gtype: GObject.GType<_Component>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Datetimeperiod {
        static $gtype: GObject.GType<_Datetimeperiod>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Duration {
        static $gtype: GObject.GType<_Duration>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _EnumArray {
        static $gtype: GObject.GType<_EnumArray>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Geo {
        static $gtype: GObject.GType<_Geo>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _ParamIter {
        static $gtype: GObject.GType<_ParamIter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Parameter {
        static $gtype: GObject.GType<_Parameter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Parser {
        static $gtype: GObject.GType<_Parser>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Period {
        static $gtype: GObject.GType<_Period>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _PropIter {
        static $gtype: GObject.GType<_PropIter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Property {
        static $gtype: GObject.GType<_Property>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _RecurIterator {
        static $gtype: GObject.GType<_RecurIterator>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Recurrence {
        static $gtype: GObject.GType<_Recurrence>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Reqstat {
        static $gtype: GObject.GType<_Reqstat>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _StrArray {
        static $gtype: GObject.GType<_StrArray>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Time {
        static $gtype: GObject.GType<_Time>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _TimeSpan {
        static $gtype: GObject.GType<_TimeSpan>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Timezone {
        static $gtype: GObject.GType<_Timezone>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Trigger {
        static $gtype: GObject.GType<_Trigger>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _Value {
        static $gtype: GObject.GType<_Value>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardComponent {
        static $gtype: GObject.GType<_VcardComponent>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardEnumArray {
        static $gtype: GObject.GType<_VcardEnumArray>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardGeo {
        static $gtype: GObject.GType<_VcardGeo>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardParameter {
        static $gtype: GObject.GType<_VcardParameter>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardProperty {
        static $gtype: GObject.GType<_VcardProperty>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardStrArray {
        static $gtype: GObject.GType<_VcardStrArray>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardStructured {
        static $gtype: GObject.GType<_VcardStructured>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardTime {
        static $gtype: GObject.GType<_VcardTime>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardTz {
        static $gtype: GObject.GType<_VcardTz>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _VcardValue {
        static $gtype: GObject.GType<_VcardValue>;
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

export default ICalGLib;

}

declare module 'gi://ICalGLib' {
    import ICalGLib40 from 'gi://ICalGLib?version=4.0';
    export default ICalGLib40;
}
// END
