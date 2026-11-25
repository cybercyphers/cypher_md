export default {
  session_id: "",
  UNIQUE_USER_VERIFIER: "",
  owner: "",
  automatic_updates: true,
  allowBetaUpdates: true,
  already_configured: false,
  allowBugsReview: true,
  autoviewstatus: false,
  autorecording: false,
  antidelete: false,
  autotyping: false,
  antilink: false,
  protectFromWhatsappBan: false,
  allowGroupProcessing: true,
  allowChannelProcessing: true,
  allowWhatsappUpdatesProcessing: true,
  allowPrivateChatProcessing: true,
  cypherAi: {
    enabled: false,
    allowInGroups: true,
    allowInPrivateChats: true,
    allowInChannels: false
  },
  Database: {
    integrity_check: true,
    cleanUpAtSetTimes: true,
    cleanup_check_interval_ms: 86400000,
    dump_clean_interval_ms: 86400000
  },
  Group: {
    should_welcome_new_participant: false,
    should_send_farewell_on_revoked_participant: false,
    notify_participant_on_promotion: false,
    should_notify_participant_on_demote: false,
    promotion_notify_direct_messaging: false,
    demotion_notify_direct_messaging: false
  },
  global_owner: "cyber_cyphers",
  email: "",
  user_phone: "",
  prefix: ".",
  private: false,
  production: true,
  test_mode: false,
  system: {
    font: "normal",
    logLevelInherit: false,
    enableAdultContent: false,
    autoPushLoggedInMessageOnStartUp: true,
    message_processing_type: "notify",
    alert_on_start_damage: true,
    alert_on_cpu_spike: true,
    logger_console: false,
    allow_further_processing_antilink_del: false,
    antilink_processing_broadcast: true
  }
}
